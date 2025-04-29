import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-jet-black/95 backdrop-blur-sm shadow-md shadow-black/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-luxury-gold hover:text-luxury-gold/80 transition-colors duration-300"
          >
            Nihal<span className="text-off-white">Mehta</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-off-white/90 hover:text-luxury-gold transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-5 py-2 bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300 rounded text-sm uppercase tracking-wider"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-off-white hover:text-luxury-gold transition-colors z-50"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 bg-jet-black/95 backdrop-blur-md pt-24"
          >
            <div className="container mx-auto px-6">
              <nav className="flex flex-col space-y-6 items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-off-white/90 hover:text-luxury-gold transition-colors duration-300 text-lg tracking-wider"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 transition-all duration-300 rounded text-lg tracking-wider mt-2"
                >
                  Hire Me
                </Link>
              </nav>
            </div>
            
            <div className="absolute bottom-10 inset-x-0 flex justify-center">
              <div className="h-1 w-16 bg-luxury-gold/20 rounded-full"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 