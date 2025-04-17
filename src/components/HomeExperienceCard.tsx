"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HomeExperienceCardProps {
  imageUrl: string;
  title: string;
  company: string;
  location: string;
  duration: string;
}

const HomeExperienceCard: React.FC<HomeExperienceCardProps> = ({
  imageUrl,
  title,
  company,
  location,
  duration
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100 dark:border-gray-700 w-full md:w-[500px] lg:w-[600px] flex-shrink-0 h-44">
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image 
              src={imageUrl}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Title and Company */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{company}</p>
          <div className="flex flex-col text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{location}</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
      
      {/* View Details Link */}
      <div className="mt-auto pt-2 flex justify-between items-center">
        <Link 
          href="/experience"
          className="flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          View details
        </Link>
        
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  );
};

export default HomeExperienceCard;