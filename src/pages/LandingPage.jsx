import React, { useState, Suspense, lazy } from 'react';
import Hero from '../components/Hero';

// Lazy load below-the-fold components
const Comparison = lazy(() => import('../components/Comparison'));
const Steps = lazy(() => import('../components/Steps'));
const CategoryGrid = lazy(() => import('../components/CategoryGrid'));
const Features = lazy(() => import('../components/Features'));
const PowerPrompts = lazy(() => import('../components/PowerPrompts'));
const BundleIncludes = lazy(() => import('../components/BundleIncludes'));
const Marquee = lazy(() => import('../components/Marquee'));
const SocialProof = lazy(() => import('../components/SocialProof'));
const OfferSection = lazy(() => import('../components/OfferSection'));
const FAQ = lazy(() => import('../components/FAQ'));
const Footer = lazy(() => import('../components/Footer'));
const CheckoutModal = lazy(() => import('../components/CheckoutModal'));

export default function LandingPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="app" style={{ background: 'var(--bg-offwhite)', minHeight: '100vh' }}>
      {/* Top Notification Banner */}
      <div style={{ 
        background: 'var(--bg-slate-950)', 
        color: '#fff', 
        textAlign: 'center', 
        padding: '10px', 
        fontSize: '0.95rem',
        fontWeight: '500',
        zIndex: 51,
        position: 'relative'
      }}>
        🚀 Unlock 2,000+ Claude Skills at Only ₹499 — No Monthly Fees
      </div>

      {/* Navbar/Header */}
      <nav style={{ 
        position: 'sticky', 
        top: 0, 
        left: 0, 
        right: 0, 
        padding: '16px 24px', 
        background: 'var(--bg-white)',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="Kript-X Logo" 
            className="nav-logo"
          />
        </div>
        <button onClick={() => setIsCheckoutOpen(true)} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.95rem', cursor: 'pointer', border: 'none' }}>
          Get Access
        </button>
      </nav>

      <main>
        <Hero onOpenCheckout={() => setIsCheckoutOpen(true)} />
        <Suspense fallback={<div style={{ minHeight: '50vh' }}></div>}>
          <Comparison />
          <Steps />
          <CategoryGrid />
          <Features />
          <PowerPrompts />
          <BundleIncludes />
          <Marquee />
          <SocialProof />
          <OfferSection onOpenCheckout={() => setIsCheckoutOpen(true)} />
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      </Suspense>
    </div>
  );
}
