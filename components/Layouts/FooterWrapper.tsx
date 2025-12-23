'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Footer from './Footer'
import enData from '@/data/en.json'
import idData from '@/data/id.json'

const dictionaries = {
    id: idData,
    en: enData
}

export default function FooterWrapper() {
    const { language } = useLanguage()
    const dict = dictionaries[language]

    return <Footer dict={dict} />
}
