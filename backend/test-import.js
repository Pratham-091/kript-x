import Razorpay from 'razorpay';
console.log("Type:", typeof Razorpay);
try {
  new Razorpay({ key_id: "test", key_secret: "test" });
  console.log("Success!");
} catch (e) {
  console.error("Error:", e.message);
}
