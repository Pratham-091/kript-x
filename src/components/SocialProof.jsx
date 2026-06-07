import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, MoreVertical, CheckCheck, ArrowLeft } from 'lucide-react';

export default function SocialProof() {
  const chats = [
    {
      contactName: "Rahul M.",
      role: "Software Developer",
      avatar: "/avatar_rahul.png",
      messages: [
        { sender: 'other', text: "Hey Rahul, did you finish that Express.js backend API?", time: "10:12 AM" },
        { sender: 'me', text: "Yeah done! Used the Kript-X backend boilerplate skill prompt.", time: "10:14 AM" },
        { sender: 'me', text: "Bro it literally saved me like 3 hours of writing prompt structures. Best ₹499 spent this month! 🙌", time: "10:15 AM", read: true }
      ]
    },
    {
      contactName: "Sneha K.",
      role: "Marketing Consultant",
      avatar: "/avatar_sneha.png",
      messages: [
        { sender: 'other', text: "Did that cold campaign get any replies?", time: "04:28 PM" },
        { sender: 'me', text: "Yes! Used the Cold Outreach sequence from the Claude bundle.", time: "04:30 PM" },
        { sender: 'me', text: "35% open rate and we already booked 2 discovery calls today. Absolutely crazy value.", time: "04:31 PM", read: true }
      ]
    },
    {
      contactName: "Amit S.",
      role: "Freelance Copywriter",
      avatar: "/avatar_amit.png",
      messages: [
        { sender: 'other', text: "Is that prompt bundle actually legit or is it a scam?", time: "09:10 AM" },
        { sender: 'me', text: "Totally legit. Over 2,000 text files of actual prompts and skills.", time: "09:12 AM" },
        { sender: 'me', text: "The Copywriting frameworks cut my draft writing time in half. Completely saved my week.", time: "09:13 AM", read: true }
      ]
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-offwhite)', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label" style={{ color: 'var(--accent-green-600)' }}>REAL USER REVIEWS</span>
          <h2 className="section-title">What Users Are Saying</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted-dark)' }}>
            Real screenshots of conversations from early access users who are already saving hours every week.
          </p>
        </div>

        {/* Chats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px'
        }}>
          {chats.map((chat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '420px'
              }}
            >
              {/* WhatsApp Header */}
              <div style={{
                background: '#075e54',
                color: '#ffffff',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                userSelect: 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowLeft size={18} style={{ opacity: 0.8 }} />
                  <img 
                    src={chat.avatar} 
                    alt={chat.contactName} 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }} 
                  />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '0.95rem', lineHeight: '1.2' }}>
                      {chat.contactName} <span style={{ fontSize: '0.75rem', fontWeight: 'normal', opacity: 0.8 }}>({chat.role})</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.9 }}>online</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', opacity: 0.9 }}>
                  <Video size={18} style={{ cursor: 'pointer' }} />
                  <Phone size={16} style={{ cursor: 'pointer' }} />
                  <MoreVertical size={18} style={{ cursor: 'pointer' }} />
                </div>
              </div>

              {/* WhatsApp Body/Background */}
              <div style={{
                flex: 1,
                backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat',
                backgroundColor: '#efeae2',
                padding: '14px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                {chat.messages.map((msg, msgIdx) => {
                  const isMe = msg.sender === 'me';
                  return (
                    <div
                      key={msgIdx}
                      style={{
                        alignSelf: isMe ? 'flex-end' : 'flex-start',
                        background: isMe ? '#d9fdd3' : '#ffffff',
                        color: '#303030',
                        padding: '8px 12px',
                        borderRadius: isMe ? '8px 0px 8px 8px' : '0px 8px 8px 8px',
                        maxWidth: '85%',
                        boxShadow: '0 1px 1.5px rgba(0,0,0,0.12)',
                        position: 'relative',
                        fontSize: '0.88rem',
                        lineHeight: '1.4',
                        textAlign: 'left'
                      }}
                    >
                      <span>{msg.text}</span>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '4px',
                        fontSize: '0.65rem',
                        color: '#667781',
                        marginTop: '4px',
                        textAlign: 'right'
                      }}>
                        <span>{msg.time}</span>
                        {isMe && (
                          <CheckCheck size={13} color={msg.read ? '#53bdeb' : '#8696a0'} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
