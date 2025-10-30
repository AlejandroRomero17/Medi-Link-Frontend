/**
 * Tipos de respuesta genéricos
 */
export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
  success: boolean;
}

/**
 * Respuesta paginada
 */
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Error de API
 */
export interface ApiErrorResponse {
  detail: string | ValidationError[];
  statusCode?: number;
}

/**
 * Error de validación
 */
export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

/**
 * Estado de carga
 */
export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Opciones de filtro genéricas
 */
export interface FilterOptions {
  skip?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  search?: string;
}

/**
 * Opciones de selector
 */
export interface SelectOption<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
}

/**
 * Coordenadas geográficas
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Dirección
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  coordinates?: Coordinates;
}

/**
 * Rango de fechas
 */
export interface DateRange {
  start: Date;
  end: Date;
}

/**
 * Notificación toast
 */
export interface ToastNotification {
  id?: string;
  title: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  duration?: number;
}

/**
 * Estado de un modal genérico
 */
export interface ModalState<T = unknown> {
  isOpen: boolean;
  data?: T;
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * Tab item
 */
export interface TabItem {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  content: React.ReactNode;
  disabled?: boolean;
}

/**
 * Props comunes para componentes
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Props con loading state
 */
export interface WithLoadingProps {
  isLoading?: boolean;
  loadingText?: string;
}

/**
 * Props con error handling
 */
export interface WithErrorProps {
  error?: Error | string | null;
  onRetry?: () => void;
}
