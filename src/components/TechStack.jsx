import React from 'react';
import { motion } from 'framer-motion';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiApachespark,
  SiDatabricks,
  SiSnowflake,
} from 'react-icons/si';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import './TechStack.css';

const devTech = [
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: 'var(--text-primary)' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
];

const dataTech = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'PySpark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'Databricks', icon: SiDatabricks, color: '#FF3621' },
  { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Azure', icon: FaMicrosoft, color: '#0078D4' },
];

const concepts = [
  'Data Lineage',
  'Data Warehousing',
  'Normalization',
  'ETL / ELT Pipelines',
  'Data Modeling',
  'REST APIs',
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.05 },
  }),
};

const TechCard = ({ tech, index }) => {
  const Icon = tech.icon;
  return (
    <motion.div
      className="tech-card"
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -8, scale: 1.04 }}
      style={{ '--tech-color': tech.color }}
    >
      <Icon className="tech-icon" style={{ color: tech.color }} />
      <span className="tech-name">{tech.name}</span>
    </motion.div>
  );
};

const TechStack = () => {
  return (
    <section id="skills" className="techstack-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="section-eyebrow">stack.tools</span>
        <h2 className="section-title">
          Tech Stack <span className="grad">&amp; Tools</span>
        </h2>
      </motion.div>

      {/* Data Engineering Category */}
      <div className="tech-category">
        <motion.h3
          className="category-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="category-dot data-dot" />
          Data Engineering
        </motion.h3>
        <div className="tech-grid">
          {dataTech.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>

      {/* Development Category */}
      <div className="tech-category">
        <motion.h3
          className="category-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="category-dot dev-dot" />
          Web Development
        </motion.h3>
        <div className="tech-grid">
          {devTech.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i + dataTech.length} />
          ))}
        </div>
      </div>

      {/* Core concepts pills */}
      <motion.div
        className="concept-strip"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {concepts.map((c) => (
          <span key={c} className="concept-pill">
            {c}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default TechStack;
