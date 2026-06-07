import React from 'react';
import { motion } from 'framer-motion';
import ClaudeIcon from './ClaudeIcon';

export default function Hero({ onOpenCheckout }) {
  return (
    <section className="hero-section">
      <div className="container responsive-flex hero-flex-mobile" style={{ alignItems: 'center' }}>
        
        {/* Left: Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 480px', textAlign: 'center' }}
        >
          <img 
            src="/kriptx_bundle_box.png" 
            alt="Kript-X Claude Skills Pro Bundle" 
            className="hero-image-mobile"
            style={{ 
              maxWidth: '100%', 
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
            }} 
          />
        </motion.div>

        {/* Right: Copy */}
        <div style={{ flex: '1 1 500px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-text-center-mobile"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
              lineHeight: 1.15,
              marginBottom: '20px',
              color: 'var(--text-dark)',
              fontWeight: '900'
            }}
          >
            2,000+ Claude Skills.<br />
            For Less Than <span className="highlight-yellow">₹0.25 Per Skill.</span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hero-text-center-mobile"
            style={{ 
              fontSize: 'clamp(1.15rem, 3vw, 1.35rem)',
              fontWeight: '700',
              marginBottom: '16px',
              color: 'var(--text-dark)',
              lineHeight: 1.3
            }}
          >
            Stop opening Claude and wondering what to type.
          </motion.h3>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: '1.05rem', 
              marginBottom: '24px', 
              maxWidth: '600px',
              color: 'var(--text-muted-dark)',
              lineHeight: '1.5'
            }}
          >
            Get instant access to 2,000+ ready-to-use Claude skills built for marketers, founders, creators and AI enthusiasts who want faster output, better ideas and less trial-and-error.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginBottom: '0px' }}
          >
            <button 
              onClick={onOpenCheckout} 
              className="btn-primary" 
              style={{ width: '100%', maxWidth: '400px', cursor: 'pointer', border: 'none' }}
            >
              GET INSTANT ACCESS @ ₹499
            </button>
            <p className="text-sm font-bold text-slate-500 mt-3 text-center">
              💡 2,000 skills ÷ ₹499 = less than <span className="text-orange-500">₹0.25 per skill</span>
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '12px', gap: '6px' }}>
              <span style={{ color: 'var(--text-muted-dark)', fontSize: '0.85rem', fontWeight: 700 }}>
                One-time payment | Instant delivery
              </span>
              <a href="/success" style={{ color: 'var(--accent-green-700)', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'underline' }}>
                Already paid? Access your download →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Stats Bar */}
      <div className="container" style={{ marginTop: '60px' }}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-stats-grid-mobile"
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '40px',
            flexWrap: 'wrap',
            background: 'var(--bg-slate-900)',
            padding: '32px 16px',
            borderRadius: '16px'
          }}
        >
          {[
            { val: '2,000+', label: 'READY-TO-USE FILES' },
            { val: '10+', label: 'BUSINESS SOLUTIONS' },
            { val: '1 MIN', label: 'STARTUP TIME' },
            { val: '₹00', label: 'MONTHLY PAYMENTS' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', flex: '1 1 150px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: '800', color: 'var(--accent-yellow-400)', lineHeight: 1, marginBottom: '8px' }}>{stat.val}</div>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.5px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
