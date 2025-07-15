import { PatientsSection } from "./components/patients/patients-section";
import { AlertsSection } from "./components/alerts/alerts-section";
import { RecommendationsSection } from "./components/recommendations/recommendations-section";
import { AppointmentsSection } from "./components/appointments/appointments-section";
import { TrendsSection } from "./components/trends/trends-section";

export default function DoctorDashboardPage() {
  return (
    <>
      <PatientsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsSection />
        <RecommendationsSection />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AppointmentsSection />
        <TrendsSection />
      </div>
    </>
  );
}
