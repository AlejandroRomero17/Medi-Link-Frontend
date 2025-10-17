export const AuthFooter = () => (
  <div className="mt-8 text-center">
    <p className="text-xs text-gray-500">
      Al iniciar sesión, aceptas nuestros{" "}
      <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">
        Términos de Servicio
      </a>{" "}
      y{" "}
      <a
        href="/privacy"
        className="text-blue-600 hover:text-blue-700 underline"
      >
        Política de Privacidad
      </a>
    </p>
  </div>
);
