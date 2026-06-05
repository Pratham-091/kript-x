import React from 'react';
import { motion } from 'framer-motion';

export default function Steps() {
  const steps = [
    { num: "01", title: "Get Instant Access", desc: "Purchase once and unlock the complete collection of AI resources, templates, and workflows — all neatly organized for quick use." },
    { num: "02", title: "Upload Your Resource", desc: "Open Claude or your preferred AI workspace, upload a file, and activate the ready-made system instantly." },
    { num: "03", title: "AI Starts Working", desc: "The system immediately adapts to your task, helping you generate smarter, faster, and more accurate results." },
    { num: "04", title: "Scale & Automate", desc: "Combine multiple workflows together to streamline content, marketing, research, support, and business operations." }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-slate-950)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label-light">HOW IT STARTS</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)' }}>Four Simple Steps.<br/>Unlimited Results.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted-light)' }}>
            No complicated setup or technical experience required. Just upload, activate, and start getting better AI outputs in minutes.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ background: 'var(--bg-slate-800)', padding: '32px', borderRadius: '16px' }}
            >
              <div style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem', 
                fontWeight: '800', 
                color: 'var(--accent-yellow-400)',
                marginBottom: '16px',
                lineHeight: 1
              }}>
                STEP {step.num}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--text-light)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted-light)', fontSize: '1rem' }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
