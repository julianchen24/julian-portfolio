"use client";

import React, { useRef, useState, useEffect } from 'react';
import HomeExperienceCard from './HomeExperienceCard';
import Link from 'next/link';

// Using the actual experiences from your project
const experiences = [
  {
    imageUrl: "/images/experiences/MidnightSun.jpg",
    title: "Firmware Developer",
    company: "Midnight Sun Solar Car Design Team",
    location: "Waterloo, ON",
    duration: "Sep 2024 - Dec 2024"
  },
  {
    imageUrl: "/images/experiences/Kumon.png",
    title: "Teaching Assistant",
    company: "Kumon Math and Reading Centre",
    location: "Vancouver, BC",
    duration: "Mar 2022 - Sep 2024"
  },
  {
    imageUrl: "/images/experiences/BlueInsight.png",
    title: "Database Analyst",
    company: "Blue Insight Consultation",
    location: "Vancouver, BC",
    duration: "Jan 2025 - Present"
  },
  {
    imageUrl: "/images/experiences/ResonateAI.jpg",
    title: "Microsoft Azure AI Developer",
    company: "Resonate AI | University Of Waterloo",
    location: "Remote — Waterloo, ON",
    duration: "Jan 2025 - Apr 2025"
  }
];

// Need to duplicate the array to create a seamless loop effect
const duplicatedExperiences = [...experiences, ...experiences];

const HomeExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Get container and card dimensions
  useEffect(() => {
    if (containerRef.current) {
      // Calculate card width including margins
      const firstCard = containerRef.current.querySelector('.experience-card');
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        setCardWidth(cardRect.width + 24); // width + margin
      }
    }

    const handleResize = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector('.experience-card');
        if (firstCard) {
          const cardRect = firstCard.getBoundingClientRect();
          setCardWidth(cardRect.width + 24); // width + margin
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate the scroll
  useEffect(() => {
    if (!isAnimating || cardWidth === 0) return;

    const scrollSpeed = 1; // pixels per frame - adjust for faster/slower
    const totalWidth = cardWidth * experiences.length;
    
    let animationFrameId: number;
    let currentPosition = scrollPosition;

    const animate = () => {
      currentPosition = (currentPosition + scrollSpeed) % totalWidth;
      
      if (containerRef.current) {
        containerRef.current.scrollLeft = currentPosition;
      }
      
      setScrollPosition(currentPosition);
      
      // Calculate active index
      const newActiveIndex = Math.floor(currentPosition / cardWidth) % experiences.length;
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAnimating, scrollPosition, cardWidth, activeIndex]);

  // Handle manual dot navigation
  const goToCard = (index: number) => {
    setIsAnimating(false);
    setActiveIndex(index);
    
    if (containerRef.current) {
      const newPosition = index * cardWidth;
      containerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
      
      // Resume animation after transition
      setTimeout(() => {
        setIsAnimating(true);
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Card container with gradient background and hover effects */}
      <div 
        className="border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-6 md:p-8
          bg-gradient-to-b from-[#83AEE2]/30 to-white dark:from-[#4D7CB6]/30 dark:to-gray-800
          transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:from-[#83AEE2]/40 hover:to-white dark:hover:from-[#4D7CB6]/40"
        onMouseEnter={() => {
          setIsHovering(true);
          setIsAnimating(false);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsAnimating(true);
        }}
      >
        
        {/* Blue title matching the image */}
        <h2 className="text-4xl font-bold mb-8 text-[#6989BE] dark:text-[#83AEE2]">
          Experience
        </h2>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Places I have worked and projects I have contributed to throughout my career.
        </p>
        
        {/* Scrollable Experience Card Container - Continuous scroll */}
        <div className="relative mx-auto w-full overflow-hidden">
          {/* Scrollable Container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-hidden"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex space-x-6 pl-3 pr-3">
              {duplicatedExperiences.map((exp, index) => (
                <div key={index} className="experience-card flex-shrink-0">
                  <HomeExperienceCard
                    imageUrl={exp.imageUrl}
                    title={exp.title}
                    company={exp.company}
                    location={exp.location}
                    duration={exp.duration}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center space-x-3 mt-6">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-blue-500 dark:bg-blue-400 w-4'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* View All Experiences Link - Updated with gradient background */}
        <div className="mt-10 text-center">
          <Link
            href="/experience"
            className="inline-flex items-center px-6 py-3 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300
              bg-gradient-to-b from-[#83AEE2] to-[#4D7CB6] dark:from-[#83AEE2] dark:to-[#4D7CB6] 
              hover:from-[#83AEE2] hover:to-[#4165AA] dark:hover:from-[#83AEE2] dark:hover:to-[#4165AA]"
          >
            View All Experiences
            <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeExperienceSection;