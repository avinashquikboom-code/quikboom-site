import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['services', 'why-us', 'portfolio', 'pricing', 'testimonials', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'Work', href: '#portfolio', id: 'portfolio' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.88)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled 
          ? '1px solid rgba(226, 232, 240, 0.85)' 
          : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none'
      }}
    >
      <div 
        className="container" 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}
      >
        {/* Brand Logo */}
        <a 
          href="/" 
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          aria-label="QuikBoom Homepage"
        >
          <img 
            src="/quikboom-logo.png" 
            alt="QuikBoom Digital Agency" 
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain'
            }} 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontSize: '14.5px',
                fontWeight: 600,
                color: activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                letterSpacing: '0.01em',
                position: 'relative',
                padding: '6px 0',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === link.id ? 'var(--accent-blue)' : 'var(--text-secondary)')}
            >
              {link.name}
              {activeSection === link.id && (
                <span 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #1D4ED8, #0284C7)',
                    borderRadius: '2px',
                    boxShadow: '0 0 6px rgba(29, 78, 216, 0.4)'
                  }} 
                />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div 
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '16px'
          }}
          className="desktop-cta"
        >
          <a
            href="tel:+919157959503"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13.5px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              padding: '8px 12px',
              borderRadius: '8px',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >
            <Phone size={14} color="var(--accent-teal)" />
            <span>+91 91579 59503</span>
          </a>

          <button
            onClick={onOpenContact}
            className="btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '13.5px'
            }}
          >
            <span>Start Project</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '32px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 99
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: activeSection === link.id ? 'var(--accent-blue)' : '#0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={18} color="rgba(100, 116, 139, 0.5)" />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px' }}>
            <a
              href="https://wa.me/919157959503"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageSquare size={18} color="#25D366" />
              <span>WhatsApp Us Direct</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Get Free Proposal</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Media query styling for header responsiveness */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};
