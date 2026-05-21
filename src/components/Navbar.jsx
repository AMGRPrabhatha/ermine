import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/images/logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  // Prevent stale mobile-menu states from locking scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // If viewport returns to desktop size, force-close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const DesktopNavLinks = () => (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/solutions" className="nav-links" onClick={() => setIsOpen(false)}>
          Solutions
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-links" onClick={() => setIsOpen(false)}>
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/capabilities" className="nav-links" onClick={() => setIsOpen(false)}>
          Capabilities
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </li>
    </>
  );

  const MobileNavLinks = () => (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/solutions" className="nav-links" onClick={() => setIsOpen(false)}>
          Solutions
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className="nav-links" onClick={() => setIsOpen(false)}>
          Products
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/capabilities" className="nav-links" onClick={() => setIsOpen(false)}>
          Capabilities
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-links" onClick={() => setIsOpen(false)}>
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-links" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Ermine Logo" className="logo-img" />
          </Link>

          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          <ul className="nav-menu desktop-menu">
            <DesktopNavLinks />
          </ul>
        </div>
      </nav>

      {/* Mobile Fullscreen Overlay - Rendered outside of nav to avoid CSS containing block issues */}
      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          <MobileNavLinks />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
