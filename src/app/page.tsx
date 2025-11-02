import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';

// Lazy load non-critical sections for better initial load
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection'), {
  loading: () => <div className="section-modern min-h-[400px]" />
});
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'), {
  loading: () => <div className="section-modern min-h-[400px]" />
});
const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection'), {
  loading: () => <div className="section-modern min-h-[400px]" />
});
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="section-modern min-h-[400px]" />
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <ServicesSection /> */}
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
