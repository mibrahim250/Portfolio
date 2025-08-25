import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTools, FaTrophy, FaUsers } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: "Target Technician",
      company: "Target Corporation",
      location: "Overland Park, KS",
      duration: "2023 - Present",
      type: "Full-time",
      description: "Providing technical support and troubleshooting for Target's retail systems and equipment. Ensuring smooth operation of point-of-sale systems, inventory management tools, and customer service technologies.",
      responsibilities: [
        "Maintain and troubleshoot POS systems and retail equipment",
        "Provide technical support to store associates and management",
        "Install and configure new hardware and software systems",
        "Perform regular maintenance and updates on store technology",
        "Document technical issues and solutions for future reference"
      ],
      technologies: ["POS Systems", "Hardware Maintenance", "Software Installation", "Technical Support", "System Administration"]
    },
    {
      title: "Hackathon Participant",
      company: "Hack Midwest 2024",
      location: "Kansas City, MO",
      duration: "January 2024",
      type: "Competition",
      description: "Participated in Hack Midwest 2024, a 24-hour hackathon focused on creating innovative solutions for real-world problems. Collaborated with a team to develop a web application that addresses community needs.",
      responsibilities: [
        "Developed a full-stack web application in 24 hours",
        "Collaborated with team members on project planning and execution",
        "Implemented responsive design and modern UI/UX principles",
        "Presented project to judges and fellow participants",
        "Received recognition for innovative problem-solving approach"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Git", "Figma"]
    },
    {
      title: "Hackathon Participant",
      company: "Hack KKU 2023",
      location: "Kansas City, MO",
      duration: "November 2023",
      type: "Competition",
      description: "Competed in Hack KKU 2023, demonstrating technical skills and creativity in a collaborative environment. Built a mobile application that solves a specific community challenge.",
      responsibilities: [
        "Designed and developed a mobile application prototype",
        "Worked under time constraints to deliver a functional product",
        "Collaborated with diverse team members with different skill sets",
        "Presented technical solution to industry professionals",
        "Gained valuable experience in rapid prototyping and teamwork"
      ],
      technologies: ["React Native", "JavaScript", "Firebase", "APIs", "Mobile Development"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and hands-on experience in technology and problem-solving.
          </p>
        </motion.div>

        <div className="experience-content">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="experience-card card">
                <div className="experience-header">
                  <div className="experience-icon">
                    {item.type === "Competition" ? <FaTrophy /> : <FaBriefcase />}
                  </div>
                  <div className="experience-info">
                    <h3>{item.title}</h3>
                    <p className="company">{item.company}</p>
                    <div className="experience-meta">
                      <span><FaCalendarAlt /> {item.duration}</span>
                      <span><FaMapMarkerAlt /> {item.location}</span>
                      <span className="experience-type">{item.type}</span>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{item.description}</p>
                
                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {item.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  <h4>Technologies & Skills:</h4>
                  <div className="tech-tags">
                    {item.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-card card">
            <h3>What I've Learned</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <FaTools />
                <h4>Technical Skills</h4>
                <p>Gained hands-on experience with various technologies and development methodologies.</p>
              </div>
              <div className="summary-item">
                <FaUsers />
                <h4>Team Collaboration</h4>
                <p>Learned to work effectively in diverse teams and communicate technical concepts clearly.</p>
              </div>
              <div className="summary-item">
                <FaTrophy />
                <h4>Problem Solving</h4>
                <p>Developed strong analytical and creative problem-solving skills in high-pressure environments.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
