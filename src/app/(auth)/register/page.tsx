// src/app/(auth)/register/page.tsx
"use client";

import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { useAuth } from "@/hooks/use-auth";
import type { RegisterSubmitData } from "@/features/auth/components/RegisterForm/types";

export default function RegisterPage() {
  const { registerPatient, isRegisteringPatient } = useAuth();

  const handleRegister = (data: RegisterSubmitData) => {
    console.log("Datos recibidos en RegisterPage:", data);
    registerPatient(data);
  };

  return (
    <div className="space-y-6 w-full">
      <AuthHeader />
      <div className="flex justify-center w-full">
        <RegisterForm
          onSubmit={handleRegister}
          isLoading={isRegisteringPatient}
        />
      </div>
    </div>
  );
}
