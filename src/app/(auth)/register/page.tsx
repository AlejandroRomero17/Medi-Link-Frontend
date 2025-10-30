// // src\app\(auth)\register\page.tsx

// "use client";

// import { AuthHeader } from "@/features/auth/components/AuthHeader";
// import { RegisterForm } from "@/features/auth/components/RegisterForm";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const router = useRouter();

//   const handleRegister = async (data: {
//     name: string;
//     email: string;
//     password: string;
//   }) => {
//     try {
//       // Aquí irá tu lógica de registro
//       console.log("Registro:", data);

//       // Simular registro exitoso
//       router.push("/login");
//     } catch (error) {
//       console.error("Error en registro:", error);
//     }
//   };

//   return (
//     <div className="space-y-6 w-full">
//         <AuthHeader />
//        <div className="flex justify-center w-full">
//         <RegisterForm onSubmit={handleRegister} />
//       </div>
//     </div>
//   );
// }





// src/app/(auth)/register/page.tsx
"use client";

import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { RegisterForm } from "@/features/auth/components/RegisterForm";
import { useAuth } from "@/hooks/use-auth";

export default function RegisterPage() {
  const { registerPatient, isRegisteringPatient } = useAuth();

  const handleRegister = (data: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: string;
  }) => {
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
