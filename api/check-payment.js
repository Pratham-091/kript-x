import Razorpay from 'razorpay';

export default async function handler(req, res) {
  console.log("=== CHECK PAYMENT API CALLED ===");
  if (req.method !== 'GET') return res.status(405).json({ message: 'Method Not Allowed' });

  try {
    console.log("Received query:", req.query);
    const { paymentId } = req.query;
    
    if (!paymentId) {
      console.error("Missing paymentId in query parameters");
      return res.status(400).json({ message: "Missing paymentId" });
    }

    console.log("Fetching payment details from Razorpay for ID:", paymentId);
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("CRITICAL ERROR: Razorpay environment variables are missing!");
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const payment = await razorpay.payments.fetch(paymentId);
    console.log("Razorpay fetch payment response:", payment);
    
    if (!payment) {
      console.error("Payment not found returned from Razorpay");
      return res.status(404).json({ message: "Payment not found" });
    }

    const now = Math.floor(Date.now() / 1000);
    const ageInSeconds = now - payment.created_at;
    console.log(`Payment created at: ${payment.created_at}, Current time: ${now}, Age: ${ageInSeconds} seconds`);

    if (ageInSeconds > 600) { 
      console.log("Payment link EXPIRED (older than 10 minutes)");
      return res.status(200).json({ expired: true });
    }

    console.log("Payment link VALID (under 10 minutes)");
    return res.status(200).json({ expired: false });
  } catch (error) {
    console.error("Error inside check-payment catch block:", error);
    res.status(500).json({ message: "Server error" });
  }
}
