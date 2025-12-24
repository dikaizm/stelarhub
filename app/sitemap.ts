import { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/caseStudies'
import { getAllPosts } from '@/lib/insights'

// Force dynamic rendering to work with dynamic content
export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://stelarea.com'

    // Fetch dynamic case study pages
    let caseStudyPages: MetadataRoute.Sitemap = []
    try {
        caseStudyPages = caseStudies.flatMap((study) => [
            {
                url: `${baseUrl}/en/case-studies/${study.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            },
            {
                url: `${baseUrl}/id/case-studies/${study.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: 0.8,
            },
        ])
    } catch (error) {
        console.error('Error fetching case studies for sitemap:', error)
    }

    // Fetch dynamic insight pages (English)
    let insightPagesEn: MetadataRoute.Sitemap = []
    try {
        const insightsEn = await getAllPosts('en')
        insightPagesEn = insightsEn.map((insight) => ({
            url: `${baseUrl}/en/insights/${insight.slug}`,
            lastModified: new Date(insight.date),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    } catch (error) {
        console.error('Error fetching English insights for sitemap:', error)
    }

    // Fetch dynamic insight pages (Indonesian)
    let insightPagesId: MetadataRoute.Sitemap = []
    try {
        const insightsId = await getAllPosts('id')
        insightPagesId = insightsId.map((insight) => ({
            url: `${baseUrl}/id/insights/${insight.slug}`,
            lastModified: new Date(insight.date),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    } catch (error) {
        console.error('Error fetching Indonesian insights for sitemap:', error)
    }

    // Define static pages for both languages
    const staticPages: MetadataRoute.Sitemap = [
        // Root redirects to /en by default
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        // English pages
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/en/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/en/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/en/case-studies`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/en/insights`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/en/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        // Indonesian pages
        {
            url: `${baseUrl}/id`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/id/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/id/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/id/case-studies`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/id/insights`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/id/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ]

    // Combine all pages
    return [...staticPages, ...caseStudyPages, ...insightPagesEn, ...insightPagesId]
}
