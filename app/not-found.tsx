'use client'

import Link from 'next/link';
import { Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen w-full bg-[#10131A] flex flex-col items-center justify-center py-24 px-4">
      <div className="flex flex-col items-center max-w-lg text-center">
        <div className="bg-primary/10 text-primary rounded-full p-6 mb-6">
          <Bot className="w-16 h-16" />
        </div>
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">{t('notFound.title')}</h1>
        <p className="text-gray-300 text-lg mb-8">{t('notFound.description')}</p>
        <Link href="/" className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg text-base shadow transition">
          {t('notFound.backHome')}
        </Link>
      </div>
    </main>
  );
}