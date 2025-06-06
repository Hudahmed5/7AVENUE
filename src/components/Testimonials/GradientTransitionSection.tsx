'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GradientTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Create the color transition animation
    gsap.fromTo(containerRef.current,
      { 
        backgroundColor: '#1A1B1E' // Dark color (matching your previous dark state)
      },
      {
        backgroundColor: '#FFDB71', // Yellow color (matching your yellow-section class)
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top', // Start when the top of section reaches top of viewport
          end: 'top -10%', // Complete shortly after section is fully visible
          scrub: 2, // Slower, smoother transition
          markers: false,
        }
      }
    );

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
                    className="text-black leading-tight"
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
      className="relative overflow-hidden sm:p-[120px] py-[48px] px-[16px]"
    >
      {/* Content */}
      <div className="relative z-20">
        <div className="">
          <div className="sm:pb-[67px] pb-[19px] max-w-[1210px]" style={{fontFamily: "'Clash Display'", fontWeight: 500, lineHeight: '100%', letterSpacing: '-1px'}}>
            <AnimatedText
              text={headingText}
              className="text-left leading-[1.1] text-[43px] sm:text-[101px]"
            />
          </div>
          <div style={{fontFamily: 'Space Grotesk', fontWeight: 400, lineHeight: '100%', letterSpacing: '-1px'}}>
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
