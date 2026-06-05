import React from 'react';
import { motion } from 'framer-motion';
import ClaudeIcon from './ClaudeIcon';

export default function Features() {
  return (
    <section className="section" style={{ background: 'var(--bg-slate-50)', textAlign: 'center' }}>
      <div className="container">
        <motion.div 
          className="card-dark"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            background: 'var(--bg-slate-950)', 
            border: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '8px solid var(--accent-yellow-400)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <ClaudeIcon size={24} />
            <span className="section-label-light" style={{ marginBottom: 0 }}>CLAUDE DIGITAL MARKETING SKILL</span>
          </div>
          <h2 className="section-title" style={{ fontSize: '3rem', color: 'var(--text-light)' }}>
            22 tools.<br/>Every campaign.<br/>
            <span className="highlight-yellow">Zero compromise.</span>
          </h2>
          <p style={{ marginTop: '24px', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '600px', margin: '24px auto 40px', color: 'var(--text-muted-light)' }}>
            Each output type has its own intelligent framework — knowing exactly what to ask, how to structure it, and what platform rules to follow.
          </p>
          
          <a href="#pricing" className="btn-primary">
            GET INSTANT ACCESS @ ₹499
          </a>
        </motion.div>
      </div>
    </section>
  );
}
