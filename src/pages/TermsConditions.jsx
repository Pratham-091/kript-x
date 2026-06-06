import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-offwhite)', padding: '60px 20px', color: 'var(--text-dark)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <Link to="/" style={{ color: 'var(--accent-blue)', textDecoration: 'none', fontWeight: '600', marginBottom: '24px', display: 'inline-block' }}>&larr; Back to Home</Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Terms & Conditions</h1>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>By accessing and purchasing products from Kript-X, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>2. Digital Products</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>All products are digital downloads. Upon successful payment, you will receive access to the digital files. Due to the nature of digital products, all sales are final and non-refundable once accessed.</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>3. Limitation of Liability</h2>
        <div style={{ background: 'var(--bg-slate-50)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--accent-red-500)', marginBottom: '16px' }}>
          <p style={{ lineHeight: '1.6', fontWeight: '700', color: 'var(--text-dark)', margin: 0 }}>
            Kript-X provides AI skill files, prompts, and templates "as is" and without warranty of any kind. Under no circumstances shall Kript-X or its creators be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our products. We are not responsible for any outcomes, business losses, missed expectations, or legal liabilities that may occur as a result of implementing our resources. You assume all risks associated with using our products.
          </p>
        </div>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>4. Intellectual Property</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>The content provided is for your personal or business use. You may not resell, redistribute, or publicly share the files provided in the bundle.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>5. Contact Us</h2>
        <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>If you have any questions regarding these terms, please contact us at supportkriptx.com@gmail.com.</p>
      </div>
    </div>
  );
}
