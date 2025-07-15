type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "doctor";
};

// Mock data - elimina esto cuando tengas API real
const MOCK_USER: User = {
  id: "1",
  name: "Alejandro Romero",
  email: "john@example.com",
  role: "user", // Cambia a 'doctor' para probar el rol médico
};

export async function getCurrentUser(): Promise<User | null> {
  // En producción, aquí iría la llamada real a tu API
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USER), 500); // Simula delay de red
  });
}
