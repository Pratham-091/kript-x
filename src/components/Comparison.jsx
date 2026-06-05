import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import ClaudeIcon from './ClaudeIcon';

export default function Comparison() {
  return (
    <section className="section" style={{ background: 'var(--bg-slate-900)', color: 'var(--text-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label" style={{ color: 'var(--text-muted-light)' }}>THE DIFFERENCE</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Same AI. Completely Different Results.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted-light)' }}>
            Most users only scratch the surface of what AI can do. The right resources turn ordinary outputs into professional-level results.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Without Resources */}
          <motion.div 
            className="card-padding-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              background: 'var(--bg-slate-800)', 
              padding: '40px', 
              borderRadius: '16px',
              borderLeft: '4px solid var(--accent-red-500)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--text-light)', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              Without Resources
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none' }}>
              {[
                "Rewriting the same prompts again and again.",
                "Unpredictable output quality.",
                "Wasting hours testing different inputs.",
                "Paying for multiple expensive tools.",
                "No workflow consistency across projects"
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', color: 'var(--text-muted-light)' }}>
                  <X size={20} color="var(--accent-red-500)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ lineHeight: 1.5, fontWeight: 400 }}>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* With Resources */}
          <motion.div 
            className="card-padding-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ 
              background: 'rgba(20, 83, 45, 0.2)', 
              padding: '40px', 
              borderRadius: '16px',
              borderLeft: '4px solid var(--accent-green-500)'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', color: 'var(--text-light)', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ClaudeIcon size={24} /> With Claude Skills Bundle
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', listStyle: 'none' }}>
              {[
                "Upload once and use repeatedly",
                "Reliable high-quality results every time",
                "Ready to use in under a minute",
                "Replace multiple business tools with one system",
                "Build faster with organized workflows"
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', color: 'var(--text-light)' }}>
                  <Check size={20} color="var(--accent-green-500)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ lineHeight: 1.5, fontWeight: 700 }}>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
