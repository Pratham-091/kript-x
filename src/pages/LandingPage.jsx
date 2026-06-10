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
const ProductPreview = lazy(() => import('../components/ProductPreview'));
import SkeletonLoader from '../components/SkeletonLoader';

export default function LandingPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    if (window.fbq) {
      window.fbq('track', 'AddToCart', {
        value: 499.00,
        currency: 'INR',
        content_name: 'Claude AI Skills Pro Bundle'
      });
    }
    setIsCheckoutOpen(true);
  };

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
        🚀 Unlock 2,000+ Claude Skills at Only ₹499 — Use coupon <strong style={{color: 'var(--accent-yellow-400)'}}>KRIPT-X 20</strong> for ₹100 OFF! 🎉
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
        <button onClick={handleOpenCheckout} className="btn-secondary" style={{ padding: '10px 20px', fontSize: '0.95rem', cursor: 'pointer', border: 'none' }}>
          Get Access
        </button>
      </nav>

      <main>
        <Hero onOpenCheckout={handleOpenCheckout} />
        <Suspense fallback={<SkeletonLoader />}>
          <section className="py-16 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">THE REALITY</p>
              <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-10">
                Same Claude. <span className="text-orange-500">Completely Different Results.</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-red-500 mb-6">❌ Without Kript-X</h3>
                  <ol className="space-y-3" style={{ listStyle: 'none' }}>
                    {["Open Claude", "Stare at blank screen", "Type a weak prompt", "Get average output", "Spend 1 hour rewriting", "Still not happy", "Repeat tomorrow"].map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                        <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 text-xs font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="text-xl font-black text-green-600 mb-6">✅ With Kript-X</h3>
                  <ol className="space-y-3" style={{ listStyle: 'none' }}>
                    {["Open Claude", "Pick a skill file", "Upload it", "Get expert output", "Move to next task"].map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                        <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-black flex items-center justify-center flex-shrink-0">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6 p-3 bg-green-100 rounded-xl text-center text-green-700 font-bold text-sm">
                    ⚡ Done in under 60 seconds
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-400 italic mt-8 text-lg">
                "Spend time creating. Not prompting."
              </p>
            </div>
          </section>
          <ProductPreview />
          <Comparison />
          <Steps />
          <CategoryGrid />
          <Features />
          <PowerPrompts />
          <BundleIncludes />
          <Marquee />
          <SocialProof />
          <OfferSection onOpenCheckout={handleOpenCheckout} />
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
