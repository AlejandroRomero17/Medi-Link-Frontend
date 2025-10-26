"use client";

import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { ProfessionalRegisterForm } from "@/features/auth/components/ProfessionalRegisterForm";
import { useRouter } from "next/navigation";

export default function ProfessionalRegisterPage() {
  const router = useRouter();

  const handleRegister = async (data: {
    name: string;
    email: string;
    password: string;
    specialty: string;
    license: string;
  }) => {
    try {
      console.log("Registro profesional:", data);
      router.push("/login");
    } catch (error) {
      console.error("Error en registro:", error);
    }
  };

  return (
    <div className="space-y-6 w-full">
        <AuthHeader />
      <div className="flex justify-center w-full">
        <ProfessionalRegisterForm onSubmit={handleRegister} />
      </div>
    </div>
  );
}
