"use client";

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { LoginForm, AuthHeader, AuthFooter } from '@/features/auth/components';
import { toast } from '@/hooks/use-toast';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (email: string, password: string) => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast({
          title: "Error",
          description: "Credenciales inválidas",
          variant: "destructive",
        });
        return;
      }

      // Redirigir al dashboard después del login exitoso
      router.push('/dashboard');
      router.refresh();
    } catch {
      toast({
        title: "Error",
        description: "Ocurrió un error al iniciar sesión",
        variant: "destructive",
      });
    }
  };

  const handleForgotPassword = () => {
    router.push('/forgot-password');
  };

  return (
    <div className='space-y-6'>
      <AuthHeader />
      <LoginForm 
        onSubmit={handleSubmit}
        onForgotPassword={handleForgotPassword}
      />
      <AuthFooter />
    </div>
  );
}