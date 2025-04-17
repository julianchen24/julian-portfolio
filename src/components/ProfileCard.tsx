"use client";

import React from 'react';
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Card container with gradient background similar to other sections */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-6 md:p-8
        bg-gradient-to-b from-[#83AEE2]/30 to-white dark:from-[#4D7CB6]/30 dark:to-gray-800">
        
        {/* Blue title matching the image */}
        <h2 className="text-4xl font-bold mb-8 text-[#6989BE] dark:text-[#83AEE2]">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Left: Profile Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/PortfolioJulian.jpg"
              alt="Julian on a dock"
              width={400}
              height={300}
              className="rounded-xl object-cover shadow-md"
            />
          </div>
          
          {/* Right: Profile Info + About Me + Tech Stack */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Julian Chen
            </h2>
            <p className="text-lg font-medium text-[#4D7CB6] dark:text-[#83AEE2] mb-4">
              UNIVERSITY OF WATERLOO COMPUTER ENGINEERING
            </p>
            
            {/* About Me Section */}
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              About Me
            </h2>
            <div className="w-full mb-6">
              <p className="text-gray-700 text-lg dark:text-gray-300 mb-4 text-justify">
                I am a Computer Engineering student at the University of Waterloo passionate about using technology to genuinely help others
                and solve real-world problems. I am especially interested in full-stack development, machine learning, and cloud computing.
              </p>
              <p className="text-gray-700 text-lg dark:text-gray-300 mb-4 text-justify">
                Originally from Vancouver, BC, I am now studying in Waterloo, ON. Beyond my tech interests, I love trying new foods, skiing,
                basketball, running, skating, photography, and chasing sunsets.
              </p>
            </div>
            
            {/* Contact Info */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center md:text-left">
              Feel free to contact me at{" "}
              <a
                href="mailto:jy24chen@uwaterloo.ca"
                className="text-[#4D7CB6] hover:text-[#365B8C] dark:text-[#83AEE2] dark:hover:text-[#B2D0F0]"
              >
                jy24chen@uwaterloo.ca
              </a>{" "}
              or on{" "}
              <a
                href="https://www.linkedin.com/in/julian--chen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4D7CB6] hover:text-[#365B8C] dark:text-[#83AEE2] dark:hover:text-[#B2D0F0]"
              >
                LinkedIn
              </a>!
            </p>
            
            {/* Technologies Grid */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-[#6989BE] dark:text-[#83AEE2] mb-3">
                I built and designed this website using Next.js, TypeScript, and Tailwind!
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { src: "/images/waterloo-logo.png", alt: "UWaterloo", label: "UWaterloo" },
                  { src: "/images/nextjs-logo.png", alt: "Next.js", label: "Next.js" },
                  { src: "/images/tailwind-logo.png", alt: "Tailwind CSS", label: "Tailwind CSS" },
                  { src: "/images/typescript-logo.png", alt: "TypeScript", label: "TypeScript" },
                ].map(({ src, alt, label }) => (
                  <div key={alt} className="flex flex-col items-center p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg transition-all duration-300 hover:shadow-md">
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
      </div>
    </div>
  );
}