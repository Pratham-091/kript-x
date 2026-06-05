import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, TrendingUp, Scale, DollarSign, Users, Rocket, BarChart2, Video, Code, Palette, Crosshair, FolderOpen } from 'lucide-react';

export default function CategoryGrid() {
  const categories = [
    { icon: <PenTool size={24} color="var(--accent-green-600)" />, title: "Content Creation", count: "200+" },
    { icon: <TrendingUp size={24} color="var(--accent-green-600)" />, title: "Growth Marketing", count: "250+" },
    { icon: <Scale size={24} color="var(--accent-green-600)" />, title: "Legal Documents", count: "150+" },
    { icon: <DollarSign size={24} color="var(--accent-green-600)" />, title: "Finance & Reports", count: "150+" },
    { icon: <Users size={24} color="var(--accent-green-600)" />, title: "Human Resources", count: "200+" },
    { icon: <Rocket size={24} color="var(--accent-green-600)" />, title: "Sales Systems", count: "200+" },
    { icon: <BarChart2 size={24} color="var(--accent-green-600)" />, title: "Business Strategy", count: "150+" },
    { icon: <Video size={24} color="var(--accent-green-600)" />, title: "Video Production", count: "200+" },
    { icon: <Code size={24} color="var(--accent-green-600)" />, title: "Coding Tools", count: "150+" },
    { icon: <Palette size={24} color="var(--accent-green-600)" />, title: "Creative Design", count: "150+" },
    { icon: <Crosshair size={24} color="var(--accent-yellow-500)" />, title: "Claude Digital Marketing Skill", count: "Special" }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-white)', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background blur */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '30%', height: '30%', background: 'var(--accent-green-500)', opacity: 0.05, filter: 'blur(100px)', borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.img 
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            src="/claude_3d_icon.jpg" 
            alt="3D Claude Category Icon" 
            style={{ height: '120px', width: 'auto', marginBottom: '24px', mixBlendMode: 'multiply', borderRadius: '32px' }}
          />
          <span className="section-label" style={{ color: 'var(--accent-green-600)' }}>INSIDE THE COLLECTION</span>
          <h2 className="section-title">Every Workflow.<br/>Every Business Need.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted-dark)' }}>
            2,000+ ready-made AI resources designed to support marketing, operations, content creation, sales, finance, and more.
          </p>
        </div>

        <div className="category-grid-mobile" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', 
          gap: '24px'
        }}>
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="category-card-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, ease: 'easeOut' }}
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.06)' }}
              style={{ 
                background: 'var(--bg-slate-50)', 
                border: '1px solid #e2e8f0',
                borderRadius: '16px', 
                padding: '24px', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '20px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
            >
              {/* Top Row: Icon + Count Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ 
                  background: 'var(--bg-white)', 
                  padding: '12px', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.02)' 
                }}>
                  {cat.icon}
                </div>
                <div className="category-badge-mobile" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  background: cat.count === 'Special' ? 'rgba(250, 204, 21, 0.2)' : 'rgba(22, 163, 74, 0.1)', 
                  color: cat.count === 'Special' ? 'var(--accent-yellow-500)' : 'var(--accent-green-700)',
                  padding: '6px 12px', 
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-body)', 
                  fontSize: '0.85rem', 
                  fontWeight: '700',
                  textTransform: 'uppercase'
                }}>
                  <FolderOpen size={14} />
                  {cat.count} {cat.count !== 'Special' && 'files'}
                </div>
              </div>

              {/* Bottom Row: Title */}
              <h4 className="category-title-mobile" style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: '800', 
                fontSize: '1.25rem', 
                color: 'var(--text-dark)',
                lineHeight: 1.3
              }}>
                {cat.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Global summary card at bottom */}
        <motion.div
          className="card-padding-mobile"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ 
            marginTop: '40px',
            background: 'var(--bg-slate-900)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid var(--bg-slate-800)'
          }}
        >
          <div style={{ color: 'var(--text-light)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>
            Ready to completely optimize your workflow?
          </div>
          <a href="#pricing" className="btn-primary" style={{ fontSize: '1rem', padding: '16px 32px' }}>
            Get All 2,000+ Files Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
