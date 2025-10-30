"use client";

import { DoctorSearchSection } from "@/features/dashboard-user/components/doctor-search";
import { NearbyDoctorsMap } from "@/features/dashboard-user/components/nearby-doctors-map";
import { UpcomingAppointmentsSection } from "@/features/dashboard-user/components/upcoming-appointments";
import { SpecialtiesSection } from "@/features/dashboard-user/components/specialties";
import { QuickActionsSection } from "@/features/dashboard-user/components/quick-actions";

export default function UserDashboardPage() {
  return (
    <div className="space-y-6 p-6">
      {/* Buscador principal */}
      <DoctorSearchSection />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna principal - Mapa */}
        <div className="lg:col-span-2 space-y-6">
          <NearbyDoctorsMap />
          <SpecialtiesSection />
        </div>

        {/* Sidebar derecho */}
        <div className="space-y-6">
          <QuickActionsSection />
          <UpcomingAppointmentsSection />
        </div>
      </div>
    </div>
  );
}
