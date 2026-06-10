import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { handleRazorpayCheckout } from '../utils/razorpay';

export default function CheckoutModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coupon: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);



  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        value: 499.00,
        currency: 'INR',
        content_name: 'Claude AI Skills Pro Bundle'
      });
    }

    await handleRazorpayCheckout(navigate, formData);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          style={{
            background: 'var(--bg-slate-900)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '480px',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
        >
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted-light)'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-light)', marginBottom: '8px', fontWeight: '800' }}>Complete Your Order</h2>
            <p style={{ color: 'var(--text-muted-light)', fontSize: '0.95rem' }}>Enter your details to get instant access</p>
          </div>

          <div style={{ 
            padding: '12px', 
            background: 'rgba(234, 179, 8, 0.1)', 
            border: '1px dashed var(--accent-yellow-400)', 
            borderRadius: '8px', 
            color: 'var(--accent-yellow-400)', 
            textAlign: 'center', 
            marginBottom: '24px', 
            fontSize: '0.9rem', 
            fontWeight: '600' 
          }}>
            🎉 Special Offer: Use coupon <span style={{ background: 'var(--accent-yellow-400)', color: '#000', padding: '2px 6px', borderRadius: '4px', margin: '0 4px', whiteSpace: 'nowrap' }}>KRIPT-X 20</span> for ₹100 OFF!
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', color: 'var(--text-muted-light)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: '500' }}>Full Name *</label>
              <input 
                required
                type="text" 
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(0,0,0,0.2)',
                  color: 'var(--text-light)',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', color: 'var(--text-muted-light)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: '500' }}>Email Address *</label>
              <input 
                required
                type="email" 
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(0,0,0,0.2)',
                  color: 'var(--text-light)',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>



            <div>
              <label style={{ display: 'block', color: 'var(--text-muted-light)', fontSize: '0.85rem', marginBottom: '6px', fontWeight: '500' }}>Discount Code (Optional)</label>
              <input 
                type="text" 
                name="coupon"
                placeholder="PROMO CODE"
                value={formData.coupon}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(0,0,0,0.2)',
                  color: 'var(--accent-yellow-400)',
                  fontSize: '1rem',
                  outline: 'none',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary" 
              style={{ 
                marginTop: '16px', 
                width: '100%', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '8px',
                border: 'none',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              <Lock size={18} />
              {isSubmitting ? 'Processing...' : 'Proceed to Secure Payment'}
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
              <CheckCircle2 size={16} color="var(--accent-green-500)" />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted-light)' }}>256-bit Encrypted Checkout</span>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
