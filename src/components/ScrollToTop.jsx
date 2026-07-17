import React, { useState, useEffect, useRef } from 'react';
import { FaArrowUp, FaRocket } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const launch = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    // Short ignition rumble before the page starts moving
    timersRef.current.push(
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 400),
      setTimeout(() => setIsLaunching(false), 1700)
    );
  };

  return (
    <button
      className={`scroll-to-top${isVisible ? ' show' : ''}${isLaunching ? ' launching' : ''}`}
      onClick={launch}
      aria-label="Scroll to top"
      title="Back to top"
    >
      {/* Terminal pop-up during launch */}
      <span className="launch-label" aria-hidden="true">
        $ cd ~/
      </span>

      {/* The rocket (arrow when idle) */}
      <span className="rocket">
        {isLaunching ? <FaRocket size={18} /> : <FaArrowUp size={18} />}
      </span>

      {/* Exhaust smoke puffs left behind at the launchpad */}
      <span className="smoke" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>

      {/* Speed lines streaking down as the rocket rises */}
      <span className="speed-lines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
    </button>
  );
};

export default ScrollToTop;
