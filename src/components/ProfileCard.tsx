"use client";

import React from 'react';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="max-w-4xl mx-auto px-10 py-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      {/* 👇 Make the flex container wrap BOTH image and text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/PortfolioJulian.jpg"
            alt="Julian on a dock"
            width={300}
            height={300}
            className="rounded-xl object-cover shadow-md"
          />
        </div>

        {/* Right: Profile Info + Tech Stack */}
        <div className="flex-1 flex flex-col items-center md:items-start">
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

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { src: "/images/nextjs-logo.png", alt: "Next.js", label: "Next.js" },
              { src: "/images/tailwind-logo.png", alt: "Tailwind CSS", label: "Tailwind CSS" },
              { src: "/images/typescript-logo.png", alt: "TypeScript", label: "TypeScript" },
              { src: "/images/waterloo-logo.png", alt: "UWaterloo", label: "UWaterloo" },
            ].map(({ src, alt, label }) => (
              <div key={alt} className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-2">
                  <Image src={src} alt={alt} fill className="object-contain" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
