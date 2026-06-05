import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const promptCategories = [
  { title: "Marketing & Sales", items: ["Market Research", "SEO Content Strategy", "Social Media Campaign", "Email Marketing Sequence", "Sales Pitch Script", "Ad Copy Generation", "Competitor Analysis", "Customer Persona Development", "Content Repurposing", "Lead Magnet Idea"] },
  { title: "Content Creation & Copywriting", items: ["Blog Post Draft", "Website Landing Page Copy", "Product Description", "Press Release", "Video Script Outline", "Podcast Episode Ideas", "Book Chapter Outline", "Speech Writing", "Newsletter Content", "Brand Story"] },
  { title: "Business Strategy & Analysis", items: ["Business Plan Outline", "SWOT Analysis", "Go-to-Market Strategy", "Risk Assessment", "Decision-Making Framework", "Scenario Planning", "Competitive Advantage", "Market Entry Strategy", "Pricing Strategy", "Growth Hacking Ideas"] },
  { title: "Product Development & Innovation", items: ["Feature Prioritization", "User Story Generation", "MVP Definition", "Innovation Brainstorm", "Product Roadmap Outline", "Design Thinking Process", "A/B Test Ideas", "User Feedback Analysis", "Competitive Feature Analysis", "Product Launch Plan"] },
  { title: "Technical & Development", items: ["Code Review Feedback", "API Documentation", "Database Schema Design", "Troubleshooting Guide", "Algorithm Explanation", "Security Best Practices", "Cloud Architecture Recommendation", "Git Workflow Explanation", "Containerization Strategy", "Testing Strategy"] },
  { title: "Research & Learning", items: ["Literature Review Outline", "Concept Explanation", "Study Plan", "Debate Argumentation", "Historical Event Analysis", "Scientific Hypothesis Generation", "Critical Thinking Exercise", "Summarize Research Paper", "Language Learning Plan", "Fact-Checking Assistant"] },
  { title: "Personal Productivity & Organization", items: ["Daily Schedule Optimization", "Goal Setting (SMART)", "Task Breakdown", "Meeting Agenda Creator", "Digital File Organization", "Habit Tracker Ideas", "Decision Log Template", "Time Blocking Strategy", "Email Management Strategy", "Mind Mapping Outline"] },
  { title: "Creative Writing & Storytelling", items: ["Story Plot Generator", "Character Development", "Poetry Generation", "Dialogue Writing", "World-Building Prompt", "Short Story Idea", "Screenplay Scene", "Mythology Creation", "Journal Prompt", "Song Lyric Generation"] },
  { title: "Human Resources & Management", items: ["Job Description Creation", "Interview Question Generator", "Performance Review Feedback", "Employee Onboarding Plan", "Conflict Resolution Strategy", "Training Module Outline", "Diversity & Inclusion Initiative", "Leadership Style Analysis", "Employee Engagement Survey Questions", "Remote Work Policy Draft"] },
  { title: "Legal & Compliance", items: ["Contract Clause Drafting", "Privacy Policy Summary", "Terms of Service Outline", "Compliance Checklist", "Legal Research Query", "Risk Mitigation Advice", "Ethical AI Guidelines", "Data Breach Response Plan", "Copyright vs. Trademark", "Regulatory Update Summary"] }
];

export default function PowerPrompts() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">100 CLAUDE AI POWER PROMPTS</span>
          <h2 className="section-title">Nuanced. High-quality.<br/>Actionable.</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted-dark)' }}>
            This curated collection is designed to help you harness the full potential of Claude AI across various domains, going beyond basic instructions.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {promptCategories.map((category, index) => (
            <div key={index} style={{ borderBottom: '1px solid #e2e8f0', overflow: 'hidden' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                style={{ 
                  width: '100%', 
                  padding: '24px 0', 
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
                {category.title}
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
                    <div style={{ padding: '0 0 32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {category.items.map((item, i) => (
                        <span key={i} style={{ 
                          background: 'var(--bg-slate-100)',
                          padding: '8px 16px', 
                          borderRadius: '9999px',
                          fontSize: '0.9rem',
                          color: 'var(--text-muted-dark)',
                          fontWeight: '700'
                        }}>
                          {item}
                        </span>
                      ))}
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
