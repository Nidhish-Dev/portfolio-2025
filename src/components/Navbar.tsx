'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const pathname = usePathname();

  const navItems: { name: string; path: string }[] = [
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll to show/hide Back to Top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const navVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const mobileMenuVariants: Variants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 400, damping: 40 },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 400, damping: 40 },
    },
  };

  const mobileLinkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' },
    }),
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (path === '/projects') {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      } else if (pathname !== '/') {
        window.location.href = '/#projects';
      }
    } else {
      window.location.href = path;
    }
    setIsOpen(false);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="fixed w-full top-0 z-50 bg-[#131313]/90 backdrop-blur-lg shadow-lg py-2"
        style={{
          background: 'rgba(19, 19, 19, 0.9)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Name */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                NR
              </Link>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-white hover:text-gray-300 font-medium transition-colors duration-300 ${
                    pathname === item.path ? 'border-b-2 border-white' : ''
                  }`}
                  onClick={(e) => handleScrollToProjects(e, item.path)}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none text-white hover:text-gray-300"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="md:hidden fixed inset-0 bg-[#131313]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(19, 19, 19, 0.95)',
            }}
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="focus:outline-none text-white hover:text-gray-300"
                aria-label="Close menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center space-y-10 text-4xl">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={mobileLinkVariants}
                  initial="closed"
                  animate="open"
                  custom={index}
                >
                  <Link
                    href={item.path}
                    className={`text-white hover:text-gray-300 font-medium transition-colors duration-300 ${
                      pathname === item.path ? 'border-b-2 border-white' : ''
                    }`}
                    onClick={(e) => handleScrollToProjects(e, item.path)}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={handleBackToTop}
            className="fixed bottom-6 right-6 bg-[#131313]/90 text-white px-4 py-4 rounded-full flex items-center space-x-2 border border-white/10 hover:bg-[#1a1a1a]/90 transition-all duration-300 shadow-lg z-[100]"
            style={{
              background: 'rgba(19, 19, 19, 0.9)',
              backdropFilter: 'blur(10px)',
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to Top"
          >
            <FaArrowUp size={18} />
            
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;