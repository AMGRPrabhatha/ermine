import React, { useEffect } from 'react';
import { Zap, Scissors, Building2, Leaf, Settings, ShieldCheck, ArrowRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Capabilities.css';
import capHero from '../assets/images/capabilities.jpg';

const Capabilities = () => {
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

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="capabilities-wrapper">
      {/* 1. Hero Section */}
      <section className="cap-hero">
        <div className="cap-hero-bg" style={{ backgroundImage: `url(${capHero})` }}></div>
        <div className="cap-hero-overlay"></div>
        
        <div className="container cap-hero-centered">
          <div className="cap-hero-content fade-up">
            <h1>Capabilities & Technologies</h1>
            <p className="mx-auto">Advanced textile bonding solutions powered by cutting-edge technology and innovation</p>
            <div className="hero-cta-group justify-center">
              <Link to="/solutions" className="btn-modern btn-primary-modern">
                Our Solutions <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-modern btn-outline-modern">
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technology Ecosystem (Bento Grid) */}
      <section className="eco-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2>Technology Ecosystem</h2>
            <p>Comprehensive solutions for modern textile manufacturing</p>
          </div>

          <div className="eco-grid">
            <div className="eco-card eco-wide eco-dark fade-up">
              <div className="eco-icon-box eco-icon-gold"><Zap size={28} /></div>
              <h3>Advanced Bonding Solutions</h3>
              <p>State-of-the-art textile bonding technologies for superior adhesion and performance. We ensure your products meet the highest global standards for durability and comfort.</p>
            </div>
            <div className="eco-card fade-up delay-100">
              <div className="eco-icon-box"><Scissors size={28} /></div>
              <h3>Precision Cutting</h3>
              <p>Ultrasonic and laser cutting systems for unmatched accuracy and clean edges.</p>
            </div>
            <div className="eco-card fade-up delay-200">
              <div className="eco-icon-box"><Building2 size={28} /></div>
              <h3>Infrastructure</h3>
              <p>Purpose-built facilities for precision manufacturing and stringent quality control.</p>
            </div>
            <div className="eco-card fade-up delay-300">
              <div className="eco-icon-box"><Leaf size={28} /></div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable textile processing that minimizes environmental impact and reduces waste.</p>
            </div>
            <div className="eco-card fade-up delay-400">
              <div className="eco-icon-box"><Settings size={28} /></div>
              <h3>Custom Machines</h3>
              <p>Tailored production equipment designed to meet specific manufacturing needs.</p>
            </div>
            <div className="eco-card eco-wide eco-dark fade-up delay-500">
              <div className="eco-icon-box eco-icon-gold"><ShieldCheck size={28} /></div>
              <h3>Quality Assurance Excellence</h3>
              <p>Robust quality control processes implemented at every stage of production to ensure consistent, flawless performance across all your bonded apparel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cutting Technologies (Immersive Cards) */}
      <section className="cutting-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2>Cutting Technologies</h2>
            <p>Precision cutting solutions for every application</p>
          </div>

          <div className="cutting-modern-grid">
            <div className="cutting-modern-card fade-up">
              <div className="cutting-bg" style={{ backgroundImage: 'url(/product-1.webp)' }}></div>
              <div className="cutting-overlay"></div>
              <div className="cutting-content">
                <div className="cutting-icon-circle"><Zap size={32} /></div>
                <h3>Ultrasonic Cutting</h3>
                <ul>
                  <li>Continuous machines for high-volume</li>
                  <li>Die cutting for precision shaping</li>
                  <li>Clean edge finishing without fraying</li>
                  <li>Reduced material waste</li>
                </ul>
              </div>
            </div>

            <div className="cutting-modern-card fade-up delay-100">
              <div className="cutting-bg" style={{ backgroundImage: 'url(/product-2.webp)' }}></div>
              <div className="cutting-overlay"></div>
              <div className="cutting-content">
                <div className="cutting-icon-circle"><Activity size={32} /></div>
                <h3>Laser Cutting</h3>
                <ul>
                  <li>Fabric machines for complex patterns</li>
                  <li>High-precision with minimal heat zones</li>
                  <li>Intricate design capabilities</li>
                  <li>Automated cutting systems</li>
                </ul>
              </div>
            </div>

            <div className="cutting-modern-card fade-up delay-200">
              <div className="cutting-bg" style={{ backgroundImage: 'url(/product-3.webp)' }}></div>
              <div className="cutting-overlay"></div>
              <div className="cutting-content">
                <div className="cutting-icon-circle"><Scissors size={32} /></div>
                <h3>Die Cutting</h3>
                <ul>
                  <li>Machines for precision fabric shaping</li>
                  <li>Custom die development</li>
                  <li>High-speed production</li>
                  <li>Consistent quality across runs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fabric Bonding Technologies (Redesigned Modern Layout) */}
      <section className="bonding-tech-section">
        <div className="container">
          <div className="bonding-tech-grid">
            <div className="bonding-text-col fade-up">
              <span className="why-choose-badge">WHY CHOOSE</span>
              <h2>Fabric Bonding <span className="highlight-gold">Technologies</span></h2>
              <div className="title-underline"></div>
              
              <p className="bonding-intro">
                Our comprehensive bonding solutions deliver superior adhesion, durability, 
                and performance for technical textiles and performance fabrics.
              </p>
              
              <div className="bonding-why-grid">
                <div className="bonding-why-card">
                  <div className="why-icon-badge">
                    <Zap size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Full-Width Bonding</h3>
                    <p>Seamless fabric adhesion across the entire width for consistent quality and minimal waste</p>
                  </div>
                </div>

                <div className="bonding-why-card">
                  <div className="why-icon-badge">
                    <Activity size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Thermal Lamination</h3>
                    <p>Advanced thermal bonding techniques and precision adhesive application systems</p>
                  </div>
                </div>

                <div className="bonding-why-card">
                  <div className="why-icon-badge">
                    <Settings size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Fabric Laydown</h3>
                    <p>Precision placement technology ensuring optimal alignment and positioning</p>
                  </div>
                </div>

                <div className="bonding-why-card">
                  <div className="why-icon-badge">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Pre-Shrink Processing</h3>
                    <p>Ensures fabric stability and consistency throughout the manufacturing process</p>
                  </div>
                </div>
              </div>

              <div className="bonding-cta-container">
                <Link to="/contact" className="btn-modern-why">
                  INQUIRE NOW <span className="arrow">&gt;</span>
                </Link>
              </div>
            </div>
            
            <div className="bonding-image-col">
              <div className="sticky-image-wrapper fade-up delay-200">
                <img src="/solutions-3.webp" alt="Bonding Technology" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer CTA */}
      <section className="cap-cta">
        <div className="container text-center fade-up">
          <h2>Discover Our Manufacturing Excellence</h2>
          <p>Learn more about our state-of-the-art infrastructure and quality control processes</p>
          <Link to="/contact" className="btn-cap-cta">
            Explore Our Facilities <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
