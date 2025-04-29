'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaPhoneAlt } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="section bg-off-white dark:bg-jet-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-heading text-center">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-12 mt-12">
            <div className="flex-1">
              <p className="text-lg text-foreground dark:text-off-white mb-6 leading-relaxed">
                I'm a Computer Science Engineering student with a passion for problem-solving, data structures, and algorithms.
                Currently focusing on developing efficient solutions for complex computational problems.
              </p>
              <p className="text-lg text-foreground dark:text-off-white mb-6 leading-relaxed">
                My academic journey has equipped me with strong programming skills in C++, Python, and Java. I'm particularly 
                interested in cybersecurity and machine learning, with hands-on experience in tools like Metasploit and frameworks 
                like Stable Diffusion.
              </p>
              <p className="text-lg text-foreground dark:text-off-white leading-relaxed">
                As a Student Placement Coordinator at Lovely Professional University, I've developed strong organizational and 
                interpersonal skills while helping my peers connect with industry opportunities.
              </p>
            </div>
            
            <div className="flex-1">
              <div className="grid gap-8">
                <motion.div 
                  className="bg-gray-100 dark:bg-jet-black/80 p-6 rounded-xl shadow-md hover:shadow-lg border border-jet-black/5 dark:border-luxury-gold/20 flex items-start"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mr-4 p-3 rounded-full bg-luxury-gold/10 text-luxury-gold">
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-jet-black dark:text-off-white">Education</h3>
                    <p className="text-foreground dark:text-off-white">
                      B.Tech in Computer Science and Engineering<br />
                      Lovely Professional University, Jalandhar, Punjab<br />
                      CGPA: 8.76
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-100 dark:bg-jet-black/80 p-6 rounded-xl shadow-md hover:shadow-lg border border-jet-black/5 dark:border-luxury-gold/20 flex items-start"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mr-4 p-3 rounded-full bg-luxury-gold/10 text-luxury-gold">
                    <FaLaptopCode size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-jet-black dark:text-off-white">Specialization</h3>
                    <p className="text-foreground dark:text-off-white">
                      Data Structures & Algorithms, Cybersecurity, Machine Learning, Generative AI
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-gray-100 dark:bg-jet-black/80 p-6 rounded-xl shadow-md hover:shadow-lg border border-jet-black/5 dark:border-luxury-gold/20 flex items-start"
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mr-4 p-3 rounded-full bg-luxury-gold/10 text-luxury-gold">
                    <FaPhoneAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-jet-black dark:text-off-white">Contact</h3>
                    <p className="text-foreground dark:text-off-white">
                      Email: NihalMehta11@gmail.com<br />
                      Phone: +91-9729083204
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 