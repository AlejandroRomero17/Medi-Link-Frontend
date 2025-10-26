// src/middleware.ts
import { auth } from "@/features/auth/config/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const session = req.auth;
  const isAuth = !!session;
  const isUserDashboard = req.nextUrl.pathname.startsWith("/user");
  const isDoctorDashboard = req.nextUrl.pathname.startsWith("/doctor");
  const isDashboard = isUserDashboard || isDoctorDashboard;

  // Proteger dashboards - redirigir a login si no está autenticado
  if (isDashboard && !isAuth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Control de roles - solo si está autenticado
  if (isAuth && isDashboard) {
    const userRole = session?.user?.role;

    // Si es doctor pero intenta acceder a /user
    if (isUserDashboard && userRole === "doctor") {
      return NextResponse.redirect(new URL("/doctor", req.url));
    }

    // Si es user pero intenta acceder a /doctor
    if (isDoctorDashboard && userRole === "user") {
      return NextResponse.redirect(new URL("/user", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/user/:path*", "/doctor/:path*"],
};
