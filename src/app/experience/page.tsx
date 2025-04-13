"use client";

import React from 'react';
import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';

// Experience data array
const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Innovations Inc.",
    location: "Vancouver, BC",
    duration: "2022 - Present",
    description: "Led development of multiple web applications using React, Next.js, and TypeScript. Implemented CI/CD pipelines and mentored junior developers."
  },
  {
    title: "Web Developer",
    company: "Digital Solutions Ltd.",
    location: "Toronto, ON",
    duration: "2019 - 2022",
    description: "Developed responsive web applications and implemented modern UI/UX designs. Worked with React, Vue.js, and various backend technologies."
  },
  {
    title: "Junior Developer",
    company: "WebCraft Studios",
    location: "Montreal, QC",
    duration: "2017 - 2019",
    description: "Started career working on frontend development with HTML, CSS, and JavaScript. Contributed to various projects and gained experience in modern web technologies."
  }
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Experience</h1>
        
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
