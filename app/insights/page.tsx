'use client'

import React, { useEffect, useState } from 'react'
import Section from '@/components/Section'
import { ArrowRight, Calendar } from 'lucide-react'
import FilterButton from '@/components/FilterButton'
import { getAllPosts, InsightPost } from '@/lib/insights'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { useLanguage } from '@/contexts/LanguageContext'

export default function InsightsPage() {
    const { language, t } = useLanguage()
    const [posts, setPosts] = useState<InsightPost[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const data = await getAllPosts(language)
                setPosts(data)
            } catch (error) {
                console.error("Failed to fetch posts", error)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [language])

    const featuredPost = posts[0]
    const recentPosts = posts.slice(1)

    return (
        <main className="pt-16 min-h-screen bg-background">
            <Section className="!pb-0 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        {t('insightsPage.hero.title')}
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        {t('insightsPage.hero.subtitle')}
                    </p>
                </div>
            </Section>

            <Section background="white">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                ) : (
                    <>
                        {/* Featured Article */}
                        {featuredPost && (
                            <div className="mb-16">
                                <Link href={`/insights/${featuredPost.slug}`} className="block group">
                                    <div className="grid md:grid-cols-2 gap-8 items-center overflow-hidden rounded-2xl bg-slate-50 p-4 hover:bg-slate-100 transition-all">
                                        <div className="h-64 overflow-hidden rounded-xl md:h-full bg-background-subtle flex items-center justify-center text-text-muted min-h-[300px]">
                                            {featuredPost.image ? (
                                                <div className="w-full h-full flex items-center justify-center text-sm relative overflow-hidden">
                                                    {/* Placeholder for image if it's a path string, theoretically Next Image would be better here but keeping simple based on previous code */}
                                                    <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center text-secondary font-medium">
                                                        Featured Image
                                                    </div>
                                                </div>
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
                                                {t('insightsPage.readFull')} <ArrowRight size={18} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        <div className="flex flex-wrap justify-center gap-4 mb-16">
                            <FilterButton label={t('caseStudiesPage.filters.all')} active />
                            <FilterButton label={t('caseStudiesPage.filters.web')} />
                            <FilterButton label={t('caseStudiesPage.filters.ai')} />
                            <FilterButton label={t('caseStudiesPage.filters.data')} />
                        </div>

                        {/* Recent Articles */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recentPosts.length > 0 ? (
                                recentPosts.map((post) => (
                                    <BlogCard key={post.slug} post={post} />
                                ))
                            ) : (
                                <>
                                    {!featuredPost && <div className="col-span-full text-center text-text-secondary">{t('insightsPage.noInsights')}</div>}
                                </>
                            )}
                        </div>
                    </>
                )}
            </Section>
        </main>
    )
}
