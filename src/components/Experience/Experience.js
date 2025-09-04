import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTools, FaTrophy, FaUsers, FaCrown } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      title: "Co-Lead HackKU Organizer",
      company: "HackKU",
      location: "Lawrence, KS",
      duration: "Sep 2025 - April 2026",
      type: "Leadership",
      description: "Leading sponsorship outreach and partner relations for HackKU, building and qualifying pipelines, running demos and negotiating tiers, managing CRM and agreements to secure cash and in-kind support for a campus-scale hackathon.",
      responsibilities: [
        "Lead sponsorship outreach and partner relations, build and qualify a pipeline",
        "Run demos and negotiate tiers, manage CRM and agreements to secure cash and in-kind support",
        "Run agile ops with weekly standups and a kanban board, drive short sprints across logistics, marketing and tech",
        "Keep a living runbook and on-call plan for a campus-scale hackathon",
        "Manage event logistics and coordinate with multiple stakeholders"
      ],
      technologies: ["CRM Management", "Agile Operations", "Event Planning", "Partnership Development", "Project Management"]
    },
    {
      title: "Retail Data Entry Specialist",
      company: "Starbucks",
      location: "Kansas City, MO",
      duration: "June 2025 - Present",
      type: "Part-time",
      description: "Update product and fuel pricing in back office pricing software and POS systems from vendor files and manager requests, verify sync to registers and pumps and log each change.",
      responsibilities: [
        "Update product and fuel pricing in back office pricing software and POS systems from vendor files and manager requests",
        "Verify sync to registers and pumps and log each change",
        "Work daily in Modisoft back office to push price updates, print shelf labels and run basic audit reports",
        "Ensure accurate pricing across all store systems and maintain detailed change logs",
        "Collaborate with management to implement pricing strategies and updates"
      ],
      technologies: ["Modisoft", "POS Systems", "Data Entry", "Price Management", "Audit Reporting"]
    },
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
      company: "Hackathons (HackKU, Hack Midwest)",
      location: "Kansas City, MO",
      duration: "2023-2025",
      type: "Competition",
      description: "Frontend lead on Hob n Go built in 24 hours using React and AWS, a swipe style hobby matching app with location based discovery and a clean match flow. Added AWS user auth, S3 media storage and serverless APIs, delivered profiles cards likes and matches with a working demo.",
      responsibilities: [
        "Frontend lead on Hob n Go built in 24 hours using React and AWS",
        "Developed a swipe style hobby matching app with location based discovery and a clean match flow",
        "Added AWS user auth, S3 media storage and serverless APIs",
        "Delivered profiles cards likes and matches with a working demo",
        "Collaborated with team members on rapid prototyping and deployment"
      ],
      technologies: ["React", "AWS", "S3", "Serverless APIs", "User Authentication", "Location Services"]
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
                    {item.type === "Competition" ? <FaTrophy /> : 
                     item.type === "Leadership" ? <FaCrown /> : <FaBriefcase />}
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
