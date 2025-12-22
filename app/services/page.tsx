import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { Code, Layout, Bot, LineChart, Check } from 'lucide-react'

export default function ServicesPage() {
    return (
        <main className="pt-24 min-h-screen bg-background">
            {/* Hero */}
            <Section className="pb-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        Services Built for <span className="text-primary">Scale & Intelligence</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        We provide the end-to-end capabilities you need to modernize your business, from the underlying systems to the user interface and the intelligence that powers it all.
                    </p>
                </div>
            </Section>

            {/* Web & Platform Solutions */}
            <ServiceSection
                id="web-development"
                title="Web & Platform Development"
                description="We build secure, scalable web platforms that become the foundation of your digital operations."
                icon={<Code className="w-10 h-10 text-primary" />}
                whatWeDeliver={[
                    "Custom web applications",
                    "Company profile & enterprise systems",
                    "Headless CMS & API integration",
                    "Performance and security optimization"
                ]}
                outcome="A reliable digital platform built for growth."
                altBackground={true}
            />

            {/* UX/UI */}
            <ServiceSection
                id="experience-design"
                title="User Experience (UX/UI)"
                description="We design experiences that make complex systems easy to use. A powerful system is useless if your team can't use it."
                icon={<Layout className="w-10 h-10 text-secondary" />}
                whatWeDeliver={[
                    "UX research & user journey mapping",
                    "Interface design & design systems",
                    "Prototyping and usability testing",
                    "Wireframing & Information Architecture"
                ]}
                outcome="Higher engagement, better usability, and improved conversion."
                align="right"
            />

            {/* AI & Automation */}
            <ServiceSection
                id="ai-automation"
                title="AI Agent & Machine Learning"
                description="We develop intelligent systems that automate tasks and support decision-making. Free your team from repetitive tasks."
                icon={<Bot className="w-10 h-10 text-primary" />}
                whatWeDeliver={[
                    "AI agents & workflow automation",
                    "Machine learning models (prediction, NLP, CV)",
                    "LLM integration for internal tools",
                    "Model deployment & monitoring"
                ]}
                outcome="Smarter operations and data-driven decisions."
                altBackground={true}
            />

            {/* Data Analytics */}
            <ServiceSection
                id="data-strategy"
                title="Data Analytics & Intelligence"
                description="We transform raw data into insights that drive action. Stop guessing and start knowing."
                icon={<LineChart className="w-10 h-10 text-indigo-500" />}
                whatWeDeliver={[
                    "Data pipelines & integration",
                    "Dashboards & BI solutions",
                    "Advanced analytics & forecasting",
                    "KPI & metrics frameworks"
                ]}
                outcome="Clear insights for faster, better decisions."
                align="right"
            />

            {/* CTA */}
            <Section className="py-24 text-center">
                <h2 className="text-3xl font-bold text-text mb-8">Not sure what you need?</h2>
                <PrimaryButton label="Book a Consultation" link="/contact" className="mx-auto" />
            </Section>
        </main>
    )
}

interface ServiceSectionProps {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    whatWeDeliver: string[]
    outcome: string
    align?: 'left' | 'right'
    altBackground?: boolean
}

function ServiceSection({ id, title, description, icon, whatWeDeliver, outcome, align = 'left', altBackground = false }: ServiceSectionProps) {
    return (
        <Section id={id} background={altBackground ? 'paper' : 'white'} className={altBackground ? 'border-y border-border' : ''}>
            <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${align === 'right' ? 'lg:flex-row-reverse' : ''}`}>

                {/* Content Side */}
                <div className="flex-1">
                    <div className="mb-6 w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center shadow-md">
                        {icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{title}</h2>
                    <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="bg-white rounded-xl p-8 border border-border mb-8 shadow-sm">
                        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4 border-b border-border pb-2">What We Deliver</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {whatWeDeliver.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-text-secondary">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">The Outcome</h3>
                        <p className="text-xl text-text font-medium">{outcome}</p>
                    </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full">
                    <Card className="aspect-video flex items-center justify-center bg-background-subtle border-dashed border-border" variant="paper">
                        <span className="text-text-muted font-mono">System Visualization for {title}</span>
                    </Card>
                </div>

            </div>
        </Section>
    )
}
