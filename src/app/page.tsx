"use client";

import { useEffect, useRef } from "react";
import Card from "../components/Card";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect on scroll with specific speeds for mountain layers
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      
      // Get all general parallax layers (sky, stars, moon, water)
      const generalLayers = parallaxRef.current.querySelectorAll(".parallax-layer");
      
      // Apply general parallax effect to non-mountain layers
      generalLayers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2;
        const yPos = -(scrollY * speed);
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
      
      // Apply specific speeds to mountain layers according to specifications
      const backMountains = parallaxRef.current.querySelector(".back-mountains");
      const midMountains = parallaxRef.current.querySelector(".mid-mountains");
      const frontMountains = parallaxRef.current.querySelector(".front-mountains");
      
      if (backMountains) {
        // Back Mountains: 5-10% of scroll speed
        const backSpeed = 0.08; // 8% of scroll speed
        (backMountains as HTMLElement).style.transform = `translateY(${-(scrollY * backSpeed)}px)`;
      }
      
      if (midMountains) {
        // Mid Mountains: 15-20% of scroll speed
        const midSpeed = 0.18; // 18% of scroll speed
        (midMountains as HTMLElement).style.transform = `translateY(${-(scrollY * midSpeed)}px)`;
      }
      
      if (frontMountains) {
        // Front Mountains: 25-30% of scroll speed
        const frontSpeed = 0.28; // 28% of scroll speed
        (frontMountains as HTMLElement).style.transform = `translateY(${-(scrollY * frontSpeed)}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Parallax Landing Section */}
      <section className="relative h-screen overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0">
          {/* Sky Layer (Back) */}
          <div 
            className="parallax-layer absolute inset-0 h-[70vh]"
            style={{
              background: `linear-gradient(to bottom, #C2E0FF, #8192B1)`,
            }}
          />
          
          {/* Stars Layer */}
          <div className="parallax-layer absolute inset-0 h-[60vh]">
            <Stars />
          </div>
          
          {/* Moon Layer */}
          <div className="parallax-layer absolute top-[10vh] left-[15vw]">
            <Moon />
          </div>
          
          {/* Back Mountains Layer - Slow movement (5-10% of scroll speed) */}
          <div className="back-mountains absolute bottom-[30vh] inset-x-0 h-[800px] z-10">
            <Mountains color="#668DCA" height={40} />
          </div>
          
          {/* Mid Mountains Layer - Moderate movement (15-20% of scroll speed) */}
          <div className="mid-mountains absolute bottom-[30vh] inset-x-0 h-[475px] z-20">
            <Mountains color="#4D73B8" height={45} />
          </div>
          
          {/* Front Mountains Layer - Fast movement (25-30% of scroll speed) */}
          <div className="front-mountains absolute bottom-[30vh] inset-x-0 h-[300px] z-30">
            <Mountains color="#4165AA" height={50} />
          </div>
          
          {/* Water Layer */}
          <div className="parallax-layer absolute bottom-0 inset-x-0 h-[30vh] bg-[#4165AA] z-40">
            <WaterWaves />
          </div>
        </div>
        
        {/* Centered Heading */}
        <div className="absolute inset-x-0 top-1/4 flex items-start justify-center z-50">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Hi, I am Julian
          </h1>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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
            Welcome to my portfolio! I&apos;m a passionate developer with expertise in web development and design.
            This is a placeholder for your about section. You can add more details about yourself, your skills,
            and your experience here.
          </p>
          
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card title="Experiences" targetPath="/experience">
              Click to view my professional journey and skills
            </Card>
            <Card title="Projects" targetPath="/projects">
              Explore the projects I have worked on
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

// Stars Component
function Stars() {
  return (
    <div className="relative w-full h-full">
      {Array.from({ length: 100 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 5;
        
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${animationDelay}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// Moon Component
function Moon() {
  return (
    <div className="relative animate-float">
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
  );
}

// Mountains Component
function Mountains({ color, height }: { color: string; height: number }) {
  // Create triangular mountain peaks with snowcaps
  const generateMountains = () => {
    const width = 100; // 100%
    const numPeaks = 5; // Five mountain peaks as specified
    
    // Simple seedable random function for consistent randomness
    const seededRandom = (function() {
      const seed = color.charCodeAt(1) * height; // Use color and height as seed
      let currentSeed = seed;
      
      return function() {
        currentSeed = (currentSeed * 9301 + 49297) % 233280;
        return currentSeed / 233280;
      };
    })();
    
    // Generate mountain peaks
    const peaks = [];
    const snowcaps = [];
    
    // Calculate segment width
    const segmentWidth = width / numPeaks;
    
    // Generate each peak
    for (let i = 0; i < numPeaks; i++) {
      // Calculate peak position
      const peakCenterX = segmentWidth * (i + 0.5);
      
      // Randomize peak height (between 50-90% of max height)
      const peakHeight = height * (0.5 + seededRandom() * 0.4);
      const peakY = height - peakHeight;
      
      // Calculate base points (slightly randomized)
      const leftBaseOffset = seededRandom() * 0.3 * segmentWidth;
      const rightBaseOffset = seededRandom() * 0.3 * segmentWidth;
      
      const leftBaseX = Math.max(0, peakCenterX - (segmentWidth * 0.5) + leftBaseOffset);
      const rightBaseX = Math.min(width, peakCenterX + (segmentWidth * 0.5) - rightBaseOffset);
      
      // Create mountain polygon points
      const mountainPoints = `${leftBaseX},${height} ${peakCenterX},${peakY} ${rightBaseX},${height}`;
      peaks.push(
        <polygon 
          key={`peak-${i}`} 
          points={mountainPoints} 
          fill={color} 
        />
      );
      
      // Create snowcap (smaller triangle on top of the peak)
      const snowCapWidth = (rightBaseX - leftBaseX) * 0.4; // Snowcap is 40% of the peak width
      const snowCapHeight = peakHeight * 0.15; // Snowcap is 15% of the peak height
      
      const snowCapPoints = `
        ${peakCenterX - snowCapWidth/2},${peakY + snowCapHeight} 
        ${peakCenterX},${peakY} 
        ${peakCenterX + snowCapWidth/2},${peakY + snowCapHeight}
      `;
      
      snowcaps.push(
        <polygon 
          key={`snow-${i}`} 
          points={snowCapPoints} 
          fill="#FFFFFF" 
        />
      );
    }
    
    return { peaks, snowcaps };
  };
  
  const { peaks, snowcaps } = generateMountains();

  return (
    <svg 
      viewBox={`0 0 100 ${height}`} 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      {/* Render mountain peaks */}
      {peaks}
      
      {/* Render snowcaps */}
      {snowcaps}
    </svg>
  );
}

// Water Waves Component
function WaterWaves() {
  return (
    <div className="relative w-full h-full bg-[#769fdb]">
      {/* Simple solid color water */}
      <svg 
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <rect 
          x="0" 
          y="0" 
          width="100%" 
          height="100%" 
          fill="#769fdb"
        />
      </svg>
    </div>
  );
}
