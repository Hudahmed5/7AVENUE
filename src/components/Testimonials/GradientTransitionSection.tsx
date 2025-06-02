'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NoiseBackground from '../NoiseBackground';

const GradientTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background color transition with more color stops for smoother transition
  const background = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 1],
    ["#1A1B1E", "#1A1B1E", "#1A1B1E", "#FFDB71", "#FFDB71", "#FFDB71"]
  );

  // Noise effect opacity
  const noiseOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 1],
    [0.4, 0.3, 0.1, 0]
  );

  // Split text into individual characters with animation
  const AnimatedText = ({ text, className }: { text: string, className: string }) => {
    return (
      <div className={className}>
        {text.split('').map((char, i) => {
          if (char === ' ') {
            return <span key={i}>&nbsp;</span>;
          }
          
          // Special handling for ® symbol
          if (char === '®') {
            return <span key={i} className="text-black text-4xl text-left md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center">®</span>;
          }

          return (
            <motion.span
              key={i}
              animate={{
                color: ["#141414", "#454545", "#141414"]
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 0.02 // Tiny delay between each letter
              }}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  };

  const headingText = "7AVENUE® is a global branding anddigital design agency building unicorn brands and creating people-friendly experiences.";
  const paragraphText = "We are a digital marketing agency with expertise, and we're on a mission to help you take the next step in your business.";

  return (
    <motion.section 
      ref={containerRef}
      style={{ background }}
      className="relative overflow-hidden py-24 md:py-32 lg:py-20 transition-all duration-1000 ease-in-out"
    >
      {/* Custom noise background with animated opacity */}
      <motion.div 
        style={{ opacity: noiseOpacity }}
        className="absolute inset-0 z-0"
      >
        <NoiseBackground />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12" style={{ fontFamily: 'Clash Display Semibold' }}>
          <AnimatedText 
            text={headingText}
            className="text-4xl text-left md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-center"
          />
          
          <AnimatedText 
            text={paragraphText}
            className="text-xl text-left md:text-2xl lg:text-3xl font-normal leading-relaxed text-left max-w-4xl"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default GradientTransitionSection;
