import { SidebarProvider } from "@/components/ui/sidebar";
import { DoctorSidebar } from "./components/sidebar/doctor-sidebar";
import { DoctorHeader } from "./components/header/doctor-header";

export default function DoctorDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background w-full">
        <DoctorSidebar />
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          <DoctorHeader />
          <main className="flex-1 overflow-auto p-6 w-full">
            <div className="w-full space-y-6">{children}</div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
