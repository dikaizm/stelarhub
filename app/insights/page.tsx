import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { ArrowRight, Calendar } from 'lucide-react'
import { FilterButton } from '../case-studies/page'

export default function InsightsPage() {
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
                <div className="mb-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center overflow-hidden rounded-2xl bg-slate-50 p-4">
                        <div className="h-64 rounded-xl md:h-full bg-background-subtle flex items-center justify-center text-text-muted min-h-[300px]">
                            Featured Image
                        </div>
                        <div className="px-12 py-20">
                            <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
                                <span className="text-primary font-semibold">AI Strategy</span>
                                <span>•</span>
                                <span className="flex items-center gap-1"><Calendar size={14} /> Oct 24, 2024</span>
                            </div>
                            <h3 className="text-3xl font-bold text-text mb-4">Applying AI to Real-World Business Workflows</h3>
                            <p className="text-text-secondary mb-6 leading-relaxed">
                                Artificial Intelligence is more than just a buzzword. Learn how practical AI agents can automate up to 40% of routine tasks in your operations today.
                            </p>
                            <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                Read Full Article <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <FilterButton label="All Projects" active />
                    <FilterButton label="Web & Platform" />
                    <FilterButton label="AI & Automation" />
                    <FilterButton label="Data Analytics" />
                </div>

                {/* Recent Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <BlogCard
                        category="Product Design"
                        title="Designing Digital Products for Scale"
                        excerpt="Why starting with a design system is crucial for long-term product health."
                    />
                    <BlogCard
                        category="User Experience"
                        title="Understanding the ROI of User Experience"
                        excerpt="How better UX translates directly to improved bottom-line revenue."
                    />
                    <BlogCard
                        category="Data Analytics"
                        title="Making Better Decisions with Data"
                        excerpt="Moving from reactive reporting to proactive predictive analytics."
                    />
                </div>
            </Section>
        </main>
    )
}

function BlogCard({ category, title, excerpt }: { category: string, title: string, excerpt: string }) {
    return (
        <Card className="h-full flex flex-col group cursor-pointer hover:border-primary/50">
            <div className="h-48 bg-background-subtle rounded-lg mb-6 flex items-center justify-center text-text-muted border border-border">
                Image
            </div>
            <div className='p-2 pt-0'>
                <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                    <span className="text-primary font-semibold uppercase">{category}</span>
                    <span>•</span>
                    <span>5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {excerpt}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold mt-auto">
                    Read More <ArrowRight size={16} className="ml-2" />
                </div>
            </div>
        </Card>
    )
}
