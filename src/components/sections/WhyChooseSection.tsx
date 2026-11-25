import React, { useState } from 'react';
import { 
  Zap, 
  Users, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

interface WhyChooseSectionProps {
  onOpenContact: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onOpenContact }) => {
  const { whyChoose } = SITE_DATA;
  const [activeStep, setActiveStep] = useState(0);

  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'Zap': return <Zap size={20} color="var(--accent-blue)" />;
      case 'Users': return <Users size={20} color="var(--accent-cyan)" />;
      case 'ShieldCheck': return <ShieldCheck size={20} color="var(--accent-teal)" />;
      case 'Clock': return <Clock size={20} color="var(--accent-blue)" />;
      case 'CheckCircle2': return <CheckCircle2 size={20} color="var(--accent-cyan)" />;
      case 'Sparkles': return <Sparkles size={20} color="var(--accent-teal)" />;
      default: return <Sparkles size={20} color="var(--accent-blue)" />;
    }
  };

  const workflowSteps = [
    {
      num: '01',
      title: 'Discovery & Market Intelligence',
      desc: 'We analyze your competitive landscape, customer psychology, and monetization bottlenecks to map out an unbeatable growth roadmap.'
    },
    {
      num: '02',
      title: 'Cinematic UI/UX & Architecture',
      desc: 'Crafting luxury, high-conversion visual design systems and robust modern software architectures that position you as the category leader.'
    },
    {
      num: '03',
      title: 'Rapid Engineering & QA Sprints',
      desc: 'Lightning-fast agile sprints with continuous integration, performance audits, and strict quality assurance before deployment.'
    },
    {
      num: '04',
      title: 'Targeted High-ROI Distribution',
      desc: 'Deploying multi-channel organic SEO, viral social reels, and high-intent performance ad campaigns for compounding customer acquisition.'
    }
  ];

  return (
    <section 
      id="why-us"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative',
        background: '#F8FAFC',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
      }}
    >
      <div className="container">
        {/* Split Editorial Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Narrative & Process Stages */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '20px' }}>
              <span className="badge-pulse" />
              <span>{whyChoose.badge}</span>
            </div>

            <h2 
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '20px',
                color: 'var(--text-primary)'
              }}
            >
              {whyChoose.headlineMain}{' '}
              <span className="text-gradient-blue">{whyChoose.headlineAccent}</span>.
            </h2>

            <p 
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '36px',
                maxWidth: '520px'
              }}
            >
              {whyChoose.description}
            </p>

            {/* Interactive 4-Phase Delivery Framework */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <h4 style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                Our 4-Stage Execution Methodology
              </h4>

              {workflowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      border: isActive ? '1px solid rgba(29, 78, 216, 0.45)' : '1px solid rgba(226, 232, 240, 0.9)',
                      boxShadow: isActive ? '0 8px 24px rgba(29, 78, 216, 0.08)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span 
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '13px',
                            fontWeight: 700,
                            color: isActive ? 'var(--accent-blue)' : 'var(--text-muted)'
                          }}
                        >
                          {step.num}
                        </span>
                        <span style={{ fontSize: '15.5px', fontWeight: 700, color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)' }}>
                          {step.title}
                        </span>
                      </div>
                      <ArrowRight 
                        size={15} 
                        color={isActive ? 'var(--accent-blue)' : 'var(--text-muted)'} 
                        style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
                      />
                    </div>

                    {isActive && (
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: '10px', paddingLeft: '28px' }}>
                        {step.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <button 
              onClick={onOpenContact}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: 6 Core Value Pillars */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}
          >
            {whyChoose.pillars.map((pillar, index) => (
              <div
                key={index}
                className="glass-panel"
                style={{
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  background: '#FFFFFF'
                }}
              >
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#F8FAFC',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)'
                  }}
                >
                  {getPillarIcon(pillar.icon)}
                </div>

                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
