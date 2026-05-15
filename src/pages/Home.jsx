import React, { useEffect } from 'react';
import { ArrowRight, Activity, Zap, ShieldCheck, Globe, Droplet, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

import homeHero from '../assets/images/homehero.webp';

const Home = () => {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-up, .slide-in-right, .scale-in');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="home-modern-wrapper">
      {/* 1. Immersive Hero Section */}
      <section className="hero-modern">
        {/* Full Bleed Image Background */}
        <div className="hero-modern-bg" style={{ backgroundImage: `url(${homeHero})` }}></div>
        <div className="hero-modern-overlay"></div>

        <div className="container hero-centered">
          <div className="hero-text-content fade-up text-center">
            {/* <div className="badge">Leading Apparel Tech</div> */}
            <h1 className="hero-title">
              Precision Bonding <br/> <span className="text-accent">Technologies </span>
            </h1>
            <p className="hero-description mx-auto">
            Advanced bonding innovations for sustainable industrial progress.
            </p>
            <div className="hero-cta-group justify-center">
              <Link to="/solutions" className="btn-modern btn-primary-modern">
                Explore Technology <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-modern btn-outline-modern">
                Inquries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Innovation Section */}
      <section className="innovation-section">
        <div className="container">
          <div className="innovation-grid">
            <div className="innovation-content fade-up">
              <h2 className="section-title-alt">Leading Innovation in Textile Technology</h2>
              <p className="innovation-text">
                Ermine is a leading provider of state-of-the-art bonding and fabric processing solutions. 
                With a strong focus on innovation and precision, we specialize in ultrasonic cutting, 
                laser cutting, and high-performance fabric bonding technologies.
              </p>
              <p className="innovation-text">
                Our goal is to revolutionize textile manufacturing through advanced technology and sustainable practices.
              </p>
              
              <ul className="innovation-list">
                <li>
                  <div className="list-icon"><ShieldCheck size={20} /></div>
                  <div className="list-text">
                    <strong>Advanced Technology</strong>
                    <span>Cutting-edge bonding and processing solutions</span>
                  </div>
                </li>
                <li>
                  <div className="list-icon"><Zap size={20} /></div>
                  <div className="list-text">
                    <strong>Precision Manufacturing</strong>
                    <span>State-of-the-art facilities and expert team</span>
                  </div>
                </li>
                <li>
                  <div className="list-icon"><Globe size={20} /></div>
                  <div className="list-text">
                    <strong>Sustainable Practices</strong>
                    <span>Eco-friendly and environmentally responsible solutions</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="innovation-image-container fade-up delay-100">
              <img src="/solutions-2.webp" alt="Bonding Machine" className="innovation-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Expertise (Redesigned Ermine Advantage) */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2 className="section-title">Core Expertise</h2>
            <p className="section-subtitle">Specialized in advanced bonding solutions and high-tech fabric processing</p>
          </div>

          <div className="expertise-grid">
            <div className="expertise-card fade-up">
              <div className="expertise-icon-box"><Zap size={24} /></div>
              <h3>Ultrasonic Cutting</h3>
              <p>Advanced ultrasonic technology for precise fabric cutting and processing</p>
            </div>
            <div className="expertise-card fade-up delay-100">
              <div className="expertise-icon-box"><Activity size={24} /></div>
              <h3>Laser Cutting</h3>
              <p>High-precision laser cutting systems for complex fabric patterns</p>
            </div>
            <div className="expertise-card fade-up delay-200">
              <div className="expertise-icon-box"><Droplet size={24} /></div>
              <h3>Fabric Bonding</h3>
              <p>Innovative bonding techniques for superior fabric adhesion and durability</p>
            </div>
            <div className="expertise-card fade-up delay-300">
              <div className="expertise-icon-box"><ShieldCheck size={24} /></div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing and validation to ensure consistent excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Featured Categories (Grid Layout) */}
      <section className="featured-links-section">
        <div className="featured-grid">
          <Link to="/solutions" className="featured-card fade-up">
            <div className="featured-bg" style={{ backgroundImage: 'url(/solutions-1.webp)' }}></div>
            <div className="featured-overlay"></div>
            <div className="featured-content">
              <h3>Custom Solutions</h3>
            </div>
          </Link>
          <Link to="/products" className="featured-card fade-up delay-100">
            <div className="featured-bg" style={{ backgroundImage: 'url(/product-1.webp)' }}></div>
            <div className="featured-overlay"></div>
            <div className="featured-content">
              <h3>Finished Products</h3>
            </div>
          </Link>
          <Link to="/solutions" className="featured-card fade-up delay-200">
            <div className="featured-bg" style={{ backgroundImage: 'url(/solutions-hero.webp)' }}></div>
            <div className="featured-overlay"></div>
            <div className="featured-content">
              <h3>Process Innovation</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. Interactive Process Timeline */}
      <section className="process-section">
        <div className="container">
          <div className="process-header fade-up">
            <h2 className="section-title">How We Work</h2>
            <Link to="/about" className="process-link">View Full Process <ArrowDownRight size={20}/></Link>
          </div>
          
          <div className="timeline">
            <div className="timeline-item fade-up">
              <div className="timeline-dot">1</div>
              <div className="timeline-content">
                <h3>Concept & Prototyping</h3>
                <p>We collaborate with your design team to engineer bonding patterns and select optimal adhesives for your specific fabric blends.</p>
              </div>
            </div>
            <div className="timeline-item fade-up delay-100">
              <div className="timeline-dot">2</div>
              <div className="timeline-content">
                <h3>Material Sourcing</h3>
                <p>Procuring high-grade, sustainable PU and TPU films from certified global suppliers.</p>
              </div>
            </div>
            <div className="timeline-item fade-up delay-200">
              <div className="timeline-dot">3</div>
              <div className="timeline-content">
                <h3>Precision Manufacturing</h3>
                <p>Automated ultrasonic and heat-press bonding executed in our climate-controlled facilities.</p>
              </div>
            </div>
            <div className="timeline-item fade-up delay-300">
              <div className="timeline-dot">4</div>
              <div className="timeline-content">
                <h3>Rigorous QA</h3>
                <p>Every garment undergoes stretch, wash, and stress testing before global dispatch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategically Located */}
      <section className="location-section">
        <div className="container">
          <div className="location-header text-center fade-up">
            <h2 className="section-title">Strategically Located</h2>
            <p className="section-subtitle">
              With both our corporate office and manufacturing facility strategically positioned in Sri Lanka, 
              we provide seamless access to regional markets and global partners.
            </p>
          </div>
          
          <div className="address-grid fade-up delay-100">
            <div className="address-card">
              <div className="address-icon"><Globe size={24} /></div>
              <h4>Company Address</h4>
              <p>Ermine Pvt Ltd<br/>No 192/10 9th Lane, Nawala Rd<br/>Kotte, Sri Lanka</p>
            </div>
            <div className="address-card">
              <div className="address-icon"><Zap size={24} /></div>
              <h4>Factory Address</h4>
              <p>Ermine International Pvt Ltd<br/>No 4, Ridee Mawatha<br/>Kalamulla, Kalutara<br/>Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Expanded Customers & Partners */}
      <section className="partners-section">
        <div className="marquee-container fade-up">
          <div className="marquee">
            <span>STARTUPS</span>
            <span className="dot">•</span>
            <span>ATHLEISURE</span>
            <span className="dot">•</span>
            <span>GLOBAL BRANDS</span>
            <span className="dot">•</span>
            <span>INTIMATES</span>
            <span className="dot">•</span>
            <span>OUTDOOR GEAR</span>
            <span className="dot">•</span>
            <span>STARTUPS</span>
            <span className="dot">•</span>
            <span>ATHLEISURE</span>
            <span className="dot">•</span>
          </div>
        </div>

        <div className="container case-studies">
          <div className="case-card slide-in-right">
            <div className="case-image bg-active"></div>
            <div className="case-content">
              <span className="case-tag">Athleisure</span>
              <h3>Performance Wear Scaling</h3>
              <p>How we helped a rising startup scale production to 100k units/month with zero quality drop.</p>
            </div>
          </div>
          <div className="case-card slide-in-right delay-100">
            <div className="case-image bg-intimate"></div>
            <div className="case-content">
              <span className="case-tag">Intimates</span>
              <h3>The Seamless Revolution</h3>
              <p>Re-engineering a flagship bra line to eliminate stitching, increasing customer retention by 35%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Immersive Video/Image CTA */}
      <section className="immersive-cta">
        <div className="cta-overlay"></div>
        <div className="container cta-content fade-up">
          <h2>Ready to Build the Future of Apparel?</h2>
          <p>Partner with Ermine for unmatched precision and scale.</p>
          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn-modern btn-primary-modern">
              Book a Consultation
            </Link>
            <Link to="/products" className="btn-modern btn-outline-light-modern">
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
