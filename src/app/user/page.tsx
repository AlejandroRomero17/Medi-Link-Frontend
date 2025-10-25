import { HealthSummarySection } from "@/features/dashboard-user/components/health-summary";
import { AlertsSection } from "@/features/dashboard-user/components/alerts";
import { RecommendationsSection } from "@/features/dashboard-user/components/recommendations";
import { WeeklyProgressSection } from "@/features/dashboard-user/components/weekly-progress";

export default function UserDashboardPage() {
  return (
    <div className="space-y-6 w-full">
      <HealthSummarySection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <AlertsSection />
        <RecommendationsSection />
      </div>

      <WeeklyProgressSection />
    </div>
  );
}
