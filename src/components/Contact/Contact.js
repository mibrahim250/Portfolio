import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaGithub, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "your.email@gmail.com",
      link: "mailto:your.email@gmail.com",
      description: "Send me an email for any inquiries or collaboration opportunities."
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      link: "https://linkedin.com/in/yourusername",
      description: "Connect with me on LinkedIn to stay updated with my professional journey."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Overland Park, KS",
      link: null,
      description: "Based in Overland Park, Kansas. Open to remote opportunities worldwide."
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "#333"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      color: "#0077B5"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:your.email@gmail.com",
      color: "#EA4335"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                  <p className="contact-description">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-message"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="message-card card">
              <h3>Let's Work Together</h3>
              <p>
                I'm passionate about creating innovative solutions and turning ideas into reality. 
                Whether you have a project in mind, want to discuss potential collaborations, 
                or just want to say hello, I'd love to hear from you.
              </p>
              <p>
                I'm currently available for freelance opportunities and full-time positions. 
                Feel free to reach out through any of the contact methods above.
              </p>
              <div className="availability">
                <span className="status available">Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Connect With Me</h3>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--social-color': social.color }}
              >
                <div className="social-icon">
                  {social.icon}
                </div>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Thank you for visiting my portfolio! I look forward to connecting with you and 
            exploring potential opportunities to work together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
