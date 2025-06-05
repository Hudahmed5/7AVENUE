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

  // Split text into words with animation
  const AnimatedText = ({
    text,
    className,
  }: {
    text: string;
    className: string;
    style?: React.CSSProperties;
  }) => {
    return (
      <div className={`${className} whitespace-pre-wrap break-words`}>
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((char, charIndex) => {
              // Special handling for ® symbol
              if (char === '®') {
                return (
                  <span 
                    key={`${wordIndex}-${charIndex}`} 
                    className="text-black text-4xl text-left md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                  >
                    ®
                  </span>
                );
              }

              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  animate={{
                    color: ["#141414", "#454545", "#141414"]
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    delay: (wordIndex * word.length + charIndex) * 0.05
                  }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              );
            })}
            {/* Add space after each word except the last one */}
            {wordIndex !== text.split(' ').length - 1 && ' '}
          </span>
        ))}
      </div>
    );
  };

  const headingText = "7AVENUE® is a global branding and digital design agency building unicorn brands and creating people-friendly experiences.";
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
        <div className="space-y-8 md:space-y-12">
          <div style={{fontFamily: 'Clash Display Semibold', fontWeight: 400}} className="max-w-[1210px] mx-auto">
            <AnimatedText
              text={headingText}
              className="text-left leading-[1.1] text-[57px] md:text-[99px]"
            />
          </div>
          <div style={{fontFamily: 'Space Grotesk', fontWeight: 400}}>
            <AnimatedText
              text={paragraphText}
              className="text-left leading-relaxed text-[18px] md:text-[28px] max-w-4xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GradientTransitionSection;
