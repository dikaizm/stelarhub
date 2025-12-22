import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { ArrowRight } from 'lucide-react'

export default function CaseStudiesPage() {
    return (
        <main className="pt-24 min-h-screen bg-background">
            <Section className="pb-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        Impact in Action
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Explore how Stelarea helps businesses overcome barriers and achieve their goals through intelligent systems.
                    </p>
                </div>
            </Section>

            <Section background="white">
                {/* Filters (Visual only) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <FilterButton label="All Projects" active />
                    <FilterButton label="Web & Platform" />
                    <FilterButton label="AI & Automation" />
                    <FilterButton label="Data Analytics" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholders for now */}
                    <CaseStudyCard
                        category="AI & Automation"
                        title="Automating Customer Support for TechCorp"
                        result="70% Reduction in Response Time"
                    />
                    <CaseStudyCard
                        category="Web Platform"
                        title="Enterprise ERP Dashboard for LogisticsCo"
                        result="Real-time Tracking & Efficiency Boost"
                    />
                    <CaseStudyCard
                        category="Data Analytics"
                        title="Predictive Sales Modeling for RetailChain"
                        result="15% Revenue Increase YoY"
                    />
                </div>
            </Section>
        </main>
    )
}

function FilterButton({ label, active = false }: { label: string, active?: boolean }) {
    return (
        <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors border ${active
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-text-secondary border-border hover:border-primary hover:text-primary'
                }`}
        >
            {label}
        </button>
    )
}

function CaseStudyCard({ category, title, result }: { category: string, title: string, result: string }) {
    return (
        <Card className="group h-full flex flex-col min-h-[400px]">
            <div className="flex-1 mb-8 bg-background-subtle rounded-lg h-48 border border-border flex items-center justify-center text-text-muted">
                Image Placeholder
            </div>
            <div className="mb-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</span>
            </div>
            <h3 className="text-xl font-bold text-text mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <div className="mt-auto border-t border-border pt-4">
                <p className="text-sm text-text-secondary mb-4">
                    <strong className="text-text block mb-1">Result:</strong> {result}
                </p>
                <div className="flex items-center text-primary text-sm font-semibold gap-2">
                    Read Case Study <ArrowRight size={16} />
                </div>
            </div>
        </Card>
    )
}
