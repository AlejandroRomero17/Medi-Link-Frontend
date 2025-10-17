// src/app/providers.tsx
"use client";

import { ReactNode } from "react";
import { AuthProvider, QueryProvider } from "@/providers";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
}
