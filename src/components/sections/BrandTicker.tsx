import React from 'react';
import { SITE_DATA } from '../../data/siteData';

export const BrandTicker: React.FC = () => {
  const companies = [...SITE_DATA.trustedCompanies, ...SITE_DATA.trustedCompanies];

  return (
    <section 
      style={{
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        padding: '32px 0',
        background: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ marginBottom: '18px', textAlign: 'center' }}>
        <p 
          style={{
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'var(--text-muted)'
          }}
        >
          Powering Digital Growth Across Technologies & Ecosystems
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-content">
          {companies.map((company, index) => (
            <div 
              key={index} 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 24px',
                borderRadius: '12px',
                background: '#FFFFFF',
                border: '1px solid rgba(203, 213, 225, 0.8)',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                color: 'var(--text-secondary)',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.03em',
                fontFamily: 'var(--font-display)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'rgba(29, 78, 216, 0.4)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(29, 78, 216, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(15, 23, 42, 0.04)';
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
              <span>{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
