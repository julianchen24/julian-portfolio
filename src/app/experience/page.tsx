"use client";

import React from 'react';
import Link from 'next/link';

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
          {/* This will be replaced with a timeline component */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Senior Developer</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2022 - Present</p>
            <p className="text-gray-700 dark:text-gray-300">
              Led development of multiple web applications using React, Next.js, and TypeScript.
              Implemented CI/CD pipelines and mentored junior developers.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Web Developer</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2019 - 2022</p>
            <p className="text-gray-700 dark:text-gray-300">
              Developed responsive web applications and implemented modern UI/UX designs.
              Worked with React, Vue.js, and various backend technologies.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Junior Developer</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">2017 - 2019</p>
            <p className="text-gray-700 dark:text-gray-300">
              Started career working on frontend development with HTML, CSS, and JavaScript.
              Contributed to various projects and gained experience in modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
