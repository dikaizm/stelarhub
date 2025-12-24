import Image from 'next/image'
import Link from 'next/link'
import stelarLogo from '@/public/logo/stelarea.svg'
import { Twitter, Instagram } from 'lucide-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'

interface FooterProps {
  dict: {
    footer: {
      description: string
      sections: {
        services: string
        company: string
        contact: string
      }
      links: {
        webPlatform: string
        uxuiDesign: string
        aiAutomation: string
        dataStrategy: string
        aboutUs: string
        caseStudies: string
        insights: string
        contact: string
      }
      location: string
      rights: string
      privacyPolicy: string
      termsOfService: string
    }
  }
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background-paper pt-16 pb-8">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">

          {/* Brand Column */}
          <div className="space-y-6 md:w-3/5">
            <Link href="/" className="block w-32">
              <Image
                src={stelarLogo}
                alt="Stelarea"
                className="w-full h-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {dict.footer.description}
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://twitter.com/stelarealab" icon={<Twitter size={18} />} />
              <SocialLink href="https://instagram.com/stelarealab" icon={<Instagram size={18} />} />
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-12 justify-between bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] p-6 md:p-10 rounded-2xl overflow-hidden md:w-full'>
            {/* Services Column */}
            <div>
              <h3 className="text-text font-semibold mb-6 text-white/50">{dict.footer.sections.services}</h3>
              <ul className="space-y-4">
                <FooterLink href="/services#web-development">{dict.footer.links.webPlatform}</FooterLink>
                <FooterLink href="/services#experience-design">{dict.footer.links.uxuiDesign}</FooterLink>
                <FooterLink href="/services#ai-automation">{dict.footer.links.aiAutomation}</FooterLink>
                <FooterLink href="/services#data-strategy">{dict.footer.links.dataStrategy}</FooterLink>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-text font-semibold mb-6 text-white/50">{dict.footer.sections.company}</h3>
              <ul className="space-y-4">
                <FooterLink href="/about">{dict.footer.links.aboutUs}</FooterLink>
                <FooterLink href="/case-studies">{dict.footer.links.caseStudies}</FooterLink>
                <FooterLink href="/insights">{dict.footer.links.insights}</FooterLink>
                <FooterLink href="/contact">{dict.footer.links.contact}</FooterLink>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-text font-semibold mb-6 text-white/50">{dict.footer.sections.contact}</h3>
              <ul className="space-y-4 text-sm text-text-secondary">
                <li>
                  <a href="mailto:hello@stelarea.com" className="text-white hover:text-primary transition-colors">
                    hello@stelarea.com
                  </a>
                </li>
                <li className="text-white">
                  {dict.footer.location}
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            {dict.footer.rights.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex gap-6 items-center">
            <LanguageSwitcher />
            <Link href="/privacy" className="text-text-muted text-xs hover:text-text transition-colors">
              {dict.footer.privacyPolicy}
            </Link>
            <Link href="/terms" className="text-text-muted text-xs hover:text-text transition-colors">
              {dict.footer.termsOfService}
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