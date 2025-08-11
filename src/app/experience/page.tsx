'use client';
import Navbar from '@/components/Navbar';
import { motion, Variants } from 'framer-motion';
import React from 'react';

const Experience: React.FC = () => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.1 },
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
    },
    {
      number: '02',
      company: 'Rento India',
      role: 'Application Developer Intern',
      duration: 'March 2025 - September 2025',
      location: 'Chennai, India',
      responsibilities: [
        'Developed and maintained backend services using Spring Boot, ensuring robust and scalable application architecture.',
        'Designed and implemented RESTful APIs to facilitate seamless communication between frontend and backend systems.',
        'Optimized database queries and integrated with relational databases to enhance application performance.',
        'Collaborated with team members in agile sprints to deliver high-quality backend solutions and conducted code reviews.',
      ],
    },
    {
      number: '03',
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
    },
    {
      number: '04',
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
    },
  ];

  const bgColors = ['rgba(219, 234, 254, 0.7)', 'rgba(254, 243, 199, 0.7)', 'rgba(204, 251, 241, 0.7)', 'rgba(254, 215, 170, 0.7)'];
  const textColors = ['#1E3A8A', '#C2410C', '#065F46', '#7C2D12'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/50 to-gray-100/50 flex flex-col">
      <Navbar />
      <motion.section
        id="experience"
        className="px-4 sm:px-6 lg:px-8 mt-20 py-8 sm:py-10 lg:py-12 flex-grow"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-10"
            variants={contentVariants}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Experience
          </motion.h2>
          <motion.div
            className="grid gap-6"
            variants={contentVariants}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-lg flex flex-col transition-all duration-300 ease-out shadow-md"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  minHeight: '280px',
                }}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.02,
                  background: bgColors[index % bgColors.length],
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}
              >
                <div className="flex flex-col space-y-3">
                  <motion.span
                    className="absolute top-4 left-4 text-xl font-bold text-gray-500/50"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.number}
                  </motion.span>
                  <motion.h3
                    className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 transition-colors duration-300"
                    whileHover={{ color: textColors[index % textColors.length] }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.role}
                  </motion.h3>
                  <motion.p
                    className="text-base text-gray-600 transition-colors duration-300"
                    whileHover={{ color: textColors[index % textColors.length] }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.company} | {exp.location}
                  </motion.p>
                  <motion.p
                    className="text-sm text-gray-600 italic transition-colors duration-300"
                    whileHover={{ color: textColors[index % textColors.length] }}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {exp.duration}
                  </motion.p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Experience;