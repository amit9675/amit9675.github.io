import { FaHeart } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Made with <FaHeart className="footer-heart" /> by Amit Bhandari — 2026
      </p>
    </footer>
  );
}

export default Footer;
