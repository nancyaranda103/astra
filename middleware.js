// app/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const userSessionCookie = request.cookies.get('user'); // Or your cookie name
  const path = request.nextUrl.pathname;

  const protectedRoutes = [ '/dashboard',  '/stylin']; // Add your protected routes

  if (protectedRoutes.includes(path)) {
    if (!userSessionCookie) {
      console.log('Middleware: User not authenticated, redirecting...');
      return NextResponse.redirect(new URL('/sign-in', request.url));
    } else {
      console.log('Middleware: User authenticated.');
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [ '/dashboard', '/stylin'], // Add your protected routes
};