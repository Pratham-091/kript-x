import { API_ENDPOINTS } from '../config/endpoints';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export const handleRazorpayCheckout = async (navigate, customerData = {}) => {
  try {
    // 0. Load script dynamically
    const resScript = await loadRazorpayScript();
    if (!resScript) {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
      return;
    }

    // 1. Create order on backend
    const res = await fetch(API_ENDPOINTS.CREATE_ORDER, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ coupon: customerData.coupon || "" })
    });
    
    if (!res.ok) {
      throw new Error("Order creation failed");
    }

    const order = await res.json();

    // 2. Open Razorpay Modal
    const options = {
      key: "rzp_live_Sy6KpggI53KHnE",
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Kript-X",
      description: "Kript-X Claude Skills Bundle",
      image: "/logo.png",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response){
        // 3. Verify Payment Signature on backend
        try {
          const verifyRes = await fetch(API_ENDPOINTS.VERIFY_PAYMENT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })
          });

          if (verifyRes.ok) {
            // Meta Pixel: Pure Browser-Side Purchase Tracking
            if (window.fbq) {
              window.fbq('track', 'Purchase', {
                value: 499.00,
                currency: 'INR',
                content_name: 'Claude AI Skills Pro Bundle'
              });
            }

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
        name: customerData.name || "",
        email: customerData.email || "",
        contact: customerData.phone || ""
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
