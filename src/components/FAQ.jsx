import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "Do I need a premium Claude subscription?", a: "No. The resources work with both free and paid Claude accounts. You can start using everything immediately without upgrading your plan." },
    { q: "Is this a one-time purchase?", a: "Yes. You pay ₹499 once and get immediate access to the entire bundle of 2,000+ resources to keep forever." },
    { q: "How will I receive the files?", a: "Immediately after your purchase is completed, you will be redirected to a download page, and an email containing the access link will also be sent to your inbox." },
    { q: "Are there any hidden fees?", a: "No. This is a strict one-time purchase with absolutely no monthly subscriptions, hidden charges, or recurring billing." },
    { q: "Is this beginner friendly?", a: "Yes! We include a step-by-step setup guide. Even if you've never used Claude extensively, you'll be up and running in minutes." },
    { q: "Can I use this on any device?", a: "Yes, you can upload and use these resources on desktop, tablet, or mobile — wherever you use Claude." },
    { q: "What If I Don't Receive Any Email After Purchase?", a: "First, check your spam or promotions folder. If you still can't find it, contact our support team with your receipt, and we will manually send your access link." }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" style={{ background: 'var(--bg-offwhite)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="/claude_3d_icon.jpg" 
            alt="3D Claude Asset Icon" 
            style={{ height: '100px', width: 'auto', marginBottom: '20px', mixBlendMode: 'multiply' }}
          />
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions.</h2>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="card-light" style={{ marginBottom: '16px', padding: '16px 32px' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{ 
                  width: '100%', 
                  padding: '16px 0', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-dark)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                {faq.q}
                <div style={{ color: 'var(--accent-green-600)' }}>
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 0 16px', color: 'var(--text-muted-dark)', lineHeight: '1.6', fontWeight: '500' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
