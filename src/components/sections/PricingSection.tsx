import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { SITE_DATA, PricingPlan } from '../../data/siteData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [isYearly, setIsYearly] = useState(false);
  const { pricing } = SITE_DATA;

  return (
    <section 
      id="pricing"
      style={{
        paddingTop: '110px',
        paddingBottom: '110px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <span className="badge-pulse" />
            <span>Transparent Investment</span>
          </div>
          <h2 className="section-title">
            Plans Tailored for <span className="text-gradient-cyan">Your Scale</span>
          </h2>
          <p className="section-desc">
            Simple, straightforward pricing with zero hidden fees. Predictable monthly retainers engineered for maximum return on investment.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '6px 8px',
              borderRadius: '9999px',
              background: '#F8FAFC',
              border: '1px solid var(--border-subtle)',
              marginTop: '32px',
              boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)'
            }}
          >
            <button
              onClick={() => setIsYearly(false)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: !isYearly ? '#FFFFFF' : 'var(--text-secondary)',
                background: !isYearly ? 'var(--accent-blue)' : 'transparent',
                boxShadow: !isYearly ? '0 4px 14px rgba(29, 78, 216, 0.3)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                fontSize: '13.5px',
                fontWeight: 600,
                color: isYearly ? '#FFFFFF' : 'var(--text-secondary)',
                background: isYearly ? 'var(--accent-blue)' : 'transparent',
                boxShadow: isYearly ? '0 4px 14px rgba(29, 78, 216, 0.3)' : 'none',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Annual Billing</span>
              <span 
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background: 'rgba(13, 148, 136, 0.12)',
                  color: 'var(--accent-teal)',
                  border: '1px solid rgba(13, 148, 136, 0.25)'
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {pricing.map((plan) => (
            <PriceCard 
              key={plan.name} 
              plan={plan} 
              isYearly={isYearly} 
              onSelect={() => onSelectPlan(plan.name)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PriceCard: React.FC<{ plan: PricingPlan; isYearly: boolean; onSelect: () => void }> = ({ plan, isYearly, onSelect }) => {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div
      className="glass-panel"
      style={{
        padding: '40px 32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        background: '#FFFFFF',
        borderColor: plan.popular ? 'var(--accent-blue)' : 'var(--border-card)',
        boxShadow: plan.popular 
          ? '0 20px 40px -10px rgba(29, 78, 216, 0.15), 0 0 1px 1px rgba(29, 78, 216, 0.2)' 
          : 'var(--shadow-card)',
        transform: plan.popular ? 'scale(1.02)' : 'scale(1)'
      }}
    >
      {/* Popular Glow Badge */}
      {plan.popular && (
        <div
          style={{
            position: 'absolute',
            top: '16px',
            right: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '4px 12px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #1D4ED8, #0284C7)',
            color: '#FFFFFF',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            boxShadow: '0 2px 10px rgba(29, 78, 216, 0.3)'
          }}
        >
          <Sparkles size={12} />
          <span>Most Popular</span>
        </div>
      )}

      <div>
        {/* Tier Name & Subtitle */}
        <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-blue)' }}>
          {plan.subtitle}
        </span>
        <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginTop: '6px', marginBottom: '16px' }}>
          {plan.name}
        </h3>

        {/* Price Display */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '28px' }}>
          <span style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-secondary)' }}>₹</span>
          <span style={{ fontSize: '42px', fontWeight: 800, color: '#0F172A', fontFamily: 'var(--font-display)', lineHeight: 1 }}>
            {price.toLocaleString('en-IN')}
          </span>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>/ month</span>
        </div>

        {/* Feature Checklist */}
        <div style={{ borderTop: '1px solid rgba(226, 232, 240, 0.85)', paddingTop: '24px', marginBottom: '32px' }}>
          <p style={{ fontSize: '12.5px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '16px' }}>
            What's included:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {plan.features.map((feature, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div 
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: plan.popular ? 'rgba(29, 78, 216, 0.12)' : 'rgba(2, 132, 199, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <Check size={12} color={plan.popular ? 'var(--accent-blue)' : 'var(--accent-cyan)'} />
                </div>
                <span style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button CTA */}
      <button
        onClick={onSelect}
        className={plan.popular ? 'btn-primary' : 'btn-secondary'}
        style={{
          width: '100%',
          justifyContent: 'center',
          padding: '14px 24px',
          fontSize: '14.5px'
        }}
      >
        <span>Choose {plan.name.split(' ')[0]}</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};
