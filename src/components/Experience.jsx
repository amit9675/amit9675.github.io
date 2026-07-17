import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const statsData = [
  { value: 1200, suffix: '+', label: 'Hours Coding' },
  { value: 600, suffix: '+', label: 'DSA Questions' },
  { value: 100, suffix: '+', label: 'Hours Soft Skills' },
  { value: 1100, suffix: '+', label: 'Git Commits' },
  { value: 2, suffix: '', label: 'Collaborative Projects' },
  { value: 2, suffix: '', label: 'Solo Projects' },
];

const AnimatedCounter = ({ target, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const current = ref.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref} className="counter-number">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="section-eyebrow">journey.stats</span>
        <h2 className="section-title">
          Experience <span className="grad">&amp; Milestones</span>
        </h2>
      </motion.div>

      <div className="stats-grid">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card glass-card border-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
          >
            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            <span className="stat-label">{stat.label}</span>
            <div className="stat-shimmer" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
