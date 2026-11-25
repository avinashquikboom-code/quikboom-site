import React from 'react';
import { X } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookie' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const data = 
    type === 'privacy' 
      ? SITE_DATA.legal.privacyPolicy 
      : type === 'terms' 
      ? SITE_DATA.legal.termsOfService 
      : SITE_DATA.legal.cookiePolicy;

  return (
    <div 
      className="modal-backdrop" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#FFFFFF',
          border: '1px solid var(--border-card)',
          boxShadow: '0 24px 60px rgba(15, 23, 42, 0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div>
            <h3 id="legal-modal-title" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)' }}>
              {data.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
              Last updated: {data.lastUpdated}
            </p>
          </div>
          <button 
            onClick={onClose}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#F1F5F9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ 
          fontSize: '14.5px', 
          color: 'var(--text-secondary)', 
          lineHeight: 1.8, 
          whiteSpace: 'pre-line',
          paddingRight: '8px'
        }}>
          {data.content}
        </div>

        <div style={{ marginTop: '32px', textAlign: 'right' }}>
          <button 
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '10px 24px', fontSize: '14px' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
