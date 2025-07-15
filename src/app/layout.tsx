import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import AOSInitializer from "@/components/shared/AOSInitializer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Predict Health",
  description: "Aplicación de monitoreo de salud",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  document.documentElement.classList.add('${GeistSans.variable}', '${GeistMono.variable}');

                  var savedTheme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

                  document.documentElement.classList.toggle('dark', theme === 'dark');
                  document.body.className = theme === 'dark'
                    ? 'dark:bg-background dark:text-foreground'
                    : 'bg-background text-foreground';
                } catch (e) {
                  document.documentElement.classList.add('${GeistSans.variable}', '${GeistMono.variable}');
                  document.body.className = 'bg-background text-foreground';
                }
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
        {children}
        <AOSInitializer /> {/* 👈 Aquí va el inicializador */}
        </Providers>
      </body>
    </html>
  );
}
