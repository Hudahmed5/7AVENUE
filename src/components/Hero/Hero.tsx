'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import '@/styles/fonts.css';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#1A1B1E] pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tighter mb-8 md:mb-12 lg:mb-16 text-white"
          style={{ fontFamily: 'Clash Display' }}>
          <div className="inline-block">
            DESIGN & BUILD WHAT{' '}
          </div>
          <div className="inline-block">
            OTHERS ONLY IMAGINE
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group"
        >
          <Image
            src="/img/hero-img.png"
            alt="Hero image"
            fill
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <button className="bg-yellow-300 hover:bg-yellow-400 rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col text-black items-center justify-center gap-1 transition-all duration-300 hover:scale-110">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-medium">Watch <br /> Reel</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 