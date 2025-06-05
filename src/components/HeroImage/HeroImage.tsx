'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const HeroImage = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1 0"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      setIsInView(latest > 0.3 && latest < 0.7);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    if (!sectionRef.current || !buttonRef.current || !imageContainerRef.current) return;

    const section = imageContainerRef.current;
    const button = buttonRef.current;
    let bounds = section.getBoundingClientRect();

    const updateBounds = () => {
      bounds = section.getBoundingClientRect();
    };

    // Initial position at center
    gsap.set(button, {
      xPercent: -50,
      yPercent: -50,
      x: bounds.width / 2,
      y: bounds.height / 2
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = section.getBoundingClientRect();
      
      // Calculate relative mouse position
      let relativeX = clientX - rect.left;
      let relativeY = clientY - rect.top;

      // Ensure the button stays within bounds
      const buttonWidth = button.offsetWidth;
      const buttonHeight = button.offsetHeight;
      const padding = 0; // Adjust this value to add padding from edges

      // Constrain the values to keep button fully within bounds
      relativeX = Math.max(buttonWidth / 2 + padding, Math.min(relativeX, rect.width - buttonWidth / 2 - padding));
      relativeY = Math.max(buttonHeight / 2 + padding, Math.min(relativeY, rect.height - buttonHeight / 2 - padding));

      gsap.to(button, {
        x: relativeX,
        y: relativeY,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true
      });
    };

    // Update bounds on resize
    window.addEventListener('resize', updateBounds);
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateBounds);
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="pt-0 pb-4 md:pb-12 lg:pb-12 bg-[#1A1B1E] relative overflow-hidden"
    >
      <div className={`relative z-10 transition-all duration-500 ${isInView ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        <div 
          ref={imageContainerRef}
          className="relative aspect-[16/9] overflow-hidden cursor-none"
        >
          <Image
            src="/img/hero-img.png"
            alt="Hero image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1536px) 90vw, 1920px"
            quality={100}
            priority
            className="object-cover transition-transform duration-500"
            style={{
              transform: isInView ? 'scale(1.02)' : 'scale(1)',
              willChange: 'transform',
              borderRadius: '30px',
            }}
          />
          
          <div
            ref={buttonRef}
            className="absolute z-10 pointer-events-none"
          >
            <button className="bg-[#FFDB71] hover:bg-[#FFDB71] rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col text-black items-center justify-center gap-1 transition-all duration-300 hover:scale-110 pointer-events-auto cursor-none"
            style={{fontFamily: 'Space Grotesk'}}>
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                  <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286l-11.54 6.347c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs md:text-sm font-medium">Watch <br /> Reel</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage; 