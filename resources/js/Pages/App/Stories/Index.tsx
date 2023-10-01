import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { useCallback, useEffect, useRef, useState } from 'react'
import Navbar from '@/Layouts/Components/Navbar';

import '../../../../sass/pages/stories.scss'

import iconSearch from '../../../../assets/icons/stories-search.svg'
import CardPost from '@/Components/App/Cards/CardPost';
import Footer from '@/Layouts/Components/Footer';

interface ImageData {
  id: number;
  attributes: {
    formats: {
      small: {
        url: string;
      }
    }
  }
}

interface PostData {
  id: number;
  title: string;
  slug: string;
  body: string;
  author_id: number;
  author: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
    codename: string;
  }
}

interface CategoryData {
  id: number;
  name: string;
  desc: string;
  codename: string;
}

interface StoriesProps {
  posts: PostData[];
  categories: CategoryData[];
  recommendations: PostData[];
}

export default function Stories({ posts, categories, recommendations }: StoriesProps) {
  const [postsByCategory, setPostsByCategory] = useState<{
    website: PostData[];
    machine_learning: PostData[];
  }>({
    website: [],
    machine_learning: [],
  });
  const [categoryDesc, setCategoryDesc] = useState<{ [key: string]: string; }>({})
  const [searchInput, setSearchInput] = useState<string>("")

  useEffect(() => {
    if (posts) {
      // Filter posts by category
      const websitePosts = posts.filter(post => post.category.codename === 'WEB');
      const machineLearningPosts = posts.filter(post => post.category.codename === 'MLG')

      setPostsByCategory(
        {
          website: websitePosts,
          machine_learning: machineLearningPosts
        });
    }

    if (categories) {
      const categoryDesc: { [key: string]: any; } = {};

      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        categoryDesc[category.codename] = category.desc;
      }

      setCategoryDesc(categoryDesc);
    }
  }, [posts, categories]);

  return (
    <>
      <Head title="Stories" />
      <Navbar />

      <main id="stories">
        {/* Hero section */}
        <section className="container hero">
          <div className='flex-col hero-title-wrapper'>
            <h1 className='hero-title-generic text-blue-g'>Ada Apa di Stelar</h1>
            <p className='hero-desc'>Cerita kami, berita seru, dan tips terkini. Baca semua artikel soal Stelar di sini.</p>
          </div>

          <div className='flex-row hero-search-wrapper'>
            <label htmlFor="stories-search"></label>
            <div className="search-bar">
              <input className='search-input' id="stories-search" type="text" name="stories-search" placeholder="Search" value={searchInput} onChange={(e) => {
                setSearchInput(e.target.value)
              }} />
              <button className='search-submit'>
                <img src={iconSearch} alt="" />
                <span>Cari</span>
              </button>
            </div>
          </div>
        </section>

        {posts && (
          <>
            {/* Recommended articles */}
            <section className='container recommended'>
              {/* Section content */}
              <div className="section-content-wrapper">
                {recommendations.length > 0 && (
                  <div className='grid-wrapper'>
                    <div className='main-col'>
                      <CardPost data={recommendations[0]} isCategoryVisible={true} />
                    </div>
                    <div className='side-col'>
                      {recommendations.slice(1, 5).map((post, index) => (
                        <CardPost key={index} data={post} isDescVisible={false} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Latest articles */}
            <section className='collection'>
              {/* Section title */}
              <div className='container section-title-wrapper'>
                <div className='flex-col'>
                  <h2 className='section-title'>Artikel Terbaru</h2>
                  <span className='section-desc'>Supply and allocation algorithms that match users, drivers, and vendors in the real world</span>
                </div>
                <div className="btn-wrapper">
                  <a href="#" className="btn btn-primary">VIEW MORE
                  </a>
                </div>
              </div>

              {/* Section content */}

              <div className="container section-content-wrapper">
                <div className='carousel'>
                  {posts.length > 0 && posts.map((post) => {
                    return (
                      <CardPost data={post} key={post.id} />
                    )
                  })}
                </div>

                {/* Slider arrow */}
                {/* <button className='slide-btn prev'>
                <div className='icon-w'>
                    <img src={iconArrow} alt="Icon arrow right" />
                </div>
            </button>

            <button className='slide-btn next'>
                <div className='icon-w'>
                    <img src={iconArrow} alt="Icon arrow right" />
                </div>
            </button> */}
              </div>
            </section>

            {/* Category articles */}
            <section className='collection'>
              {/* Section title */}
              <div className='container section-title-wrapper'>
                <div className='flex-col'>
                  <h2 className='section-title'>Website</h2>
                  <span className='section-desc'>{categoryDesc.WEB}</span>
                </div>
                <div className="btn-wrapper">
                  <a href="#" className="btn btn-primary">VIEW MORE
                  </a>
                </div>
              </div>

              {/* Section content */}

              <div className="container section-content-wrapper">
                <div className='carousel'>
                  {postsByCategory.website.length > 0 && postsByCategory.website.map((post) => {
                    return (
                      <CardPost data={post} key={post.id} />
                    )
                  })}
                </div>
              </div>
            </section>

            <section className='collection'>
              {/* Section title */}
              <div className='container section-title-wrapper'>
                <div className='flex-col'>
                  <h2 className='section-title'>Machine Learning</h2>
                  <span className='section-desc'>{categoryDesc.MLG}</span>
                </div>
                <div className="btn-wrapper">
                  <a href="#" className="btn btn-primary">VIEW MORE
                  </a>
                </div>
              </div>

              {/* Section content */}

              <div className="container section-content-wrapper">
                <div className='carousel'>
                  {postsByCategory.machine_learning.length > 0 && postsByCategory.machine_learning.map((post) => {
                    return (
                      <CardPost data={post} key={post.id} />
                    )
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />
    </>
  )
}