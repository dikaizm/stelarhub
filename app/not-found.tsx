'use client'

import Link from 'next/link';
import { Bot } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { getDictionary, Language } from '@/lib/translations';

export default function NotFound() {
  const pathname = usePathname()

  // Extract language from pathname
  const segments = pathname.split('/').filter(Boolean)
  const lang: Language = (segments[0] === 'en' || segments[0] === 'id') ? segments[0] : 'en'
  const dict = getDictionary(lang)

  return (
    <main className="min-h-screen w-full bg-[#10131A] flex flex-col items-center justify-center py-24 px-4">
      <div className="flex flex-col items-center max-w-lg text-center">
        <div className="bg-primary/10 text-primary rounded-full p-6 mb-6">
          <Bot className="w-16 h-16" />
        </div>
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">{dict.notFound.title}</h1>
        <p className="text-gray-300 text-lg mb-8">{dict.notFound.description}</p>
        <Link href={`/${lang}`} className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-4 rounded-lg text-base shadow transition">
          {dict.notFound.backHome}
        </Link>
      </div>
    </main>
  );
}