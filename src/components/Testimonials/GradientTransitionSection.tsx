'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const GradientTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background color transition
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#1A1B1E", "#FFDB71", "#FFDB71"]
  );

  // Text color animation values - smooth transition between #454545 and black
  const textColor1 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.6, 0.8],
    ["#454545", "#141414", "#141414", "#454545"]
  );
  
  const textColor2 = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.7, 0.9],
    ["#454545", "#141414", "#141414", "#454545"]
  );

  return (
    <motion.section 
      ref={containerRef}
      style={{ background }}
      className="relative overflow-hidden py-24 md:py-32 lg:py-20 transition-colors duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12" style={{ fontFamily: 'Clash Display Semibold' }}>
          <motion.h2 
            style={{ color: textColor1 }}
            className="text-4xl text-left md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transition-colors duration-500 text-center"
          >
            7AVENUE<sup className="text-sm md:text-base lg:text-lg">®</sup> is a global branding and digital design agency building unicorn brands and creating people-friendly experiences.
          </motion.h2>
          
          <motion.p 
            style={{ color: textColor2 }}
            className="text-xl text-left md:text-2xl lg:text-3xl font-normal leading-relaxed transition-colors duration-500 text-left max-w-4xl"
          >
            We are a digital marketing agency with expertise, and we&apos;re on a mission to help you take the next step in your business.
          </motion.p>
          
        </div>
      </div>
    </motion.section>
  );
};

export default GradientTransitionSection;
