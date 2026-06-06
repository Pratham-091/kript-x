import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-offwhite)', padding: '60px 20px', color: 'var(--text-dark)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', marginBottom: '24px', display: 'inline-block' }}>&larr; Back to Home</Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>We collect information you provide directly to us, such as when you make a purchase, request customer support, or otherwise communicate with us. This includes your name, email address, and payment information.</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>We use the information we collect to provide, maintain, and improve our services, process transactions, and send you related information including confirmations and receipts.</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>3. Information Sharing</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>We do not share your personal information with third parties except as necessary to process your payments (e.g., Razorpay) or as required by law.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>4. Contact Us</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>If you have any questions about this Privacy Policy, please contact us at supportkriptx.com@gmail.com.</p>
      </div>
    </div>
  );
}
