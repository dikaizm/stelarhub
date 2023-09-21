import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

import 'swiper/css';
import './stories.scss'

import Navbar from "../../components/navbar/Navbar"

import iconSearch from '../../assets/icons/stories-search.svg'
// import iconArrow from '../../assets/icons/arrow-r.svg'
import CardPost from '../../components/card/post/CardPost';
import Footer from '../../components/footer/Footer';

const POSTS = gql`
query GetPost {
    posts(pagination: { start: 0, limit: 16 }, sort: "updatedAt:asc") {
      data {
        id
        attributes {
          title
          slug
          excerpt
          body
          updatedAt
          category {
            data {
              id
              attributes {
                name
                endpoint
                codename
              }
            }
          }
          recommended {
            data {
                id
            }
          }
          image {
            data {
                id
                attributes {
                    formats
                }
            }
          }
        }
      }
    }
  }
`

interface CategoryData {
    id: number;
    attributes: {
        name: string;
        endpoint: string;
        codename: string;
    }
}

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

interface PostAttributes {
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    updatedAt: string;
    category: {
        data: CategoryData;
    };
    recommended: {
        data: {
            id: number;
        }
    }
    image: {
        data: ImageData;
    }
}

interface PostData {
    id: number;
    attributes: PostAttributes;
}

interface PostsData {
    posts: {
        data: PostData[];
    }
}

const Stories = () => {
    const { loading, error, data } = useQuery<PostsData>(POSTS)
    const [posts, setPosts] = useState<PostData[]>([])
    const [recommendedPosts, setRecommendedPosts] = useState<PostData[]>([])
    const [websitePosts, setWebsitePosts] = useState<PostData[]>([])
    const [mlPosts, setMLPosts] = useState<PostData[]>([])
    const [searchInput, setSearchInput] = useState<string>("")

    useEffect(() => {
        if (!loading && !error && data && data.posts) {
            const postData = data.posts.data;

            // Set posts
            setPosts(postData);

            // Filter and set recommended posts
            const recommendedPosts = postData.filter(post => post.attributes.recommended.data);
            setRecommendedPosts(recommendedPosts);

            // Filter and set website posts
            const websitePosts = postData.filter(post => post.attributes.category.data.attributes.codename === 'WEB');
            setWebsitePosts(websitePosts);

            const mlPosts = postData.filter(post => post.attributes.category.data.attributes.codename === 'MLG')
            setMLPosts(mlPosts);
        }
    }, [data, loading, error]);

    return (
        <>
            <Navbar />

            <main id="stories">
                {/* Hero section */}
                <section className="container hero">
                    <div className='flex-col hero-title-wrapper'>
                        <h1 className='hero-title'>Ada Apa di Stelar</h1>
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

                {!loading && !error && data && data.posts && (
                    <>
                        {/* Recommended articles */}
                        <section className='container recommended'>
                            {/* Section content */}
                            <div className="section-content-wrapper">
                                {recommendedPosts.length > 0 && (
                                    <div className='grid-wrapper'>
                                        <div className='main-col'>
                                            <CardPost data={recommendedPosts[0]} isCategoryVisible={true} />
                                        </div>
                                        <div className='side-col'>
                                            {recommendedPosts.slice(1, 5).map((post, index) => (
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
                                    {websitePosts.length > 0 && websitePosts.map((post) => {
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
                                    {mlPosts.length > 0 && mlPosts.map((post) => {
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

export default Stories