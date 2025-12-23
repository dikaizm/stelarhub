'use client'

import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import {
    Code, Layout, Bot, LineChart, Check,
    Globe, Building2, Plug, Shield,
    Users, Palette, TestTube, FileText,
    Zap, Brain, MessageSquare, Activity,
    Database, BarChart3, TrendingUp, Target
} from 'lucide-react'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPage() {
    const { t } = useLanguage()
    return (
        <main className="pt-24 min-h-screen bg-background">
            {/* Hero */}
            <section className="w-full pb-12 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 sm:py-24 flex flex-col items-center text-center">

                    {/* Subtle Background Effects */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-4xl px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 text-balance">
                            {t('servicesPage.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('servicesPage.hero.titleHighlight')}</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto text-balance font-light leading-relaxed">
                            {t('servicesPage.hero.subtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Web & Platform Solutions */}
            <ServiceSection
                id="web-development"
                title={t('servicesPage.webDevelopment.title')}
                description={t('servicesPage.webDevelopment.description')}
                icon={<Code className="w-10 h-10 text-primary" />}
                whatWeDeliver={[
                    { icon: <Globe className="w-5 h-5" />, text: t('servicesPage.webDevelopment.features.customApps') },
                    { icon: <Building2 className="w-5 h-5" />, text: t('servicesPage.webDevelopment.features.companySystems') },
                    { icon: <Plug className="w-5 h-5" />, text: t('servicesPage.webDevelopment.features.cmsApi') },
                    { icon: <Shield className="w-5 h-5" />, text: t('servicesPage.webDevelopment.features.performance') }
                ]}
                outcome={t('servicesPage.webDevelopment.outcome')}
            />

            {/* UX/UI */}
            <ServiceSection
                id="experience-design"
                title={t('servicesPage.experienceDesign.title')}
                description={t('servicesPage.experienceDesign.description')}
                icon={<Layout className="w-10 h-10 text-secondary" />}
                whatWeDeliver={[
                    { icon: <Users className="w-5 h-5" />, text: t('servicesPage.experienceDesign.features.uxResearch') },
                    { icon: <Palette className="w-5 h-5" />, text: t('servicesPage.experienceDesign.features.interfaceDesign') },
                    { icon: <TestTube className="w-5 h-5" />, text: t('servicesPage.experienceDesign.features.prototyping') },
                    { icon: <FileText className="w-5 h-5" />, text: t('servicesPage.experienceDesign.features.wireframing') }
                ]}
                outcome={t('servicesPage.experienceDesign.outcome')}
                align="right"
            />

            {/* AI & Automation */}
            <ServiceSection
                id="ai-automation"
                title={t('servicesPage.aiAutomation.title')}
                description={t('servicesPage.aiAutomation.description')}
                icon={<Bot className="w-10 h-10 text-primary" />}
                whatWeDeliver={[
                    { icon: <Zap className="w-5 h-5" />, text: t('servicesPage.aiAutomation.features.aiAgents') },
                    { icon: <Brain className="w-5 h-5" />, text: t('servicesPage.aiAutomation.features.mlModels') },
                    { icon: <MessageSquare className="w-5 h-5" />, text: t('servicesPage.aiAutomation.features.llmIntegration') },
                    { icon: <Activity className="w-5 h-5" />, text: t('servicesPage.aiAutomation.features.deployment') }
                ]}
                outcome={t('servicesPage.aiAutomation.outcome')}
            />

            {/* Data Analytics */}
            <ServiceSection
                id="data-strategy"
                title={t('servicesPage.dataStrategy.title')}
                description={t('servicesPage.dataStrategy.description')}
                icon={<LineChart className="w-10 h-10 text-indigo-500" />}
                whatWeDeliver={[
                    { icon: <Database className="w-5 h-5" />, text: t('servicesPage.dataStrategy.features.pipelines') },
                    { icon: <BarChart3 className="w-5 h-5" />, text: t('servicesPage.dataStrategy.features.dashboards') },
                    { icon: <TrendingUp className="w-5 h-5" />, text: t('servicesPage.dataStrategy.features.analytics') },
                    { icon: <Target className="w-5 h-5" />, text: t('servicesPage.dataStrategy.features.metrics') }
                ]}
                outcome={t('servicesPage.dataStrategy.outcome')}
                align="right"
            />

            {/* CTA */}
            <Section className="py-24 text-center">
                <h2 className="text-3xl font-bold text-text mb-8">{t('servicesPage.cta.title')}</h2>
                <PrimaryButton label={t('servicesPage.cta.button')} link="/contact" className="mx-auto" />
            </Section>
        </main>
    )
}

interface DeliveryItem {
    icon: React.ReactNode
    text: string
}

interface ServiceSectionProps {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    whatWeDeliver: DeliveryItem[]
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

                    <div className="lg:hidden mb-6 w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center shadow-md">
                        {icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{title}</h2>
                    <p className="text-xl text-text font-medium mb-6">{outcome}</p>

                    <p className="text-text-secondary mb-8 leading-relaxed">
                        {description}
                    </p>


                    <ul className="flex flex-col gap-4">
                        {whatWeDeliver.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-text-secondary">
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    {item.icon}
                                </div>
                                <span className="flex-1 pt-2">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full relative">
                    <div className="hidden lg:flex absolute -top-8 -left-8 w-16 h-16 rounded-2xl bg-white border border-border items-center justify-center shadow-xl z-10">
                        {icon}
                    </div>

                    <Card className="flex aspect-square items-center justify-center bg-background-subtle border-dashed border-border" variant="paper">
                        <span className="text-text-muted font-mono">System Visualization for {title}</span>
                    </Card>
                </div>

            </div>
        </Section>
    )
}
