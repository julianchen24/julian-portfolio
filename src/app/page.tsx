"use client";

import React, { useEffect, useRef, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import SkillsSection from "@/components/SkillsSection";
import HomeExperienceSection from "@/components/HomeExperienceSection";
import NotableProjectCard from "@/components/NotableProjectCard";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const textArray = [
    
    "I love to learn new things!",
    "I am an aspiring software engineer!",
    "I am an Autonomous Software Developer on WATonomous!",
    "I am a Firmware Developer on Midnight Sun!",
    "I am a Computer Engineering student at UWaterloo!"
  ];
  

  useEffect(() => {
    const period = 2000; 
    const currentIndex = loopNum % textArray.length;
    const fullText = textArray[currentIndex];
    
    const tick = () => {
      const updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);
      
      setText(updatedText);
      
      if (isDeleting) {
        setTypingSpeed(75); 
      } else {
        setTypingSpeed(150); 
      }

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const heroSection = heroSectionRef.current;
    if (!heroSection) return;
    
    const handleHover = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    heroSection.addEventListener('mouseenter', handleHover);
    return () => heroSection.removeEventListener('mouseenter', handleHover);
  }, []);

  useEffect(() => {
    const initializeParallax = () => {
      if (!parallaxRef.current) return;
      const layers = parallaxRef.current.querySelectorAll("[data-speed]");
      layers.forEach((layer) => {
        (layer as HTMLElement).style.transform = `translateY(0px)`;
      });
    };
    
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      
      const scrollY = window.scrollY;
      
      const layers = parallaxRef.current.querySelectorAll("[data-speed]");
      
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") || "0");
        const yPos = scrollY * speed;
        (layer as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    initializeParallax();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setIsMounted(true);

    const setupStarCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      
      const stars: Star[] = [];
      const dots: Dot[] = [];
      for (let i = 0; i < 80; i++) {
        stars.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          radius: Math.floor(Math.random() * 2) + 1,
          alpha: (Math.floor(Math.random() * 10) + 1) / 10 / 2,
          
          draw: function() {
            ctx!.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx!.shadowBlur = this.radius * 2;
            ctx!.beginPath();
            ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx!.closePath();
            ctx!.fill();
          },
          
          move: function() {
            this.y -= 0.15;
            if (this.y <= -10) this.y = canvas.height + 10;
            this.draw();
          }
        });
      }
      let mouseX = 0;
      let mouseY = 0;
      let isMouseMoving = false;
      
      const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseMoving = true;
        createDot();
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
          isMouseMoving = false;
        }, 100);
      };
      
      let mouseMoveTimeout: ReturnType<typeof setTimeout>;
      canvas.addEventListener('mousemove', handleMouseMove);
      
      function createDot() {
        if (dots.length > 100) return;
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
          draw: function() {
            ctx!.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx!.shadowBlur = this.radius * 2;
            ctx!.beginPath();
            ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx!.closePath();
            ctx!.fill();
          },
          
          move: function() {
            this.alpha -= this.alphaReduction;
          
            this.x += Math.cos(this.direction * Math.PI / 180) * this.speed;
            this.y += Math.sin(this.direction * Math.PI / 180) * this.speed;
            
            this.draw();
          }
        });
      }
      
      function drawConnections() {
        if (dots.length < 2) return;
        
        for (let i = 0; i < dots.length; i++) {
          for (let j = i + 1; j < dots.length; j++) {
            const dx = dots[i].x - dots[j].x;
            const dy = dots[i].y - dots[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
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
      
      function animate() {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        
        for (let i = 0; i < stars.length; i++) {
          stars[i].move();
        }
        
        for (let i = dots.length - 1; i >= 0; i--) {
          if (dots[i].alpha <= 0) {
            dots.splice(i, 1);
          } else {
            dots[i].move();
          }
        }
        
        drawConnections();
        
        if (isMouseMoving && Math.random() > 0.8) {
          createDot();
        }
        
        requestAnimationFrame(animate);
      }
      
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      window.addEventListener('resize', handleResize);
      animate();
      
      return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(mouseMoveTimeout);
      };
    };

    if (isMounted) {
      const cleanup = setupStarCanvas();
      return cleanup;
    }
  }, [isMounted]);

  return (
    <div 
      ref={containerRef} 
      className="h-auto overflow-y-auto"
    >
      <section 
        ref={heroSectionRef}
        className="relative h-screen overflow-hidden"
      >
        <canvas 
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 100 }}
        />
        
        <div ref={parallaxRef} className="absolute inset-0">
          <div 
            className="absolute inset-0"
            data-speed="0.1"
            style={{
              background: "linear-gradient(to bottom, #83AEE2, #B2D0F0)",
              zIndex: 1
            }}
          />
          
          <Stars speed={0.2} zIndex={2} />
          

          <Moon speed={0.15} zIndex={3} />
          
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
        
        <div className="absolute inset-x-0 top-1/4 flex flex-col items-center justify-start" style={{ zIndex: 50 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-4">
            Hi, my name is Julian
          </h1>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-4xl font-medium text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {text}
              <span className="inline-block w-1 h-8 bg-[white] ml-1 animate-pulse"></span>
            </p>
          </div>
        </div>
        
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
      
      <div className="bg-[#C1D6F0] dark:bg-gray-900">
        <section className="py-12">
          <ProfileCard />
        </section>
        <section className="py-12">
          <NotableProjectCard />
        </section>

        <section className="py-12">
          <HomeExperienceSection />
        </section>


        <section className="py-12">
          <SkillsSection />
        </section>
      </div>
    </div>
  );
}

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


function Stars({ speed, zIndex }: { speed: number; zIndex: number }) {
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

    const seed = i * 8761;
    const pseudoRandom = (n: number) => ((seed * n) % 997) / 997;
    
    const size = pseudoRandom(1) * 2 + 1;
    const top = pseudoRandom(2) * 60; 
    const left = pseudoRandom(3) * 100;
    const baseOpacity = pseudoRandom(4) * 0.5 + 0.3;
    
    const randValue = pseudoRandom(5);
    const animationType = randValue < 0.15 
      ? "star-ray-burst" 
      : (randValue < 0.35 ? "star-burst" : "twinkle-simple");
    
    const isDramaticStar = animationType !== "twinkle-simple";
    const delay = pseudoRandom(6) * 15; 
    const duration = isDramaticStar 
      ? pseudoRandom(7) * 6 + 7  
      : pseudoRandom(7) * 3 + 2;
    
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

function Mountain({ color, peakPosition, height, width, zIndex }: MountainProps) {
  const leftEdge = Math.max(0, peakPosition - width*0.9);
  const rightEdge = Math.min(1, peakPosition + width*0.9);
  
  const leftPercent = leftEdge * 100;
  const peakPercent = peakPosition * 100;
  const rightPercent = rightEdge * 100;
  
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

function WaterWaves() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-[#365B8C]"></div>
      
      {Array.from({ length: 6 }).map((_, i) => {
        const top = 10 + i * 15; 
        
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