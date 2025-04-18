"use client";

import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import TitleCard from '@/components/TitleCard';

// Project data array
const projects = [
  {
    imageUrl: "/images/projects/CodeSagePhoto.png",
    title: "⭐ CodeSage (Coming Soon) ⭐",
    description: "A web-based platform designed to enhance coding comprehension through real-time code visualization and AI-generated explanations. Built with TypeScript, React, Express, and PostgreSQL, it integrates the Monaco code editor for an interactive coding experience and utilizes the OpenRouter API to stream insightful code annotations.",
    technologies: ["TypeScript", "Express", "React", "PostgreSQL"],
    githubUrl: "https://github.com/orgs/codeVisualizer2/repositories",
    showDemo: false
  },
  {
    imageUrl: "/images/projects/TermiumPlusAPI.png",
    title: "⭐ Termium Plus API ⭐",
    description: "A FastAPI-based REST API that provides access to Canada's TERMIUM Plus® terminology database, offering specialized multilingual terms in English, French, Spanish, and Portuguese. This unique resource, derived from the Government of Canada's official linguistic data bank, is invaluable for legal documentation, international trade, policy development, and technical translations.",
    technologies: ["Docker", "Python", "FastAPI", "JavaScript"],
    githubUrl: "https://github.com/julianchen24/Termium-Plus-API",
    demoUrl: "https://api.julianchen.net/static/index.html",
    showDemo: true
  },
  {
    imageUrl: "/images/projects/FluentAIPhoto.png",
    title: "⭐ FluentAI ⭐",
    description: "An offline, on-premise AI Machine Translation service supporting over 50 languages with dynamic model loading. It leverages Marian-NMT runtime and pre-trained Opus-MT models to provide high-quality translations without internet connectivity. The system uses a dynamic model loading mechanism with an LRU cache to manage resources efficiently.",
    technologies: ["Docker", "Python", "FastAPI"],
    githubUrl: "https://github.com/julianchen24/FluentAI",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/AIVectorizerPhoto.png",
    title: "⭐ AI Vectorizer ⭐",
    description: "A full-stack application that combines a FastAPI backend with a React frontend to provide document management, semantic search, vector visualization, and document insights capabilities. The application allows users to upload documents, process them into vector representations, search for similar content, visualize document relationships, and gain insights through clustering and similarity analysis.",
    technologies: ["Tailwind CSS", "React", "FastAPI", "D3.js", "NumPy"],
    githubUrl: "https://github.com/julianchen24/AI-Vectorizer",
    demoUrl: "https://your-ecommerce-demo.com"
  },
  {
    imageUrl: "/images/projects/LinkComPhoto.jpg",
    title: "⭐ LinkCom ⭐",
    description: "A wireless messaging system designed to make communication accessible, utilizing STM32 microcontrollers, an LCD, a keypad, and GPIO signals. It enables users to send and receive predefined messages through a simple interface, showcasing effective hardware-software integration.",
    technologies: ["STM32", "C", "Altium", "Fusion360"],
    githubUrl: "https://github.com/julianchen24/LinkCom",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/CroakQuestPhoto.png",
    title: "⭐ Croak Quest ⭐",
    description: "An award-winning 2D platformer created for nwHacks 2025, Croak Quest teaches American Sign Language (ASL) using Leap Motion-powered hand gestures. Players learn ASL in an engaging and interactive Unity experience, combining education and fun.",
    technologies: ["C#", "Unity", "Leap Motion"],
    githubUrl: "https://github.com/julianchen24/Croak-Quest",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/ESGClassification.png",
    title: "ESG Classification",
    description: "Developed during my internship at Resonate AI, this project utilizes ESG-BERT, spaCy, and Seaborn to classify and visualize ESG themes within corporate reports. It enables granular analysis of Environmental, Social, and Governance content, highlighting reporting gaps through intuitive heatmap visualizations.",
    technologies: ["PyTorch", "ESG-BERT", "Python", "spaCy", "Matplotlib", "Seaborn" ],
    githubUrl: "https://github.com/julianchen24/ESG-Classification-Heatmap",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/WaapPhoto.png",
    title: "Workforce Adjustment Alternation Portal",
    description: "A Django-based web application developed as a proof of concept for the Government of Canada, WAAP facilitates workforce adjustments by allowing affected employees to post and explore alternation opportunities. It streamlines the alternation process, promoting efficient workforce management.",
    technologies: ["Django", "PostgreSQL", "Bootstrap", "Python","JavaScript"],
    githubUrl: "https://github.com/julianchen24/Workforce-Adjustment-Alternation-Portal",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/PowerPromptPhoto.png",
    title: "PowerPrompt",
    description: "Developed for the Climate Change-Makers Challenge 2025, PowerPrompt is a Chrome extension that helps users craft efficient AI prompts, reducing unnecessary computation and minimizing energy waste. With real-time feedback and an engaging animated mascot, it promotes sustainable AI usage in a fun and interactive way.",
    technologies: ["React", "JavaScript", "Vite", "Chrome Storage API"],
    githubUrl: "https://github.com/julianchen24/PowerPrompt",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/WhisperAIDemo.png",
    title: "WhisperAI",
    description: "An AI-powered speech-to-text transcription service using OpenAI's Whisper model. It allows users to upload MP3 files and receive automatic transcriptions through a FastAPI backend and a Gradio web-based frontend. The service supports automatic language detection and manual selection for English, French, and Spanish.",
    technologies: ["FastAPI", "Python", "Gradio"],
    githubUrl: "https://github.com/julianchen24/Whisper-AI-Service",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/FlashCards.png",
    title: "FlashCards",
    description: "A responsive and interactive flashcard study tool built with React.js, JavaScript, HTML, and CSS, designed to help users learn and practice effectively. The application allows users to choose from a variety of questions and answers, flip flashcards, and interact with options seamlessly.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/julianchen24/FlashCards",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/CalendarPhoto.png",
    title: "MyCalendar",
    description: "A Java-based Calendar Event Management System that allows users to create, view, and manage events in a MySQL database. The system features a user interface built with Java Swing for managing events, including title, description, date, and time.",
    technologies: ["Java", "Java Swing", "MySQL"],
    githubUrl: "https://github.com/julianchen24/CalendarTool",
    demoUrl: "https://your-task-app-demo.com"
  },
  {
    imageUrl: "/images/projects/PortfolioLandingPagePhoto.png",
    title: "⭐ This Website! ⭐",
    description: "A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my projects and skills. It features a responsive design and interactive elements to provide an engaging user experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/julianchen24/julian-portfolio",
    demoUrl: "https://your-task-app-demo.com"
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Gradient background container for TitleCard */}
      <div className="w-full bg-gradient-to-b from-[#83AEE2] to-white dark:from-[#4D7CB6] dark:to-gray-900 py-16 h-80">
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
              showDemo={project.showDemo} // Pass the showDemo property
            />
          ))}
        </div>
      </div>
    </main>
  );
}