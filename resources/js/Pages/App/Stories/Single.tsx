import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";
import getPublishedDate from "@/helpers/getPublishedDate";
import parse from 'html-react-parser'

import '../../../../sass/pages/stories.scss'

import randomImg from '../../../../assets/images/random-image.jpg'
import Footer from "@/Layouts/Components/Footer";
import getReadingTimeMin from "@/helpers/getReadingTimeMin";
import CardPost from "@/Components/App/Cards/CardPost";

export default function SinglePost({ post, postsByCategory }) {
    const publishedTime = getPublishedDate(post.updated_at);
    const readingTimeMin = getReadingTimeMin(post.body)

    return (
        <>
            <Head title={post.title} />
            <Navbar />

            <main id="stories_single">
                <article className="container">
                    <div className="breadcrumb">
                        <span>Home {'>'} Stories {'>'} {post.category.name} {'>'} {post.title}</span>
                    </div>
                    <section className="article-wrapper">
                        <aside className="article-share-fixed">
                            <div className="flex-col">
                                <span>Bagikan</span>
                                <div>ig</div>
                                <div>x</div>
                                <div>fb</div>
                                <div>wa</div>
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
                        <div className="feedback">
                            <span>Apakah informasi ini membantu?</span>
                            <button type="button">Ya</button>
                            <button type="button">Tidak</button>
                        </div>
                        <div className="share">
                            <span>Bagikan</span>
                            <div>ig</div>
                            <div>x</div>
                            <div>fb</div>
                            <div>wa</div>
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
                            {postsByCategory.length > 0 && postsByCategory.map((post) => {
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