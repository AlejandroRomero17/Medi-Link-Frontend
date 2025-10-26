// src/features/auth/config/auth.ts
import NextAuth, { type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Usuario de ejemplo - aquí deberías validar contra tu API
        return {
          id: "1",
          email: credentials.email as string,
          name: "User",
          role: "user", // IMPORTANTE: Agregar role aquí
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // IMPORTANTE: Agregar role al token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string; // IMPORTANTE: Agregar role a la sesión
      }
      return session;
    },
  },
  // CRÍTICO: Agregar el secret
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;

// Exportar handlers, auth, signIn, signOut
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
