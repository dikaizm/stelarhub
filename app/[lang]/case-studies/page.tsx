import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { ArrowRight } from 'lucide-react'
import CaseStudyCard from '@/components/CaseStudyCard'
import { getDictionary, Language } from '@/lib/translations'
import FilterButton from '@/components/FilterButton'
import { caseStudies } from '@/lib/caseStudies'

export default async function CaseStudiesPage({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <main className="pt-16 min-h-screen bg-background">
            <Section className="!pb-0 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        {dict.caseStudiesPage.hero.title}
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        {dict.caseStudiesPage.hero.subtitle}
                    </p>
                </div>
            </Section>

            <Section background="white">
                {/* Filters (Visual only) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <FilterButton label={dict.caseStudiesPage.filters.all} active />
                    <FilterButton label={dict.caseStudiesPage.filters.web} />
                    <FilterButton label={dict.caseStudiesPage.filters.ai} />
                    <FilterButton label={dict.caseStudiesPage.filters.data} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study) => {
                        const content = study[lang] || study.en;
                        return (
                            <CaseStudyCard
                                key={study.slug}
                                brand={study.brand}
                                title={content.title}
                                description={content.description}
                                image={study.images[0]}
                                href={`/${lang}/case-studies/${study.slug}`}
                            />
                        );
                    })}
                </div>
            </Section>
        </main>
    )
}