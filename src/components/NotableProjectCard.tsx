"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotableProjectCard: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Card container with gradient background and hover effects */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-6 md:p-8
        bg-gradient-to-b from-[#83AEE2]/30 to-white dark:from-[#4D7CB6]/30 dark:to-gray-800
        transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:from-[#83AEE2]/40 hover:to-white dark:hover:from-[#4D7CB6]/40">
        
        {/* Rest of the component remains the same */}
        <h2 className="text-4xl font-bold mb-8 text-[#6989BE] dark:text-[#83AEE2]">
        ⭐ Notable Project ⭐
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 mb-6">
          {/* Left side - Project Image (made taller) */}
          <div className="md:w-3/5 h-96 md:h-[500px] rounded-lg overflow-hidden">
            <div className="relative w-full h-full">
              <Image 
                src="/images/projects/TermiumPlusAPI.png"
                alt="Termium Plus API"
                fill
                className="object-contain bg-white dark:bg-gray-700 p-2"
              />
            </div>
          </div>
          
          {/* Right side - Project Info */}
          <div className="md:w-2/5 flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-[#6989BE] dark:text-[#83AEE2] mb-4">
              Termium Plus API
            </h3>
            
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
            An API service for Canada&apos;s TERMIUM Plus® terminology database, providing access to specialized multilingual terms across English, French, Spanish, and Portuguese. This unique resource contains terminology that exists nowhere else, derived from the Government of Canada&apos;s official linguistic data bank with millions of specialized terms for legal documentation, international trade, policy development, and technical translations.
            </p>
          </div>
        </div>
        
        {/* Button row - both buttons on same line */}
        <div className="mt-6 flex justify-end items-center">
          {/* Buttons side by side */}
          <div className="flex gap-4">
            <a 
              href="https://api.julianchen.net/static/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300
                bg-gradient-to-b from-[#83AEE2] to-[#4D7CB6] dark:from-[#83AEE2] dark:to-[#4D7CB6] 
                hover:from-[#83AEE2] hover:to-[#4165AA] dark:hover:from-[#83AEE2] dark:hover:to-[#4165AA]"
            >
              View Demo
              <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-2 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300
                bg-gradient-to-b from-[#83AEE2] to-[#4D7CB6] dark:from-[#83AEE2] dark:to-[#4D7CB6] 
                hover:from-[#83AEE2] hover:to-[#4165AA] dark:hover:from-[#83AEE2] dark:hover:to-[#4165AA]"
            >
              Check Out More Projects
              <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotableProjectCard;