import React, { useState } from 'react';
import { Folder, FolderOpen, FileText, ChevronRight, ChevronDown, Monitor, Copy, Check } from 'lucide-react';

export default function ProductPreview() {
  const [activeFile, setActiveFile] = useState({
    name: 'linkedin_growth_system.md',
    content: `# LinkedIn Personal Brand Growth System
Role: World-Class Personal Branding & LinkedIn ghostwriter.
Objective: Convert raw ideas/industry insights into viral, authority-building LinkedIn posts.

Instructions:
1. Start with a hook that contradicts common knowledge (e.g., "Stop waking up at 5 AM.").
2. Create readability by adding line breaks after every 1-2 sentences.
3. Use a "Why it matters" bulleted breakdown.
4. End with an open-ended question that sparks debate, not a generic "What do you think?".

Output format:
- Hook (1 line)
- The Story/Conflict (3-4 lines)
- The Takeaway/Framework (3 bullet points)
- Call to Action/Conversation Starter (1 line)

Example Input: "Consistency is overrated in business."
[Generate 3 variations following this template]`
  });

  const [expandedFolders, setExpandedFolders] = useState({
    content: true,
    marketing: false,
    coding: false,
    strategy: false
  });

  const toggleFolder = (folderKey) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderKey]: !prev[folderKey]
    }));
  };

  const folders = [
    {
      key: 'content',
      name: '01_Content_Creation',
      files: [
        {
          name: 'linkedin_growth_system.md',
          content: `# LinkedIn Personal Brand Growth System
Role: World-Class Personal Branding & LinkedIn ghostwriter.
Objective: Convert raw ideas/industry insights into viral, authority-building LinkedIn posts.

Instructions:
1. Start with a hook that contradicts common knowledge (e.g., "Stop waking up at 5 AM.").
2. Create readability by adding line breaks after every 1-2 sentences.
3. Use a "Why it matters" bulleted breakdown.
4. End with an open-ended question that sparks debate, not a generic "What do you think?".

Output format:
- Hook (1 line)
- The Story/Conflict (3-4 lines)
- The Takeaway/Framework (3 bullet points)
- Call to Action/Conversation Starter (1 line)

Example Input: "Consistency is overrated in business."
[Generate 3 variations following this template]`
        },
        {
          name: 'viral_thread_framework.md',
          content: `# Viral Twitter Thread Framework
Role: Professional Twitter Copywriter & Viral Curator.
Objective: Structure complex technical or business topics into highly shareable Twitter threads.

Formatting Rules:
- Tweet 1: The Hook. Must state a big promise or shocking statistic. Limit to 120 chars.
- Tweets 2-5: The Value. Use short, punchy bullet points. No fluff.
- Tweet 6: The Summary. A quick visual recap.
- Tweet 7: The CTA. Drive newsletter sign-ups or product clicks.

Prompt Template:
"Structure this article [INSERT TEXT] into a 7-part viral Twitter thread following the Hook-to-Value framework."`
        },
        {
          name: 'seo_blog_optimizer.md',
          content: `# SEO Blog Content Optimizer
Role: Sr. SEO Specialist & Content Editor.
Objective: Inject high-intent search terms into an existing draft without losing tone of voice.

Instructions:
1. Scan the text below for keyword frequency.
2. Structure headers with exact matching H2/H3 semantic HTML.
3. Add a "Key Takeaways" TL;DR box at the top.
4. Rewrite intro paragraph to answer the primary search intent within 45 words.

Target Keywords: [Insert Keywords]
Draft Text: [Insert Draft Here]`
        }
      ]
    },
    {
      key: 'marketing',
      name: '02_Growth_Marketing',
      files: [
        {
          name: 'meta_ad_copy_generator.md',
          content: `# Meta (Facebook/Instagram) Ad Copy Architect
Role: Direct Response Copywriter.
Objective: Write high-converting Facebook ad copy that hits immediate buyer objections.

Variations Required:
1. **Variation A: Story-Driven.** Build empathy around the pain point.
2. **Variation B: Benefit-Heavy.** Bulleted list of immediate feature results.
3. **Variation C: Short & Punchy.** One hook sentence, 3 bullet points, and CTA.

Constraints:
- Keep the first 3 lines extremely compelling before the "See More" cutoff.
- Include 3 scroll-stopping headlines under 40 characters.`
        },
        {
          name: 'cold_outreach_sequence.md',
          content: `# B2B Cold Email Outreach Sequencer
Role: Head of Outbound Sales.
Objective: Write a 3-step personalized outreach campaign targeting SaaS founders.

Sequence Roadmap:
- Email 1: The Observation (No pitch, just highlighting a gap in their current system).
- Email 2: The Solution (Case study with 1-sentence metrics, e.g., "+40% conversion").
- Email 3: The Low-friction CTA (Ask for a quick text reply, not a 30-min call).

Subject Lines:
1. Quick question regarding [Product]
2. [Founder Name] - check this out`
        }
      ]
    },
    {
      key: 'coding',
      name: '03_Coding_Tools',
      files: [
        {
          name: 'express_server_boilerplate.md',
          content: `# Express API Server Boilerplate Maker
Role: Senior Node.js Backend Engineer.
Objective: Write modular, secure Node.js Express server boilerplates.

Output Requirements:
- Use ES Modules (import/export).
- Include standard middlewares: cors, express.json(), helmet, morgan.
- Provide a clean error handling middleware.
- Configure dotenv environment variables properly.
- Include a basic database connector function template.`
        },
        {
          name: 'react_hooks_optimizer.md',
          content: `# React Hook Performance Optimizer
Role: React Core Engineer.
Objective: Analyze custom React hooks for state re-render loops and unnecessary memory leaks.

Analysis Guidelines:
1. Identify missing dependencies in useEffect, useMemo, or useCallback.
2. Suggest memoized utility functions outside of the component body.
3. Refactor nested setState operations into useReducer if complexity exceeds 3 states.

Hook Code to Optimize: [Insert Custom Hook]`
        }
      ]
    },
    {
      key: 'strategy',
      name: '04_Business_Strategy',
      files: [
        {
          name: 'pitch_deck_builder.md',
          content: `# Startup Pitch Deck Outline Builder
Role: Venture Capitalist & Startup Mentor.
Objective: Create a compelling 10-slide pitch outline that addresses seed-round requirements.

Slide Layout:
1. Title & Value Prop
2. Problem (What pain are you solving?)
3. Solution (The product demo/vision)
4. Market Size (TAM, SAM, SOM)
5. Business Model (How do you make money?)
6. Traction (Metrics, MRR, users)
7. Competition (Your unfair advantage)
8. Go-To-Market Strategy
9. Team
10. The Ask (Fundraising targets and allocation)`
        }
      ]
    }
  ];

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section" style={{ background: 'var(--bg-slate-900)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--text-light)', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label-light" style={{ color: 'var(--accent-yellow-400)' }}>SEEING IS BELIEVING</span>
          <h2 className="section-title" style={{ color: 'white' }}>Browse Inside the Bundle</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted-light)' }}>
            We don't hide behind stock icons. Interact with the file manager below to preview some of the actual prompts and codebase skills included in your purchase.
          </p>
        </div>

        {/* Mock IDE/Explorer Container */}
        <div style={{
          background: 'var(--bg-slate-950, #020617)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '600px'
        }}>
          {/* Editor Header Bar */}
          <div style={{
            background: 'var(--bg-slate-900, #0f172a)',
            padding: '12px 20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
              <div style={{ marginLeft: '12px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted-light)', fontFamily: 'monospace' }}>
                <Monitor size={14} />
                <span>kript-x-skills-bundle.zip</span>
              </div>
            </div>
            <div style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '4px', color: 'var(--accent-yellow-400)', fontWeight: 'bold' }}>
              PROD PREVIEW MODE
            </div>
          </div>

          {/* IDE Content Area */}
          <div style={{
            display: 'flex',
            flex: 1,
            overflow: 'hidden',
            flexDirection: window.innerWidth < 768 ? 'column' : 'row'
          }}>
            {/* Sidebar Explorer */}
            <div style={{
              width: window.innerWidth < 768 ? '100%' : '300px',
              background: '#0a0f1d',
              borderRight: window.innerWidth < 768 ? 'none' : '1px solid rgba(255, 255, 255, 0.05)',
              borderBottom: window.innerWidth < 768 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
              overflowY: 'auto',
              padding: '16px',
              fontFamily: 'monospace',
              fontSize: '0.85rem',
              userSelect: 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '16px' }}>
                <span>WORKSPACE</span>
              </div>

              {/* Root Directory */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'white', fontWeight: 'bold', marginBottom: '8px' }}>
                <FolderOpen size={16} color="var(--accent-yellow-400)" />
                <span>kript-x-bundle</span>
              </div>

              {/* Folders List */}
              <div style={{ paddingLeft: '12px' }}>
                {folders.map((folder) => {
                  const isExpanded = expandedFolders[folder.key];
                  return (
                    <div key={folder.key} style={{ marginBottom: '6px' }}>
                      {/* Folder Title Row */}
                      <div 
                        onClick={() => toggleFolder(folder.key)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#cbd5e1',
                          cursor: 'pointer',
                          padding: '4px 6px',
                          borderRadius: '4px',
                          transition: 'background-color 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        {isExpanded ? <ChevronDown size={14} color="#64748b" /> : <ChevronRight size={14} color="#64748b" />}
                        {isExpanded ? <FolderOpen size={16} color="#38bdf8" /> : <Folder size={16} color="#38bdf8" />}
                        <span>{folder.name}</span>
                      </div>

                      {/* Files inside Folder */}
                      {isExpanded && (
                        <div style={{ paddingLeft: '18px', marginTop: '4px' }}>
                          {folder.files.map((file) => {
                            const isSelected = activeFile.name === file.name;
                            return (
                              <div
                                key={file.name}
                                onClick={() => setActiveFile(file)}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  color: isSelected ? 'var(--accent-yellow-300)' : '#94a3b8',
                                  cursor: 'pointer',
                                  padding: '4px 8px',
                                  borderRadius: '4px',
                                  background: isSelected ? 'rgba(250, 204, 21, 0.1)' : 'transparent',
                                  marginTop: '2px',
                                  transition: 'all 0.15s ease'
                                }}
                                onMouseEnter={(e) => {
                                  if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                                }}
                                onMouseLeave={(e) => {
                                  if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                              >
                                <FileText size={14} color={isSelected ? 'var(--accent-yellow-400)' : '#64748b'} />
                                <span style={{ textDecoration: isSelected ? 'underline' : 'none' }}>{file.name}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Code Editor Panel */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              background: '#040814',
              overflow: 'hidden'
            }}>
              {/* Filename tab */}
              <div style={{
                background: '#090d16',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                height: '40px'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#040814',
                  color: 'white',
                  padding: '8px 16px',
                  borderTop: '2px solid var(--accent-yellow-400)',
                  fontSize: '0.8rem',
                  fontFamily: 'monospace',
                  height: '40px'
                }}>
                  <FileText size={14} color="var(--accent-yellow-400)" />
                  <span>{activeFile.name}</span>
                </div>

                {/* Simulated Copy Action */}
                <button
                  onClick={handleCopyClick}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '4px',
                    color: '#cbd5e1',
                    fontSize: '0.75rem',
                    padding: '4px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  {copied ? <Check size={12} color="var(--accent-green-500)" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied Link!' : 'Copy Snippet'}</span>
                </button>
              </div>

              {/* Code Editor Content */}
              <div style={{
                flex: 1,
                padding: '20px',
                overflowY: 'auto',
                fontFamily: 'monospace',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                color: '#cbd5e1',
                textAlign: 'left',
                whiteSpace: 'pre-wrap'
              }}>
                {/* Code window lines */}
                <div style={{ display: 'flex', gap: '16px' }}>
                  {/* Line numbers */}
                  <div style={{
                    color: '#475569',
                    textAlign: 'right',
                    userSelect: 'none',
                    fontSize: '0.85rem'
                  }}>
                    {activeFile.content.split('\n').map((_, idx) => (
                      <div key={idx} style={{ height: '21px' }}>{idx + 1}</div>
                    ))}
                  </div>

                  {/* Prompt Text */}
                  <div style={{ flex: 1, color: '#f1f5f9' }}>
                    {activeFile.content.split('\n').map((line, idx) => {
                      // Basic highlighting for markdown headings and blocks
                      let color = '#f1f5f9';
                      let fontWeight = 'normal';
                      if (line.startsWith('#')) {
                        color = 'var(--accent-yellow-300)';
                        fontWeight = 'bold';
                      } else if (line.startsWith('-') || line.match(/^\d+\./)) {
                        color = '#38bdf8';
                      } else if (line.startsWith('Role:') || line.startsWith('Objective:')) {
                        color = '#4ade80';
                        fontWeight = 'bold';
                      } else if (line.startsWith('[') && line.endsWith(']')) {
                        color = '#f472b6';
                      }
                      
                      return (
                        <div key={idx} style={{ height: '21px', color, fontWeight }}>
                          {line}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below preview */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#pricing" className="btn-primary" style={{ display: 'inline-flex', padding: '18px 40px' }}>
            Get access to all 2,000+ files
          </a>
        </div>
      </div>
    </section>
  );
}
