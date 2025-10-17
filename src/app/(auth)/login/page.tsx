import { LoginForm, AuthHeader, AuthFooter } from '@/features/auth/components';

export default function LoginPage() {
  return (
    <div className='space-y-6'>
      <AuthHeader />
      <LoginForm />
      <AuthFooter />
    </div>
  );
}
