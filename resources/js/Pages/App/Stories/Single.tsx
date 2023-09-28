import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";
import getPublishedDate from "@/helpers/getPublishedDate";

import randomImg from '../../../../assets/images/random-image.jpg'
import Footer from "@/Layouts/Components/Footer";

export default function SinglePost({ post }) {
    console.log(post);
    const publishedTime = getPublishedDate(post.updated_at);

    return (
        <>
            <Head title={post.title} />
            <Navbar />
            
            <main>
                <article>
                    <div>Home {'>'} Stories {'>'} {post.category.name} {'>'} {post.title}</div>
                    <section>
                        <aside>Share</aside>
                        <div>
                            <div>
                                <h1>{post.title}</h1>
                            </div>
                            <div>
                                <div>
                                    <img src={randomImg} alt="" />
                                </div>
                                <span>{post.author.name} • {publishedTime}</span>
                            </div>
                            <div>
                                {post.body}
                            </div>
                        </div>
                    </section>
                </article>

                <section>

                </section>
            </main>

            <Footer />
        </>
    )
}