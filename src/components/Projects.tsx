'use client';
import { motion, Variants } from "framer-motion";

const Projects: React.FC = () => {
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.2 },
    }),
  };

  const projects = [
    {
      number: "01",
      name: "FormiSiq",
      description: "A dynamic form-building platform with real-time validation and responsive design.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      url: "https://formisiq.example.com",
    },
    {
      number: "02",
      name: "Bento",
      description: "A modern bento-grid layout showcasing modular UI components with animations.",
      techStack: ["Next.js", "CSS Grid", "Framer Motion"],
      url: "https://bento.example.com",
    },
    {
      number: "03",
      name: "Hello Api",
      description: "A RESTful API for seamless integration with scalable backend services.",
      techStack: ["Express.js", "MongoDB", "TypeScript"],
      url: "https://helloapi.example.com",
    },
    {
      number: "04",
      name: "Cuvette Clone",
      description: "A job board platform clone with advanced search and filtering capabilities.",
      techStack: ["React", "Redux", "Tailwind CSS", "Firebase"],
      url: "https://cuvetteclone.example.com",
    },
  ];

  const bgColors = ["rgba(219, 234, 254, 0.7)", "rgba(254, 243, 199, 0.7)", "rgba(204, 251, 241, 0.7)", "rgba(229, 231, 235, 0.7)"];
  const textColors = ["#1E3A8A", "#C2410C", "#065F46", "#111827"];

  return (
    <motion.section
      id="projects"
      className="bg-gradient-to-b from-gray-50/50 to-gray-100/50 backdrop-blur-lg px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      }}
      initial="hidden"
      animate="visible"
      variants={contentVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-12 sm:mb-16"
          variants={contentVariants}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
          variants={contentVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl flex flex-col justify-between transition-all duration-500 ease-out shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                minHeight: '300px',
              }}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.03,
                background: bgColors[index],
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            >
              <div>
                <motion.span
                  className="absolute top-4 left-4 text-2xl font-bold text-gray-500/50"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.number}
                </motion.span>
                <motion.h3
                  className="text-2xl font-semibold text-gray-800 mt-4 transition-colors duration-300"
                  whileHover={{ color: textColors[index] }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  className="text-base text-gray-600 mt-2 transition-colors duration-300"
                  whileHover={{ color: textColors[index] }}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.description}
                </motion.p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm uppercase tracking-wider font-medium text-gray-500 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Tech Stack
                </h4>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30 transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-base font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
                whileHover={{ x: 5, color: textColors[index] }}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;