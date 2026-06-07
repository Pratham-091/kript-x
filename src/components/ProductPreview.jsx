import React from 'react';
import { motion } from 'framer-motion';

export default function ProductPreview() {
  return (
    <section className="py-20 px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">SNEAK PEEK</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Look Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">The Bundle</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real skill files, neatly organized. No fluff, just 2,000+ actionable prompts ready to drop into Claude.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono">claude-skills-bundle/</span>
            </div>
            <img 
              src="/preview_folders.png" 
              alt="Folder Structure Preview" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <div className="w-3 h-3 rounded-full bg-slate-700"></div>
              <span className="ml-2 text-xs text-slate-500 font-mono">Sales Letter Prompt.md</span>
            </div>
            <img 
              src="/preview_file.png" 
              alt="File Content Preview" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 italic text-sm">
            "Seeing is believing. Get instant access to the exact prompts top 1% creators use."
          </p>
        </div>
      </div>
    </section>
  );
}
