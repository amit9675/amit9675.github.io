import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCloud, FaPython } from 'react-icons/fa';
import { SiGithubactions, SiApachespark } from 'react-icons/si';
import './Skills.css';

const skillsData = [
  {
    icon: FaNodeJs,
    title: 'Node.js & APIs',
    color: '#339933',
    description:
      'Building scalable Node.js and Express services, REST APIs, authentication, middleware and production-ready backend architectures.',
    focus: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    icon: FaReact,
    title: 'React & Frontend',
    color: '#61DAFB',
    description:
      'Creating responsive, accessible React applications with reusable components, hooks, context and thoughtful interaction design.',
    focus: ['React', 'Vite', 'Responsive UI'],
  },
  {
    icon: SiGithubactions,
    title: 'CI/CD & Automation',
    color: '#8b5cf6',
    description:
      'Automating build, test and deployment workflows with GitHub Actions and repeatable delivery practices for reliable releases.',
    focus: ['GitHub Actions', 'Deployment', 'Automation'],
  },
  {
    icon: SiApachespark,
    title: 'Data Engineering',
    color: '#E25A1C',
    description:
      'Designing robust ETL/ELT pipelines with SQL and PySpark, plus lineage, normalization, warehouse modeling, Databricks and Snowflake.',
    focus: ['PySpark', 'Databricks', 'Snowflake'],
  },
  {
    icon: FaCloud,
    title: 'Cloud Platforms',
    color: '#22d3ee',
    description:
      'Working across AWS and Microsoft Azure to deliver cloud-hosted applications, data workflows and scalable platform foundations.',
    focus: ['AWS', 'Azure', 'Cloud Data'],
  },
  {
    icon: FaPython,
    title: 'Python & Web Scraping',
    color: '#3776AB',
    description:
      'Using Python for data processing, automation and responsible web scraping to transform unstructured sources into useful datasets.',
    focus: ['Python', 'Automation', 'Web Scraping'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Skills = () => {
  return (
    <section id="competencies" className="skills-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="section-eyebrow">core.competencies</span>
        <h2 className="section-title">
          What I <span className="grad">do best</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.title}
              className="skill-card glass-card border-glow"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10 }}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon-wrapper">
                <Icon className="skill-icon" style={{ color: skill.color }} />
              </div>
              <span className="skill-index">0{index + 1}</span>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-focus">
                {skill.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
