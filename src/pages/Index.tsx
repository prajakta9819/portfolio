import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StudiesSection from '@/components/StudiesSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StudiesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Index;
