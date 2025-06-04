'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import NoiseBackground from '../NoiseBackground';
import Slider from 'react-slick';
import type { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

const logos = [
  { src: '/img/logos/logo-1.png', alt: 'Chick-fil-A' },
  { src: '/img/logos/logo-2.png', alt: 'Filmup' },
  { src: '/img/logos/logo-3.png', alt: 'NHL' },
  { src: '/img/logos/logo-4.png', alt: 'Grammy Awards' },
  { src: '/img/logos/logo-5.png', alt: 'Yousic Play' },
  { src: '/img/logos/logo-6.png', alt: 'BK Garage' },
];

// Duplicate logos for infinite effect
const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

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
    <section className="py-12 md:py-16 lg:py-20 bg-[#1A1B1E] relative overflow-hidden">
      <NoiseBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {!isMobile && (
            <>
              {/* Blur gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#1A1B1E] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#1A1B1E] to-transparent z-10"></div>
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
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain brightness-0 invert"
                  />
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
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain brightness-0 invert"
                    />
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

export default LogoCloud; 