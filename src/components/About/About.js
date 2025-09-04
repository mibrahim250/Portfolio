import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaHeart, FaBullseye, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutData = [
    {
      icon: <FaUser />,
      title: "Who I Am",
      description: "I'm a passionate software developer with a love for creating innovative solutions. I enjoy turning complex problems into simple, beautiful designs."
    },
    {
      icon: <FaHeart />,
      title: "What I Love",
      description: "I'm passionate about technology, problem-solving, and continuous learning. I love working on challenging projects that push my boundaries."
    },
    {
      icon: <FaBullseye />,
      title: "My Goals",
      description: "I aim to become a full-stack developer who creates impactful applications that make a difference in people's lives."
    },

  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my background, interests, and what drives me in the world of technology.
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Hello! I'm Ibrahim</h3>
            <p>
              I'm a dedicated software developer with a strong foundation in both frontend and backend technologies. 
              My journey in programming started with curiosity and has evolved into a passion for creating meaningful applications.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or working on personal projects that challenge my skills. I believe in the power of technology to solve 
              real-world problems and make a positive impact. 
            </p>
            <p>
              I'm always eager to learn new things and take on challenging projects that help me grow both personally 
              and professionally. My goal is to become a well-rounded developer who can tackle any problem with 
              creativity and technical expertise.
            </p>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-2">
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  className="about-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="card-icon">
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
