'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // In a real implementation, you would send this data to a server
      // This is a simulation for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit the form. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-off-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-64 w-64 absolute top-1/4 -left-20 rounded-full bg-luxury-gold/5 blur-3xl"></div>
        <div className="h-64 w-64 absolute bottom-1/4 -right-20 rounded-full bg-luxury-gold/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-jet-black dark:text-off-white mb-3">
              Get In Touch
            </h2>
            <p className="text-center text-jet-black/80 dark:text-off-white/70 mb-12 max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to connect.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 dark:bg-jet-black/60 rounded-xl shadow-xl dark:shadow-black/10 p-8 md:p-10 border border-jet-black/5 dark:border-luxury-gold/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-jet-black dark:text-off-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/90 dark:bg-jet-black border border-jet-black/10 dark:border-luxury-gold/20 rounded-lg px-4 py-3 text-jet-black dark:text-off-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-jet-black dark:text-off-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/90 dark:bg-jet-black border border-jet-black/10 dark:border-luxury-gold/20 rounded-lg px-4 py-3 text-jet-black dark:text-off-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-transparent transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-jet-black dark:text-off-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/90 dark:bg-jet-black border border-jet-black/10 dark:border-luxury-gold/20 rounded-lg px-4 py-3 text-jet-black dark:text-off-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-transparent transition-colors"
                  placeholder="Subject of your message"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-jet-black dark:text-off-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/90 dark:bg-jet-black border border-jet-black/10 dark:border-luxury-gold/20 rounded-lg px-4 py-3 text-jet-black dark:text-off-white focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-transparent transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              {error && (
                <div className="text-red-500 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-jet-black font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg 
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4"
                        ></circle>
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : "Send Message"}
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 flex flex-col items-center"
          >
            <h3 className="text-xl font-semibold mb-5 text-jet-black dark:text-off-white">
              Or connect with me directly
            </h3>
            
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:NihalMehta11@gmail.com" 
                className="text-jet-black dark:text-off-white hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/NihalMehta71" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-jet-black dark:text-off-white hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/nihal-mehta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-jet-black dark:text-off-white hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/NihalMehta71" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-jet-black dark:text-off-white hover:text-luxury-gold dark:hover:text-luxury-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 