'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import ThemeToggle from './ThemeToggle';
import ContactButton from './ContactButton';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Improved scroll lock implementation
  const toggleScrollLock = useCallback((lock: boolean) => {
    if (lock) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, []);

  useEffect(() => {
    toggleScrollLock(isMenuOpen);
    
    // Cleanup function
    return () => {
      if (isMenuOpen) {
        toggleScrollLock(false);
      }
    };
  }, [isMenuOpen, toggleScrollLock]);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <div className="flex items-center gap-4 md:hidden">
        <ThemeToggle />
        {/* Mobile menu button */}
        <button
          onClick={handleMenuToggle}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#1A1B1E] z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-white" onClick={handleLinkClick}>
              7AVENUE
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={handleMenuToggle}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation items */}
          <nav className="flex flex-col items-start p-4 space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-4xl font-bold text-white hover:text-[#FFD700] transition-colors"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom section with contact button */}
          <div className="mt-auto p-4">
            <div className="inline-block">
              <ContactButton className="text-xl py-2.5 px-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center gap-6" style={{fontFamily: 'Space Grotesk'}}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm lg:text-base text-gray-300 hover:text-[#FFD700] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Navigation; 