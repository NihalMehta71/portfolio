'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaFileDownload } from 'react-icons/fa';

export default function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen relative flex items-center justify-center px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-slate-800">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,120,0.15),transparent_65%)]"></div>
        <div className="h-32 w-32 absolute top-1/4 left-1/4 rounded-full bg-metallic-light/10 blur-3xl"></div>
        <div className="h-64 w-64 absolute bottom-1/3 right-1/4 rounded-full bg-metallic-grey/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="block gradient-text mt-2">Nihal Mehta</span>
            <span className="block text-metallic-grey dark:text-metallic-light mt-2 text-2xl md:text-4xl font-light">
              Computer Science Engineer
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto font-light"
        >
          Passionate about problem-solving, data structures, and algorithm optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a 
            href="#projects" 
            className="glass-effect px-8 py-3 text-metallic-dark dark:text-metallic-light font-medium transition-all duration-300 hover:shadow-lg rounded-lg"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="border border-metallic-grey/30 hover:border-metallic-grey/60 dark:border-metallic-light/30 dark:hover:border-metallic-light/60 px-8 py-3 rounded-lg text-metallic-grey dark:text-metallic-light font-medium transition-all duration-300 hover:shadow-lg"
          >
            Get in Touch
          </a>
          <a 
            href="/assets/Nihal_Mehta_Resume.pdf" 
            download
            className="bg-luxury-gold hover:bg-luxury-gold/90 px-8 py-3 rounded-lg text-jet-black font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
          >
            <FaFileDownload className="inline-block" />
            Resume
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <button 
          onClick={scrollToNextSection}
          aria-label="Scroll down"
          className="glass-effect p-3 hover:shadow-lg transition-all"
        >
          <FaArrowDown className="text-metallic-grey dark:text-metallic-light" />
        </button>
      </div>
    </section>
  );
} 