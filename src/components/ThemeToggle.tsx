"use client";

import React from 'react';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = "" }) => {
  const [isDark, setIsDark] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Add your theme switching logic here
  };

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center rounded-lg p-2 ${className}`}>
        <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <button 
      onClick={toggleTheme}
      className={`flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors p-2 ${className}`}
      aria-label="Toggle dark mode"
    >
      <svg width="20" height="20" viewBox="0 0 512 512" aria-hidden="true" fill="#00a6a2">
        <path d="M48 256c0-0.008 0-0.018 0-0.029 0-114.859 93.112-207.971 207.971-207.971 0.011 0 0.020 0 0.031 0h-0.002v416c-0.008 0-0.018 0-0.029 0-114.859 0-207.971-93.112-207.971-207.971 0-0.010 0-0.020 0-0.030v0.002zM512 256c-0.003-94.254-50.942-176.611-126.791-221.042l-1.209-0.654c-36.718-21.563-80.871-34.297-128-34.297s-91.282 12.735-129.208 34.952l1.208-0.654c-77.058 45.086-127.997 127.442-128 221.695v0.001c0.003 94.254 50.941 176.611 126.791 221.042l1.209 0.654c36.718 21.563 80.871 34.297 128 34.297s91.282-12.735 129.208-34.952l-1.209 0.654c77.058-45.086 127.997-127.442 128-221.695v-0z"/>
      </svg>
    </button>
  );
};

export default ThemeToggle;
