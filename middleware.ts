import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SUPPORTED_LANGUAGES = ['en', 'id'];
const DEFAULT_LANGUAGE = 'en';

/**
 * Get preferred language from request
 */
function getPreferredLanguage(request: NextRequest): string {
    // 1. Check for saved language preference in cookie
    const savedLang = request.cookies.get('language')?.value;
    if (savedLang && SUPPORTED_LANGUAGES.includes(savedLang)) {
        return savedLang;
    }

    // 2. Check query parameter
    const langParam = request.nextUrl.searchParams.get('lang');
    if (langParam && SUPPORTED_LANGUAGES.includes(langParam)) {
        return langParam;
    }

    // 3. Check browser Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
        const languages = acceptLanguage.split(',').map(lang => {
            const [code] = lang.trim().split(';');
            return code.split('-')[0].toLowerCase();
        });

        for (const lang of languages) {
            if (SUPPORTED_LANGUAGES.includes(lang)) {
                return lang;
            }
        }
    }

    return DEFAULT_LANGUAGE;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip middleware for static files and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/assets') ||
        pathname.includes('.') // Static files like .png, .ico, etc.
    ) {
        return NextResponse.next();
    }

    // Check if pathname already has a supported language prefix
    const pathnameHasLang = SUPPORTED_LANGUAGES.some(
        lang => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
    );

    if (pathnameHasLang) {
        const response = NextResponse.next();
        response.headers.set('x-pathname', pathname);
        return response;
    }

    // For paths without language prefix, rewrite to include the detected language
    const detectedLang = getPreferredLanguage(request);

    // Rewrite the URL to include the language (without redirect)
    const newUrl = new URL(`/${detectedLang}${pathname}`, request.url);
    newUrl.search = request.nextUrl.search;

    const response = NextResponse.rewrite(newUrl);
    response.headers.set('x-pathname', `/${detectedLang}${pathname}`);
    return response;
}

export const config = {
    matcher: [
        // Match all paths except static files
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
