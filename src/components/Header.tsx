'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 shadow-sm border-b border-gray-200/20 dark:border-gray-700/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold gradient-text">
          Nihal Mehta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/NihalMehta71" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-metallic-dark hover:text-luxury-gold dark:text-metallic-light dark:hover:text-luxury-gold transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nihal-mehta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-metallic-dark hover:text-luxury-gold dark:text-metallic-light dark:hover:text-luxury-gold transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:NihalMehta11@gmail.com" aria-label="Email" className="text-metallic-dark hover:text-luxury-gold dark:text-metallic-light dark:hover:text-luxury-gold transition-colors">
            <FaEnvelope size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-metallic-dark dark:text-metallic-light"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
              About
            </Link>
            <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
              Skills
            </Link>
            <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
              Projects
            </Link>
            <Link href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
              Experience
            </Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-2 text-metallic-dark dark:text-metallic-light hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors">
              Contact
            </Link>
            
            {/* Social Icons in Mobile Menu */}
            <div className="flex items-center space-x-4 py-2">
              <a href="https://github.com/NihalMehta71" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-metallic-dark hover:text-luxury-gold dark:text-metallic-light dark:hover:text-luxury-gold transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/nihal-mehta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-metallic-dark hover:text-luxury-gold dark:text-metallic-light dark:hover:text-luxury-gold transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:NihalMehta11@gmail.com" aria-label="Email" className="text-metallic-dark hover:text-luxury-gold dark:text-metallic-light dark:hover:text-luxury-gold transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 