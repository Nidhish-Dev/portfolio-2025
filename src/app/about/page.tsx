'use client';
import Navbar from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const About: React.FC = () => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 }
    })
  };

  const skills = [
    { category: 'Programming Languages', items: ['Java', 'C', 'C++', 'Python'] },
    { category: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'Spring Boot'] },
    { category: 'Databases', items: ['MongoDB', 'Firebase', 'Supabase'] },
    { category: 'Version Control', items: ['Git'] },
    { category: 'Tools', items: ['VS Code', 'IntelliJ IDEA', 'Xcode', 'Postman', 'Android Studio', 'Photoshop', 'Figma', 'GitHub'] }
  ];

  const [copied, setCopied] = useState({ email: false, phone: false });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 2000);
    });
  };

  const bgColors = ['rgba(219, 234, 254, 0.7)', 'rgba(254, 243, 199, 0.7)', 'rgba(204, 251, 241, 0.7)'];
  const textColors = ['#1E3A8A', '#C2410C', '#065F46'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-gray-100/50">
      <Navbar />
      <motion.section
        id="about"
        className="px-6 sm:px-12 lg:px-24 py-24 sm:py-32 lg:py-40"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)'
        }}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="max-w-5xl mx-auto">
          {/* About Me Section */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 text-center mb-20 sm:mb-24 lg:mb-28 relative"
            variants={contentVariants}
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.03em' }}
          >
            About Me
            <motion.span
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '7rem', transition: { duration: 0.8, ease: 'easeOut' } }}
            />
          </motion.h2>
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 sm:mb-24 lg:mb-28"
            variants={contentVariants}
          >
            {/* Photo (Top on Mobile, Right on Desktop) */}
            <motion.div
              className="w-full lg:w-1/3 order-1 lg:order-2"
              variants={itemVariants}
              custom={0}
            >
              <div className="relative bg-white/10 backdrop-blur-xl border border-transparent rounded-2xl overflow-hidden shadow-xl"
                   style={{ borderImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.5), ${textColors[0]}40) 1` }}>
                <img
                  src="IMG.jpg" // Replace with your actual photo URL
                  alt="Profile"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            {/* Bio (Bottom on Mobile, Left on Desktop) */}
            <motion.div
              className="w-full lg:w-2/3 order-2 lg:order-1"
              variants={itemVariants}
              custom={1}
            >
              <motion.p
                className="text-lg sm:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Skilled Software Engineer with experience in building full-stack web applications using React, Spring Boot, Node.js, and MongoDB. Committed to writing clean, scalable code and delivering effective solutions to real-world problems.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-12 sm:mb-16"
            variants={contentVariants}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Skills
          </motion.h3>
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={contentVariants}
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="relative bg-white/10 backdrop-blur-xl border border-transparent p-6 sm:p-8 rounded-2xl transition-all duration-500 ease-out shadow-xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  minHeight: '200px',
                  borderImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.5), ${textColors[index % textColors.length]}40) 1`
                }}
                variants={itemVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  background: bgColors[index % bgColors.length],
                  boxShadow: '0 15px 50px rgba(0, 0, 0, 0.2)',
                  transition: { duration: 0.4, ease: 'easeInOut' }
                }}
              >
                <h4
                  className="text-lg sm:text-xl font-medium text-gray-800 mb-4"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {skillGroup.category}
                </h4>
                <ul className="space-y-2 text-base sm:text-lg text-gray-600">
                  {skillGroup.items.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start transition-colors duration-300"
                      whileHover={{ color: textColors[index % textColors.length], x: 5 }}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <span className="mr-2">•</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info Section */}
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 text-center mt-20 sm:mt-24 lg:mt-28 mb-12 sm:mb-16"
            variants={contentVariants}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Contact
          </motion.h3>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12"
            variants={contentVariants}
          >
            <motion.div
              className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-transparent p-6 rounded-2xl shadow-xl"
              style={{ borderImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.5), ${textColors[0]}40) 1` }}
              variants={itemVariants}
              custom={0}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            >
              <span className="text-base sm:text-lg text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                Email: codenidhish07@gmail.com
              </span>
              <button
                onClick={() => copyToClipboard('example@email.com', 'email')}
                className="ml-4 p-2 rounded-full bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-300"
              >
                <Copy className="w-5 h-5 text-gray-600" />
                {copied.email && <span className="absolute text-sm text-green-500 ml-2">Copied!</span>}
              </button>
            </motion.div>
            <motion.div
              className="flex items-center justify-between bg-white/10 backdrop-blur-xl border border-transparent p-6 rounded-2xl shadow-xl"
              style={{ borderImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.5), ${textColors[1]}40) 1` }}
              variants={itemVariants}
              custom={1}
              whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            >
              <span className="text-base sm:text-lg text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                Phone: +91 87082-95706
              </span>
              <button
                onClick={() => copyToClipboard('+91-123-456-7890', 'phone')}
                className="ml-4 p-2 rounded-full bg-gray-800/20 hover:bg-gray-800/40 transition-colors duration-300"
              >
                <Copy className="w-5 h-5 text-gray-600" />
                {copied.phone && <span className="absolute text-sm text-green-500 ml-2">Copied!</span>}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;