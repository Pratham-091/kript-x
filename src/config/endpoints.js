const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || (import.meta.env.PROD ? 'https://kript-x.onrender.com' : 'http://localhost:5000');

export const API_ENDPOINTS = {
  CREATE_ORDER: `${BACKEND_URL}/api/payments/create-order`,
  VERIFY_PAYMENT: `${BACKEND_URL}/api/payments/verify-payment`,
  CHECK_PAYMENT: `${BACKEND_URL}/api/payments/check-payment`,
};
