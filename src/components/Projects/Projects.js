import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaMobile, FaGlobe, FaDatabase, FaDesktop } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "Job Application Tracker",
      description: "A comprehensive job application tracking platform with filtering capabilities, status management, and application analytics. Built with React frontend, Supabase/PostgreSQL database, and Spring Boot/Java backend for analytics. Used by many users actively including me to stay organized and track application progress effectively.",
      category: "web",
      technologies: ["React", "Supabase", "PostgreSQL", "Spring Boot", "Java"],
      github: "https://github.com/mibrahim250/JobAppTracker",
      live: "https://trackytrack.online",
      features: ["Application Filtering", "Status Tracking", "Date Management", "Progress Analytics", "User Dashboard"]
    },
    {
      id: 2,
      title: "BlossomTag",
      description: "A powerful desktop PDF annotation tool built with Python and Tkinter. Features advanced PDF annotation capabilities, keyword search, highlighting, and exportable research notes. Includes optional OCR functionality for scanned documents, making it perfect for students and professionals who need to organize and analyze PDF documents efficiently.",
      category: "desktop",
      technologies: ["Python", "Tkinter", "PyMuPDF", "OCR", "Windows"],
      github: "https://github.com/mibrahim250/BlossomTag",
      live: "https://drive.google.com/drive/u/0/folders/1ptYcy3_kA0is1Z-OwPSCgBXetvPrQSIe",
      features: ["PDF Annotation", "Keyword Search", "OCR Support", "Export Notes", "Windows Executable"]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A beautiful weather application that provides current weather conditions, forecasts, and location-based weather alerts. Features interactive maps and detailed weather analytics.",
      category: "web",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3", "HTML5"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://weather-dashboard-demo.com",
      features: ["Current Weather", "5-Day Forecast", "Interactive Maps", "Weather Alerts", "Location Search"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend Systems' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'mobile': return <FaMobile />;
      case 'backend': return <FaDatabase />;
      case 'desktop': return <FaDesktop />;
      default: return <FaGlobe />;
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical projects that demonstrate my skills and creativity.
          </p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card card"
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
