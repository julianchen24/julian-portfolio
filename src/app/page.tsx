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
    // Initialize positions
    const initializeParallax = () => {
      if (!parallaxRef.current) return;
      const layers = parallaxRef.current.querySelectorAll("[data-speed]");
      layers.forEach((layer) => {
        // Initialize all layers with translateY(0) to make them visible from the start
        (layer as HTMLElement).style.transform = `translateY(0px)`;
      });
    };
    
    // Handle scroll events
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      
      // Apply parallax effect to different layers
      const layers = parallaxRef.current.querySelectorAll("[data-speed]");
      
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") || "0");
        // Use positive translation for scroll down effect
        const yPos = scrollY * speed;
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Initialize on component mount
    initializeParallax();
    
    // Add scroll event listener
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
          <Stars speed={0.2} zIndex={2} />
          
          {/* Moon Layer */}
          <Moon speed={0.15} zIndex={3} />
          
          {/* Mountain Layers - From back to front */}
          {/* Extra small mountain on far left */}
          <ParallaxLayer speed={0.5} zIndex={3}>
            <div className="absolute inset-0">
              <Mountain
                color="#40628F"
                peakPosition={0}
                height={0.55}
                width={0.4}
                zIndex={1}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.6} zIndex={4}>
            <div className="absolute inset-0">
              <Mountain
                color="#395C8F"
                peakPosition={0.15}
                height={0.65}
                width={0.4}
                zIndex={1}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.5} zIndex={5}>
            <div className="absolute inset-0">
              <Mountain
                color="#4372A5"
                peakPosition={0.30}
                height={0.60}
                width={0.45}
                zIndex={2}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.5} zIndex={7}>
            <div className="absolute inset-0">
              <Mountain
                color="#4D7CB6"
                peakPosition={0.50}
                height={0.650}
                width={0.35}
                zIndex={4}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.5} zIndex={6}>
            <div className="absolute inset-0">
              <Mountain
                color="#3F6998"
                peakPosition={0.70}
                height={0.63}
                width={0.45}
                zIndex={3}
              />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer speed={0.6} zIndex={4}>
            <div className="absolute inset-0">
              <Mountain
                color="#446B9C"
                peakPosition={0.85}
                height={0.56}
                width={0.4}
                zIndex={1}
              />
            </div>
          </ParallaxLayer>
          
          {/* Extra small mountain on far right */}
          <ParallaxLayer speed={0.5} zIndex={3}>
            <div className="absolute inset-0">
              <Mountain
                color="#40628F"
                peakPosition={1}
                height={0.55}
                width={0.8}
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
            data-speed="0"
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
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 50 }}>
          <svg 
            className="w-16 h-16 text-white drop-shadow-lg" 
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

// Moon Component using CSS box-shadow technique
function Moon({ speed, zIndex }: { speed: number; zIndex: number }) {
  return (
    <div
      className="absolute"
      style={{
        top: "6%",
        left: "10%",
        zIndex
      }}
      data-speed={speed}
    >
      {/* CSS-based crescent moon using box-shadow */}
      <div 
        style={{
          height: "150px",
          width: "150px",
          backgroundColor: "transparent",
          boxShadow: "-20px 20px 0 15px white",
          borderRadius: "50%"
        }}
      ></div>
    </div>
  );
}

// Mountain Component
function Mountain({ color, peakPosition, height, width, zIndex }: MountainProps) {
  // Create triangular mountain peak - increase width to make mountains wider and connected
  const leftEdge = Math.max(0, peakPosition - width*0.9);
  const rightEdge = Math.min(1, peakPosition + width*0.9);
  
  // Convert to percentage for SVG
  const leftPercent = leftEdge * 100;
  const peakPercent = peakPosition * 100;
  const rightPercent = rightEdge * 100;
  
  // SVG height needs to be sufficient to show the entire mountain
  const svgHeight = 100; // Use full height
  const peakY = 100 - (height * 100); // Convert height ratio to y-coordinate from bottom
  
  return (
    <div className="absolute inset-x-0 bottom-0 w-full h-full" style={{ zIndex }}>
      <svg 
        viewBox={`0 0 100 100`} 
        preserveAspectRatio="none" 
        className="w-full h-full"
        style={{ display: 'block' }}
      >
        <polygon 
          points={`${leftPercent},100 ${peakPercent},${peakY} ${rightPercent},100`} 
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