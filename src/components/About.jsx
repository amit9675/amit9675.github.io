import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiDatabase, FiLayers, FiCode } from 'react-icons/fi';
import './About.css';

const highlights = [
  {
    icon: FiDatabase,
    title: 'Data Engineering',
    text: 'Pipelines, warehouses & lakehouse architectures with PySpark, Databricks, Snowflake and cloud platforms.',
  },
  {
    icon: FiLayers,
    title: 'MERN Stack',
    text: 'End-to-end web apps with MongoDB, Express, React and Node — from REST APIs to polished UIs.',
  },
  {
    icon: FiCode,
    title: 'Problem Solving',
    text: '600+ DSA problems solved. Strong grip on algorithms, optimization and clean, scalable code.',
  },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="section-eyebrow">about.me</span>
        <h2 className="section-title">
          Turning <span className="grad">data & ideas</span> into products
        </h2>
      </motion.div>

      <div className="about-content">
        {/* Left Column — Terminal profile card */}
        <motion.div
          className="about-terminal glass-card border-glow"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="terminal-bar">
            <span className="terminal-dot dot-red" />
            <span className="terminal-dot dot-yellow" />
            <span className="terminal-dot dot-green" />
            <span className="terminal-title">amit@portfolio: ~/profile</span>
          </div>
          <div className="terminal-body">
            <p>
              <span className="t-prompt">$</span> <span className="t-cmd">whoami</span>
            </p>
            <p className="t-out">Amit Bhandari — Data Engineer & MERN Developer</p>
            <p>
              <span className="t-prompt">$</span> <span className="t-cmd">cat stack.json</span>
            </p>
            <p className="t-out">
              {'{'} <span className="t-key">"data"</span>:{' '}
              <span className="t-val">["Python", "SQL", "PySpark", "Snowflake"]</span>,
            </p>
            <p className="t-out t-indent">
              <span className="t-key">"web"</span>:{' '}
              <span className="t-val">["MongoDB", "Express", "React", "Node"]</span>,
            </p>
            <p className="t-out t-indent">
              <span className="t-key">"cloud"</span>:{' '}
              <span className="t-val">["AWS", "Azure", "Databricks"]</span> {'}'}
            </p>
            <p>
              <span className="t-prompt">$</span> <span className="t-cmd">./build_something_great.sh</span>
              <span className="t-cursor">▊</span>
            </p>
          </div>
        </motion.div>

        {/* Right Column — Text + highlights */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="about-description">
            A passionate and adaptable <strong>Data Engineer</strong> &amp;{' '}
            <strong>MERN Stack Developer</strong>, skilled in Python, SQL, PySpark,
            Databricks, Snowflake, and modern JavaScript. I design robust data
            pipelines and build scalable web applications — a dependable team player
            with an eye for detail, driven to ship impactful solutions.
          </p>

          <div className="about-highlights">
            {highlights.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                className="highlight-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="highlight-icon">
                  <Icon />
                </div>
                <div>
                  <h4 className="highlight-title">{title}</h4>
                  <p className="highlight-text">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="/Amit_Bhandari_Resume.pdf?v=fullstack-v3"
            download="Amit_Bhandari_Resume.pdf"
            className="resume-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <FiDownload />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
