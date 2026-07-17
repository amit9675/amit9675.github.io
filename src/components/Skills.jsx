import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiApachespark } from 'react-icons/si';
import { HiChatBubbleLeftRight } from 'react-icons/hi2';
import './Skills.css';

const skillsData = [
  {
    icon: SiApachespark,
    title: 'Data Engineering',
    color: '#E25A1C',
    description:
      'Designing robust ETL/ELT pipelines with Python, SQL and PySpark. Experienced with Databricks, Snowflake, data lineage, normalization and warehouse modeling on AWS and Azure.',
  },
  {
    icon: FaReact,
    title: 'React Js',
    color: '#61DAFB',
    description:
      'Experienced in building dynamic, component-based user interfaces using React.js. Skilled in state management, hooks, context API, and creating responsive, high-performance single-page applications with clean, reusable code architecture.',
  },
  {
    icon: FaNodeJs,
    title: 'Node.js Backend',
    color: '#339933',
    description:
      'Proficient in developing robust server-side applications with Node.js and Express.js. Experienced in building RESTful APIs, implementing authentication, handling middleware, and ensuring scalable backend architectures for production-ready applications.',
  },
  {
    icon: SiMongodb,
    title: 'MongoDB',
    color: '#47A248',
    description:
      'Skilled in designing and managing NoSQL databases using MongoDB. Experienced in data modeling, aggregation pipelines, indexing strategies, and integrating MongoDB with Node.js applications using Mongoose for efficient data operations.',
  },
  {
    icon: FaDatabase,
    title: 'DSA',
    color: 'var(--accent-cyan)',
    description:
      'Strong foundation in Data Structures and Algorithms. Solved 600+ problems across platforms, with expertise in arrays, trees, graphs, dynamic programming, and optimization techniques essential for writing efficient and scalable code.',
  },
  {
    icon: HiChatBubbleLeftRight,
    title: 'Communication',
    color: 'var(--accent-violet)',
    description:
      'Effective communicator with strong interpersonal skills. Experienced in collaborating with cross-functional teams, presenting technical concepts to diverse audiences, and contributing to productive team dynamics through active listening and clear articulation.',
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
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-description">{skill.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
