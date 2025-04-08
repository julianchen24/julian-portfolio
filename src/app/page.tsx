"use client";

import React, { useEffect, useRef } from "react";

// Define types for our components
interface MountainProps {
  color: string;
  peakPosition: number;
  height: number;
  width: number;
  zIndex: number;
}

interface ParallaxProps {
  speed: number;
  zIndex: number;
  children: React.ReactNode;
}

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      
      // Apply parallax effect to different layers
      const layers = parallaxRef.current.querySelectorAll("[data-speed]");
      
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") || "0");
        const yPos = -(scrollY * speed);
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Parallax Landing Section */}
      <section className="relative h-screen overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0">
          {/* Sky Layer */}
          <div 
            className="absolute inset-0"
            data-speed="0.1"
            style={{
              background: "linear-gradient(to bottom, #83AEE2, #B2D0F0)",
              zIndex: 1
            }}
          />
          
          {/* Stars Layer */}
          <Stars speed={0.15} zIndex={2} />
          
          {/* Moon Layer */}
          <Moon speed={0.2} zIndex={3} />
          
          {/* Mountain Layers - From back to front */}
          <ParallaxLayer speed={0.3} zIndex={4}>
            <div className="absolute inset-x-0 bottom-[20vh]">
              <Mountain
                color="#395C8F"
                peakPosition={0.15}
                height={0.65}
                width={0.3}
                zIndex={1}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.35} zIndex={5}>
            <div className="absolute inset-x-0 bottom-[20vh]">
              <Mountain
                color="#4372A5"
                peakPosition={0.30}
                height={0.70}
                width={0.35}
                zIndex={2}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.45} zIndex={7}>
            <div className="absolute inset-x-0 bottom-[20vh]">
              <Mountain
                color="#4D7CB6"
                peakPosition={0.50}
                height={0.80}
                width={0.45}
                zIndex={4}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.4} zIndex={6}>
            <div className="absolute inset-x-0 bottom-[20vh]">
              <Mountain
                color="#3F6998"
                peakPosition={0.70}
                height={0.65}
                width={0.35}
                zIndex={3}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.3} zIndex={4}>
            <div className="absolute inset-x-0 bottom-[20vh]">
              <Mountain
                color="#446B9C"
                peakPosition={0.85}
                height={0.65}
                width={0.3}
                zIndex={1}
              />
            </div>
          </ParallaxLayer>
          
          {/* Water Layer */}
          <div 
            className="absolute inset-x-0 bottom-0 h-[20vh]"
            style={{ 
              backgroundColor: "#365B8C",
              zIndex: 8
            }}
            data-speed="0.05"
          >
            <WaterWaves />
          </div>
        </div>
        
        {/* Centered Heading */}
        <div className="absolute inset-x-0 top-1/4 flex items-start justify-center" style={{ zIndex: 50 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Hi, I am Julian
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 50 }}>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      
      {/* About Section (for smooth transition) */}
      <section id="about" className="min-h-screen bg-white dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Welcome to my portfolio! I am a passionate developer with expertise in web development and design.
            This is a placeholder for your about section. You can add more details about yourself, your skills,
            and your experience here.
          </p>
        </div>
      </section>
    </>
  );
}

// ParallaxLayer Component
function ParallaxLayer({ speed, zIndex, children }: ParallaxProps) {
  return (
    <div 
      className="absolute inset-0"
      data-speed={speed}
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}

// Stars Component
function Stars({ speed, zIndex }: { speed: number; zIndex: number }) {
  const stars = Array.from({ length: 50 }).map((_, i) => {
    // Use deterministic positions for consistent appearance
    const seed = i * 8761;
    const pseudoRandom = (n: number) => ((seed * n) % 997) / 997;
    
    const size = pseudoRandom(1) * 2 + 1;
    const top = pseudoRandom(2) * 60; // Only in top 60% of sky
    const left = pseudoRandom(3) * 100;
    const opacity = pseudoRandom(4) * 0.7 + 0.3;
    const delay = pseudoRandom(5) * 5;
    
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white animate-pulse"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          opacity,
          animationDelay: `${delay}s`,
          animationDuration: `${pseudoRandom(6) * 3 + 2}s`,
        }}
      />
    );
  });

  return (
    <div 
      className="absolute inset-0" 
      data-speed={speed}
      style={{ zIndex }}
    >
      {stars}
    </div>
  );
}

// Moon Component
function Moon({ speed, zIndex }: { speed: number; zIndex: number }) {
  return (
    <div 
      className="absolute" 
      style={{ 
        top: "15%", 
        left: "15%",
        zIndex 
      }}
      data-speed={speed}
    >
      <div className="relative">
        {/* Main moon circle */}
        <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full"></div>
        
        {/* Shadow overlay to create crescent */}
        <div 
          className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 41%, rgba(0,0,0,1) 60%)",
          }}
        ></div>
      </div>
    </div>
  );
}

// Mountain Component
function Mountain({ color, peakPosition, height, width, zIndex }: MountainProps) {
  // Create triangular mountain peak
  const leftEdge = Math.max(0, peakPosition - width/2);
  const rightEdge = Math.min(1, peakPosition + width/2);
  
  // Convert to percentage for SVG
  const leftPercent = leftEdge * 100;
  const peakPercent = peakPosition * 100;
  const rightPercent = rightEdge * 100;
  
  // SVG height based on mountain height (percentage of viewport height)
  const svgHeight = height * 100;
  
  return (
    <div className="absolute inset-x-0 w-full" style={{ zIndex }}>
      <svg 
        viewBox={`0 0 100 ${svgHeight}`} 
        preserveAspectRatio="none" 
        className="w-full h-full"
        style={{ display: 'block' }}
      >
        <polygon 
          points={`${leftPercent},${svgHeight} ${peakPercent},0 ${rightPercent},${svgHeight}`} 
          fill={color} 
        />
      </svg>
    </div>
  );
}

// Water Waves Component
function WaterWaves() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Base water */}
      <div className="absolute inset-0 bg-[#365B8C]"></div>
      
      {/* Wave lines as subtle overlays */}
      {Array.from({ length: 6 }).map((_, i) => {
        const top = i * 16 + 5; // Distribute waves evenly
        
        return (
          <div 
            key={i}
            className="absolute w-full h-1 opacity-30"
            style={{
              top: `${top}%`,
              backgroundColor: "#4E7DB7",
              borderRadius: "50%",
              transform: "scaleX(1.2)",
            }}
          />
        );
      })}
    </div>
  );
}