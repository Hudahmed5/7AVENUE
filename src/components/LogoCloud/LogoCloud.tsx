'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  { src: '/img/logos/logo-1.png', alt: 'Chick-fil-A' },
  { src: '/img/logos/logo-2.png', alt: 'Filmup' },
  { src: '/img/logos/logo-3.png', alt: 'NHL' },
  { src: '/img/logos/logo-4.png', alt: 'Grammy Awards' },
  { src: '/img/logos/logo-5.png', alt: 'Yousic Play' },
  { src: '/img/logos/logo-6.png', alt: 'BK Garage' },
];

const LogoCloud = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#1A1B1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain brightness-0 invert"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCloud; 