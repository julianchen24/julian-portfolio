"use client";

import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import TitleCard from '@/components/TitleCard';

// Project data array
const projects = [
  {
    imageUrl: "/images/projects/CodeSagePhoto.png",
    title: "CodeSage (Coming Soon)",
    description: "A personal portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["TypeScript", "Express", "React", "PostgreSQL"],
    githubUrl: "https://github.com/orgs/codeVisualizer2/repositories",
    demoUrl: "https://your-live-demo-url.com"
  },
  {
    imageUrl: "/images/projects/TermiumPlusAPI.png",
    title: "Termium Plus API",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Docker", "Python", "FastAPI", "JavaScript"],
    githubUrl: "https://github.com/julianchen24/Termium-Plus-API",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "FluentAI",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Docker", "Python", "FastAPI"],
    githubUrl: "https://github.com/julianchen24/FluentAI",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "AI Vectorizer",
    description: "A full-stack e-commerce platform with product management and payment processing.",
    technologies: ["Tailwind CSS", "React", "FastAPI", "D3.js", "NumPy"],
    githubUrl: "https://github.com/julianchen24/AI-Vectorizer",
    demoUrl: "https://your-ecommerce-demo.com"
  },
  {
    imageUrl: "/images/projects/LinkComPhoto.jpg",
    title: "LinkCom",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["STM32", "C", "Altium", "Fusion360"],
    githubUrl: "https://github.com/julianchen24/LinkCom",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/CroakQuestPhoto.png",
    title: "Croak Quest",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["C#", "Unity", "Leap Motion"],
    githubUrl: "https://github.com/julianchen24/Croak-Quest",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/ESGClassification.png",
    title: "ESG Classification",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["PyTorch", "ESG-BERT", "Python", "spaCy", "Matplotlib", "Seaborn" ],
    githubUrl: "https://github.com/julianchen24/ESG-Classification-Heatmap",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/WaapPhoto.png",
    title: "Workforce Adjustment Alternation Portal",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Django", "PostgreSQL", "Bootstrap", "Python","JavaScript"],
    githubUrl: "https://github.com/julianchen24/Workforce-Adjustment-Alternation-Portal",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/PowerPrompt.png",
    title: "PowerPrompt",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["React", "JavaScript", "Vite", "Chrome Storage API"],
    githubUrl: "https://github.com/julianchen24/PowerPrompt",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "https://via.placeholder.com/400x300",
    title: "WhisperAI",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["FastAPI", "Python", "Gradio"],
    githubUrl: "https://github.com/julianchen24/Whisper-AI-Service",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/FlashCards.png",
    title: "FlashCards",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/julianchen24/FlashCards",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/CalendarPhoto.png",
    title: "MyCalendar",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Java", "Java Swing", "MySQL"],
    githubUrl: "https://github.com/julianchen24/CalendarTool",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/PortfolioLandingPagePhoto.png",
    title: "This Website!",
    description: "A task management application with drag-and-drop functionality and team collaboration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/julianchen24/julian-portfolio",
    demoUrl: "https://your-task-app-demo.com"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Gradient background container for TitleCard */}
      <div className="w-full bg-gradient-to-b from-[#83AEE2] to-white py-16 h-80">
        <TitleCard 
          title="PROJECTS"
          subtitle="A Collection of My Work"
          description="Explore a curated selection of my most recent projects."
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
        
        {/* Modified grid: reduced to 2 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
