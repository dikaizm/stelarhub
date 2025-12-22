'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import stelarLogo from '@/public/logo/stelarea.svg'
import { HeaderNavData } from './store/header'
import PrimaryButton from '@/components/Buttons/PrimaryButton'

const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-border py-3 shadow-sm'
          : 'bg-transparent py-5'
          }`}
      >
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link href='/' className='relative h-8 w-auto flex-shrink-0'>
              <Image
                src={stelarLogo}
                alt="Stelarea"
                className='h-8 w-auto'
                width={120}
                height={32}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center gap-8'>
              {HeaderNavData.map((nav) => {
                const isActive = pathname === nav.url
                return (
                  <Link
                    key={nav.id}
                    href={nav.url}
                    className={`text-sm font-medium transition-colors duration-200 ${isActive
                      ? 'text-primary'
                      : 'text-text-secondary hover:text-text'
                      }`}
                  >
                    {nav.label}
                  </Link>
                )
              })}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className='flex items-center gap-4'>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all duration-200 bg-primary hover:bg-primary-hover rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
              >
                Start Project
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='md:hidden p-2 text-text-secondary hover:text-text transition-colors'
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '0', paddingTop: '80px' }} // Full height, padding for header
      >
        {/* Close button inside overlay as well for better UX */}
        <div className="absolute top-5 right-4">
          {/* Same position as header toggle roughly */}
        </div>

        <nav className='flex flex-col items-center justify-start h-full gap-8 px-6'>
          {HeaderNavData.map((nav) => {
            const isActive = pathname === nav.url
            return (
              <Link
                key={nav.id}
                href={nav.url}
                className={`text-2xl font-semibold transition-colors ${isActive ? 'text-primary' : 'text-text-secondary hover:text-text'
                  }`}
              >
                {nav.label}
              </Link>
            )
          })}
          <PrimaryButton
            label="Start Project"
            link="/contact"
            fullWidth
            className="mt-4"
          />
        </nav>
      </div>
    </>
  )
}

export default Header