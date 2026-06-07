fetch("http://localhost:5000/api/payments/create-order", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ coupon: "promo489" })
}).then(res => res.json()).then(console.log).catch(console.error);
