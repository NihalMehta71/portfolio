'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaTrophy, FaUserTie, FaLaptopCode } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

type TimelineItem = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  description?: string[];
  details?: string;
  date: string;
  icon: React.ReactNode;
};

const experiences: TimelineItem[] = [
  // Education
  {
    id: "edu-lpu",
    title: "Bachelor of Technology - Computer Science and Engineering",
    organization: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    details: "CGPA: 8.76",
    date: "Since Jun 2023",
    icon: <FaGraduationCap size={20} />
  },
  {
    id: "edu-amity",
    title: "Bachelor of Technology - Computer Science and Engineering",
    organization: "Amity University",
    location: "Noida, U.P.",
    details: "CGPA: 8.74",
    date: "Jul 2022 - May 2023",
    icon: <FaGraduationCap size={20} />
  },
  {
    id: "edu-secondary",
    title: "Higher Secondary",
    organization: "Sanatan Dharam Vidya Mandir",
    location: "Panipat, Haryana",
    details: "Percentage: 92%",
    date: "Apr 2021 - Mar 2022",
    icon: <FaGraduationCap size={20} />
  },
  
  // Training
  {
    id: "training-geeksforgeeks",
    title: "Complete Interview Preparation",
    organization: "Geeksforgeeks",
    description: [
      "Learned Data Structures and Algorithms (DSA) with in-depth problem-solving using C++.",
      "Practiced coding challenges to enhance problem-solving skills and algorithmic thinking.",
      "Studied core Computer Science subjects, including Operating Systems, DBMS, and OOPs at an intermediate level."
    ],
    date: "Jun 2024 - Aug 2024",
    icon: <FaLaptopCode size={20} />
  },
  
  // Certifications
  {
    id: "cert-software-testing",
    title: "Software Testing: Certification by IIITB",
    organization: "Swayam NPTEL",
    date: "Oct 2024",
    icon: <FaCertificate size={20} />
  },
  {
    id: "cert-prompt-engineering",
    title: "Prompt Engineering & Generative AI",
    organization: "Coursera",
    date: "Dec 2024",
    icon: <FaCertificate size={20} />
  },
  
  // Co-curricular Activities
  {
    id: "activity-ea",
    title: "Virtual Internship Simulation with Electronic Arts (EA)",
    organization: "Forage",
    description: ["Simulated industry tasks related to project execution"],
    date: "Jan 2025",
    icon: <FaLaptopCode size={20} />
  },
  {
    id: "activity-cybersecurity",
    title: "Cybersecurity Workshop",
    organization: "",
    description: ["Gained insights into threat analysis, network security, and ethical hacking fundamentals"],
    date: "Dec 2024",
    icon: <FaLaptopCode size={20} />
  },
  {
    id: "activity-placement",
    title: "Placement Preparation Workshop",
    organization: "",
    description: ["Learned resume building, interview strategies, and aptitude test techniques"],
    date: "Oct 2024",
    icon: <FaLaptopCode size={20} />
  },
  
  // Achievements
  {
    id: "achievement-nptel",
    title: "Ranked Top 1% Nationwide",
    organization: "NPTEL Software Testing course by IIIT Bangalore",
    date: "Oct 2024",
    icon: <FaTrophy size={20} />
  },
  {
    id: "achievement-leetcode",
    title: "Solved 100+ problems on LeetCode",
    organization: "",
    description: ["Demonstrating strong DSA and logical skills"],
    date: "Since Dec 2024",
    icon: <FaTrophy size={20} />
  },
  
  // Position of Responsibility
  {
    id: "position-coordinator",
    title: "Student Placement Coordinator",
    organization: "Lovely Professional University",
    description: ["Organized campus placements, coordinated training sessions, and liaised with recruiters"],
    date: "Since June 2024",
    icon: <FaUserTie size={20} />
  }
];

export default function Experience() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-off-white dark:bg-jet-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
        <div className="h-64 w-64 absolute top-1/4 -left-20 rounded-full bg-luxury-gold/5 blur-3xl"></div>
        <div className="h-64 w-64 absolute bottom-1/4 -right-20 rounded-full bg-luxury-gold/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Experience" subtitle="My professional journey" />
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-jet-black/60 rounded-xl shadow-sm hover:shadow-lg dark:shadow-black/10 transition-all duration-300 overflow-hidden border border-jet-black/5 dark:border-luxury-gold/10"
              >
                <div 
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between"
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="mb-4 sm:mb-0">
                    <p className="text-luxury-gold text-sm font-medium mb-1">{exp.date}</p>
                    <h3 className="text-xl font-semibold text-jet-black dark:text-off-white">{exp.title}</h3>
                    <p className="text-jet-black/80 dark:text-off-white/70 mt-1">{exp.organization} {exp.location && `| ${exp.location}`}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      className="p-2 rounded-full bg-jet-black/5 dark:bg-luxury-gold/10 text-jet-black dark:text-luxury-gold"
                      aria-label={expandedItem === exp.id ? "Collapse details" : "Expand details"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 transition-transform duration-300 ${expandedItem === exp.id ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {expandedItem === exp.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-jet-black/5 dark:border-luxury-gold/10">
                    <ul className="mt-3 space-y-2 text-jet-black/80 dark:text-off-white/80">
                      {exp.description && exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-luxury-gold mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {exp.details && (
                      <div className="mt-6">
                        <p className="text-sm font-medium text-luxury-gold mb-2">Details:</p>
                        <p className="text-jet-black/80 dark:text-off-white/80">{exp.details}</p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 