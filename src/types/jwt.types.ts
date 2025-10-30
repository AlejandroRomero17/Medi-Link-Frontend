// src/types/jwt.types.ts

/**
 * Representa el contenido (payload) del token JWT generado por FastAPI.
 */
export interface JWTPayload {
  user_id: number;
  email: string;
  tipo_usuario: string;
  exp: number; // Expiration timestamp (segundos UNIX)
  iat: number; // Issued-at timestamp (segundos UNIX)
}
