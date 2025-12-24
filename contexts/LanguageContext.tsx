'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import enData from '@/data/en.json'
import idData from '@/data/id.json'

type Language = 'id' | 'en'
type TranslationKey = string

// Create a dictionary map
const dictionaries = {
  id: idData,
  en: enData
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: TranslationKey): string => {
    // Select the dictionary based on current language
    const currentDictionary = dictionaries[language]
    const translation = getNestedValue(currentDictionary, key)
    return translation || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}