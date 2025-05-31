import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-16 bg-cover bg-center" style={{ backgroundImage: 'url(/img/footer_bg.jpg)', fontFamily: 'Clash Display Semibold' }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content container */}
      <div className="relative container mx-auto px-4">
        {/* First row */}
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-sm text-gray-400 mb-2">Let's work together</p>
              <h2 className="text-4xl font-bold text-white">Let's work together</h2>
            </div>
            
            {/* Circle with arrow */}
            <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors">
              <BsArrowUpRight className="w-6 h-6" />
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex gap-6">
            <Link href="https://instagram.com" className="text-white hover:text-yellow-400 transition-colors">
              {/* <FaInstagram className="w-6 h-6" /> */}
              Instagram
            </Link>
            <Link href="https://twitter.com" className="text-white hover:text-yellow-400 transition-colors">
              {/* <FaTwitter className="w-6 h-6" /> */}
              Twitter
            </Link>
            <Link href="https://linkedin.com" className="text-white hover:text-yellow-400 transition-colors">
              {/* <FaLinkedin className="w-6 h-6" /> */}
              LinkedIn
            </Link>
          </div>
        </div>
        
        {/* Second row */}
        <div className="text-center my-40">
          <h1 className="text-6xl font-bold text-white tracking-wide">
            DISCOVER YOUR<br />BRAND'S — STORY
          </h1>
        </div>
        
        {/* Third row */}
        <div className="flex justify-between items-center">
          <p className="text-gray-400">© 2025 7AVENUE MEDIA. All Rights Reserved.</p>
          <Link href="/privacy-policy" className="text-white hover:text-yellow-400 transition-colors">
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 