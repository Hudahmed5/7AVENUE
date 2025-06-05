import React from 'react';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 bg-cover bg-center" style={{ backgroundImage: 'url(/img/footer_bg.jpg)', fontFamily: 'Clash Display Semibold' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 mb-10 sm:mb-20">
          <div className="flex items-center gap-4 sm:gap-8">
            <div style={{fontFamily: 'Space Grotesk'}}>
              <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Let&apos;s work together</p>
              <h2 className="text-2xl sm:text-4xl font-bold text-white">Let&apos;s work together</h2>
            </div>
            
            {/* Circle with arrow */}
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#FFDB71] flex items-center justify-center cursor-pointer hover:bg-[#FFDB71] transition-colors group">
              <BsArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 text-black transform group-hover:-rotate-45 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4 sm:gap-6 text-sm sm:text-base" style={{fontFamily: 'Space Grotesk'}}>
            <Link href="https://instagram.com" className="text-white hover:text-[#FFDB71] transition-colors">
              Instagram
            </Link>
            <Link href="https://twitter.com" className="text-white hover:text-[#FFDB71] transition-colors">
              Twitter
            </Link>
            <Link href="https://linkedin.com" className="text-white hover:text-[#FFDB71] transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
        
        {/* Second row */}
        <div className="text-center my-20 sm:my-40">
          <h1 className="text-white tracking-wide text-[57px] md:text-[101px]"
          style={{ 
            fontFamily: 'Clash Display Semibold',
            lineHeight: '100%', 
            letterSpacing: '-1px' 
          }}>
            DISCOVER YOUR<br />BRAND&apos;S — STORY
          </h1>
        </div>
        
        {/* Third row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0" style={{fontFamily: 'DM Sans'}}>
          <p className="text-sm text-gray-400 text-center sm:text-left">© 2025 7AVENUE MEDIA. All Rights Reserved.</p>
          <Link href="/privacy-policy" className="text-sm text-white hover:text-yellow-400 transition-colors">
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 