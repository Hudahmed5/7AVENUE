'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      style={{ fontFamily: 'Space Grotesk' }}
      aria-label="Toggle theme"
    >
      <Image 
        src="/svg/mode_icon.svg" 
        alt="Theme toggle" 
        width={24} 
        height={24}
        className="brightness-0 invert"
      />
    </button>
  );
};

export default ThemeToggle; 