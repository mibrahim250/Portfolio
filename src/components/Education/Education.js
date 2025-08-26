import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Your University Name",
      location: "City, State",
      duration: "2020 - 2024",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Completed coursework in web development, database systems, and software architecture.",
      achievements: [
        "Dean's List for Academic Excellence",
        "Computer Science Honor Society Member",
        "Senior Capstone Project: [Project Name]"
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Your High School Name",
      location: "City, State",
      duration: "2016 - 2020",
      gpa: "3.9/4.0",
      description: "Strong foundation in mathematics and sciences. Participated in various extracurricular activities and leadership roles.",
      achievements: [
        "Valedictorian",
        "National Honor Society",
        "Student Council President"
      ]
    }
  ];



  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and achievements that have shaped my technical foundation.
          </p>
        </motion.div>

        <div className="education-content">
          <motion.div
            className="education-timeline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="timeline-marker"></div>
                <div className="education-card card">
                  <div className="education-header">
                    <div className="education-icon">
                      <FaGraduationCap />
                    </div>
                    <div className="education-info">
                      <h3>{item.degree}</h3>
                      <p className="institution">{item.institution}</p>
                      <div className="education-meta">
                        <span><FaCalendarAlt /> {item.duration}</span>
                        <span><FaMapMarkerAlt /> {item.location}</span>
                        <span><FaStar /> GPA: {item.gpa}</span>
                      </div>
                    </div>
                  </div>
                  <p className="education-description">{item.description}</p>
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
