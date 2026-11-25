import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Search, 
  Share2, 
  ShoppingBag, 
  Palette, 
  Cpu, 
  ArrowUpRight, 
  CheckCircle2 
} from 'lucide-react';
import { SITE_DATA, ServiceItem } from '../../data/siteData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe size={26} color="var(--accent-blue)" />;
      case 'Smartphone': return <Smartphone size={26} color="var(--accent-cyan)" />;
      case 'TrendingUp': return <TrendingUp size={26} color="var(--accent-teal)" />;
      case 'Search': return <Search size={26} color="var(--accent-blue)" />;
      case 'Share2': return <Share2 size={26} color="var(--accent-cyan)" />;
      case 'ShoppingBag': return <ShoppingBag size={26} color="var(--accent-teal)" />;
      case 'Palette': return <Palette size={26} color="var(--accent-blue)" />;
      case 'Cpu': return <Cpu size={26} color="var(--accent-cyan)" />;
      default: return <Globe size={26} color="var(--accent-blue)" />;
    }
  };

  return (
    <section 
      id="services" 
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative'
      }}
    >
      {/* Background Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '0%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.04) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none'
        }} 
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-pulse" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="section-title">
            Comprehensive <span className="text-gradient-cyan">Digital Solutions</span>
          </h2>
          <p className="section-desc">
            We provide end-to-end digital services to help your business scale, optimize customer acquisition, and generate predictable recurring revenue.
          </p>
        </div>

        {/* Services Grid with 3D Tilt */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px'
          }}
        >
          {SITE_DATA.services.map((service) => (
            <TiltCard 
              key={service.id} 
              service={service} 
              icon={getIcon(service.iconName)}
              onSelect={() => onSelectService(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive 3D Tilt Card Component (Light Mode)
interface TiltCardProps {
  service: ServiceItem;
  icon: React.ReactNode;
  onSelect: () => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ service, icon, onSelect }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const tiltX = ((y / rect.height) - 0.5) * -12;
    const tiltY = ((x / rect.width) - 0.5) * 12;

    setTilt({ x: tiltX, y: tiltY });
    setMousePos({ x: percentX, y: percentY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="glass-panel service-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        cursor: 'pointer',
        position: 'relative',
        background: '#FFFFFF'
      }}
      onClick={onSelect}
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered 
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(2, 132, 199, 0.08) 0%, transparent 60%)` 
            : 'none',
          pointerEvents: 'none',
          transition: 'background 0.15s ease'
        }}
      />

      <div>
        {/* Top Header: Icon & Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
          <div 
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              background: '#F8FAFC',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)'
            }}
          >
            {icon}
          </div>

          <span 
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'rgba(29, 78, 216, 0.08)',
              border: '1px solid rgba(29, 78, 216, 0.2)',
              color: 'var(--accent-blue)'
            }}
          >
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>
          {service.title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
          {service.description}
        </p>

        {/* Key Features List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          {service.features.map((feature, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={14} color="var(--accent-teal)" style={{ flexShrink: 0 }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '16px',
          borderTop: '1px solid rgba(226, 232, 240, 0.85)',
          marginTop: 'auto'
        }}
      >
        <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--accent-blue)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          Request Service
        </span>
        <div 
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'rgba(29, 78, 216, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-blue)'
          }}
        >
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
};
