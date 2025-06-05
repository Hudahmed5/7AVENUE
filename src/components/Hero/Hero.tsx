'use client';

import { motion } from 'framer-motion';
import '@/styles/fonts.css';

const Hero = () => {
  return (
    <section className="pt-[26px] pb-[32px] sm:pt-[68px] sm:pb-[80px] bg-[#1A1B1E] relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10"
      >
        <h1 className="font-bold leading-tight tracking-tighter text-white text-[57px] md:text-[101px]"
          style={{ 
            fontFamily: 'Clash Display Semibold',
            lineHeight: '100%', 
            letterSpacing: '-1px' 
          }}>
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