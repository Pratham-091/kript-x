import React from 'react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ padding: '100px 0 40px', background: 'var(--bg-slate-950)', color: 'var(--text-light)' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <img 
            src="/logo.png" 
            alt="Kript-X Logo" 
            className="footer-logo"
          />
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text-light)' }}>Your Business Deserves More.</h2>
          <p style={{ color: 'var(--text-muted-light)', maxWidth: '600px', margin: '0 auto 40px', fontSize: '1.1rem', fontWeight: '500' }}>
            Stop wasting hours repeating the same prompts. Save time, work faster, and get better results with ready-to-use AI resources.
          </p>
          <a href="#pricing" className="btn-primary">
            UNLOCK 2,000+ RESOURCES FOR ₹499
          </a>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '32px', 
          marginBottom: '60px',
          flexWrap: 'wrap'
        }}>
          <a href="#" style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', fontWeight: '700' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', fontWeight: '700' }}>Terms & Conditions</a>
          <a href="#" style={{ color: 'var(--text-muted-light)', fontSize: '0.9rem', fontWeight: '700' }}>Contact Us</a>
        </div>

        <div style={{ 
          color: 'rgba(255,255,255,0.3)', 
          fontSize: '0.75rem', 
          textAlign: 'center', 
          lineHeight: '1.6',
          maxWidth: '900px',
          margin: '0 auto 60px'
        }}>
          This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward. All of my terms, privacy policies and disclaimers for this program and website can be accessed via the links. I feel transparency is important and I hold ourselves (you & me) to a high standard of integrity. Thanks for stopping by. I hope this training and content brings you a lot of value & results.
        </div>

        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={scrollToTop}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--accent-yellow-400)', 
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'var(--font-heading)'
            }}
          >
            ↑ Scroll to Top
          </button>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: '700' }}>
            © 2026 Kript-X. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
