'use client';
import Navbar from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const Experience: React.FC = () => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
    }),
  };

  const experiences = [
    {
      number: '01',
      company: 'NTS Nihon Global',
      role: 'Software Development Engineer Intern',
      duration: 'June 2025 - August 2025',
      location: 'Gurugram, India',
      responsibilities: [
        'Developed and optimized web applications using React and TypeScript for enhanced user experiences.',
        'Collaborated with cross-functional teams to implement responsive UI designs and improve application performance.',
        'Contributed to backend services using Node.js, integrating APIs for seamless data flow.',
        'Participated in code reviews and agile team meetings to ensure high-quality deliverables.',
      ],
      url: 'https://ntsnihonglobal.com', // Placeholder; replace with actual URL if available
    },
    {
      number: '02',
      company: 'Liftoff Club',
      role: 'Tech Head',
      duration: 'January 2025 - Present',
      location: 'Chennai, India',
      responsibilities: [
        'Led a team of developers to design and deploy club-related web and mobile applications.',
        'Oversaw the implementation of scalable technical solutions for club events and member engagement.',
        'Mentored team members in UI/UX design principles and modern JavaScript frameworks.',
        'Coordinated with stakeholders to align technical projects with organizational goals.',
      ],
      url: 'https://liftoffclub.example.com', // Placeholder; replace with actual URL if available
    },
    {
      number: '03',
      company: 'Liftoff Club',
      role: 'Tech Associate',
      duration: 'September 2024 - January 2025',
      location: 'Chennai, India',
      responsibilities: [
        'Assisted in developing responsive web interfaces using HTML, CSS, and JavaScript.',
        'Supported the maintenance and updates of club websites and databases.',
        'Contributed to technical documentation and testing of new features.',
        'Collaborated with the Tech Head to prototype new application features.',
      ],
      url: 'https://liftoffclub.example.com', // Placeholder; replace with actual URL if available
    },
  ];

  const bgColors = ['rgba(219, 234, 254, 0.7)', 'rgba(254, 243, 199, 0.7)', 'rgba(204, 251, 241, 0.7)'];
  const textColors = ['#1E3A8A', '#C2410C', '#065F46'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-gray-100/50">
      <Navbar />
      <motion.section
        id="experience"
        className="px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-32"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-16 sm:mb-20 lg:mb-24"
            variants={contentVariants}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience
          </motion.h2>
          <motion.div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-12"
            variants={contentVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 sm:p-10 rounded-xl flex flex-col justify-between transition-all duration-500 ease-out shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  minHeight: '360px',
                }}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.03,
                  background: bgColors[index % bgColors.length],
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.4, ease: 'easeInOut' },
                }}
              >
                <div className="flex flex-col space-y-4">
                  <motion.span
                    className="absolute top-6 left-6 text-2xl font-bold text-gray-500/50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.number}
                  </motion.span>
                  <motion.h3
                    className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-10 transition-colors duration-300"
                    whileHover={{ color: textColors[index % textColors.length] }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.role}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-gray-600 transition-colors duration-300"
                    whileHover={{ color: textColors[index % textColors.length] }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.company} | {exp.location}
                  </motion.p>
                  <motion.p
                    className="text-base text-gray-600 italic transition-colors duration-300"
                    whileHover={{ color: textColors[index % textColors.length] }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.duration}
                  </motion.p>
                  <ul className="mt-6 space-y-3 text-base text-gray-600">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start transition-colors duration-300"
                        whileHover={{ color: textColors[index % textColors.length] }}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <span className="mr-2">•</span>
                        {resp}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <motion.a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
                  whileHover={{ x: 5, color: textColors[index % textColors.length] }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Visit {exp.company} →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;