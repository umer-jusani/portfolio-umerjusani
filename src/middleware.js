import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // ✅ Redirect only if user is on "/"
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard/home', request.url));
    }

    // ✅ Continue normally for all other routes
    // return NextResponse.next();
}

export const config = {
    matcher: ['/:path*'],
};