import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Check } from 'lucide-react';

export default function OfferSection({ onOpenCheckout }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 22, minutes: 18, seconds: 9 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">
        <motion.div 
          className="card-padding-mobile"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            maxWidth: '600px', 
            margin: '0 auto', 
            padding: '60px',
            textAlign: 'center',
            background: 'var(--bg-slate-900)',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            borderTop: '8px solid var(--accent-red-500)'
          }}
        >
          <div style={{ marginBottom: '40px' }}>
            <span className="section-label-light" style={{ color: 'var(--accent-red-500)' }}>LIMITED DEAL — SAVE 85% TODAY</span>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', color: 'var(--text-light)', marginBottom: '32px' }}>
              <Clock size={20} color="var(--accent-red-500)" />
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700' }}>Offer expires in:</span>
              <span style={{ 
                fontFamily: 'monospace', 
                fontSize: '1.5rem', 
                color: 'var(--text-light)', 
                fontWeight: 'bold',
                background: 'var(--accent-red-600)',
                padding: '4px 12px',
                borderRadius: '8px'
              }}>
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            
            <div style={{ color: 'var(--text-muted-light)', fontSize: '1.5rem', textDecoration: 'line-through', marginBottom: '-10px', fontWeight: '700' }}>
              ₹3,999
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(3.5rem, 15vw, 5rem)', fontWeight: '800', lineHeight: 1, color: 'var(--text-light)', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              ₹499
            </div>
            <div style={{ color: 'var(--accent-green-500)', fontSize: '1rem', fontWeight: '700' }}>
              One-time purchase · Instant access · Yours to keep forever
            </div>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px', textAlign: 'left', listStyle: 'none' }}>
            {[
              "2,000+ Premium Resources",
              "Bonus Training Manual",
              "Instant Digital Delivery",
              "Zero Subscription Fees",
              "Compatible Everywhere"
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-light)' }}>
                <Check size={24} color="var(--accent-green-500)" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{item}</span>
              </li>
            ))}
          </ul>

          <button onClick={onOpenCheckout} className="btn-primary" style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '0 auto', cursor: 'pointer', border: 'none' }}>
            GET INSTANT ACCESS @ ₹499
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '32px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted-light)', fontWeight: '700' }}>
              ✓ Safe & Encrypted Checkout
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted-light)', fontWeight: '700' }}>
              ✓ Immediate Download
            </span>
          </div>
        </motion.div>
      </div>

      <div className="sticky-cta-mobile">
        <button onClick={onOpenCheckout} className="btn-primary" style={{ width: '100%', display: 'block', padding: '14px', cursor: 'pointer', border: 'none' }}>
          GET INSTANT ACCESS @ ₹499
        </button>
      </div>
    </section>
  );
}
