import React from 'react'
import Section from '@/components/Section'
import { getPostData, getAllPosts } from '@/lib/insights'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'
import { Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getDictionary, Language } from '@/lib/translations'

interface Props {
    params: Promise<{
        lang: Language
        slug: string
    }>
}

export default async function ArticlePage({ params }: Props) {
    const { lang, slug } = await params;
    const dict = getDictionary(lang);

    const post = await getPostData(slug, lang);

    if (!post) {
        return (
            <main className="pt-8 min-h-screen bg-background flex flex-col items-center justify-center text-center p-4">
                <h1 className="text-2xl font-bold text-text mb-4">Post not found</h1>
                <Link href={`/${lang}/insights`} className="text-primary hover:underline">Back to Insights</Link>
            </main>
        )
    }

    // Fetch all posts for related section
    const allPosts = await getAllPosts(lang);
    const relatedPosts = allPosts
        .filter(p => p.category === post.category && p.slug !== post.slug)
        .slice(0, 3);

    return (
        <main className="pt-8 min-h-screen bg-background text-text">
            {/* Header Section */}
            <Section className="!pb-0">
                <div className="max-w-3xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="flex items-center text-sm text-text-secondary mb-8">
                        <Link href={`/${lang}`} className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href={`/${lang}/insights`} className="hover:text-primary transition-colors">Insights</Link>
                        <span className="mx-2">/</span>
                        <span className="text-text font-medium truncate max-w-[200px]">{post.title}</span>
                    </nav>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold flex items-center gap-2">
                            <Tag size={14} />
                            {post.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar size={14} />
                            {post.date}
                        </span>
                        {post.author && (
                            <span className="flex items-center gap-2">
                                <User size={14} />
                                {post.author}
                            </span>
                        )}
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-text mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <p className="text-xl text-text-secondary leading-relaxed border-l-4 border-primary/20 pl-6 my-8 italic">
                        {post.excerpt}
                    </p>
                </div>
            </Section>

            {/* Featured Image (if available) - using placeholder for now if not */}
            {post.image ? (
                <div className="max-w-5xl mx-auto px-4 md:px-8 mb-12">
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-12">
                        {/* <Image src={post.image} alt={post.title} fill className="object-cover" /> */}
                        <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                            Featured Image: {post.image}
                        </div>
                    </div>
                </div>
            ) : null}


            {/* Content Section */}
            <Section background="white">
                <article className="max-w-3xl mx-auto prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-text prose-p:text-text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-text">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </article>

                <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border">
                    <div className="bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-text mb-2">Need help implementing this?</h4>
                            <p className="text-text-secondary mb-4 md:mb-0">
                                Stelarea helps businesses like yours navigate complex digital transformations.
                            </p>
                        </div>
                        <Link
                            href={`/${lang}/contact`}
                            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                    <div className="max-w-6xl mx-auto mt-24">
                        <h3 className="text-2xl font-bold text-text mb-8 text-center md:text-left">Related Articles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map(related => (
                                <BlogCard key={related.slug} post={related} />
                            ))}
                        </div>
                    </div>
                )}
            </Section>
        </main>
    )
}
