import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
  const tags = [
    "📧 Outreach Templates", "⚖️ Legal Drafting", "📊 Market Research", 
    "🎬 Video Content Scripts", "💼 Recruitment Tools", "📈 Search Optimization", 
    "📝 Blog Writing", "🤝 Sales Copy", "💬 Client Support Replies", 
    "📱 Social Posts", "🔍 Competitor Tracking", "🧾 Invoice Creation"
  ];

  return (
    <section style={{ padding: '60px 0', overflow: 'hidden', background: 'var(--bg-white)', borderBottom: '1px solid #e2e8f0' }}>
      <p style={{ textAlign: 'center', color: 'var(--text-muted-dark)', marginBottom: '32px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
        Explore a small sample of the ready-to-use AI resources available inside:
      </p>
      
      <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ display: 'flex', gap: '48px', paddingLeft: '48px' }}
        >
          {/* Double array to loop seamlessly */}
          {[...tags, ...tags].map((tag, index) => (
            <div 
              key={index} 
              style={{ 
                color: 'var(--text-dark)',
                fontSize: '1.25rem',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)'
              }}
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
