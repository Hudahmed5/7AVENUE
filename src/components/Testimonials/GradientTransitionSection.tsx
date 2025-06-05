'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GradientTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !noiseRef.current) return;

    // Reset any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 100%',
        end: 'center center',
        scrub: 1.5,
        markers: false,
        onUpdate: (self) => {
          // Smoothly adjust noise opacity
          const progress = self.progress;
          gsap.set(noiseRef.current, { opacity: Math.max(0, 0.4 - (progress * 0.4)) });
        }
      }
    });

    // Initial setup
    gsap.set(overlayRef.current, {
      background: 'linear-gradient(to bottom, rgba(26,27,30,1) 0%, rgba(255,219,113,0) 100%)',
      opacity: 1
    });

    // Animate the overlay
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Split text into words with animation
  const AnimatedText = ({
    text,
    className,
  }: {
    text: string;
    className: string;
    style?: React.CSSProperties;
  }) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!textRef.current) return;

      const chars = textRef.current.querySelectorAll('.char');
      gsap.fromTo(chars,
        { color: '#141414' },
        {
          color: '#454545',
          duration: 3,
          ease: 'none',
          stagger: {
            amount: 2,
            repeat: -1,
            yoyo: true
          }
        }
      );
    }, []);

    return (
      <div ref={textRef} className={`${className} whitespace-pre-wrap break-words`}>
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
                <span
                  key={`${wordIndex}-${charIndex}`}
                  className="char inline-block"
                >
                  {char}
                </span>
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
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32 lg:py-20 bg-[#FFDB71]"
    >
      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(26,27,30,1) 0%, rgba(255,219,113,0) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 md:space-y-12">
          <div style={{fontFamily: "'Clash Display'", fontWeight: 500}} className="max-w-[1210px] mx-auto">
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
    </section>
  );
};

export default GradientTransitionSection;
