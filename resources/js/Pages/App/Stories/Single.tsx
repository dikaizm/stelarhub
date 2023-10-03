import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";
import getPublishedDate from "@/helpers/getPublishedDate";
import parse from 'html-react-parser'
import axios from "axios";
import route from 'ziggy-js';
import toast from 'react-hot-toast';
import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import { HiLink } from 'react-icons/hi'

import '../../../../sass/pages/stories.scss'

import randomImg from '../../../../assets/images/random-image.jpg'
import Footer from "@/Layouts/Components/Footer";
import getReadingTimeMin from "@/helpers/getReadingTimeMin";
import CardPost from "@/Components/App/Cards/CardPost";
import { IconContext } from "react-icons";
import { PostData } from "@/types";

export default function SinglePost({ post, postsByCategory }: {post: PostData, postsByCategory: PostData[]}) {
  const STICKY_SCROLL_THRESHOLD = 80;
  const HIDE_ASIDE_THRESHOLD = 250;

  const publishedTime = getPublishedDate(post.updated_at);
  const readingTimeMin = getReadingTimeMin(post.body)
  const [feedbackType, setFeedbackType] = useState("default")
  const [isSticky, setIsSticky] = useState(false);
  const [isHideShare, setIsHideShare] = useState(false)
  const [articleWrapperHeight, setArticleWrapperHeight] = useState<number | null>(0);
  const articleWrapperRef = useRef<HTMLElement | null>(null);

  const handleLike = (isLike: boolean) => {
    axios.post(route('post.like', { id: post.id, isLike: isLike }))
      .then(response => {
        if (response.data.feedbackType === '1') setFeedbackType("like")
        else setFeedbackType('dislike')
      })
      .catch(error => {
        toast.error('Oops! Terjadi kesalahan', {
          duration: 3000,
          position: 'top-center',
          style: {
            borderRadius: '999px'
          },
          icon: '😢'
        });
      });
  }

  useEffect(() => {
    if (articleWrapperRef.current) {
      const height = articleWrapperRef.current.clientHeight;
      setArticleWrapperHeight(height);

      // Calculate hideShare based on the height
      setIsHideShare(window.scrollY > height - HIDE_ASIDE_THRESHOLD);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = STICKY_SCROLL_THRESHOLD;

      if (articleWrapperHeight) {
        setIsHideShare(scrollY > articleWrapperHeight - HIDE_ASIDE_THRESHOLD);
      }

      if (scrollY >= threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [articleWrapperHeight]);

  return (
    <>
      <Head title={post.title} />
      <Navbar />

      <main id="stories_single">
        <article className="container">
          <div className="breadcrumb">
            <span>Home {'>'} Stories {'>'} {post.category.name} {'>'} {post.title}</span>
          </div>
          <section className="article-wrapper" ref={articleWrapperRef}>
            <aside className={`article-share-aside ${isSticky ? 'fixed' : ''} ${isHideShare ? 'hide' : ''}`}>
              <div className="flex-col">
                <span>Bagikan</span>
                <IconContext.Provider value={{ size: '1.8rem', className: "share-icons" }}>
                  <FaWhatsapp />
                  <FaTwitter />
                  <FaFacebook />
                  <HiLink />
                </IconContext.Provider>
              </div>
            </aside>

            <div className="article-container">
              <div className="article-header">
                <div className="article-title">
                  <h1>{post.title}</h1>
                </div>
                <div className="article-attr">
                  <div className="attr-info">
                    <span>{post.author.name} • {publishedTime}</span>
                    <span>Baca {readingTimeMin} menit</span>
                  </div>
                  <div className="article-image">
                    <img src={randomImg} alt="" />
                  </div>
                </div>
              </div>
              <div className="article-content">
                {parse(post.body)}
              </div>
            </div>
          </section>

          <div className="article-share-row">
            <div className="feedback-wrapper">
              <span className={`feedback-message ${feedbackType !== 'default' ? 'active' : ''}`}>
                {feedbackType === 'default'
                  ? 'Apakah informasi ini membantu?'
                  : feedbackType === 'like'
                    ? '🚀 Terima kasih atas tanggapanmu!'
                    : feedbackType === 'dislike'
                      ? '😔 Kami mendengarmu, terima kasih!'
                      : null
                }
              </span>
              {feedbackType === "default" && (
                <>
                  <button type="button" onClick={() => handleLike(true)}>Ya</button>
                  <button type="button" onClick={() => handleLike(false)}>Tidak</button>
                </>
              )}
            </div>
            <div className="share-wrapper">
              <span>Bagikan</span>
              <IconContext.Provider value={{ size: '1.8rem', className: "share-icons" }}>
                <FaWhatsapp />
                <FaTwitter />
                <FaFacebook />
                <HiLink />
              </IconContext.Provider>
            </div>
          </div>
        </article>

        <section className='collection related-articles'>
          {/* Section title */}
          <div className='container section-title-wrapper'>
            <div className='flex-col'>
              <h2 className='section-title'>Artikel Terkait</h2>
            </div>
            <div className="btn-wrapper">
              <a href="#" className="btn btn-primary">VIEW MORE
              </a>
            </div>
          </div>

          {/* Section content */}

          <div className="container section-content-wrapper">
            <div className='carousel'>
              {postsByCategory && postsByCategory.length > 0 && postsByCategory.map((post: PostData) => {
                return (
                  <CardPost data={post} key={post.id} />
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}