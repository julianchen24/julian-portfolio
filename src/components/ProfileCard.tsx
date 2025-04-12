"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfileCard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Julian Chen
          </h2>
          <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
            UNIVERSITY OF WATERLOO COMPUTER ENGINEERING
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center md:text-left">
            I built and designed this website using Next.js, TypeScript, and Tailwind!
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-center md:text-left">
            Feel free to contact me at{" "}
            <a 
              href="mailto:jy24chen@uwaterloo.ca" 
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              jy24chen@uwaterloo.ca
            </a>{" "}
            or on{" "}
            <a 
              href="https://www.linkedin.com/in/julian--chen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>!
          </p>
        </div>
        
        {/* Technologies Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-2">
              <Image 
                src="/images/nextjs-logo.png" 
                alt="Next.js" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Next.js</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-2">
              <Image 
                src="/images/tailwind-logo.png" 
                alt="Tailwind CSS" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Tailwind CSS</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-2">
              <Image 
                src="/images/typescript-logo.png" 
                alt="TypeScript" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">TypeScript</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 mb-2">
              <Image 
                src="/images/waterloo-logo.png" 
                alt="University of Waterloo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">UWaterloo</span>
          </div>
        </div>
      </div>
    </div>
  );
}