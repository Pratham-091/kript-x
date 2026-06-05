import React from 'react';
import Hero from '../components/Hero';
import Comparison from '../components/Comparison';
import Steps from '../components/Steps';
import CategoryGrid from '../components/CategoryGrid';
import Features from '../components/Features';
import PowerPrompts from '../components/PowerPrompts';
import BundleIncludes from '../components/BundleIncludes';
import Marquee from '../components/Marquee';
import SocialProof from '../components/SocialProof';
import OfferSection from '../components/OfferSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { handleRazorpayCheckout } from '../utils/razorpay';

export default function LandingPage() {
  const navigate = useNavigate();

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
        <button onClick={() => handleRazorpayCheckout(navigate)} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.95rem', cursor: 'pointer', border: 'none' }}>
          Get Access
        </button>
      </nav>

      <main>
        <Hero />
        <Comparison />
        <Steps />
        <CategoryGrid />
        <Features />
        <PowerPrompts />
        <BundleIncludes />
        <Marquee />
        <SocialProof />
        <OfferSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
