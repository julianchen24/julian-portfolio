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
  

  const descriptionPoints = description.split('\n');


  const renderFormattedText = (text: string) => {

    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {

        const boldText = part.slice(2, -2);
        return <strong key={i} className="font-semibold">{boldText}</strong>;
      }
      return <span key={i}>{part}</span>;
    });
  };

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

  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center opacity-0 translate-y-8 transform transition duration-1000 ease-out`}
    >
      <div className="absolute z-10 left-1/2 md:left-[50%] transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 timeline-line">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 timeline-dot"></div>
        
        <div className={`absolute top-8 ${isEven ? 'left-1/2' : 'right-1/2'} flex items-center timeline-date`}>
          <div className={`h-px w-12 bg-blue-400 dark:bg-blue-600 ${isEven ? 'ml-5' : 'mr-5 order-2'}`}></div>
          
          <div className={`text-lg font-medium text-blue-600 dark:text-blue-400 whitespace-nowrap ${isEven ? 'order-2 ml-2' : 'order-1 mr-2'}`}>
            {duration}
          </div>
        </div>
      </div>
      <div 
        className={`relative z-20 bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 md:w-[46%] mb-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ${isEven ? 'md:mr-[8%]' : 'md:ml-[8%]'}`}
      >
        <div className="flex gap-4">
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


          <div className="flex-grow">
       
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
   
                {location && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {location}
                  </span>
                )}
              </div>
            </div>
            

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