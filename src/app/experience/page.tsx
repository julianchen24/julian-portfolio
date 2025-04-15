"use client";

import React from 'react';
import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import TitleCard from '@/components/TitleCard';

// Experience data array
const experiences = [
  {
    title: "Database Analyst",
    company: "Blue Insight Consultation",
    location: "Vancouver, BC",
    duration: "Jan 2025 - Present",
    description: ""
  },
  {
    title: "Microsoft Azure AI Developer",
    company: "Resonate AI | University Of Waterloo",
    location: "Remote",
    duration: "Jan 2025 - Apr 2025",
    description: ""
  },
  {
    title: "Firmware Developer",
    company: "Midnight Sun Solar Car Design Team",
    location: "Waterloo, ON",
    duration: "Sep 2024 - Dec 2024",
    description: ""
  },
  {
    title: "Teaching Assistant",
    company: "Kumon Math and Reading Centre",
    location: "Vancouver, BC",
    duration: "Mar 2022 - Sep 2024",
    description: ""
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-800">
      {/* Gradient background container for TitleCard */}
      <div className="w-full bg-gradient-to-b from-[#83AEE2] to-white py-16 h-80">
        <TitleCard 
          title="EXPERIENCE"
          subtitle="My Professional Journey"
          description="A timeline of my career path and professional achievements."
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8 flex items-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Home
          </Link>
        </div>
        
        <div className="space-y-12">
          {/* Map over experiences array to render ExperienceCard components */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              duration={experience.duration}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
