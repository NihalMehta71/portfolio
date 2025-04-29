'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';
import SectionHeading from './SectionHeading';

type Project = {
  title: string;
  description: string[];
  tech: string;
  timeline: string;
  github?: string;
  demo?: string;
  tags?: string[];
  imageSrc?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AlgoRubix-Cube-Solver",
      description: [
        "Implementing advanced Data Structures and Algorithms to develop an efficient Rubik's Cube solver.",
        "Optimizing solution strategies through continuous refinements to enhance speed and accuracy.",
        "Applying theoretical concepts to tackle real-world problem-solving challenges in computational efficiency."
      ],
      tech: "C++, Data Structures and Algorithms",
      timeline: "Since Dec 2024",
      github: "https://github.com/NihalMehta71/AlgoRubix-Cube-Solver",
      tags: ["C++", "DSA", "Algorithms"]
    },
    {
      title: "LoRA Fine-Tuning on Stable Diffusion",
      description: [
        "Applied LoRA to fine-tune Stable Diffusion on a custom dataset for unique style outputs.",
        "Resource-Light Training: Reduced trainable parameters via low-rank layers, enabling fast GPU-efficient experiments.",
        "Streamlined Checkpoints: Calibrated training settings to generate compact, ready-to-use model snapshots."
      ],
      tech: "Python, PyTorch, Stable Diffusion, LoRA",
      timeline: "Mar 2025 - Apr 2025",
      github: "https://github.com/NihalMehta71/SD-LoRA-Finetuning",
      tags: ["Python", "PyTorch", "AI"]
    },
    {
      title: "Mazecraft",
      description: [
        "Developed a dynamic maze generator and solver utilizing multiple algorithms for efficient pathfinding.",
        "Optimized algorithmic efficiency to generate complex mazes and compute optimal solutions effectively.",
        "Implemented Depth-First Search (DFS) and Prim's Algorithm for maze generation, and Left Wall Follower and Dijkstra's Algorithm for solving."
      ],
      tech: "C++, Data Structures and Algorithms",
      timeline: "Jul 2024 - Oct 2024",
      github: "https://github.com/NihalMehta71/Mazecraft",
      tags: ["C++", "Algorithms", "Graph Theory"]
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);
  
  const showMoreProjects = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 3, projects.length));
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-jet-black dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-64 w-64 absolute top-1/4 -left-20 rounded-full bg-luxury-gold/5 blur-3xl"></div>
        <div className="h-64 w-64 absolute bottom-1/4 -right-20 rounded-full bg-luxury-gold/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Projects" 
          subtitle="Showcasing my creative work" 
          className="text-off-white dark:text-off-white"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.slice(0, visibleProjects).map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="bg-gray-100 dark:bg-jet-black/60 rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-black/10 transition-all duration-300 h-full flex flex-col border border-jet-black/5 dark:border-luxury-gold/10">
                {project.imageSrc && (
                  <div className="relative overflow-hidden aspect-video">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                    
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {project.tags && project.tags.length > 0 && (
                      <div className="absolute bottom-0 left-0 p-4 z-20">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs rounded-full bg-luxury-gold/20 text-luxury-gold backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-luxury-gold/20 text-luxury-gold backdrop-blur-sm">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-jet-black dark:text-off-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-jet-black/80 dark:text-off-white/70 mb-4 flex-1">
                    {project.description[0]}
                  </p>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-sm font-medium bg-luxury-gold text-jet-black hover:bg-luxury-gold/90 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-luxury-gold/30 text-jet-black dark:text-luxury-gold hover:bg-luxury-gold/10 transition-colors"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button 
              onClick={showMoreProjects} 
              className="px-6 py-3 rounded-lg font-medium bg-transparent border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 transition-colors"
            >
              Show More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 