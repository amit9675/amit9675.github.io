import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">say.hello()</span>
        <h2 className="section-title">
          Get In <span className="grad">Touch</span>
        </h2>
        <p className="section-sub">
          Have a project in mind or just want to connect? My inbox is always open.
        </p>
      </motion.div>

      <motion.div
        className="contact-card glass-card border-glow"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="contact-name">Amit Bhandari</h3>

        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:bhandariamit108@gmail.com" className="contact-link">
            bhandariamit108@gmail.com
          </a>
        </div>

        <div className="contact-info">
          <FaPhone className="contact-icon" />
          <a href="tel:+919675517579" className="contact-link">
            +919675517579
          </a>
        </div>

        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/amit-bhandari-098789198/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/amit9675"
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/u0Q0weACl7/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-circle"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
