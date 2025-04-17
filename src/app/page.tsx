"use client";

import React, { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SkillsSection from "@/components/SkillsSection";
import HomeExperienceSection from "@/components/HomeExperienceSection";
import NotableProjectCard from "@/components/NotableProjectCard";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const profileCardRef = useRef<HTMLElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const experienceSectionRef = useRef<HTMLElement>(null);
  const notableProjectRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Typing animation states
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // Array of texts to rotate through
  const textArray = [
    "I like to go skiing",
    "I like to play basketball",
    "I'm an aspiring software engineer",
    "I'm a computer engineering student at the University of Waterloo"
  ];
  
  // Handle typing animation
  useEffect(() => {
    const period = 2000; // how long to pause at full phrase
    const currentIndex = loopNum % textArray.length;
    const fullText = textArray[currentIndex];
    
    const tick = () => {
      // Current text state based on if we're deleting or typing
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);
      
      setText(updatedText);
      
      // Adjust typing speed for natural effect
      if (isDeleting) {
        setTypingSpeed(75); // faster when deleting
      } else {
        setTypingSpeed(150); // normal pace when typing
      }
      
      // Logic for text completion or deletion
      if (!isDeleting && updatedText === fullText) {
        // Wait at complete text
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);
  
  // Handle hover on hero section to snap back
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const heroSection = heroSectionRef.current;
    if (!heroSection) return;
    
    const handleHover = () => {
      // Snap back to hero section when hovering
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    heroSection.addEventListener('mouseenter', handleHover);
    return () => heroSection.removeEventListener('mouseenter', handleHover);
  }, []);

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

  // Star animation effect
  useEffect(() => {
    // Make sure we're on the client side
    if (typeof window === 'undefined') return;
    
    setIsMounted(true);

    // Setup canvas for star animation
    const setupStarCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size to match window
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Define types for stars and dots
      interface Star {
        x: number;
        y: number;
        radius: number;
        alpha: number;
        draw: () => void;
        move: () => void;
      }
      
      interface Dot {
        x: number;
        y: number;
        radius: number;
        alpha: number;
        alphaReduction: number;
        speed: number;
        direction: number;
        draw: () => void;
        move: () => void;
      }
      
      // Arrays to store stars and dots
      const stars: Star[] = [];
      const dots: Dot[] = [];
      
      // Initialize stars
      for (let i = 0; i < 80; i++) {
        stars.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          radius: Math.floor(Math.random() * 2) + 1,
          alpha: (Math.floor(Math.random() * 10) + 1) / 10 / 2,
          
          // Method to draw the star
          draw: function() {
            ctx!.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx!.shadowBlur = this.radius * 2;
            ctx!.beginPath();
            ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx!.closePath();
            ctx!.fill();
          },
          
          // Method to move the star
          move: function() {
            this.y -= 0.15;
            if (this.y <= -10) this.y = canvas.height + 10;
            this.draw();
          }
        });
      }

      // Track mouse position
      let mouseX = 0;
      let mouseY = 0;
      let isMouseMoving = false;
      
      // Handle mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;
        
        // Create a new dot when mouse moves
        createDot();
        
        // Set timeout to track when mouse stops moving
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
          isMouseMoving = false;
        }, 100);
      };
      
      let mouseMoveTimeout: ReturnType<typeof setTimeout>;
      canvas.addEventListener('mousemove', handleMouseMove);
      
      // Create a new dot
      function createDot() {
        // Skip if we already have 100+ dots to avoid performance issues
        if (dots.length > 100) return;
        
        // Random position variations around mouse
        const xVariation = (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * 50);
        const yVariation = (Math.random() > 0.5 ? -1 : 1) * Math.floor(Math.random() * 50);
        
        dots.push({
          x: mouseX + xVariation,
          y: mouseY + yVariation,
          radius: Math.floor(Math.random() * 5) + 1,
          alpha: 0.5,
          alphaReduction: 0.005,
          speed: 0.5,
          direction: Math.floor(Math.random() * 140) + 200,
          
          // Method to draw the dot
          draw: function() {
            ctx!.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx!.shadowBlur = this.radius * 2;
            ctx!.beginPath();
            ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx!.closePath();
            ctx!.fill();
          },
          
          // Method to move the dot
          move: function() {
            // Reduce alpha (fade out)
            this.alpha -= this.alphaReduction;
            
            // Move dot based on direction
            this.x += Math.cos(this.direction * Math.PI / 180) * this.speed;
            this.y += Math.sin(this.direction * Math.PI / 180) * this.speed;
            
            // Draw the dot
            this.draw();
          }
        });
      }
      
      // Draw lines between dots
      function drawConnections() {
        if (dots.length < 2) return;
        
        // Connect dots that are close enough
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            // Calculate distance between dots
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Only connect dots that are within 150px of each other
            if (distance < 150) {
              // Line opacity based on distance
              const opacity = 0.2 * (1 - distance / 150); 
              
              ctx!.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
              ctx!.lineWidth = 1;
              ctx!.beginPath();
              ctx!.moveTo(dots[i].x, dots[i].y);
              ctx!.lineTo(dots[j].x, dots[j].y);
              ctx!.stroke();
            }
          }
        }
      }
      
      // Animation loop
      function animate() {
        // Clear canvas
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        
        // Move and draw stars
        for (let i = 0; i < stars.length; i++) {
          stars[i].move();
        }
        
        // Move and draw dots, remove faded ones
        for (let i = dots.length - 1; i >= 0; i--) {
          if (dots[i].alpha <= 0) {
            dots.splice(i, 1);
          } else {
            dots[i].move();
          }
        }
        
        // Draw connections between dots
        drawConnections();
        
        // Create new dot if mouse is moving
        if (isMouseMoving && Math.random() > 0.8) {
          createDot();
        }
        
        // Continue animation
        requestAnimationFrame(animate);
      }
      
      // Handle window resize
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      
      // Start animation
      animate();
      
      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(mouseMoveTimeout);
      };
    };

    // Only run setup once component is mounted
    if (isMounted) {
      const cleanup = setupStarCanvas();
      return cleanup;
    }
  }, [isMounted]);

  return (
    <div 
      ref={containerRef} 
      className="h-auto overflow-y-auto snap-y snap-mandatory"
    >
      {/* Parallax Landing Section */}
      <section 
        ref={heroSectionRef}
        className="relative h-screen overflow-hidden snap-start"
        style={{ scrollSnapAlign: 'start' }}
      >
        {/* Canvas for star animation */}
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 100 }}
        />
        
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
        
        {/* Centered Heading with Dynamic Text */}
        <div className="absolute inset-x-0 top-1/4 flex flex-col items-center justify-start" style={{ zIndex: 50 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-4">
            Hi, my name is Julian
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-4xl font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {text}
              <span className="inline-block w-1 h-8 bg-white ml-1 animate-pulse"></span>
            </p>
          </div>
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
      
      {/* Profile Card Section */}
      <section 
        ref={profileCardRef}
        className="min-h-screen bg-white dark:bg-gray-900 py-20 flex items-center justify-center snap-start"
      >
        <ProfileCard />
      </section>

      {/* Notable Project Section */}
      <section 
        ref={notableProjectRef}
        className="min-h-screen bg-white dark:bg-gray-900 py-16 flex items-center justify-center snap-start"
      >
        <NotableProjectCard />
      </section>

      {/* Experience Section */}
      <section 
        ref={experienceSectionRef}
        className="min-h-screen bg-white dark:bg-gray-900 py-16 flex items-center justify-center snap-start"
      >
        <HomeExperienceSection />
      </section>

      {/* Skills Section */}
      <section
        ref={skillsSectionRef}
        className="min-h-screen bg-white dark:bg-gray-900 py-20 flex items-center snap-start"
      >
        <SkillsSection />
      </section>

      {/* About Section */}
      <div className="snap-none"> {/* Wrap in div to break out of snap behavior */}
        <section
          ref={aboutSectionRef}
          id="about"
          className="min-h-screen bg-white dark:bg-gray-900 py-20 flex items-center"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            Hi! I am Julian, a Computer Engineering student at the University of Waterloo passionate about using technology to geuinely help others 
            and solve real-world problems. I am especially interested in full-stack development, machine learning, and cloud computing.
            I am originally from Vancouver, BC, but I will be studying in Waterloo, ON for the next few years.
            Beyond my tech interests, I love trying new foods, skiing, basketball, running, skating, photography, and chasing sunsets.
            </p>
          </div>
        </section>
      </div>
    </div>
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

// Stars Component with Asterisk-like Burst Effect
function Stars({ speed, zIndex }: { speed: number; zIndex: number }) {
  // Define CSS for the star burst animation
  const starStyles = `
    @keyframes twinkle-simple {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 0.8; transform: scale(1.2); }
    }
    
    @keyframes star-burst {
      0%, 100% { 
        opacity: 0.3;
        box-shadow: 0 0 0 0 white;
      }
      50% { 
        opacity: 1;
        box-shadow: 
          0 0 2px 2px rgba(255,255,255,0.7),
          0 0 4px 4px rgba(255,255,255,0.4),
          0 0 8px 8px rgba(255,255,255,0.2),
          1px 0 2px 2px rgba(255,255,255,0.5),
          -1px 0 2px 2px rgba(255,255,255,0.5),
          0 1px 2px 2px rgba(255,255,255,0.5),
          0 -1px 2px 2px rgba(255,255,255,0.5),
          1px 1px 2px 2px rgba(255,255,255,0.3),
          -1px -1px 2px 2px rgba(255,255,255,0.3),
          -1px 1px 2px 2px rgba(255,255,255,0.3),
          1px -1px 2px 2px rgba(255,255,255,0.3);
      }
    }

    @keyframes star-ray-burst {
      0%, 15%, 85%, 100% { 
        opacity: 0.4;
        box-shadow: none;
      }
      50% { 
        opacity: 1;
        box-shadow: 
          0 0 2px 0 white,
          0 0 4px 1px rgba(255,255,255,0.6),
          5px 0 15px 2px rgba(255,255,255,0.4),
          -5px 0 15px 2px rgba(255,255,255,0.4),
          0 5px 15px 2px rgba(255,255,255,0.4),
          0 -5px 15px 2px rgba(255,255,255,0.4),
          3px 3px 15px 2px rgba(255,255,255,0.2),
          -3px -3px 15px 2px rgba(255,255,255,0.2),
          -3px 3px 15px 2px rgba(255,255,255,0.2),
          3px -3px 15px 2px rgba(255,255,255,0.2);
      }
    }
  `;

  const stars = Array.from({ length: 70 }).map((_, i) => {
    // Use deterministic positions for consistent appearance
    const seed = i * 8761;
    const pseudoRandom = (n: number) => ((seed * n) % 997) / 997;
    
    const size = pseudoRandom(1) * 2 + 1;
    const top = pseudoRandom(2) * 60; // Only in top 60% of sky
    const left = pseudoRandom(3) * 100;
    const baseOpacity = pseudoRandom(4) * 0.5 + 0.3;
    
    // Determine which stars get the burst effect
    const randValue = pseudoRandom(5);
    const animationType = randValue < 0.15 
      ? "star-ray-burst" 
      : (randValue < 0.35 ? "star-burst" : "twinkle-simple");
    
    // Make burst animations less frequent with longer delays and durations
    const isDramaticStar = animationType !== "twinkle-simple";
    const delay = pseudoRandom(6) * 15; // Longer delays between bursts
    const duration = isDramaticStar 
      ? pseudoRandom(7) * 6 + 7  // Longer duration for burst animations (7-13s)
      : pseudoRandom(7) * 3 + 2; // Shorter for regular twinkle (2-5s)
    
    return (
      <div
        key={i}
        className="absolute rounded-full bg-white"
        style={{
          width: `${isDramaticStar ? size * 1.5 : size}px`,
          height: `${isDramaticStar ? size * 1.5 : size}px`,
          top: `${top}%`,
          left: `${left}%`,
          opacity: baseOpacity,
          animation: `${animationType} ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          zIndex: isDramaticStar ? 1 : 0,
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
      <style>{starStyles}</style>
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
  
  // Convert height ratio to y-coordinate from bottom
  const peakY = 100 - (height * 100);
  
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
      
      {/* Wave SVGs */}
      {Array.from({ length: 6 }).map((_, i) => {
        // Calculate vertical position for each wave
        const top = 10 + i * 15; // Start at 10% and space evenly
        
        return (
          <svg 
            key={i}
            className="absolute left-0 w-full h-8"
            style={{
              top: `${top}%`,
            }}
            viewBox="0 0 1440 24" 
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d={`
                M0,12 
                C120,40 240,4 360,12 
                C480,4 600,40 720,12 
                C840,40 960,4 1080,12 
                C1200,4 1320,40 1440,12
              `}
              stroke="#4E7DB7"
              strokeWidth="2"
              strokeOpacity="0.3"
              fill="none"
            />
          </svg>
        );
      })}
    </div>
  );
}