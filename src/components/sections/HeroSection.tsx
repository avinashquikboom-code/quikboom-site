import React from 'react';
import { ArrowUpRight, MessageSquare, ChevronDown, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';
import { HeroScene } from '../three/HeroScene';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const { hero } = SITE_DATA;

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient lighting */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.07) 0%, rgba(2, 132, 199, 0.03) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px'
          }}
          className="hero-grid"
        >
          {/* Left Column: Copy & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Pill Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="badge-pill">
                <span className="badge-pulse" />
                <span>{hero.badge}</span>
              </div>
              <div 
                style={{
                  display: 'none',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12.5px',
                  color: 'var(--text-secondary)',
                  background: 'rgba(29, 78, 216, 0.04)',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(203, 213, 225, 0.7)'
                }}
                className="hero-subbadge"
              >
                <Sparkles size={13} color="var(--accent-teal)" />
                <span>{hero.subBadge}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)',
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)'
              }}
            >
              <span>{hero.heading1} </span>
              <span className="text-gradient-blue">{hero.heading2} </span>
              <span style={{ display: 'block', color: 'var(--text-primary)' }}>
                {hero.heading3}
              </span>
            </h1>

            {/* Description */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '560px'
              }}
            >
              {hero.description}
            </p>

            {/* Call To Actions */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px',
                paddingTop: '8px'
              }}
            >
              <button 
                onClick={onOpenContact}
                className="btn-primary"
                style={{ padding: '16px 36px', fontSize: '16px' }}
              >
                <span>Launch Your Project</span>
                <ArrowUpRight size={18} />
              </button>

              <button 
                onClick={scrollToServices}
                className="btn-secondary"
                style={{ padding: '16px 30px', fontSize: '15px' }}
              >
                <span>Explore Services</span>
              </button>

              <a
                href={`https://wa.me/${SITE_DATA.contact.whatsapp.rawNumber}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 20px',
                  borderRadius: '9999px',
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  color: '#16A34A',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37, 211, 102, 0.16)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(37, 211, 102, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Direct WhatsApp Chat"
              >
                <MessageSquare size={16} />
                <span>Quick WhatsApp</span>
              </a>
            </div>

            {/* Verified Statistics Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '16px',
                paddingTop: '32px',
                borderTop: '1px solid rgba(226, 232, 240, 0.9)',
                marginTop: '12px'
              }}
            >
              {hero.stats.map((st, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                      fontWeight: 800,
                      color: i === 0 ? 'var(--accent-blue)' : i === 1 ? 'var(--accent-cyan)' : 'var(--accent-teal)',
                      lineHeight: 1.1
                    }}
                  >
                    {st.value}
                  </span>
                  <span style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '4px', fontWeight: 600 }}>
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Visual Experience */}
          <div 
            style={{
              height: 'clamp(380px, 55vw, 620px)',
              width: '100%',
              position: 'relative'
            }}
            className="hero-3d-wrapper"
          >
            <HeroScene />
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--text-muted)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          zIndex: 2
        }}
        onClick={scrollToServices}
      >
        <span>Scroll Down</span>
        <ChevronDown size={14} style={{ animation: 'bounce 2s infinite' }} />
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hero-subbadge { display: inline-flex !important; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(6px); }
          60% { transform: translateY(3px); }
        }
      `}</style>
    </section>
  );
};
