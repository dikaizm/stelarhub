import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stories & Insights AI - Artikel Terbaru Teknologi AI",
  description: "Jelajahi kumpulan artikel, insight, dan case study terbaru tentang AI, machine learning, dan teknologi digital dari para ahli Stelarea.",
  keywords: [
    "AI stories",
    "artificial intelligence insights", 
    "teknologi AI",
    "machine learning artikel",
    "digital transformation",
    "AI case study",
    "bisnis AI",
    "inovasi teknologi",
    "Stelarea insights",
    "AI trends Indonesia"
  ],
  openGraph: {
    title: "Stories & Insights AI - Artikel Terbaru Teknologi AI | Stelarea",
    description: "Jelajahi kumpulan artikel, insight, dan case study terbaru tentang AI, machine learning, dan teknologi digital dari para ahli Stelarea.",
    type: "website",
    url: "https://stelarea.com/stories",
    images: [
      {
        url: "/og-stories.jpg",
        width: 1200,
        height: 630,
        alt: "Stelarea Stories - AI Insights & Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories & Insights AI - Artikel Terbaru Teknologi AI | Stelarea",
    description: "Jelajahi kumpulan artikel, insight, dan case study terbaru tentang AI, machine learning, dan teknologi digital dari para ahli Stelarea.",
    images: ["/og-stories.jpg"],
  },
  alternates: {
    canonical: "/stories",
  },
};

const stories = [
  {
    id: 1,
    hero: true,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'AI Revolutionizes Business: The Next Big Leap',
    description: 'Discover how artificial intelligence is transforming industries and driving innovation in companies worldwide.',
    category: 'AI News',
    date: 'May 25, 2025',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: '5 Ways AI Can Boost Your Company&#39;s Efficiency',
    category: 'Insight',
    date: 'May 20, 2025',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
    title: 'Case Study: AI in Agriculture',
    category: 'Case Study',
    date: 'May 18, 2025',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
    title: 'Event Recap: AI for Business Webinar',
    category: 'Event',
    date: 'May 15, 2025',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
    title: 'How to Start with AI in Your Company',
    category: 'AI News',
    date: 'May 10, 2025',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    title: 'AI Trends to Watch in 2025',
    category: 'Insight',
    date: 'May 8, 2025',
  },
];

const categories = ['All', 'AI News', 'Insight', 'Case Study', 'Event'];

export default function StoriesPage() {
  return (
    <main className="min-h-screen w-full bg-[#10131A] pb-16 pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
        <h1 className="text-white text-3xl sm:text-5xl font-bold mb-8">Stories</h1>
        {/* Filter Bar */}
        <div className="flex gap-6 items-center mb-10">
          {categories.map((cat) => (
            <button key={cat} className="text-gray-300 font-medium hover:text-primary focus:text-primary transition text-base pb-1 border-b-2 border-transparent focus:border-primary">{cat}</button>
          ))}
        </div>
        {/* Hero Card */}
        {stories[0] && (
          <Link href={`/stories/${stories[0].id}`} className="w-full rounded-2xl bg-[#1A2236] mb-12 overflow-hidden flex flex-col md:flex-row shadow-lg hover:ring-2 hover:ring-primary/60 focus:ring-2 focus:ring-primary/80 outline-none transition h-[24rem]">
            <div className="md:w-1/2 w-full aspect-[16/9] md:aspect-auto relative">
              <Image src={stories[0].image} alt={stories[0].title} fill className="object-cover w-full h-full" unoptimized />
            </div>
            <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
              <span className="inline-block bg-primary/10 text-primary w-fit text-xs font-semibold px-3 py-1 rounded-full mb-3">{stories[0].category}</span>
              <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">{stories[0].title}</h2>
              <p className="text-gray-300 text-base sm:text-lg mb-4">{stories[0].description}</p>
              <div className="text-gray-400 text-sm">{stories[0].date}</div>
            </div>
          </Link>
        )}
        {/* Stories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.slice(1).map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.id}`}
              className="rounded-2xl bg-[#1A2236] shadow-lg overflow-hidden flex flex-col transition hover:ring-2 hover:ring-primary/60 focus:ring-2 focus:ring-primary/80 outline-none"
            >
              <div className="w-full aspect-[3/2] relative">
                <Image src={story.image} alt={story.title} fill className="object-cover w-full h-full" unoptimized />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <span className="inline-block bg-primary/10 text-primary w-fit text-xs font-semibold px-3 py-1 rounded-full mb-2">{story.category}</span>
                <h3 className="text-white text-xl font-semibold mb-2">{story.title}</h3>
                <div className="text-gray-400 text-sm mt-auto">{story.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}