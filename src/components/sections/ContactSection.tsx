import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { SITE_DATA } from '../../data/siteData';

interface ContactSectionProps {
  selectedService?: string;
  selectedPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedService, selectedPlan }) => {
  const { contact } = SITE_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ 
        ...prev, 
        message: prev.message || `Hi, I am interested in signing up for the ${selectedPlan}. Please provide onboarding details.` 
      }));
    }
  }, [selectedPlan]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief project details or timeline';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section 
      id="contact"
      style={{
        paddingTop: '120px',
        paddingBottom: '120px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Contact Channels & Location */}
          <div>
            <div className="badge-pill" style={{ marginBottom: '20px' }}>
              <span className="badge-pulse" />
              <span>Get In Touch</span>
            </div>

            <h2 
              style={{
                fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}
            >
              {contact.headline.split('next')[0]}
              <span className="text-gradient-cyan">Next Project</span>
            </h2>

            <p 
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '520px'
              }}
            >
              {contact.subheadline}
            </p>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Office */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(29, 78, 216, 0.08)',
                    border: '1px solid rgba(29, 78, 216, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} color="var(--accent-blue)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {contact.officeLocation.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {contact.officeLocation.addressLines[0]}<br />
                    {contact.officeLocation.addressLines[1]}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(2, 132, 199, 0.08)',
                    border: '1px solid rgba(2, 132, 199, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} color="var(--accent-cyan)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {contact.email.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <a href={`mailto:${contact.email.primary}`} style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block' }}>
                      {contact.email.primary}
                    </a>
                    <a href={`mailto:${contact.email.secondary}`} style={{ color: 'var(--text-muted)' }}>
                      {contact.email.secondary}
                    </a>
                  </p>
                </div>
              </div>

              {/* Call */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(13, 148, 136, 0.08)',
                    border: '1px solid rgba(13, 148, 136, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Phone size={22} color="var(--accent-teal)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {contact.call.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <a href={`tel:${contact.call.phone}`} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                      {contact.call.phone}
                    </a>
                    <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--text-muted)' }}>
                      {contact.call.hours}
                    </span>
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div 
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(37, 211, 102, 0.08)',
                    border: '1px solid rgba(37, 211, 102, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <MessageSquare size={22} color="#16A34A" />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {contact.whatsapp.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    <a 
                      href={`https://wa.me/${contact.whatsapp.rawNumber}?text=${encodeURIComponent("Hello QuikBoom, I would like to enquire about your digital services.")}`}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#16A34A', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>{contact.whatsapp.phone}</span>
                      <span>— Chat on WhatsApp</span>
                    </a>
                    <span style={{ display: 'block', fontSize: '12.5px', color: 'var(--text-muted)' }}>
                      {contact.whatsapp.note}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div 
            className="glass-panel"
            style={{
              padding: '40px 32px',
              borderRadius: '24px',
              background: '#FFFFFF'
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 16px' }}>
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(13, 148, 136, 0.1)',
                    border: '1px solid rgba(13, 148, 136, 0.3)',
                    color: 'var(--accent-teal)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px auto'
                  }}
                >
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Message Received!
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 28px auto' }}>
                  Thank you for reaching out to QuikBoom. Our strategy team will review your project brief and get in touch within 2-4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ padding: '12px 28px', fontSize: '14px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Send a Message
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                    Fill out the form below and receive a detailed project roadmap & quote.
                  </p>
                </div>

                {/* Name & Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ borderColor: errors.name ? '#EF4444' : undefined }}
                    />
                    {errors.name && (
                      <span style={{ fontSize: '12px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ borderColor: errors.email ? '#EF4444' : undefined }}
                    />
                    {errors.email && (
                      <span style={{ fontSize: '12px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Phone & Service Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 91579 59503"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Service of Interest
                    </label>
                    <select
                      className="form-input form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select a service...</option>
                      <option value="Web Development">Web Development</option>
                      <option value="App Development">App Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="Social Media Strategy">Social Media Strategy</option>
                      <option value="Marketplace Management">Marketplace Management</option>
                      <option value="Branding & Visual Design">Branding & Visual Design</option>
                      <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    className="form-input"
                    placeholder="Tell us about your project, current bottlenecks, desired timeline, or scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: 'vertical', borderColor: errors.message ? '#EF4444' : undefined }}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '12px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '15px',
                    fontWeight: 700,
                    marginTop: '8px'
                  }}
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
