import {
  DoctorHeader,
  AlertsSection,
  AppointmentsSection,
  PatientsSection,
  TrendsSection,
  RecommendationsSection,
} from '@/features/dashboard-doctor/components';

export default function DoctorDashboardPage() {
  return (
    <div className='space-y-6 p-6'>
      <DoctorHeader />
      <div className='grid gap-6'>
        <AlertsSection />
        <div className='grid lg:grid-cols-2 gap-6'>
          <AppointmentsSection />
          <TrendsSection />
        </div>
        <PatientsSection />
        <RecommendationsSection />
      </div>
    </div>
  );
}
