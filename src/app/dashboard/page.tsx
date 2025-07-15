import { redirect } from "next/navigation";
import { getCurrentUser } from "@/services/auth-service";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  // Actualiza las rutas según la nueva estructura
  redirect(user.role === "doctor" ? "/dashboard/doctor" : "/dashboard/user");
}
