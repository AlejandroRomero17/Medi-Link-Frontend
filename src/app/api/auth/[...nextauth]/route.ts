// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";

const handler = NextAuth({
  providers: [], // Sin proveedores configurados
});

export { handler as GET, handler as POST };
