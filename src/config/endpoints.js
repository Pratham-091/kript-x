const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://kript-x.onrender.com';

export const API_ENDPOINTS = {
  CREATE_ORDER: `${BACKEND_URL}/api/payments/create-order`,
  VERIFY_PAYMENT: `${BACKEND_URL}/api/payments/verify-payment`,
  CHECK_PAYMENT: `${BACKEND_URL}/api/payments/check-payment`,
  HEALTH: `${BACKEND_URL}/api/health`,
};
