'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import ContactButton from './ContactButton';
// import NoiseBackground from '../NoiseBackground';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page
      setIsAtTop(currentScrollY < 10);
      
      // Show header when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide header when scrolling down and not at the top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isAtTop ? '' : 'flex justify-center px-4 sm:px-6 lg:px-8'
    }`}>
      <header 
        className={`w-full transition-all duration-300 ${
          isAtTop 
            ? 'bg-[#1A1B1E]' 
            : isVisible 
              ? 'max-w-4xl translate-y-4 bg-[#0f0f0f]/30 backdrop-blur-[10px] rounded-full shadow-md'
              : 'max-w-4xl -translate-y-full bg-transparent'
        }`}
      >
        <div className={`relative overflow-hidden ${!isAtTop ? 'rounded-[50px]' : ''}`}>
          {/* <NoiseBackground className={!isAtTop ? 'rounded-[50px]' : ''} /> */}
          <div className="relative z-10">
            <div className={`flex items-center h-14 sm:h-16 md:h-20 ${
              isAtTop ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : 'px-6 sm:px-8 lg:px-10'
            }`}>
              <Logo />
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
                <Navigation />
              </div>
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6 ml-auto">
                <div className="md:hidden">
                  <Navigation />
                </div>
                <div className="hidden md:flex items-center gap-2 sm:gap-3 md:gap-4">
                  <ThemeToggle />
                  <ContactButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;