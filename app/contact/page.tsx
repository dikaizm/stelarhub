'use client'

import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
    const { t } = useLanguage()
    return (
        <main className="pt-24 min-h-screen bg-background">
            <Section className="pb-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        {t('contactPage.hero.title')}
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        {t('contactPage.hero.subtitle')}
                    </p>
                </div>
            </Section>

            <Section className="pb-24">
                <div className="flex flex-col justify-between md:flex-row gap-12 md:gap-24">
                    {/* Contact Info */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold text-text mb-8">{t('contactPage.touch.title')}</h2>
                        <div className="space-y-8">
                            <ContactInfoItem
                                icon={<Mail size={24} />}
                                title={t('contactPage.touch.email')}
                                iconBgColor="bg-primary/10"
                                iconColor="text-primary"
                            >
                                <a href="mailto:hello@stelarea.com" className="text-text-secondary hover:text-primary transition-colors">
                                    hello@stelarea.com
                                </a>
                            </ContactInfoItem>

                            <ContactInfoItem
                                icon={<Phone size={24} />}
                                title={t('contactPage.touch.whatsapp')}
                                iconBgColor="bg-green-500/10"
                                iconColor="text-green-500"
                            >
                                <a href="https://wa.me/6285600809354" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-green-500 transition-colors">
                                    +62 856-0080-9354
                                </a>
                            </ContactInfoItem>

                            <ContactInfoItem
                                icon={<MapPin size={24} />}
                                title={t('contactPage.touch.office')}
                                iconBgColor="bg-secondary/10"
                                iconColor="text-secondary"
                            >
                                <p className="text-text-secondary">
                                    {t('contactPage.touch.location')}
                                </p>
                            </ContactInfoItem>

                            <div className="pt-8 border-t border-border">
                                <h3 className="text-lg font-semibold text-text mb-4">{t('contactPage.touch.connect')}</h3>
                                <div className="flex gap-4">
                                    <SocialIcon href="https://instagram.com/stelarealab" icon={<Instagram size={20} />} />
                                    <SocialIcon href="https://twitter.com/stelarealab" icon={<Twitter size={20} />} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="w-full">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label={t('contactPage.form.name')} placeholder={t('contactPage.form.namePlaceholder')} />
                                <InputGroup label={t('contactPage.form.company')} placeholder={t('contactPage.form.companyPlaceholder')} />
                            </div>
                            <InputGroup label={t('contactPage.form.email')} type="email" placeholder={t('contactPage.form.emailPlaceholder')} />
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text">{t('contactPage.form.message')}</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-background-subtle border border-border rounded-lg px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder={t('contactPage.form.messagePlaceholder')}
                                />
                            </div>
                            <PrimaryButton
                                label={t('contactPage.form.submit')}
                                fullWidth
                                icon={<ArrowRight size={18} />}
                                iconPosition="right"
                                onClick={() => alert(t('contactPage.form.success'))}
                            />
                        </form>
                    </Card>
                </div>
            </Section>
        </main>
    )
}

function InputGroup({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-text">{label}</label>
            <input
                type={type}
                className="w-full bg-background-subtle border border-border rounded-lg px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder={placeholder}
            />
        </div>
    )
}

function ContactInfoItem({ icon, title, iconBgColor, iconColor, children }: {
    icon: React.ReactNode
    title: string
    iconBgColor: string
    iconColor: string
    children: React.ReactNode
}) {
    return (
        <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-full ${iconBgColor} flex items-center justify-center ${iconColor}`}>
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold text-text mb-1">{title}</h3>
                {children}
            </div>
        </div>
    )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background-subtle border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all"
        >
            {icon}
        </a>
    )
}
