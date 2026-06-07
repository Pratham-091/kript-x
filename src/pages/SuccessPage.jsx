import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/endpoints';

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const paymentId = searchParams.get('razorpay_payment_id');
  
  const subject = encodeURIComponent("Missing Product Delivery");
  const body = encodeURIComponent(`Name: \nEmail used for purchase: \nMode of Payment (UPI/Card/Netbanking): \nTransaction ID: ${paymentId || "Unknown"}\n\nPlease help me get my product!`);
  const supportMailto = `mailto:supportkriptx.com@gmail.com?subject=${subject}&body=${body}`;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('razorpay_payment_id');
    // Basic Security: Check if the user actually came from Razorpay.
    const hasPaymentToken = id || params.has('razorpay_payment_link_id');

    // Remove the NODE_ENV check if you want it to block you on localhost too. 
    if (!hasPaymentToken && import.meta.env.PROD) {
      navigate('/');
      return;
    }

    // 10-Minute Expiration Security Check
    if (id) {
      fetch(`${API_ENDPOINTS.CHECK_PAYMENT}?paymentId=${id}`)
        .then(res => res.json())
        .then(data => {
          if (data.expired) {
            alert("This download link has expired (10 minute limit). Please contact support.");
            navigate('/');
          }
        })
        .catch(error => console.error("Could not verify payment age", error));
    }
  }, [location.search, navigate]);

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
          
          {/* Missing Product Support Section */}
          <div style={{ 
            background: 'var(--bg-slate-800)', 
            border: '1px dashed rgba(255, 255, 255, 0.1)',
            padding: '24px', 
            borderRadius: '16px',
            textAlign: 'left'
          }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text-light)' }}>
              Unable to download?
            </h4>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', marginBottom: '16px', lineHeight: 1.5 }}>
              If you didn't receive your product or the download failed, click the button below to send an automated request to our support team.
            </p>
            <a 
              href={supportMailto}
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-light)',
                padding: '10px 16px',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              Request Manual Delivery
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
