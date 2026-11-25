import React from 'react';
import { Star, Quote } from 'lucide-react';
import { SITE_DATA, Testimonial } from '../../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = SITE_DATA;
  const marqueeList1 = [...testimonials, ...testimonials];
  const marqueeList2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <section 
      id="testimonials"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative',
        background: '#F8FAFC',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ marginBottom: '48px' }}>
        <div className="section-header" style={{ marginBottom: 0 }}>
          <div className="badge-pill">
            <span className="badge-pulse" />
            <span>Verified Client Impact</span>
          </div>
          <h2 className="section-title">
            Don't Just Take <span className="text-gradient-blue">Our Word For It</span>
          </h2>
          <p className="section-desc">
            Hear from industry leaders and high-growth brands who partnered with QuikBoom to transform their market presence and accelerate revenue.
          </p>
        </div>
      </div>

      {/* Row 1 Marquee (Left) */}
      <div className="marquee-wrapper" style={{ marginBottom: '24px' }}>
        <div className="marquee-content">
          {marqueeList1.map((item, index) => (
            <TestimonialCard key={`row1-${index}`} item={item} />
          ))}
        </div>
      </div>

      {/* Row 2 Marquee (Reverse Right) */}
      <div className="marquee-wrapper">
        <div className="marquee-content-reverse">
          {marqueeList2.map((item, index) => (
            <TestimonialCard key={`row2-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <div
      className="glass-panel"
      style={{
        width: '380px',
        flexShrink: 0,
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
        background: '#FFFFFF',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
        border: '1px solid rgba(226, 232, 240, 0.9)'
      }}
    >
      <div>
        {/* Rating Stars & Quote Icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '4px' }}>
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
            ))}
          </div>
          <Quote size={20} color="rgba(29, 78, 216, 0.25)" />
        </div>

        {/* Quote */}
        <p style={{ fontSize: '14.5px', color: 'var(--text-primary)', lineHeight: 1.7, fontStyle: 'italic' }}>
          "{item.quote}"
        </p>
      </div>

      {/* Author Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid rgba(226, 232, 240, 0.85)' }}>
        <img 
          src={item.avatar} 
          alt={item.name}
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(29, 78, 216, 0.2)'
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=E0E7FF&color=1D4ED8`;
          }} 
        />
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)' }}>
            {item.name}
          </h4>
          <span style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
            {item.company}
          </span>
        </div>
      </div>
    </div>
  );
};
