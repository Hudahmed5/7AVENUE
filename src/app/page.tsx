import Image from "next/image";
import Hero from '@/components/Hero/Hero';
import LogoCloud from '@/components/LogoCloud/LogoCloud';
import ServiceSection from '@/components/ServiceSection/ServiceSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <ServiceSection />
    </main>
  );
}
