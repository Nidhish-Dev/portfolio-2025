'use client';
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  const [textIndex, setTextIndex] = useState<number>(0);
  const texts: string[] = ["Software Engineer", "Java Developer", "UI/UX Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.6 } },
  };

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative">
        {/* Hero Section */}
        <motion.div
          className="min-h-[92vh] bg-gradient-to-br from-gray-50/90 to-gray-100/90 backdrop-blur-xl flex flex-col md:flex-row items-center justify-center md:justify-between px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 mt-16 relative"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
          }}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {/* Left Content */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-lg"
            variants={contentVariants}
          >
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-800 tracking-tight"
              variants={contentVariants}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Nidhish Rathore
            </motion.h1>

            <div className="h-[2rem] sm:h-[2.5rem]">
              <AnimatePresence mode="wait">
                <motion.p
                  key={textIndex}
                  className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-600"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {texts[textIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={contentVariants}
              style={{
                background: 'rgba(17, 24, 39, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-6 mt-8 md:mt-0"
            variants={contentVariants}
          >
            {[
              { href: "https://www.linkedin.com/in/nidhish-rathore", Icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://github.com/nidhish-rathore", Icon: FaGithub, label: "GitHub" },
              { href: "https://www.instagram.com/nidhish-rathore", Icon: FaInstagram, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gray-800 hover:text-gray-600 hover:bg-white/20 transition-all duration-300"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } }}
            whileHover={{ y: 5 }}
          >
            <FaChevronDown size={24} />
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <Projects />
      </div>
    </>
  );
}