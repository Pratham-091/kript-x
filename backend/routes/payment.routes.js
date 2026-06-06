import express from 'express';
import {
  createOrderHandler,
  verifyPaymentHandler,
  checkPaymentHandler
} from '../controllers/payment.controller.js';

const router = express.Router();

// POST /api/payments/create-order
router.post('/create-order', createOrderHandler);

// POST /api/payments/verify-payment
router.post('/verify-payment', verifyPaymentHandler);

// GET /api/payments/check-payment
router.get('/check-payment', checkPaymentHandler);

export default router;
