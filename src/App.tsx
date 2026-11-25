import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { BrandTicker } from './components/sections/BrandTicker';
import { ServicesSection } from './components/sections/ServicesSection';
import { WhyChooseSection } from './components/sections/WhyChooseSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { PricingSection } from './components/sections/PricingSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { LegalModal } from './components/ui/LegalModal';
import { VideoModal } from './components/ui/VideoModal';

export const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookie' | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  // Scroll Progress Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenVideo = (youtubeId: string, title: string) => {
    setActiveVideo({ id: youtubeId, title });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', backgroundColor: '#FFFFFF' }}>
      {/* Cinematic Top Scroll Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #1D4ED8, #0284C7, #0D9488)',
          zIndex: 1001,
          boxShadow: '0 0 8px rgba(29, 78, 216, 0.4)',
          transition: 'width 0.1s ease-out'
        }}
      />

      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection onOpenContact={handleOpenContact} />
        <BrandTicker />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseSection onOpenContact={handleOpenContact} />
        <PortfolioSection onOpenVideo={handleOpenVideo} onOpenContact={handleOpenContact} />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection selectedService={selectedService} selectedPlan={selectedPlan} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={(type) => setLegalModalType(type)} 
        onOpenContact={handleOpenContact} 
      />

      {/* Modals */}
      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />

      <VideoModal 
        youtubeId={activeVideo?.id || null} 
        title={activeVideo?.title || null} 
        onClose={() => setActiveVideo(null)} 
      />
    </div>
  );
};
export default App;
