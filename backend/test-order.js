import { createRazorpayOrder } from './services/payment.service.js';

async function run() {
  try {
    const order = await createRazorpayOrder("promo489");
    console.log("Success:", order);
  } catch (error) {
    console.error("Failed:", error);
  }
}
run();
