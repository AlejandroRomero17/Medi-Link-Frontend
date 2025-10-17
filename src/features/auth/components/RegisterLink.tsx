export const RegisterLink = () => (
  <div className="mt-8 text-center">
    <p className="text-sm text-gray-600">
      ¿No tienes una cuenta?{" "}
      <a
        href="/auth/register"
        className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
      >
        Regístrate aquí
      </a>
    </p>
  </div>
);
