import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-eutours-style" id="contact">
      <div className="container">
        
        {/* Main 4-Column Grid */}
        <div className="footer-main-grid">
          
          {/* Column 1: SOLUTIONS */}
          <div className="footer-col">
            <h4 className="footer-col-title">SOLUTIONS</h4>
            <ul className="footer-col-links">
              <li><Link to="/solutions">Bonded Apparel</Link></li>
              <li><Link to="/solutions">Product Design</Link></li>
              <li><Link to="/solutions">Product Validation</Link></li>
              <li><Link to="/solutions">Custom Machine Design</Link></li>
              <li><Link to="/solutions">Process Innovations</Link></li>
            </ul>
          </div>

          {/* Column 2: PRODUCTS */}
          <div className="footer-col">
            <h4 className="footer-col-title">PRODUCTS</h4>
            <ul className="footer-col-links">
              <li><Link to="/products">Period Panty</Link></li>
              <li><Link to="/products">Bonded Bras</Link></li>
              <li><Link to="/products">Raw Cut Panty</Link></li>
              <li><Link to="/products">Bonded Leggings</Link></li>
              <li><Link to="/products">Sports Bra</Link></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div className="footer-col">
            <h4 className="footer-col-title">COMPANY</h4>
            <ul className="footer-col-links">
              <li><Link to="/about">About Ermine</Link></li>
              <li><Link to="/capabilities">Our Capabilities</Link></li>
              <li><Link to="/about">Leadership Team</Link></li>
              <li><Link to="/about">Sustainability</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: CONTACT INFO & SOCIALS */}
          <div className="footer-col footer-col-contact">
            <div className="footer-contact-wrap">
              <h4 className="footer-col-title">CONTACT INFO</h4>
              <ul className="footer-contact-list">
                <li><a href="tel:+94711640000">+94 71 1640000</a></li>
                <li><a href="mailto:sales@ermine.lk">sales@ermine.lk</a></li>
                <li><span>Colombo, Sri Lanka</span></li>
              </ul>
            </div>

            {/* Social Badges Group */}
            <div className="footer-social-badges">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar Separator & Row */}
        <div className="footer-bottom-row">
          <div className="footer-bottom-left">
            <span className="footer-location-pin">📍 Sri Lanka</span>
            <span className="footer-copyright">&copy; {new Date().getFullYear()} Ermine (Pvt) Ltd. All rights reserved.</span>
          </div>

          <div className="footer-bottom-right">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy-policy">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
