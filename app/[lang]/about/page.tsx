import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { Target, Compass, Zap, Layers, Code2, HeartHandshake } from 'lucide-react'
import Image from 'next/image'
import { getDictionary, Language } from '@/lib/translations'

export default async function AboutPage({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <main className="pt-24 min-h-screen bg-background">
            {/* Hero / Intro */}
            <Section className="pb-12">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-8">
                        {dict.aboutPage.hero.title} <span className="text-primary">{dict.aboutPage.hero.titleHighlight}</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-2xl text-balance">
                        {dict.aboutPage.hero.subtitle}
                    </p>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Compass className="text-primary w-8 h-8" />
                            <h2 className="text-3xl font-bold text-text">{dict.aboutPage.vision.title}</h2>
                        </div>
                        <p className="text-lg text-text-secondary">
                            {dict.aboutPage.vision.text}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="text-primary w-8 h-8" />
                            <h2 className="text-3xl font-bold text-text">{dict.aboutPage.mission.title}</h2>
                        </div>
                        <ul className="space-y-6">
                            <MissionItem title={dict.aboutPage.mission.simplify.title} description={dict.aboutPage.mission.simplify.desc} />
                            <MissionItem title={dict.aboutPage.mission.build.title} description={dict.aboutPage.mission.build.desc} />
                            <MissionItem title={dict.aboutPage.mission.empower.title} description={dict.aboutPage.mission.empower.desc} />
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Our Approach */}
            <section className="w-full pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 sm:py-24 flex flex-col items-center text-center">
                    <div className="mb-16 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{dict.aboutPage.approach.title}</h2>
                        <p className="text-xl text-text-secondary max-w-2xl">
                            {dict.aboutPage.approach.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative container">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />

                        <ApproachCard
                            step="01"
                            title={dict.aboutPage.approach.steps.understand.title}
                            description={dict.aboutPage.approach.steps.understand.desc}
                        />
                        <ApproachCard
                            step="02"
                            title={dict.aboutPage.approach.steps.design.title}
                            description={dict.aboutPage.approach.steps.design.desc}
                        />
                        <ApproachCard
                            step="03"
                            title={dict.aboutPage.approach.steps.build.title}
                            description={dict.aboutPage.approach.steps.build.desc}
                        />
                        <ApproachCard
                            step="04"
                            title={dict.aboutPage.approach.steps.support.title}
                            description={dict.aboutPage.approach.steps.support.desc}
                        />
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{dict.aboutPage.values.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Zap className="w-8 h-8 text-yellow-500" />}
                        title={dict.aboutPage.values.clarity.title}
                        description={dict.aboutPage.values.clarity.desc}
                    />
                    <ValueCard
                        icon={<Code2 className="w-8 h-8 text-primary" />}
                        title={dict.aboutPage.values.results.title}
                        description={dict.aboutPage.values.results.desc}
                    />
                    <ValueCard
                        icon={<HeartHandshake className="w-8 h-8 text-rose-500" />}
                        title={dict.aboutPage.values.longTerm.title}
                        description={dict.aboutPage.values.longTerm.desc}
                    />
                </div>
            </Section>

            {/* Team Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{dict.about.title}</h2>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        {dict.about.subtitle}
                    </p>
                </div>
                <div className="grid grid-flow-col auto-cols-[280px] md:grid-flow-row md:grid-cols-3 md:auto-cols-auto gap-4 overflow-x-auto md:overflow-visible pb-4 md:w-fit md:mx-auto snap-x snap-mandatory md:snap-none">
                    <TeamCard
                        name={dict.about.izzulhaq.name}
                        role={dict.about.izzulhaq.role}
                        description={dict.about.izzulhaq.description}
                        image="/assets/team-01.png"
                    />
                    <TeamCard
                        name={dict.about.mazir.name}
                        role={dict.about.mazir.role}
                        description={dict.about.mazir.description}
                        image="/assets/team-02.png"
                    />
                    <TeamCard
                        name={dict.about.sekar.name}
                        role={dict.about.sekar.role}
                        description={dict.about.sekar.description}
                        image="/assets/team-03.png"
                    />
                </div>
            </Section>
        </main>
    )
}

function MissionItem({ title, description }: { title: string, description: string }) {
    return (
        <li className="flex items-start gap-3">
            <span className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0" />
            <p className="text-lg text-text-secondary">
                <strong className="text-text">{title}</strong> {description}
            </p>
        </li>
    )
}

function ApproachCard({ step, title, description }: { step: string, title: string, description: string }) {
    return (
        <Card className="h-full !bg-white hover:!bg-slate-50">
            <div className="text-4xl font-bold text-primary/20 mb-4">{step}</div>
            <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </Card>
    )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-all">
            <div className="w-16 h-16 rounded-full bg-background-subtle flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
            <p className="text-text-secondary">{description}</p>
        </div>
    )
}



function TeamCard({ name, role, description, image }: { name: string, role: string, description: string, image: string }) {
    return (
        <Card variant='paper' className="h-full !p-0 overflow-hidden group transition-all duration-300 flex-shrink-0 snap-center md:snap-align-none">
            <div className="relative w-full rounded-xl aspect-square overflow-hidden bg-background-subtle">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
            </div>
            <div className="p-3">
                <h3 className="text-xl font-bold text-text mb-1">{name}</h3>
                <p className="text-primary font-medium mb-4">{role}</p>
                <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
            </div>
        </Card>
    )
}
