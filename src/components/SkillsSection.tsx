"use client";

import React, { useState } from 'react';

// Define the skill categories and their items
interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "💻",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "C", "C#", "Java", "SQL (MySQL)", "PL/SQL", "T-SQL"]
  },
  {
    name: "Libraries",
    icon: "📚",
    skills: ["PyTorch", "Bootstrap", "Scikit-learn", "Pandas", "NumPy", "SQLAlchemy", "BeautifulSoup4"]
  },
  {
    name: "Frameworks",
    icon: "🏗️",
    skills: ["FastAPI", "React", "Next.js", "Django", "Flask", "Tailwind CSS", "Java Swing"]
  },
  {
    name: "Tools",
    icon: "🔧",
    skills: ["PostgreSQL", "SQLite", "Git", "Docker", "Azure", "HTML/CSS", "Linux", "Jupyter Notebook", "Unity", "MATLAB", "Fusion360", "VS Code", "PyCharm", "Eclipse", "PowerBI", "MongoDB", "Firebase", "Figma"]
  },
  {
    name: "Hardware/Protocols",
    icon: "🔌",
    skills: ["STM32", "Arduino", "I2C", "SPI", "UART", "Soldering", "Oscilloscopes", "DMM"]
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>(skillCategories[0].name);
 
  // Function to handle category change
  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  // Get the skills for the active category
  const activeSkills = skillCategories.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <section className="py-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Card container with gradient background and hover effects */}
      <div className="border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-6 md:p-8
        bg-gradient-to-b from-[#83AEE2]/30 to-white dark:from-[#4D7CB6]/30 dark:to-gray-800
        transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] hover:from-[#83AEE2]/40 hover:to-white dark:hover:from-[#4D7CB6]/40">
        
        {/* Blue title matching the image */}
        <h2 className="text-4xl font-bold mb-12 text-[#6989BE] dark:text-[#83AEE2]">
          Skills & Technologies
        </h2>
       
        {/* Category Tabs - More rectangular */}
        <div className="flex overflow-x-auto mb-8 pb-2">
          <div className="flex bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-md p-1 w-full max-w-4xl mx-auto border border-gray-100 dark:border-gray-700">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`
                  flex-1 py-2 px-4 rounded-md text-center text-sm sm:text-base transition-all duration-300
                  ${activeCategory === category.name
                    ? 'bg-[#83AEE2]/20 dark:bg-[#4D7CB6]/30 text-[#4D7CB6] dark:text-[#83AEE2] font-medium border border-[#83AEE2]/30 dark:border-[#4D7CB6]/40'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#4D7CB6] dark:hover:text-[#83AEE2] hover:bg-[#83AEE2]/10 dark:hover:bg-[#4D7CB6]/20'
                  }
                `}
              >
                <span className="hidden sm:inline-block mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
       
        {/* Skills Display - More rectangular with subtle gradient */}
        <div className="flex flex-wrap gap-3 justify-center">
          {activeSkills.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200
                rounded-md shadow-sm border border-[#83AEE2]/30 dark:border-[#4D7CB6]/30
                transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-[#4D7CB6] dark:hover:border-[#83AEE2]
                hover:text-[#4D7CB6] dark:hover:text-[#83AEE2] hover:bg-[#83AEE2]/10 dark:hover:bg-[#4D7CB6]/20
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}