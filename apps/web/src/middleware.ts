import { auth } from './auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isAuthenticated = !!req.auth;
  const rawRole = req.auth?.user?.role;
  const userRole = rawRole ? String(rawRole).toUpperCase() : undefined;

  // Public routes that don't require authentication
  const publicRoutes = ['/signin', '/signup', '/yellow-books', '/search'];
  const isPublicRoute =
    pathname === '/' || publicRoutes.some((route) => pathname.startsWith(route));

  // API auth routes are always public
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Allow access to public routes
  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users to signin
  if (!isAuthenticated) {
    const signInUrl = new URL('/signin', req.url);
    signInUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Protect superadmin routes - only SUPERADMIN role allowed
  if (pathname.startsWith('/editor')) {
    if (userRole !== 'SUPERADMIN') {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Protect business dashboard for admin roles only
  if (pathname.startsWith('/dashboard')) {
    if (userRole !== 'ADMIN' && userRole !== 'SUPERADMIN') {
      return NextResponse.redirect(new URL('/user/dashboard', req.url));
    }
  }

  // Ensure users land on user dashboard
  if (pathname.startsWith('/user/dashboard')) {
    if (!userRole || userRole === 'USER') {
      return NextResponse.next();
    }
    // admins can still reach their dashboard
  }

  return NextResponse.next();
});

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
