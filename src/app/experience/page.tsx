"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import TitleCard from '@/components/TitleCard';

const experiences = [
  {
    title: "Autonomous Software Developer",
    company: "WATonomous",
    location: "Waterloo, ON",
    duration: "Jan 2025 - Present",
    description: "Built an autonomous navigation system using **C++, Python, ROS2**, implementing path planning with the **A*** **algorithm**\nDeveloped a real-time obstacle detection system that processes raw LIDAR sensor data to generate dynamic environmental maps, achieving a **95% path execution success rate** in autonomous navigation tasks",
    imageUrl: "/images/experiences/WATonomousPhoto.jpg"
  },
  {
    title: "Database Analyst",
    company: "Blue Insight Consultation",
    location: "Vancouver, BC",
    duration: "Jan 2025 - Apr 2025",
    description: "Maintained **PL/SQL** procedures and developed custom scripts using **Toad for Oracle** to analyze, extract, cleanse, and filter employee management data for enterprise-scale clients\nMonitored critical HRIS components within a multi-tier architecture including virtualized applications, Windows-based web services, and Oracle databases on Linux servers, ensuring consistent system performance\nSupported SDLC with regression testing and debugging of Oracle packages across Development, QA, UAT, and Production environments, cutting maintenance downtime by **25%**",
    imageUrl: "/images/experiences/BlueInsight.png"
  },
  {
    title: "Microsoft Azure AI Developer Intern",
    company: "Resonate AI | University Of Waterloo",
    location: "Remote — Waterloo, ON",
    duration: "Jan 2025 - Apr 2025",
    description: "Implemented **ESG-BERT** NLP system using **PyTorch**, spaCy, and Matplotlib/Seaborn for sustainability report classification and sentiment analysis, achieving **85%** **classification accuracy** and generating clear heatmaps\n**Led team of 6** in preparing/presenting ESG analytics reports with heatmaps & detailed insights to entire startup",
    imageUrl: "/images/experiences/ResonateAI.jpg"
  },
  {
    title: "Firmware Developer",
    company: "Midnight Sun Solar Car Design Team",
    location: "Waterloo, ON",
    duration: "Sep 2024 - Dec 2024",
    description: "Designed a user-friendly driver for **STM32** tamper detection and interrupt handling, achieving **100%** **backup register test** **coverage** to ensure secure access control during power loss\nConfigured a multi-channel ADC driver in **C/C++** using **I2C** **communication** for continuous signal conversion",
    imageUrl: "/images/experiences/MidnightSun.jpg"
  },
  {
    title: "Teaching Assistant",
    company: "Kumon Math and Reading Centre",
    location: "Vancouver, BC",
    duration: "Mar 2022 - Sep 2024",
    description: "Documented student progress with structured reports, boosting parent satisfaction ratings by **12%**\nGuided **25+** students in Math and English, simplifying complex concepts with personalized support",
    imageUrl: "/images/experiences/Kumon.png"
  }
];

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = entry.target;
            timeline.classList.add('animate-timeline');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-800">
      <div className="w-full bg-gradient-to-b from-[#83AEE2] to-white dark:from-[#4D7CB6] dark:to-gray-900 py-16 h-80">
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

        <div ref={timelineRef} className="relative pt-8 pb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-blue-200 dark:bg-blue-900 timeline-line"></div>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              duration={experience.duration}
              description={experience.description}
              imageUrl={experience.imageUrl}
              index={index}
            />
          ))}

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 timeline-dot"></div>
        </div>
      </div>
    </main>
  );
}