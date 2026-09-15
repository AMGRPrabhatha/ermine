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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Contact Us', path: '/contact', isCta: true }
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          
          {/* Brand Logo */}
          <Link to="/" className="header-logo" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="Ermine Logo" className="header-logo-img" />
          </Link>

          {/* Desktop Nav Links (Inline on Right) */}
          <nav className="desktop-nav">
            <ul className="nav-links-list">
              {navItems.map((item, idx) => (
                <li key={idx} className="nav-item">
                  <Link
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''} ${item.isCta ? 'nav-cta-pill' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="mobile-toggle-btn" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          {navItems.map((item, idx) => (
            <li key={idx} className="mobile-nav-item">
              <Link
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''} ${item.isCta ? 'mobile-nav-cta' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
