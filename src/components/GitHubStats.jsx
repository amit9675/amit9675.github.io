import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaUsers } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './GitHubStats.css';

const GITHUB_USER = 'amit9675';
const LEETCODE_USER = 'u0Q0weACl7';

const calculateStreaks = (submissionCalendar = {}) => {
  const days = Object.keys(submissionCalendar)
    .map(Number)
    .sort((a, b) => a - b)
    .map((timestamp) => Math.floor(timestamp / 86400));

  if (!days.length) return { currentStreak: 0, longestStreak: 0 };

  let longestStreak = 1;
  let runningStreak = 1;

  for (let index = 1; index < days.length; index += 1) {
    if (days[index] === days[index - 1] + 1) {
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else if (days[index] !== days[index - 1]) {
      runningStreak = 1;
    }
  }

  const today = Math.floor(Date.now() / 86400000);
  const latestDay = days.at(-1);
  const currentStreak = latestDay >= today - 1 ? runningStreak : 0;

  return { currentStreak, longestStreak };
};

const GitHubStats = () => {
  const [github, setGithub] = useState(null);
  const [leetcode, setLeetcode] = useState(null);
  const [githubError, setGithubError] = useState(false);
  const [leetcodeError, setLeetcodeError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${GITHUB_USER}`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed');
        return response.json();
      })
      .then(setGithub)
      .catch((error) => {
        if (error.name !== 'AbortError') setGithubError(true);
      });

    fetch(`https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USER}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error('LeetCode request failed');
        return response.json();
      })
      .then((data) => setLeetcode(calculateStreaks(data.submissionCalendar)))
      .catch((error) => {
        if (error.name !== 'AbortError') setLeetcodeError(true);
      });

    return () => controller.abort();
  }, []);

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
        <motion.a
          className="activity-card glass-card border-glow"
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -6 }}
        >
          <div className="activity-card__header">
            <div className="activity-card__icon activity-card__icon--github">
              <FaGithub />
            </div>
            <div>
              <span className="activity-card__platform">GitHub</span>
              <h3>Amit Bhandari</h3>
            </div>
            <span className="activity-card__live">Live</span>
          </div>

          {github ? (
            <div className="activity-metrics">
              <div className="activity-metric">
                <FaCodeBranch />
                <strong>{github.public_repos}</strong>
                <span>Public repos</span>
              </div>
              <div className="activity-metric">
                <FaUsers />
                <strong>{github.followers}</strong>
                <span>Followers</span>
              </div>
              <div className="activity-metric">
                <FaGithub />
                <strong>{github.following}</strong>
                <span>Following</span>
              </div>
            </div>
          ) : (
            <p className="activity-status">
              {githubError ? 'Open my GitHub profile →' : 'Syncing GitHub activity…'}
            </p>
          )}
        </motion.a>

        <motion.a
          className="activity-card activity-card--leetcode glass-card border-glow"
          href={`https://leetcode.com/u/${LEETCODE_USER}/`}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-50px' }}
          whileHover={{ y: -6 }}
        >
          <div className="activity-card__header">
            <div className="activity-card__icon activity-card__icon--leetcode">
              <SiLeetcode />
            </div>
            <div>
              <span className="activity-card__platform">LeetCode</span>
              <h3>Amit Bhandari</h3>
            </div>
            <span className="activity-card__live">Live</span>
          </div>

          {leetcode ? (
            <div className="streak-metrics">
              <div className="streak-metric">
                <span className="streak-flame" aria-hidden="true">🔥</span>
                <strong>{leetcode.currentStreak}</strong>
                <span>Current streak</span>
              </div>
              <div className="streak-divider" />
              <div className="streak-metric">
                <span className="streak-flame streak-flame--best" aria-hidden="true">⚡</span>
                <strong>{leetcode.longestStreak}</strong>
                <span>Longest streak</span>
              </div>
            </div>
          ) : (
            <p className="activity-status">
              {leetcodeError ? 'Open my LeetCode streak →' : 'Syncing LeetCode streak…'}
            </p>
          )}
        </motion.a>
      </div>
    </section>
  );
};

export default GitHubStats;
