import Razorpay from 'razorpay';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_live_Sy6KpggI53KHnE",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "0pep7YBq0e4qqImU9IWIAopY",
});

export const createRazorpayOrder = async (coupon) => {
  let finalAmountPaise = 49900;

  if (coupon) {
    const cleanCoupon = coupon.trim().toUpperCase();
    if (cleanCoupon === "KRIPTX50") {
      finalAmountPaise = 24900;
    } else if (cleanCoupon === "PROMO100") {
      finalAmountPaise = 39900;
    } else if (cleanCoupon === "PROMO489") {
      finalAmountPaise = 100;
    }
  }

  const options = {
    amount: finalAmountPaise,
    currency: "INR",
    receipt: "receipt_order_" + Date.now(),
  };

  return await razorpay.orders.create(options);
};

export const verifySignature = (orderId, paymentId, signature) => {
  const secret = process.env.RAZORPAY_KEY_SECRET || "0pep7YBq0e4qqImU9IWIAopY";
  const sign = orderId + "|" + paymentId;
  
  const expectedSign = crypto
    .createHmac("sha256", secret)
    .update(sign.toString())
    .digest("hex");

  return signature === expectedSign;
};

export const getPaymentAge = async (paymentId) => {
  const payment = await razorpay.payments.fetch(paymentId);
  const paymentCreatedAt = payment.created_at * 1000;
  const currentTime = Date.now();
  const ageInMinutes = (currentTime - paymentCreatedAt) / (1000 * 60);
  return ageInMinutes;
};
