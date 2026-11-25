import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { faq } = SITE_DATA;

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative'
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-pulse" />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about our workflow, project timelines, deliverables, and SLAs.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '24px 28px',
                  borderRadius: '16px',
                  borderColor: isOpen ? 'var(--accent-blue)' : 'var(--border-card)',
                  background: '#FFFFFF',
                  boxShadow: isOpen 
                    ? '0 10px 25px -5px rgba(29, 78, 216, 0.1)' 
                    : 'var(--shadow-card)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    gap: '16px',
                    color: 'var(--text-primary)',
                    cursor: 'pointer'
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ fontSize: '17px', fontWeight: 700, lineHeight: 1.4 }}>
                    {item.question}
                  </span>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent-blue)' : '#F1F5F9',
                      color: isOpen ? '#FFFFFF' : 'var(--text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    style={{
                      paddingTop: '16px',
                      marginTop: '16px',
                      borderTop: '1px solid rgba(226, 232, 240, 0.85)',
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
