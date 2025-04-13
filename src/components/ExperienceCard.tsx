"use client";

import React from 'react';

interface ExperienceCardProps {
  title: string;
  duration: string;
  description: string;
  company?: string;
  location?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  duration,
  description,
  company,
  location
}) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h2>
        {company && (
          <span className="text-lg text-gray-700 dark:text-gray-300 mt-1 md:mt-0">
            {company}
          </span>
        )}
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
        {location && (
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
            {location}
          </span>
        )}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
