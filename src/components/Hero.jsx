import React from 'react';
import { motion } from 'framer-motion';
import ClaudeIcon from './ClaudeIcon';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container responsive-flex hero-flex-mobile">
        
        {/* Left: Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 400px', textAlign: 'center' }}
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
              marginBottom: '24px',
              color: 'var(--text-dark)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              Upgrade Claude <ClaudeIcon size={40} style={{ marginTop: '-4px' }} />
            </span>
            <span>Into Your <span className="highlight-yellow">All-In-One AI Workspace</span></span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: '1.1rem', 
              marginBottom: '40px', 
              maxWidth: '600px',
              color: 'var(--text-muted-dark)'
            }}
          >
            Access powerful, ready-to-use resources designed to help you write faster, automate tasks, and save hours every week. Bonus setup guide included.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ marginBottom: '60px' }}
          >
            <a href="#pricing" className="btn-primary" style={{ display: 'inline-block' }}>
              UNLOCK 2,000+ RESOURCES → @ ₹499 ONLY
            </a>
            <p style={{ color: 'var(--text-muted-dark)', marginTop: '16px', fontSize: '0.9rem', fontWeight: 700 }}>
              One-time payment | Instant delivery
            </p>
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
