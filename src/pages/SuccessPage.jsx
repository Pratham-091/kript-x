import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Basic Security: Check if the user actually came from Razorpay.
    const searchParams = new URLSearchParams(location.search);
    const paymentId = searchParams.get('razorpay_payment_id');
    const hasPaymentToken = paymentId || searchParams.has('razorpay_payment_link_id');

    // Remove the NODE_ENV check if you want it to block you on localhost too. 
    if (!hasPaymentToken && import.meta.env.PROD) {
      navigate('/');
      return;
    }

    // 10-Minute Expiration Security Check
    // If they have a payment ID, verify it's not older than 10 minutes
    if (paymentId) {
      fetch(`/api/check-payment/${paymentId}`)
        .then(res => res.json())
        .then(data => {
          if (data.expired) {
            alert("This download link has expired (10 minute limit). Please contact support.");
            navigate('/');
          }
        })
        .catch(err => console.error("Could not verify payment age"));
    }
  }, [location, navigate]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'var(--bg-slate-900)', 
      color: 'var(--text-light)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Simple Header */}
      <nav style={{ padding: '16px 40px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'center', height: '80px', alignItems: 'center', overflow: 'hidden' }}>
        <img src="/logo.png" alt="Kript-X Logo" style={{ height: '60px', transform: 'scale(3.8)', filter: 'invert(1) brightness(2)' }} />
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            maxWidth: '540px', 
            width: '100%',
            textAlign: 'center'
          }}
        >
          {/* Order Confirmed Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
            <CheckCircle2 size={32} color="var(--accent-green-500)" />
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '700', margin: 0, color: 'var(--text-light)' }}>
              Payment Successful
            </h1>
          </div>
          
          <div style={{ 
            background: 'var(--bg-slate-800)', 
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '40px', 
            borderRadius: '16px', 
            marginBottom: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px', textAlign: 'left', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '32px' }}>
              <img 
                src="/kriptx_bundle_box.png" 
                alt="Kript-X Bundle" 
                style={{ height: '100px', width: 'auto', borderRadius: '8px' }}
              />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '8px' }}>Kript-X Claude Skills Bundle</h3>
                <p style={{ color: 'var(--text-muted-light)', fontSize: '0.95rem', margin: 0 }}>Full Access • 2,000+ Files</p>
              </div>
            </div>

            <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginBottom: '24px', lineHeight: 1.6, textAlign: 'left' }}>
              Your order is confirmed and your resources are ready. Click the button below to download your bundle to your device.
            </p>

            {/* DOWNLOAD BUTTON */}
            <a 
              href="https://drive.google.com/uc?export=download&id=1170wgM28Jr3mxT5N6Hqcs0dv69zTRuca" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%', 
                fontSize: '1.1rem', 
                padding: '16px',
                background: 'var(--accent-green-600)',
                color: 'white',
                borderRadius: '12px',
                boxShadow: 'none',
                fontWeight: '600'
              }}
            >
              <Download size={20} />
              Download Complete Bundle
            </a>
          </div>
          
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted-light)', margin: '0 0 8px 0' }}>
            A receipt has been sent to your email address.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', margin: 0 }}>
            Didn't receive your product? Contact <a href="mailto:supportkriptx.com@gmail.com" style={{ color: 'var(--accent-green-500)', textDecoration: 'underline' }}>supportkriptx.com@gmail.com</a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}
