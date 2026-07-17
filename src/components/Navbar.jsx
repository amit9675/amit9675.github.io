import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  {
    label: 'Resume',
    href: '/Amit_Bhandari_Resume.pdf',
    download: true,
  },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/amit-bhandari9675/',
    label: 'LinkedIn',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/amit9675',
    label: 'GitHub',
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef(null);

  /* ── Scroll detection ───────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── IntersectionObserver for active section ── */
  useEffect(() => {
    const sectionIds = NAV_LINKS
      .filter((link) => link.href.startsWith('#'))
      .map((link) => link.href.slice(1));

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  /* ── Lock body scroll when mobile menu open ── */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  /* ── Smooth scroll handler ─────────────────── */
  const handleNavClick = useCallback(
    (e, href, isDownload) => {
      if (isDownload) return; // allow default download behaviour

      e.preventDefault();
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsMobileOpen(false);
    },
    []
  );

  const toggleMobile = () => setIsMobileOpen((prev) => !prev);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <nav
      className={`navbar${isScrolled ? ' scrolled' : ''}`}
      data-theme={theme}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        className="navbar__logo"
        href="#home"
        onClick={(e) => handleNavClick(e, '#home', false)}
      >
        amit.bhandari
      </a>

      {/* Desktop nav links */}
      <ul className={`navbar__links${isMobileOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href, download }) => (
          <li key={label}>
            <a
              className={`navbar__link${
                !download && activeSection === href.slice(1) ? ' active' : ''
              }`}
              href={href}
              {...(download
                ? { download: true, target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              onClick={(e) => handleNavClick(e, href, download)}
            >
              {label}
            </a>
          </li>
        ))}

        {/* Social icons inside mobile drawer */}
        <li className="navbar__mobile-socials">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              className="navbar__social"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
          <ThemeToggle />
        </li>
      </ul>

      {/* Right-side controls (desktop) */}
      <div className="navbar__actions">
        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            className="navbar__social"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
        <ThemeToggle />

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={toggleMobile}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`navbar__overlay${isMobileOpen ? ' visible' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />
    </nav>
  );
};

export default Navbar;
