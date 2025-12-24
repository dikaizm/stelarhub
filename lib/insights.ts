'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

const CONTENT_DIR = path.join(process.cwd(), 'content/insights')

export async function getAllPosts(lang: 'en' | 'id' = 'en'): Promise<InsightPost[]> {
    const langDir = path.join(CONTENT_DIR, lang)

    // Ensure directory exists
    if (!fs.existsSync(langDir)) {
        return []
    }

    const files = fs.readdirSync(langDir)

    const posts = files
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const filePath = path.join(langDir, file)
            const fileContent = fs.readFileSync(filePath, 'utf8')
            const { data, content } = matter(fileContent)
            const slug = file.replace('.md', '')

            return {
                slug,
                title: data.title,
                date: data.date,
                category: data.category,
                excerpt: data.excerpt,
                image: data.image,
                author: data.author,
                content: content
            } as InsightPost
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1))

    return posts
}

export async function getPostData(slug: string, lang: 'en' | 'id' = 'en'): Promise<InsightPost | null> {
    const fullPath = path.join(CONTENT_DIR, lang, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
        return null
    }

    const fileContent = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContent)

    return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        excerpt: data.excerpt,
        image: data.image,
        author: data.author,
        content: content
    } as InsightPost
}
