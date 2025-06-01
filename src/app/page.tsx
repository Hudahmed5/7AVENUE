import Hero from '@/components/Hero/Hero';
import HeroImage from '@/components/HeroImage/HeroImage';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
import ServiceSection from '@/components/ServiceSection/ServiceSection';
import ProjectShowcase from '@/components/ProjectShowcase/ProjectShowcase';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroImage />
      <LogoCloud />
      <ServiceSection />
      <ProjectShowcase />
      <Testimonials />
      <Footer />
    </main>
  );
}
