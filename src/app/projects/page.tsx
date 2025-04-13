"use client";

import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

// Project data array
const projects = [
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "CodeSage (Coming Soon)",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio-website",
    demoUrl: "https://your-live-demo-url.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "Termium Plus API",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "FluentAI",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "AI Vectorizer",
    description: "A full-stack e-commerce platform with product management and payment processing.",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    demoUrl: "https://your-ecommerce-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "LinkCom",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "Croak Quest",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "ESG Classification",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "Workforce Adjustment Alternation Portal",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "PowerPrompt",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "WhisperAI",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "FlashCards",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "MyCalendar",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "This Website!",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
    demoUrl: "https://your-task-app-demo.com"
  }
  
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-20">
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
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map over projects array to render ProjectCard components */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
