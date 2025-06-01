'use client';

import { motion } from 'framer-motion';
import '@/styles/fonts.css';
import NoiseBackground from '../NoiseBackground';

const Hero = () => {
  return (
    <section className="bg-[#1A1B1E] relative">
      <NoiseBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tighter mb-8 md:mb-12 lg:mb-16 text-white"
          style={{ fontFamily: 'Clash Display Semibold' }}>
          <div className="inline-block">
            DESIGN & BUILD WHAT{' '}
          </div>
          <div className="inline-block">
            OTHERS ONLY IMAGINE
          </div>
        </h1>
      </motion.div>
    </section>
  );
};

export default Hero; 