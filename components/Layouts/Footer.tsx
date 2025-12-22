'use client'

import Image from 'next/image'
import Link from 'next/link'
import stelarLogo from '@/public/logo/stelarea.svg'
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="w-full bg-background-paper pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">

          {/* Brand Column */}
          <div className="space-y-6 w-3/5">
            <Link href="/" className="block w-32">
              <Image
                src={stelarLogo}
                alt="Stelarea"
                className="w-full h-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
            </div>
          </div>

          <div className='flex gap-4 justify-between bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] p-10 rounded-2xl overflow-hidden w-full'>
            {/* Services Column */}
            <div>
              <h3 className="text-text font-semibold mb-6 text-white/50">{t('footer.sections.services')}</h3>
              <ul className="space-y-4">
                <FooterLink href="/services#web-development">{t('footer.links.webPlatform')}</FooterLink>
                <FooterLink href="/services#experience-design">{t('footer.links.uxuiDesign')}</FooterLink>
                <FooterLink href="/services#ai-automation">{t('footer.links.aiAutomation')}</FooterLink>
                <FooterLink href="/services#data-strategy">{t('footer.links.dataStrategy')}</FooterLink>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-text font-semibold mb-6 text-white/50">{t('footer.sections.company')}</h3>
              <ul className="space-y-4">
                <FooterLink href="/about">{t('footer.links.aboutUs')}</FooterLink>
                <FooterLink href="/case-studies">{t('footer.links.caseStudies')}</FooterLink>
                <FooterLink href="/insights">{t('footer.links.insights')}</FooterLink>
                <FooterLink href="/contact">{t('footer.links.contact')}</FooterLink>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-text font-semibold mb-6 text-white/50">{t('footer.sections.contact')}</h3>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li>
                  <a href="mailto:hello@stelarea.com" className="text-white hover:text-primary transition-colors">
                    hello@stelarea.com
                  </a>
                </li>
                <li className="text-white">
                  {t('footer.location')}
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            {t('footer.rights').replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6 items-center">
            <LanguageSwitcher />
            <Link href="/privacy" className="text-text-muted text-xs hover:text-text transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/terms" className="text-text-muted text-xs hover:text-text transition-colors">
              {t('footer.termsOfService')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-border text-text-muted hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
    >
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white hover:text-primary transition-colors inline-block"
      >
        {children}
      </Link>
    </li>
  )
}