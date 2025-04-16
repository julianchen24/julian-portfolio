"use client";

import React from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  duration: string;
  description: string;
  company?: string;
  location?: string;
  imageUrl?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  duration,
  description,
  company,
  location,
  imageUrl = '/images/placeholder.png' // Default placeholder image
}) => {
  // Split the description by newline characters to create an array of points
  const descriptionPoints = description.split('\n');

  // Function to render markdown-style bold text (**text**)
  const renderFormattedText = (text: string) => {
    // Replace **text** with <strong>text</strong>
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        // Extract the text between ** and **
        const boldText = part.slice(2, -2);
        return <strong key={i} className="font-semibold">{boldText}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Image */}
        <div className="flex-shrink-0 w-full md:w-32 h-32 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden mb-4 md:mb-0">
          <div className="relative w-full h-full">
            <Image 
              src={imageUrl}
              alt={`${company || title} logo`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-grow">
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
          
          <div className="text-gray-700 dark:text-gray-300">
            {descriptionPoints.map((point, index) => (
              point ? (
                <div key={index} className="mb-2 flex">
                  <div className="mr-2">•</div>
                  <div>{renderFormattedText(point.startsWith('•') ? point.substring(1).trim() : point)}</div>
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;