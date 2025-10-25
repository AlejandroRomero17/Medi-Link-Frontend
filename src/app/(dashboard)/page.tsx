import { redirect } from "next/navigation";
import { auth } from "@/features/auth/config/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // Redirigir según el rol del usuario
  const userRole = session.user.role || "user";
  
  if (userRole === "doctor") {
    redirect("/doctor");
  } else {
    redirect("/user");
  }
}