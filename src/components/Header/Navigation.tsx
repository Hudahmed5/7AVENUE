'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
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
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-12 right-0 w-48 py-2 mt-2 bg-[#1A1B1E] rounded-md shadow-xl md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation; 