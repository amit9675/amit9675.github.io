import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Licious Clone',
    image: '/images/licious_nonveg.png',
    description:
      'Licious is your one-stop fresh meat delivery shop. In here, you get nothing but the freshest meat & seafood, delivered straight to your doorstep.',
    details: 'An Individual Project, executed in 5 days.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/amit9675/licious_nonveg',
    live: 'https://superlative-gingersnap-b63225.netlify.app/',
  },
  {
    title: 'Yoox Clone',
    image: '/images/yoox.png',
    description:
      "YOOX NET-A-PORTER is home to the world's leading online luxury, fashion and style destinations.",
    details: 'A collaborative project built by a team of 4, executed in 5 days.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/amit9675/Yoox-clone',
    live: 'https://melodious-eclair-03dc1d.netlify.app/',
  },
  {
    title: 'Bass Pro Clone',
    image: '/images/Bass pro.png',
    description:
      'It is an e-commerce company which deals with fishing, hunting, boating and outdoor products.',
    details: 'An Individual Project, executed in 5 days.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Chakra UI'],
    github: 'https://github.com/amit9675/BassPro',
    live: 'https://basspro-frontend.vercel.app',
  },
  {
    title: 'India Mart Clone',
    image: '/images/India Mart.png',
    description:
      "IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.",
    details: 'An Individual Project, executed in 5 days.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Chakra UI'],
    github: 'https://github.com/amit9675/empty-chicken-6143',
    live: 'https://indiamart-lemon.vercel.app',
  },
  {
    title: 'Daily Objects Clone',
    image: '/images/dailyobjects.png',
    description:
      'An e-commerce website deals with items such as phones, laptops, wallets and covers.',
    details: 'An Individual Project, executed in 5 days.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Chakra UI'],
    github: 'https://github.com/amit9675/Daily-Objects-Clone',
    live: 'https://worthy-marble-5256.vercel.app',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">projects.featured</span>
        <h2 className="section-title">
          Things I&apos;ve <span className="grad">built</span>
        </h2>
      </motion.div>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project, index) => (
          <motion.div className="project-card glass-card border-glow" key={index} variants={cardVariants}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-image-overlay" />
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-details">{project.details}</p>

            <div className="project-tech">
              {project.tech.map((tag, i) => (
                <span className="tech-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
              >
                <FaGithub /> Code
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="explore-more-wrapper">
        <a
          href="https://github.com/amit9675"
          target="_blank"
          rel="noopener noreferrer"
          className="explore-more-btn"
        >
          Explore More Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
