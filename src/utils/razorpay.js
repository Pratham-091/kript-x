export const handleRazorpayCheckout = async (navigate) => {
  try {
    // 1. Create order on backend
    const res = await fetch('/api/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (!res.ok) {
      throw new Error("Order creation failed");
    }

    const order = await res.json();

    // 2. Open Razorpay Modal
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Kript-X",
      description: "Kript-X Claude Skills Bundle",
      image: "/logo.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response){
        // 3. Verify Payment Signature on backend
        try {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          if (verifyRes.ok) {
            // Payment successful, redirect to success page
            navigate(`/success?razorpay_payment_id=${response.razorpay_payment_id}`);
          } else {
            alert("Payment verification failed! Please contact support.");
          }
        } catch (err) {
          console.error(err);
          alert("Error verifying payment.");
        }
      },
      prefill: {
        name: "Valued Customer",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#22c55e"
      }
    };

    const rzp1 = new window.Razorpay(options);
    
    rzp1.on('payment.failed', function (response){
      console.error(response.error);
      alert("Payment failed: " + response.error.description);
    });

    rzp1.open();
  } catch (err) {
    console.error("Error during checkout:", err);
    alert("Could not initialize checkout. Please try again later.");
  }
};
