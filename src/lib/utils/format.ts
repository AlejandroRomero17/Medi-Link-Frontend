export const formatDate = (date: Date | string) => {
  return new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(amount);
};

export const formatPhone = (phone: string) => {
  // Remove any non-digit characters first
  const digits = phone.replace(/\D/g, '');

  // Match Mexican 10-digit phone numbers: 2 + 4 + 4
  const match = digits.match(/^(\d{2})(\d{4})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  // Fallback: return the original input if it doesn't match expected pattern
  return phone;
};
