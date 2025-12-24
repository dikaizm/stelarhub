import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { lang: string } }
) {
    const lang = params.lang || 'en'

    const manifest = {
        name: lang === 'id' ? 'Stelarea - Solusi AI & Teknologi' : 'Stelarea - AI & Technology Solutions',
        short_name: 'Stelarea',
        description:
            lang === 'id'
                ? 'Platform teknologi AI terdepan untuk transformasi bisnis digital'
                : 'Leading AI technology platform for digital business transformation',
        start_url: `/${lang}`,
        display: 'browser',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        icons: [
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
        categories: ['business', 'productivity', 'technology'],
        lang: lang,
        dir: 'ltr',
    }

    return NextResponse.json(manifest, {
        headers: {
            'Content-Type': 'application/manifest+json',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        },
    })
}
