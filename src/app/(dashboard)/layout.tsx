import { redirect } from 'next/navigation';
import { auth } from '@/features/auth/config/auth';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen">
      {children}
    </div>
  );
}