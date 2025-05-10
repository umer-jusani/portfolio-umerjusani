import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log('✅ Middleware triggered:', request.nextUrl.pathname);
    return NextResponse.redirect(new URL('/dashboard/home', request.url));
}

export const config = {
    matcher: ['/:path*'],
};