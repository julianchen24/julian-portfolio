"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  targetPath: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, targetPath, children }) => {
  const router = useRouter();
  
  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
        {children && <div className="text-gray-700 dark:text-gray-300 mb-4">{children}</div>}
        <button
          onClick={() => navigateToPage(targetPath)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View {title}
          <svg 
            className="w-4 h-4 ml-2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
