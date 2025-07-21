"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthHeader } from "./components/AuthHeader";
import { LoginForm } from "./components/LoginForm";
import { SocialAuthButtons } from "./components/SocialAuthButtons";
import { RegisterLink } from "./components/RegisterLink";
import { SecurityBadge } from "./components/SecurityBadge";
import { AuthFooter } from "./components/AuthFooter";

export default function LoginPage() {
  const handleSubmit = (
    email: string,
    password: string,
    rememberMe: boolean
  ) => {
    console.log("Datos enviados:", {
      email,
      password,
      rememberMe,
    });
    // Aquí irá la llamada a tu API cuando la implementes
  };

  const handleGoogleLogin = () => {
    console.log("Iniciando sesión con Google");
    // Lógica de autenticación con Google
  };

  const handleForgotPassword = () => {
    console.log("Redirigiendo a recuperación de contraseña");
    // router.push('/forgot-password');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <AuthHeader />

        <Card className="border-gray-200 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl text-center text-gray-900">
              Bienvenido de vuelta
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Inicia sesión para continuar monitoreando tu salud y previniendo
              enfermedades crónicas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm
              onSubmit={handleSubmit}
              onForgotPassword={handleForgotPassword}
            />
            <SocialAuthButtons onGoogleLogin={handleGoogleLogin} />
            <RegisterLink />
          </CardContent>
        </Card>

        <SecurityBadge />
        <AuthFooter />
      </div>
    </div>
  );
}
