import { motion } from 'framer-motion';
import { FiCloud, FiDatabase, FiMail, FiMonitor } from 'react-icons/fi';
import './FinalCTA.css';

const pipeline = [
  { icon: FiCloud, label: 'Raw Data', note: 'ingest' },
  { icon: FiDatabase, label: 'Transform', note: 'process' },
  { icon: FiMonitor, label: 'Product', note: 'deliver' },
];

const FinalCTA = () => (
  <section className="final-cta" aria-labelledby="final-cta-title">
    <motion.div
      className="final-cta__card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
    >
      <div className="final-cta__copy">
        <span className="final-cta__eyebrow">
          <span />
          Available for the right opportunity
        </span>
        <h2 id="final-cta-title">
          Let&apos;s turn complex data into a
          <span> product people love.</span>
        </h2>
        <p>
          From ingestion and transformation to a polished user experience—I can help
          build the complete journey.
        </p>
        <a href="mailto:bhandariamit108@gmail.com" className="final-cta__button">
          <FiMail />
          Start a conversation
        </a>
      </div>

      <div className="pipeline" aria-label="Animated data pipeline">
        {pipeline.map(({ icon: Icon, label, note }, index) => (
          <div className="pipeline__step-wrap" key={label}>
            <motion.div
              className="pipeline__step"
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
            >
              <span className="pipeline__step-number">0{index + 1}</span>
              <Icon />
              <strong>{label}</strong>
              <small>{note}</small>
            </motion.div>
            {index < pipeline.length - 1 && (
              <div className="pipeline__link" aria-hidden="true">
                <span className="pipeline__packet" />
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
