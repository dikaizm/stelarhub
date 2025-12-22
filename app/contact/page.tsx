'use client'

import React from 'react'
import Section from '@/components/Section'
import Card from '@/components/Card'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react'

export default function ContactPage() {
    return (
        <main className="pt-24 min-h-screen bg-background">
            <Section className="pb-12 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
                        Let’s Discuss Your Goals
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Tell us about the challenges you are facing. We’ll help you find the right digital solution to solve them.
                    </p>
                </div>
            </Section>

            <Section className="pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-text mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text mb-1">Email</h3>
                                    <a href="mailto:hello@stelarea.com" className="text-text-secondary hover:text-primary transition-colors">
                                        hello@stelarea.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-text mb-1">Office</h3>
                                    <p className="text-text-secondary">
                                        Jakarta, Indonesia
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-border">
                                <h3 className="text-lg font-semibold text-text mb-4">Connect with us</h3>
                                <div className="flex gap-4">
                                    <SocialIcon icon={<Linkedin size={20} />} />
                                    <SocialIcon icon={<Instagram size={20} />} />
                                    <SocialIcon icon={<Twitter size={20} />} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="bg-white border-border" variant="white">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="Name" placeholder="Your name" />
                                <InputGroup label="Company" placeholder="Your company name" />
                            </div>
                            <InputGroup label="Email" type="email" placeholder="your@email.com" />
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text">How can we help you?</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-background-subtle border border-border rounded-lg px-4 py-3 text-text placeholder-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                    placeholder="Tell us a bit about your project or challenge..."
                                />
                            </div>
                            <PrimaryButton
                                label="Send Message"
                                fullWidth
                                icon={<ArrowRight size={18} />}
                                iconPosition="right"
                                onClick={() => alert("Message sent! (This is a demo)")}
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

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full bg-background-subtle border border-border flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all">
            {icon}
        </a>
    )
}
