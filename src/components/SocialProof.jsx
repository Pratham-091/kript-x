import React from 'react';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const testimonials = [
    {
      name: "Rahul M.",
      avatar: "/avatar_rahul.png",
      content: "Bro this saved me 3 hours today alone 😭 The SEO optimization prompts are next level. Never writing meta descriptions manually again.",
      time: "10:42 AM"
    },
    {
      name: "Sneha K.",
      avatar: "/avatar_sneha.png",
      content: "Just bought the bundle. I was skeptical but the business strategy folders are gold. Actually useful stuff not just generic ChatGPT prompts.",
      time: "11:15 AM"
    },
    {
      name: "Amit S.",
      avatar: "/avatar_amit.png",
      content: "Best ₹499 I've spent this month. The copywriting skills file got me a new client yesterday. Thanks man 🔥",
      time: "2:30 PM"
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-offwhite)' }}>
      <div className="container max-w-5xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label">REAL RESULTS</span>
          <h2 className="section-title text-3xl md:text-4xl font-black text-slate-900">
            See What <span className="text-orange-500">Others Are Saying</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it. Join thousands of creators and founders saving hours every week.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
              style={{ maxWidth: '350px', margin: '0 auto', width: '100%' }}
            >
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <img 
                  src={test.avatar} 
                  alt={test.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <div className="text-white font-semibold text-sm">{test.name}</div>
                  <div className="text-white/70 text-xs">online</div>
                </div>
              </div>
              
              {/* Chat Background */}
              <div className="bg-[#E5DDD5] p-4 min-h-[160px] flex flex-col justify-end">
                <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm relative w-11/12">
                  <p className="text-slate-800 text-sm leading-relaxed mb-1">
                    {test.content}
                  </p>
                  <div className="flex justify-end items-center gap-1">
                    <span className="text-[10px] text-slate-400">{test.time}</span>
                    <span className="text-blue-500 text-xs">✓✓</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
