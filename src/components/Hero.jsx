import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiReact, SiMongodb, SiPython, SiApachespark } from 'react-icons/si';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut', delay: 0.4 },
  },
};

/* Tech chips orbiting the photo */
const orbitChips = [
  { icon: SiReact, color: '#61DAFB', className: 'chip-react' },
  { icon: SiMongodb, color: '#47A248', className: 'chip-mongo' },
  { icon: SiPython, color: '#3776AB', className: 'chip-python' },
  { icon: SiApachespark, color: '#E25A1C', className: 'chip-spark' },
];

const socials = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/amit-bhandari-098789198/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/amit9675', label: 'GitHub' },
  { icon: SiLeetcode, href: 'https://leetcode.com/u/u0Q0weACl7/', label: 'LeetCode' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden px-[8%] pb-16 pt-32 max-md:px-[6%] max-md:pb-24 max-md:pt-28"
    >
      <ParticleBackground className="absolute inset-0" />

      <motion.div
        className="relative z-[1] mx-auto flex w-full max-w-[1200px] items-center justify-between gap-12 max-md:flex-col max-md:gap-10 max-md:text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side — Text Content */}
        <motion.div
          className="max-w-[620px] flex-[1_1_58%] max-md:flex max-md:max-w-full max-md:flex-col max-md:items-center"
          variants={containerVariants}
        >
          {/* Highlighted availability badge */}
          <motion.div className="hero-badge mb-7" variants={itemVariants}>
            <span className="hero-badge__dot" />
            <span className="hero-badge__text">Open to Opportunities</span>
          </motion.div>

          <motion.p
            className="mb-1 text-xl font-medium tracking-wide text-[var(--text-secondary)]"
            variants={itemVariants}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1 className="hero-name mb-4" variants={itemVariants}>
            Amit Bhandari
          </motion.h1>

          <motion.div
            className="mb-5 flex min-h-[42px] items-center gap-3 font-code text-[clamp(1.15rem,2.4vw,1.5rem)] text-[var(--text-primary)] max-md:justify-center"
            variants={itemVariants}
          >
            <span className="font-semibold text-accent-cyan [text-shadow:0_0_14px_var(--glow-cyan)]">
              &gt;_
            </span>
            <TypeAnimation
              sequence={[
                'Data Engineer',
                2200,
                'MERN Stack Developer',
                2200,
                'Pipeline Architect',
                2200,
                'Problem Solver',
                2200,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </motion.div>

          <motion.p
            className="mb-9 max-w-[480px] text-[1.05rem] leading-relaxed text-[var(--text-secondary)]"
            variants={itemVariants}
          >
            I build scalable data pipelines and full-stack web applications —
            from raw data to polished product.
          </motion.p>

          <motion.div
            className="mb-9 flex flex-wrap gap-4 max-md:justify-center"
            variants={itemVariants}
          >
            <a
              href="/Amit_Bhandari_Resume.pdf?v=fullstack-v3"
              download="Amit_Bhandari_Resume.pdf"
              className="btn btn-primary"
            >
              <FiDownload />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div className="flex gap-3.5 max-md:justify-center" variants={itemVariants}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-[46px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[21px] text-[var(--text-secondary)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:text-accent-cyan hover:shadow-[0_8px_24px_var(--glow-cyan)]"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side — Photo with gradient ring + orbiting chips */}
        <motion.div
          className="relative flex size-[380px] flex-none items-center justify-center max-lg:size-[300px] max-md:size-[250px] max-[380px]:size-[210px]"
          variants={photoVariants}
        >
          <div className="hero-photo-float relative flex size-full items-center justify-center">
            <div className="hero-photo-ring" />
            <div className="hero-photo-glow" />
            <img
              src="/images/ProfessionalPicture.jpeg"
              alt="Amit Bhandari"
              className="hero-photo relative z-[1] size-full rounded-full object-cover"
            />
            {orbitChips.map(({ icon: Icon, color, className }) => (
              <div
                key={className}
                className={`hero-chip ${className} absolute z-[2] flex size-[54px] items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--glass)] text-[26px] shadow-lg backdrop-blur-xl max-md:size-[44px] max-md:text-[21px]`}
              >
                <Icon style={{ color }} />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        className="hero-scroll-hint absolute bottom-7 left-1/2 z-[2] flex size-[42px] items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[19px] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-accent-cyan max-md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <FiArrowDown />
      </motion.a>
    </section>
  );
};

export default Hero;
