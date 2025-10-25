// ============================================
// 1. src/app/api/auth/[...nextauth]/route.ts
// ============================================
import { handlers } from "@/features/auth/config/auth";

export const { GET, POST } = handlers;

// ============================================
// 2. src/middleware.ts
// ============================================
import { auth } from '@/features/auth/config/auth';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const session = req.auth;
  const isAuth = !!session;
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
    if (session?.user?.role !== 'doctor') {
      return NextResponse.redirect(new URL('/dashboard/user', req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith('/dashboard/user')) {
    if (session?.user?.role !== 'user') {
      return NextResponse.redirect(new URL('/dashboard/doctor', req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};