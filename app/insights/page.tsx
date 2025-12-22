import React from 'react'
import Section from '@/components/Section'
import { ArrowRight, Calendar } from 'lucide-react'
import FilterButton from '@/components/FilterButton'
import { getAllPosts } from '@/lib/insights'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'

export default function InsightsPage() {
    const posts = getAllPosts()
    const featuredPost = posts[0]
    const recentPosts = posts.slice(1)

    return (
        <main className="pt-16 min-h-screen bg-background">
            <Section className="!pb-0 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        Insights & Perspectives
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Practical advice on navigating digital transformation, utilizing AI, and managing modern business systems.
                    </p>
                </div>
            </Section>

            <Section background="white">
                {/* Featured Article */}
                {featuredPost && (
                    <div className="mb-16">
                        <Link href={`/insights/${featuredPost.slug}`} className="block group">
                            <div className="grid md:grid-cols-2 gap-8 items-center overflow-hidden rounded-2xl bg-slate-50 p-4 hover:bg-slate-100 transition-all">
                                <div className="h-64 rounded-xl md:h-full bg-background-subtle flex items-center justify-center text-text-muted min-h-[300px]">
                                    {featuredPost.image ? (
                                        <div className="w-full h-full flex items-center justify-center text-sm">{featuredPost.image}</div>
                                    ) : (
                                        "Featured Image"
                                    )}
                                </div>
                                <div className="px-6 py-8 md:px-12 md:py-20">
                                    <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                                        <span className="text-primary font-semibold">{featuredPost.category}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {featuredPost.date}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors">{featuredPost.title}</h3>
                                    <p className="text-text-secondary mb-6 leading-relaxed line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Full Article <ArrowRight size={18} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <FilterButton label="All Projects" active />
                    <FilterButton label="Web & Platform" />
                    <FilterButton label="AI & Automation" />
                    <FilterButton label="Data Analytics" />
                </div>

                {/* Recent Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.length > 0 ? (
                        recentPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))
                    ) : (
                        // Fallback placeholders if no extra posts exist yet
                        <>
                            {!featuredPost && <div className="col-span-full text-center text-text-secondary">No insights found.</div>}
                        </>
                    )}
                </div>
            </Section>
        </main>
    )
}
