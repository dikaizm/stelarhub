'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'
import enData from '@/data/en.json'
import idData from '@/data/id.json'
import { Language } from '@/lib/translations'

const dictionaries = {
    id: idData,
    en: enData
}

interface FooterWrapperProps {
    lang?: Language
}

export default function FooterWrapper({ lang: propLang }: FooterWrapperProps) {
    const pathname = usePathname()

    // Extract language from pathname or use prop
    const segments = pathname.split('/').filter(Boolean)
    const pathLang = (segments[0] === 'en' || segments[0] === 'id') ? segments[0] as Language : undefined
    const currentLang: Language = propLang || pathLang || 'en'

    const dict = dictionaries[currentLang]

    return <Footer dict={dict} />
}

