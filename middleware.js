import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("middleware executed.")
    return NextResponse.redirect(new URL('/dashboard/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/',
}