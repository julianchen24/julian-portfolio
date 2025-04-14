"use client";

import React from 'react';
import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import TitleCard from '@/components/TitleCard';

// Experience data array
const experiences = [
  {
    title: "Database Analyst",
    company: "Tech Innovations Inc.",
    location: "Vancouver, BC",
    duration: "2022 - Present",
    description: "Led development of multiple web applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    title: "Microsoft Azure AI Developer",
    company: "Digital Solutions Ltd.",
    location: "Toronto, ON",
    duration: "2019 - 2022",
    description: "Developed responsive web applications and implemented modern UI/UX designs. Worked with React, Vue.js, and various backend technologies."
  },
  {
    title: "Firmware Developer",
    company: "Digital Solutions Ltd.",
    location: "Toronto, ON",
    duration: "2019 - 2022",
    description: "Developed responsive web applications and implemented modern UI/UX designs. Worked with React, Vue.js, and various backend technologies."
  },
  {
    title: "Teaching Assistant",
    company: "WebCraft Studios",
    location: "Montreal, QC",
    duration: "2017 - 2019",
    description: "Started career working on frontend development with HTML, CSS, and JavaScript. Contributed to various projects and gained experience in modern web technologies."
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
