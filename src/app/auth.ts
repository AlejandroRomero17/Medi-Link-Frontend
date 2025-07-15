// auth.ts (mock)
export async function auth() {
  return {
    user: { name: "Usuario Demo", email: "demo@example.com" },
    expires: "9999-01-01",
  };
}
