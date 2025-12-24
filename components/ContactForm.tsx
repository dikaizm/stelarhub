'use client'

import React from 'react'
import Card from '@/components/Card'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { ArrowRight } from 'lucide-react'

interface ContactFormProps {
    translations: {
        name: string
        namePlaceholder: string
        company: string
        companyPlaceholder: string
        email: string
        emailPlaceholder: string
        message: string
        messagePlaceholder: string
        submit: string
        success: string
    }
}

export default function ContactForm({ translations }: ContactFormProps) {
    return (
        <Card className="w-full">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputGroup label={translations.name} placeholder={translations.namePlaceholder} />
                    <InputGroup label={translations.company} placeholder={translations.companyPlaceholder} />
                </div>
                <InputGroup label={translations.email} type="email" placeholder={translations.emailPlaceholder} />
                <div className="space-y-2">
                    <label className="text-sm font-medium text-text">{translations.message}</label>
                    <textarea
                        rows={4}
                        className="w-full bg-background-subtle border border-border rounded-lg px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder={translations.messagePlaceholder}
                    />
                </div>
                <PrimaryButton
                    label={translations.submit}
                    fullWidth
                    icon={<ArrowRight size={18} />}
                    iconPosition="right"
                    onClick={() => alert(translations.success)}
                />
            </form>
        </Card>
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
