'use client'

import React from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'id' ? 'en' : 'id'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors duration-200 text-sm font-medium"
      title={`Switch to ${language === 'id' ? 'English' : 'Indonesia'}`}
    >
      <Globe className="w-5 h-5 text-gray-300" />
      <span className="text-white">{language === 'id' ? 'ID' : 'EN'}</span>
    </button>
  )
}

export default LanguageSwitcher