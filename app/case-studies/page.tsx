import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/CaseStudyCard'

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
                        brand="BRIN"
                        title="LLM Evaluation Platform"
                        description="A comprehensive platform for evaluating Large Language Models specifically for Indonesian languages."
                        image="/assets/portfolio/brin-llm-eval/1.png"
                    />
                    <CaseStudyCard
                        brand="LIDM"
                        title="Cortex Learning Management"
                        description="Advanced learning management system designed for modern educational institutions."
                        image="/assets/portfolio/cortex-lidm/1.png"
                    />
                    <CaseStudyCard
                        brand="Matafutsal"
                        title="Sports Venue Booking"
                        description="A seamless booking experience for sports venues and community events."
                        image="/assets/portfolio/matafutsal/1.png"
                    />
                </div>
            </Section>
        </main>
    )
}

export function FilterButton({ label, active = false }: { label: string, active?: boolean }) {
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