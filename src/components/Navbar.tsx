"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  // Initialize dark mode based on system preference or localStorage
  useEffect(() => {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem("darkMode");
    
    if (savedMode) {
      setDarkMode(savedMode === "true");
    } else {
      // Use system preference as default
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Add scroll event listener to track if page is at top
  useEffect(() => {
    const handleScroll = () => {
      // Check if window exists (client-side only)
      if (typeof window !== 'undefined') {
        // Set isAtTop to true when scrollY is 0, false otherwise
        setIsAtTop(window.scrollY < 10); // Using a small threshold to make detection more reliable
      }
    };

    // Set initial state
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update the DOM when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference to localStorage
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isAtTop 
          ? 'bg-transparent' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md'
      }`}
      style={{ 
        backgroundColor: isAtTop ? 'transparent' : undefined,
        pointerEvents: 'auto' // Ensure clicks are always registered
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className={`text-xl font-bold transition-colors duration-300 ${
                isAtTop 
                  ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                  : 'text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Julian
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isAtTop 
                    ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isAtTop 
                    ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/experience" 
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isAtTop 
                    ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Experience
              </Link>
              <Link 
                href="/gallery" 
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isAtTop 
                    ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Gallery
              </Link>

              {/* GitHub */}
              <a
                href="https://github.com/julianchen24"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 rounded-md flex items-center gap-2 text-lg font-medium transition-colors duration-300 ${
                  isAtTop 
                    ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                aria-label="GitHub"
              >
                <span>GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.38 9.38 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.71 1.03 1.62 1.03 2.74 0 3.95-2.34 4.82-4.57 5.07.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              
              <a 
                href="https://drive.google.com/file/d/1FbjZrUj9J0fUzzxyrwgCoRruT6dAkCAP/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isAtTop 
                    ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Resume
              </a>
              
            </div>
          </div>
          
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                isAtTop 
                  ? 'text-white hover:text-gray-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}