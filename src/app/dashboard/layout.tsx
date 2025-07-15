// import { AuthProvider } from "@/providers/auth-provider";
// import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex min-h-screen w-full">{children}</div>;
}
