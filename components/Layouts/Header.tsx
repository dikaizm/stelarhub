'use client'

import Image from 'next/image'
import React from 'react'
import { RiRocket2Fill } from 'react-icons/ri'

import stelarLogo from '@/assets/logo/stelar.svg'
import { HeaderNavData } from './store/header'
import PrimaryButton from '@/components/Buttons/PrimaryButton'
import { usePathname } from 'next/navigation'

const Header = () => {
  return (
    <header className='mx-auto fixed top-0 inset-0 z-50 bg-dark h-fit'>
      <div className='flex items-center justify-between gap-4 py-5 container'>
        <a href='/' className='h-8 w-auto'>
          <Image className='w-full h-full bg-contain' src={stelarLogo} alt="logo" />
        </a>
        <HeaderNav />
        <PrimaryButton
          label='Buat Website'
          link='https://wa.me/6285600809354'
          icon={<RiRocket2Fill className='w-6 h-6 rotate-45' />}
          iconPosition='right'
        />
      </div>
    </header>
  )
}

const HeaderNav = () => {
  const pathname = usePathname()

  return (
    <nav className='hidden md:block'>
      <ul className='flex gap-10 items-center font-semibold'>
        {HeaderNavData && HeaderNavData.map((nav) => {
          const isActive = pathname === nav.url

          return (
            <li key={nav.id}><a className={`whitespace-nowrap transition-all duration-300 hover:drop-shadow-glow ${(isActive && "text-primary-light drop-shadow-glow")}`} href={nav.url}>{nav.label}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Header