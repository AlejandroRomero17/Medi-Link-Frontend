import { HealthSummarySection } from "./components/health-summary";
import { AlertsSection } from "./components/alerts";
import { RecommendationsSection } from "./components/recommendations";
import { WeeklyProgressSection } from "./components/weekly-progress";

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
