import Image from 'next/image'
import Link from 'next/link'
import stelarLogo from '@/public/logo/stelarea.svg'
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background-paper border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block w-32">
              <Image
                src={stelarLogo}
                alt="Stelarea"
                className="w-full h-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Stelarea translates your business goals into intelligent digital tools. We build the systems you need to streamline operations and scale without friction.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} />
              <SocialLink href="https://github.com" icon={<Github size={18} />} />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-text font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <FooterLink href="/services#web-development">Web & Platform</FooterLink>
              <FooterLink href="/services#experience-design">UX/UI Design</FooterLink>
              <FooterLink href="/services#ai-automation">AI & Automation</FooterLink>
              <FooterLink href="/services#data-strategy">Data Strategy</FooterLink>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-text font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/insights">Insights</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-text font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a href="mailto:hello@stelarea.com" className="hover:text-primary transition-colors">
                  hello@stelarea.com
                </a>
              </li>
              <li>
                Jakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {currentYear} Stelarea. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-text-muted text-xs hover:text-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted text-xs hover:text-text transition-colors">
              Terms of Service
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
        className="text-sm text-text-secondary hover:text-primary transition-colors inline-block"
      >
        {children}
      </Link>
    </li>
  )
}