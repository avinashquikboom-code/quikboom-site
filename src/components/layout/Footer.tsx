import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

// SVG Brand Icons
const InstagramIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookie') => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        background: '#F8FAFC',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        paddingTop: '80px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '64px'
          }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <a href="/" style={{ display: 'inline-block' }}>
              <img 
                src="/quikboom-logo.png" 
                alt="QuikBoom" 
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
            </a>
            <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '320px' }}>
              Helping your brand reach new digital heights — that's our purpose. We combine cutting-edge technology, cinematic design, and high-ROI growth marketing.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px' }}>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                }}
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.borderColor = 'rgba(203, 213, 225, 0.8)';
                }}
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {SITE_DATA.services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a 
                    href="#services"
                    style={{ fontSize: '14px', color: 'var(--text-secondary)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a 
                  href="#why-us"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Why QuikBoom
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Featured Work
                </a>
              </li>
              <li>
                <a 
                  href="#pricing"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Pricing Packages
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  Client Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  style={{ fontSize: '14px', color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Office & Direct Contact */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#0F172A', marginBottom: '20px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={18} color="var(--accent-blue)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>
                  7th Floor, Office No. 711, Shivanta Highstreet,<br />
                  Gorwa, Vadodara 391330, Gujarat, India
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${SITE_DATA.contact.email.primary}`} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {SITE_DATA.contact.email.primary}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
                <a href={`tel:${SITE_DATA.contact.call.phone}`} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                  {SITE_DATA.contact.call.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageSquare size={16} color="#16A34A" style={{ flexShrink: 0 }} />
                <a 
                  href={`https://wa.me/${SITE_DATA.contact.whatsapp.rawNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#16A34A', fontWeight: 700 }}
                >
                  WhatsApp Direct Line
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div 
          style={{
            borderTop: '1px solid rgba(226, 232, 240, 0.85)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {currentYear} QuikBoom Digital Marketing Agency. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button 
              onClick={() => onOpenLegal('privacy')}
              style={{ color: 'var(--text-secondary)', fontSize: '13px', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terms')}
              style={{ color: 'var(--text-secondary)', fontSize: '13px', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Terms of Service
            </button>
            <button 
              onClick={() => onOpenLegal('cookie')}
              style={{ color: 'var(--text-secondary)', fontSize: '13px', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
