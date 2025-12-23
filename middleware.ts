import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if language cookie exists
    const language = request.cookies.get('language');

    // If no language cookie is set, set default to 'id'
    if (!language) {
        const response = NextResponse.next();
        response.cookies.set('language', 'id', {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
        });
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
