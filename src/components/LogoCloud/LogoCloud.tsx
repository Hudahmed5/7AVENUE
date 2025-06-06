'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// import NoiseBackground from '../NoiseBackground';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState, memo } from 'react';

const logos = [
  { src: '/svg/logo-1.svg', alt: 'Chick-fil-A' },
  { src: '/svg/logo-2.svg', alt: 'Filmup' },
  { src: '/svg/logo-3.svg', alt: 'NHL' },
  { src: '/svg/logo-4.svg', alt: 'Grammy Awards' },
  { src: '/svg/logo-5.svg', alt: 'Yousic Play' },
  { src: '/svg/logo-6.svg', alt: 'BK Garage' },
];

// Duplicate logos for infinite effect
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

const LogoImage = memo(({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    fill
    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 200px"
    className="object-contain brightness-0 invert"
  />
));

LogoImage.displayName = 'LogoImage';

const LogoCloud = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: 'unslick' as const,
      }
    ],
  };

  return (
    <section className="pb-[72px] sm:pb-[100px] bg-dark-section relative overflow-hidden">
      {/* Noise background */}
      <div className="noise absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {!isMobile && (
            <>
              {/* Gradient without blur but smoother transition */}
              <div className="absolute left-0 top-0 bottom-0 w-[250px] bg-gradient-to-r from-[#1A1B1E]/90 via-[#1A1B1E]/50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-[250px] bg-gradient-to-l from-[#1A1B1E]/90 via-[#1A1B1E]/50 to-transparent z-10"></div>
            </>
          )}
          
          {isMobile ? (
            <div className="grid grid-cols-3 gap-8">
              {logos.map((logo, index) => (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <LogoImage src={logo.src} alt={logo.alt} />
                </motion.div>
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {extendedLogos.map((logo, index) => (
                <motion.div
                  key={`${logo.alt}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4"
                >
                  <div className="w-[150px] h-[70px] md:w-[200px] md:h-[100px] relative grayscale hover:grayscale-0 transition-all duration-300">
                    <LogoImage src={logo.src} alt={logo.alt} />
                  </div>
                </motion.div>
              ))}
            </Slider>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(LogoCloud);
