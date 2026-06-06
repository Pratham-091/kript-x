import Razorpay from 'razorpay';
import crypto from 'crypto';

export default async function handler(req, res) {
  console.log("=== CREATE ORDER API CALLED ===");
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    console.log("Initializing Razorpay instance...");
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("CRITICAL ERROR: Razorpay environment variables are missing!");
    }
    
    const razorpay = new Razorpay({
      key_id: "rzp_live_Sy6KpggI53KHnE",
      key_secret: "0pep7YBq0e4qqImU9IWIAopY",
    });
    
    // Process Coupon Code
    const { coupon } = req.body || {};
    let finalAmountPaise = 49900; // Base ₹499

    if (coupon) {
      const cleanCoupon = coupon.trim().toUpperCase();
      if (cleanCoupon === "KRIPTX50") {
        finalAmountPaise = 24900; // ₹249
        console.log("Coupon KRIPTX50 applied! New price: 24900");
      } else if (cleanCoupon === "PROMO100") {
        finalAmountPaise = 39900; // ₹399
        console.log("Coupon PROMO100 applied! New price: 39900");
      } else if (cleanCoupon === "PROMO489") {
        finalAmountPaise = 100; // ₹1
        console.log("Coupon PROMO489 applied! New price: 100");
      } else {
        console.log("Invalid coupon provided:", cleanCoupon);
      }
    }
    
    const options = {
      amount: finalAmountPaise,
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };
    console.log("Creating Razorpay order with options:", options);

    const order = await razorpay.orders.create(options);
    console.log("Razorpay API response:", order);

    if (!order) {
      console.error("Order creation failed: returned null or undefined");
      return res.status(500).json({ message: "Razorpay order creation failed" });
    }
    
    console.log("Order created successfully! Returning to client.");
    res.status(200).json(order);
  } catch (error) {
    console.error("Error inside create-order catch block:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
}
