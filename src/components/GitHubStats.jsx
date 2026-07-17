import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import './GitHubStats.css';

const GitHubStats = () => {
  const { isDark } = useTheme();

  const statsUrl = isDark
    ? 'https://github-readme-stats.vercel.app/api?username=amit9675&show_icons=true&theme=tokyonight&bg_color=0c111d&border_color=1e293b&title_color=22d3ee&icon_color=8b5cf6&text_color=e2e8f0&hide_border=false'
    : 'https://github-readme-stats.vercel.app/api?username=amit9675&show_icons=true&theme=default&bg_color=ffffff&border_color=e2e8f0&title_color=0891b2&icon_color=7c3aed';

  const streakUrl = isDark
    ? 'https://github-readme-streak-stats.herokuapp.com?user=amit9675&theme=tokyonight&background=0c111d&border=1e293b&ring=22d3ee&fire=8b5cf6&currStreakLabel=22d3ee'
    : 'https://github-readme-streak-stats.herokuapp.com?user=amit9675&theme=default&background=ffffff&border=e2e8f0&ring=0891b2&fire=7c3aed';

  const leetcodeUrl = isDark
    ? 'https://leetcard.jacoblin.cool/u0Q0weACl7?theme=dark&font=Space%20Grotesk&ext=heatmap'
    : 'https://leetcard.jacoblin.cool/u0Q0weACl7?theme=light&font=Space%20Grotesk&ext=heatmap';

  const cards = [
    { src: statsUrl, alt: "Amit's GitHub Stats" },
    { src: streakUrl, alt: "Amit's GitHub Streak" },
    { src: leetcodeUrl, alt: "Amit's LeetCode Stats", link: 'https://leetcode.com/u/u0Q0weACl7/' },
  ];

  return (
    <section id="github" className="github-section">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <span className="section-eyebrow">git.log --stat</span>
        <h2 className="section-title">
          Coding <span className="grad">Activity</span>
        </h2>
      </motion.div>

      <div className="github-stats-grid">
        {cards.map(({ src, alt, link }, i) => (
          <motion.div
            key={alt}
            className="github-card glass-card border-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6 }}
          >
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={alt} className="github-stat-img" loading="lazy" />
              </a>
            ) : (
              <img src={src} alt={alt} className="github-stat-img" loading="lazy" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GitHubStats;
