import { INSIGHTS } from '@/data/insights'

export interface InsightPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
    image?: string;
    author?: string;
}

export function getPostData(slug: string): InsightPost | null {
    const post = INSIGHTS.find(p => p.slug === slug)
    return post || null
}

export function getAllPosts(): InsightPost[] {
    // Sort posts by date (newest first)
    return [...INSIGHTS].sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}
