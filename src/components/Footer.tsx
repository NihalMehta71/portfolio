import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-jet-black text-off-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-luxury-gold hover:text-luxury-gold/80 transition-colors duration-300"
            >
              Nihal<span className="text-off-white">Mehta</span>
            </Link>
            <p className="mt-2 text-off-white/70 text-sm max-w-md">
              Building innovative digital solutions with a focus on performance, accessibility, and user experience.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link 
                href="#about" 
                className="text-off-white/80 hover:text-luxury-gold transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                href="#projects" 
                className="text-off-white/80 hover:text-luxury-gold transition-colors duration-300"
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                className="text-off-white/80 hover:text-luxury-gold transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
            
            <p className="text-off-white/60 text-sm">
              © {currentYear} Nihal Mehta. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
          <p className="text-off-white/60 text-sm flex items-center">
            Crafted with <FaHeart className="text-luxury-gold mx-1" size={14} /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 