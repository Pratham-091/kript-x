import {
  createRazorpayOrder,
  verifySignature,
  getPaymentAge
} from '../services/payment.service.js';

export const createOrderHandler = async (req, res) => {
  console.log("=== CREATE ORDER API CALLED ===");
  try {
    const { coupon } = req.body || {};
    
    const order = await createRazorpayOrder(coupon);
    
    console.log("Order created successfully:", order.id);
    res.status(200).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Error creating order" });
  }
};

export const verifyPaymentHandler = async (req, res) => {
  console.log("=== VERIFY PAYMENT API CALLED ===");
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.error("Missing required fields in verify-payment");
      return res.status(400).json({ message: "Missing required fields" });
    }

    const isValid = verifySignature(razorpay_order_id, razorpay_payment_id, razorpay_signature);

    if (isValid) {
      console.log("Signatures MATCH! Payment verified successfully.");
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      console.error("Signatures DO NOT MATCH!");
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    console.error("Error inside verify-payment catch block:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const checkPaymentHandler = async (req, res) => {
  console.log("=== CHECK PAYMENT API CALLED ===");
  try {
    const { paymentId } = req.query;
    
    if (!paymentId) {
      return res.status(400).json({ error: "paymentId is required" });
    }

    const ageInMinutes = await getPaymentAge(paymentId);
    console.log(`Payment age for ${paymentId}: ${ageInMinutes} minutes`);

    if (ageInMinutes > 10) {
      return res.json({ expired: true });
    }

    res.json({ expired: false });
  } catch (error) {
    console.error("Error checking payment:", error);
    res.status(500).json({ error: "Failed to check payment status" });
  }
};
