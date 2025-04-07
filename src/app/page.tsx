"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      const layers = parallaxRef.current.querySelectorAll(".parallax-layer");
      
      layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.2;
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
          
          {/* Back Mountains Layer */}
          <div className="parallax-layer absolute bottom-[30vh] inset-x-0 h-[450px] z-10">
            <Mountains color="#668DCA" height={40} useBezier={true} />
          </div>
          
          {/* Mid Mountains Layer */}
          <div className="parallax-layer absolute bottom-[30vh] inset-x-0 h-[300px] z-20">
            <Mountains color="#4D73B8" height={45} useBezier={true} />
          </div>
          
          {/* Front Mountains Layer */}
          <div className="parallax-layer absolute bottom-[30vh] inset-x-0 h-[300px] z-30">
            <Mountains color="#4165AA" height={50} useBezier={true} />
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
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Welcome to my portfolio! I&apos;m a passionate developer with expertise in web development and design.
            This is a placeholder for your about section. You can add more details about yourself, your skills,
            and your experience here.
          </p>
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
function Mountains({ color, height, useBezier = false }: { color: string; height: number; useBezier?: boolean }) {
  // Generate a mountain silhouette using SVG with optional Bézier curves
  const generatePath = () => {
    const width = 100; // 100%
    
    if (useBezier) {
      // Create smoother mountain silhouette using Bézier curves
      const segments = 5;
      let path = `M0,${height} `;
      
      // Starting control point
      let prevX = 0;
      let prevY = height;
      
      // Generate peaks with Bézier curves for smoother silhouettes
      for (let i = 1; i <= segments; i++) {
        const x = (width / segments) * i;
        // Create higher peaks that extend further up
        const peakHeight = Math.random() * (height * 0.6) + (height * 0.2);
        const y = height - peakHeight;
        
        // Control points for the curve
        const cp1x = prevX + (x - prevX) / 3;
        const cp1y = prevY - Math.random() * (height * 0.3);
        const cp2x = x - (x - prevX) / 3;
        const cp2y = y + Math.random() * (height * 0.3);
        
        // Add cubic Bézier curve
        path += `C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y} `;
        
        prevX = x;
        prevY = y;
      }
      
      // Close the path
      path += `L ${width},${height} Z`;
      return path;
    } else {
      // Original implementation with linear segments
      const points = [];
      const segments = 10;
      
      // Start at bottom left
      points.push(`0,${height}`);
      
      // Generate random peaks
      for (let i = 0; i <= segments; i++) {
        const x = (width / segments) * i;
        const y = Math.sin(i * Math.PI / (segments / 2)) * (height / 2) + Math.random() * (height / 4);
        points.push(`${x},${y}`);
      }
      
      // End at bottom right
      points.push(`${width},${height}`);
      
      return `M${points.join(' L')} Z`;
    }
  };

  return (
    <svg 
      viewBox={`0 0 100 ${height}`} 
      preserveAspectRatio="none" 
      className="w-full h-full"
    >
      <path 
        d={generatePath()} 
        fill={color} 
      />
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
