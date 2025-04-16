"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ExperienceCardProps {
  title: string;
  duration: string;
  description: string;
  company?: string;
  location?: string;
  imageUrl?: string;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  duration,
  description,
  company,
  location,
  imageUrl = '/images/placeholder.png',
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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

  // Add scroll animation using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Determine the side of the timeline for alternating layout
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center opacity-0 translate-y-8 transform transition duration-1000 ease-out`}
    >
      {/* Timeline line and dot */}
      <div className="absolute z-10 left-1/2 md:left-[50%] transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 timeline-line">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 timeline-dot"></div>
      </div>

      {/* Content card - More horizontal layout */}
      <div 
        className={`relative z-20 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:w-[46%] mb-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${isEven ? 'md:mr-[8%]' : 'md:ml-[8%]'}`}
      >
        <div className="flex gap-4">
          {/* Left side - Image */}
          <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden">
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
            {/* Top Row - Title, Company, Duration */}
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div className="mr-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
                {company && (
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {company}
                  </span>
                )}
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
                {location && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {location}
                  </span>
                )}
              </div>
            </div>
            
            {/* Description - Horizontal Layout */}
            <div className="text-md text-gray-700 dark:text-gray-300">
              <div className="flex flex-wrap gap-x-4">
                {descriptionPoints.map((point, idx) => (
                  point ? (
                    <div key={idx} className="flex mb-1 last:mb-0 w-full">
                      <div className="mr-2 flex-shrink-0">•</div>
                      <div>{renderFormattedText(point.startsWith('•') ? point.substring(1).trim() : point)}</div>
                    </div>
                  ) : null
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;