'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from './ThemeToggle';
import ContactButton from './ContactButton';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're at the top of the page
      setIsAtTop(currentScrollY < 10);
      
      // Show header only when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide header immediately when scrolling down
      else if (currentScrollY > lastScrollY) {
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
    <div className={`fixed top-0 left-0 right-0 z-50 ${
      isAtTop ? '' : 'flex justify-center px-4 sm:px-6 lg:px-8'
    }`}>
      <header 
        className={`w-full ${
          isAtTop 
            ? 'bg-[#1A1B1E] transition-all duration-300' 
            : isVisible 
              ? 'max-w-4xl translate-y-4 bg-[#0f0f0f]/30 backdrop-blur-[10px] rounded-full shadow-md transition-all duration-300'
              : 'max-w-4xl -translate-y-full bg-transparent transition-none'
        }`}
      >
        <div className={`relative overflow-hidden ${!isAtTop ? 'rounded-[50px]' : ''}`}>
          <div className="relative z-10">
            <div className={`flex items-center h-14 sm:h-16 md:h-20 ${
              isAtTop ? 'max-w-7xl mx-auto py-2 sm:py-2 lg:py-4 px-4 sm:px-4 lg:px-8' : 'p-2 sm:p-2 lg:p-4'
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