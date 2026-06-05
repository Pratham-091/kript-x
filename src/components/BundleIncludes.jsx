import React from 'react';
import { motion } from 'framer-motion';
import { Package, BookOpen, DownloadCloud, CheckCircle } from 'lucide-react';

export default function BundleIncludes() {
  const includes = [
    { icon: <Package size={32} />, title: "2,000+ Ready-to-Use Resources", desc: "Carefully organized files across multiple categories — ready to access instantly." },
    { icon: <BookOpen size={32} />, title: "Bonus Training Guide Included", desc: "Step-by-step walkthroughs and practical strategies to help you get the best results." },
    { icon: <DownloadCloud size={32} />, title: "Instant Digital Access", desc: "Download everything immediately after purchase, no waiting required." },
    { icon: <CheckCircle size={32} />, title: "Works Across All Plans", desc: "Fully compatible with Claude.ai, Claude Code, and collaborative workflows." }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-slate-900)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label-light">INSIDE THE BUNDLE</span>
          <h2 className="section-title" style={{ color: 'var(--text-light)' }}>One Purchase.<br/>Complete Toolkit.</h2>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '40px'
        }}>
          {includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-dark"
              style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{ color: 'var(--accent-yellow-400)' }}>
                {item.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-light)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted-light)' }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
