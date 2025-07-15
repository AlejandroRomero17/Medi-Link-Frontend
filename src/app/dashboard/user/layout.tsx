import { SidebarProvider } from "@/components/ui/sidebar";
import { UserSidebar } from "./components/sidebar";
import { UserHeader } from "./components/header";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background w-full">
        <UserSidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <UserHeader />
          <main className="flex-1 overflow-auto p-6 w-full">
            <div className="w-full space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
