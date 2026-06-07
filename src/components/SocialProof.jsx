import React from 'react';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Marketing Director",
      content: "This bundle completely changed how our team uses Claude. We save at least 15 hours a week on content creation and strategy drafts. The ₹499 price tag is a steal."
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      content: "I didn't realize how much I was underutilizing AI until I got this. The business strategy and sales scripts alone helped me close a major client."
    },
    {
      name: "Priya Sharma",
      role: "Freelance Copywriter",
      content: "The 100 power prompts are my daily go-to now. No more blank page syndrome. The output quality is consistently professional and requires very little editing."
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-offwhite)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">TRUSTED BY PROFESSIONALS</span>
          <h2 className="section-title">Thousands Rely On It Daily.</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px'
        }}>
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-light"
              style={{ borderLeft: '4px solid var(--accent-yellow-400)' }}
            >
              <p style={{ color: 'var(--text-dark)', marginBottom: '24px', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                "{test.content}"
              </p>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-dark)' }}>{test.name}</h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', fontWeight: '700' }}>{test.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
