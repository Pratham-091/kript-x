import crypto from 'crypto';

export default function handler(req, res) {
  console.log("=== VERIFY PAYMENT API CALLED ===");
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    console.log("Received body:", req.body);
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      console.error("Missing required fields in verify-payment");
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("CRITICAL ERROR: RAZORPAY_KEY_SECRET environment variable is missing!");
    }

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    console.log("Constructed signature payload:", sign);

    const expectedSign = crypto
      .createHmac("sha256", "0pep7YBq0e4qqImU9IWIAopY")
      .update(sign.toString())
      .digest("hex");
      
    console.log("Expected Signature:", expectedSign);
    console.log("Received Signature:", razorpay_signature);

    if (razorpay_signature === expectedSign) {
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
}
