'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Globe, Check } from 'lucide-react'

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'id', label: 'Indonesia' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as 'en' | 'id')
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${language === lang.code ? 'text-primary font-medium' : 'text-gray-600'
                }`}
            >
              {lang.label}
              {language === lang.code && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-200 text-sm font-medium ${isOpen
          ? 'bg-gray-200 border-gray-300'
          : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
          }`}
        title="Change Language"
      >
        <Globe className="w-5 h-5 text-gray-500" />
        <span className="text-gray-500 uppercase">{language}</span>
      </button>
    </div>
  )
}

export default LanguageSwitcher