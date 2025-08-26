import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaCloud, FaMobile, FaPalette } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    "Frontend Development": {
      icon: <FaCode />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 88 },
        { name: "TypeScript", level: 75 },
        { name: "Vue.js", level: 70 }
      ]
    },
    "Backend Development": {
      icon: <FaDatabase />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 75 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 },
        { name: "Django", level: 60 }
      ]
    },
    "Mobile Development": {
      icon: <FaMobile />,
      skills: [
        { name: "React Native", level: 75 },
        { name: "Expo", level: 80 },
        { name: "Mobile UI/UX", level: 70 },
        { name: "App Store Deployment", level: 65 }
      ]
    },
    "Tools & Technologies": {
      icon: <FaTools />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Firebase", level: 80 },
        { name: "Webpack", level: 75 },
        { name: "Jest", level: 70 }
      ]
    },
    "Cloud & DevOps": {
      icon: <FaCloud />,
      skills: [
        { name: "AWS Services", level: 70 },
        { name: "Google Cloud", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Nginx", level: 65 }
      ]
    },
    "Design & UI/UX": {
      icon: <FaPalette />,
      skills: [
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "Responsive Design", level: 85 },
        { name: "User Experience", level: 80 },
        { name: "Prototyping", level: 75 }
      ]
    }
  };

  const getSkillColor = (level) => {
    if (level >= 90) return '#4CAF50';
    if (level >= 80) return '#8BC34A';
    if (level >= 70) return '#FFC107';
    if (level >= 60) return '#FF9800';
    return '#F44336';
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical expertise and proficiency in various programming languages, frameworks, and tools.
          </p>
        </motion.div>

        <div className="skills-content">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {data.icon}
                </div>
                <h3>{category}</h3>
              </div>
              
              <div className="skills-grid">
                {data.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * skillIndex }}
                    viewport={{ once: true }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + 0.05 * skillIndex }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: getSkillColor(skill.level) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
