import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ProcessSection } from '@/components/ProcessSection';
import { TechnologiesSection } from '@/components/TechnologiesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TeamSection } from '@/components/TeamSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <ProcessSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
