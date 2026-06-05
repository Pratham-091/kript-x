import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    const { paymentId } = req.query;
    
    if (!paymentId) return res.status(400).json({ message: "Missing paymentId" });

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const payment = await razorpay.payments.fetch(paymentId);
    
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    const now = Math.floor(Date.now() / 1000);
    const ageInSeconds = now - payment.created_at;

    if (ageInSeconds > 600) { 
      return res.status(200).json({ expired: true });
    }

    return res.status(200).json({ expired: false });
  } catch (error) {
    console.error("Error checking payment:", error);
    res.status(500).json({ message: "Server error" });
  }
}
