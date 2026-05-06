import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">ERMINE</h2>
          <p className="footer-description">
            Pioneering in customized one-stop solutions for bonded apparel manufacturing and innovation. 
            Elevating everyday wear with cutting-edge technology.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="LinkedIn">LI</a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Sales</h3>
          <ul className="footer-contact">
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:sales@ermine.lk">sales@ermine.lk</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+94711640000">+94 71 1640000</a>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>Colombo, Sri Lanka</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Ermine (Pvt) Ltd. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
