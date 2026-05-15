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
              Precision Bonding <br/> <span className="text-accent">Precision Bonding  </span>
            </h1>
            <p className="hero-description mx-auto">
              Pioneering advanced bonded apparel solutions. We merge cutting-edge technology with sustainable practices to create garments without limits.
            </p>
            <div className="hero-cta-group justify-center">
              <Link to="/solutions" className="btn-modern btn-primary-modern">
                Explore Technology <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-modern btn-outline-modern">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bento Box Features Grid */}
      <section className="bento-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2 className="section-title">The Ermine Advantage</h2>
            <p className="section-subtitle">Why the world's top brands choose our bonding technology over traditional stitching.</p>
          </div>

          <div className="bento-grid">
            <div className="bento-item bento-large fade-up">
              <div className="bento-content">
                <Zap size={32} className="bento-icon" />
                <h3>Precision Ultrasonic Bonding</h3>
                <p>Our state-of-the-art ultrasonic machines fuse fabrics at a molecular level, ensuring a 100% seamless finish that is stronger and lighter than thread.</p>
                <div className="bento-visual tech-visual"></div>
              </div>
            </div>
            
            <div className="bento-item fade-up delay-100">
              <div className="bento-content">
                <ShieldCheck size={32} className="bento-icon" />
                <h3>Zero Chafe Guarantee</h3>
                <p>Perfect for activewear and intimates. No stitches mean ultimate comfort.</p>
              </div>
            </div>

            <div className="bento-item fade-up delay-200">
              <div className="bento-content">
                <Activity size={32} className="bento-icon" />
                <h3>Rapid Prototyping</h3>
                <p>Accelerate your innovation cycle with our dedicated R&D team and agile sample development process.</p>
              </div>
            </div>

            <div className="bento-item bento-wide fade-up delay-100">
              <div className="bento-content wide-content">
                <div className="wide-text">
                  <h3>Scalable Contract Manufacturing</h3>
                  <p>From niche athletic wear startups to global apparel brands, our manufacturing infrastructure scales dynamically to meet your production volume without ever compromising on precision.</p>
                </div>
                <div className="wide-visual bg-manufacturing"></div>
              </div>
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

      {/* 4. Expanded Customers & Partners */}
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
