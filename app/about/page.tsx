import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import { Target, Compass, Zap, Layers, Code2, HeartHandshake } from 'lucide-react'

export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen bg-background">
            {/* Hero / Intro */}
            <Section className="pb-12">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-8">
                        Bridging the gap between where your business is today and where <span className="text-primary">technology can take it tomorrow.</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-2xl text-balance">
                        Stelarea is a digital transformation agency focused on impact. We believe that the best digital systems fade into the background—they just work, enabling your team to focus on what matters: growing the business and serving customers.
                    </p>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section className="border-y border-border" background="paper">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Compass className="text-primary w-8 h-8" />
                            <h2 className="text-3xl font-bold text-text">Our Vision</h2>
                        </div>
                        <p className="text-lg text-text-secondary">
                            To enable organizations to operate smarter through reliable, intelligent digital environments.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Target className="text-primary w-8 h-8" />
                            <h2 className="text-3xl font-bold text-text">Our Mission</h2>
                        </div>
                        <ul className="space-y-6">
                            <MissionItem title="Simplify" description="complex business challenges through smart strategy." />
                            <MissionItem title="Build" description="reliable tools that support long-term growth." />
                            <MissionItem title="Empower" description="leaders with data-driven clarity." />
                        </ul>
                    </div>
                </div>
            </Section>

            {/* Our Approach */}
            <Section background="white">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Our Approach</h2>
                    <p className="text-xl text-text-secondary max-w-2xl">
                        We don't just build software; we build solutions that fit your business context.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 -z-10" />

                    <ApproachCard
                        step="01"
                        title="Understand"
                        description="We listen to your challenges and define what 'success' looks like for your business."
                    />
                    <ApproachCard
                        step="02"
                        title="Design"
                        description="We map out a strategy that fits your current needs and future ambitions."
                    />
                    <ApproachCard
                        step="03"
                        title="Build & Launch"
                        description="We create the system, ensuring it is user-friendly and reliable from day one."
                    />
                    <ApproachCard
                        step="04"
                        title="Support & Evolve"
                        description="We help you adopt the new tools and improve them as your business changes."
                    />
                </div>
            </Section>

            {/* Our Values */}
            <Section className="border-t border-border" background="paper">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Our Values</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Zap className="w-8 h-8 text-yellow-500" />}
                        title="Clarity over Complexity"
                        description="We make technology easy to understand and use."
                    />
                    <ValueCard
                        icon={<Code2 className="w-8 h-8 text-primary" />}
                        title="Results over Output"
                        description="It’s not about how much we build, but how much value we create."
                    />
                    <ValueCard
                        icon={<HeartHandshake className="w-8 h-8 text-rose-500" />}
                        title="Long-Term Thinking"
                        description="We build solutions meant to last."
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
        <Card className="h-full" variant="paper">
            <div className="text-4xl font-bold text-primary/20 mb-4">{step}</div>
            <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </Card>
    )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-border shadow-soft hover:shadow-card transition-all">
            <div className="w-16 h-16 rounded-full bg-background-subtle flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-text mb-3">{title}</h3>
            <p className="text-text-secondary">{description}</p>
        </div>
    )
}
