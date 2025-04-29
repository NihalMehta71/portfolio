'use client';

import { motion } from 'framer-motion';

type SkillCategory = {
  title: string;
  skills: string[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["C++", "Python", "Dart", "Java", "Shell Scripting"]
    },
    {
      title: "Libraries & Tools",
      skills: ["Git", "GitHub", "Nmap", "Pandas", "NumPy", "unittest", "coverage.py", "PyTorch"]
    },
    {
      title: "CyberSecurity & Frameworks",
      skills: ["Metasploit", "OSINT Tools"]
    },
    {
      title: "Machine Learning & Generative AI",
      skills: ["Stable Diffusion", "LoRA"]
    },
    {
      title: "Databases",
      skills: ["MySQL"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Team Collaboration", "Leadership"]
    }
  ];

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
    <section id="skills" className="section bg-background dark:bg-jet-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-96 w-96 absolute -top-48 -right-48 rounded-full bg-luxury-gold/5 blur-3xl"></div>
        <div className="h-96 w-96 absolute -bottom-48 -left-48 rounded-full bg-luxury-gold/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-center">Skills</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-100 dark:bg-jet-black/80 p-6 rounded-xl shadow-md hover:shadow-lg border border-jet-black/5 dark:border-luxury-gold/20"
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-luxury-gold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-foreground/10 dark:bg-luxury-gold/20 rounded-full text-sm font-medium text-jet-black dark:text-off-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 