import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith('/login') || 
                       req.nextUrl.pathname.startsWith('/register');
    const isDashboard = req.nextUrl.pathname.startsWith('/dashboard');

    // Redirigir a dashboard si ya está autenticado y va a auth
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // Redirigir a login si no está autenticado y va a dashboard
    if (isDashboard && !isAuth) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Control de roles
    if (req.nextUrl.pathname.startsWith('/dashboard/doctor')) {
      if (token?.role !== 'doctor') {
        return NextResponse.redirect(new URL('/dashboard/user', req.url));
      }
    }

    if (req.nextUrl.pathname.startsWith('/dashboard/user')) {
      if (token?.role !== 'user') {
        return NextResponse.redirect(new URL('/dashboard/doctor', req.url));
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
