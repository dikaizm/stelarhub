import { useQuery, gql } from '@apollo/client'
import { useEffect, useState } from 'react'

import 'swiper/css';
import './stories.scss'

import Navbar from "../../components/navbar/Navbar"

import iconSearch from '../../assets/icons/stories-search.svg'
import iconArrow from '../../assets/icons/arrow-r.svg'
import CardPost from '../../components/card/post/CardPost';

const POSTS = gql`
query GetPost {
    posts {
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
              }
            }
          }
        }
      }
    }
  }
`

interface CategoryAttributes {
    name: string;
    endpoint: string;
}

interface CategoryData {
    id: number;
    attributes: CategoryAttributes;
}

interface PostAttributes {
    title: string;
    slug: string;
    excerpt: string;
    body: string;
    updatedAt: string;
    category: {
        data: CategoryData[];
    };
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

    const handlePostData = () => {
        if (!loading && !error && data && data.posts) {
            setPosts(data.posts.data);
        }
    }

    useEffect(() => {
        handlePostData();
    })

    return (
        <>
            <Navbar />

            <main id="stories">
                {/* Hero section */}
                <section className="container hero">
                    <div>
                        <h1>Ada Apa di Stelar</h1>
                        <p>Cerita kami, berita seru, dan tips terkini. Baca semua artikel soal Stelar di sini.</p>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="stories-search"></label>
                            <input type="text" id="stories-search" />
                        </div>
                        <button>
                            <img src={iconSearch} alt="" />
                            <span>Cari</span>
                        </button>
                    </div>
                </section>

                {/* Recommended articles */}
                <section className='container recommended'>
                    {/* Main article */}
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h3>Lorem ipsum dolor sit amet</h3>
                            <span>Stelar | 12 Sep 2023</span>
                        </div>
                    </div>

                    {/* Side articles */}
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <div>
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>Our backend is made to prioritise balance and efficiency to ensure everyone can thrive.</p>
                                </div>
                                <span>Stelar | 12 Sep 2023</span>
                            </div>
                        </div>

                        <div>
                            <img src="" alt="" />
                            <div>
                                <div>
                                    <h3>Lorem ipsum dolor sit amet</h3>
                                    <p>Our backend is made to prioritise balance and efficiency to ensure everyone can thrive.</p>
                                </div>
                                <span>Stelar | 12 Sep 2023</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Latest articles */}
                <section className='container collection'>
                    {/* Section title */}
                    <div className='section-title-wrapper'>
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

                    <div className="section-content-wrapper">
                        <div className='carousel'>
                            {posts && posts.map((post) => {
                                return (
                                    <CardPost data={post} key={post.id} />
                                )
                            })}
                        </div>

                        <button className='slide-btn prev'>
                            <div className='icon-w'>
                                <img src={iconArrow} alt="Icon arrow right" />
                            </div>
                        </button>

                        <button className='slide-btn next'>
                            <div className='icon-w'>
                                <img src={iconArrow} alt="Icon arrow right" />
                            </div>
                        </button>
                    </div>
                </section>

                {/* Category articles */}
                <section>

                </section>
            </main>
        </>
    )
}

export default Stories