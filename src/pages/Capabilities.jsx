import React, { useEffect } from 'react';
import { Zap, Scissors, Building2, Leaf, Settings, ShieldCheck, ArrowRight, Activity, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Capabilities.css';

const Capabilities = () => {
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

    const elements = document.querySelectorAll('.fade-up, .scale-in, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="capabilities-wrapper">
      {/* 1. Hero Section */}
      <section className="cap-hero">
        <div className="cap-hero-bg"></div>
        <div className="cap-hero-overlay"></div>
        
        <div className="container cap-hero-centered">
          <div className="cap-hero-content fade-up text-center">
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

      {/* 2. Technology Ecosystem */}
      <section className="eco-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2>Technology Ecosystem</h2>
            <p>Comprehensive solutions for modern textile manufacturing</p>
          </div>

          <div className="eco-grid">
            <div className="eco-card fade-up">
              <div className="eco-icon-box"><Zap size={28} /></div>
              <h3>Advanced Bonding Solutions</h3>
              <p>State-of-the-art textile bonding technologies for superior adhesion and performance</p>
            </div>
            <div className="eco-card fade-up delay-100">
              <div className="eco-icon-box"><Scissors size={28} /></div>
              <h3>Precision Cutting Capabilities</h3>
              <p>Ultrasonic and laser cutting systems for unmatched accuracy</p>
            </div>
            <div className="eco-card fade-up delay-200">
              <div className="eco-icon-box"><Building2 size={28} /></div>
              <h3>Specialized Infrastructure</h3>
              <p>Purpose-built facilities for precision manufacturing and quality control</p>
            </div>
            <div className="eco-card fade-up delay-300">
              <div className="eco-icon-box"><Leaf size={28} /></div>
              <h3>Eco-Friendly Solutions</h3>
              <p>Sustainable textile processing that minimizes environmental impact</p>
            </div>
            <div className="eco-card fade-up delay-400">
              <div className="eco-icon-box"><Settings size={28} /></div>
              <h3>Custom Machine Development</h3>
              <p>Tailored production equipment designed to meet specific manufacturing needs</p>
            </div>
            <div className="eco-card fade-up delay-500">
              <div className="eco-icon-box"><ShieldCheck size={28} /></div>
              <h3>Quality Assurance</h3>
              <p>Robust quality control processes to ensure consistent performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cutting Technologies */}
      <section className="cutting-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2>Cutting Technologies</h2>
            <p>Precision cutting solutions for every application</p>
          </div>

          <div className="cutting-grid">
            <div className="cutting-card fade-up">
              <div className="cutting-header cap-maroon">
                <Zap size={48} color="#fff" />
              </div>
              <div className="cutting-body">
                <h3>Ultrasonic Cutting</h3>
                <ul>
                  <li>Continuous ultrasonic machines for high-volume production</li>
                  <li>Ultrasonic die cutting for precision shaping</li>
                  <li>Clean edge finishing without fraying</li>
                  <li>Reduced material waste and enhanced efficiency</li>
                </ul>
              </div>
            </div>

            <div className="cutting-card fade-up delay-100">
              <div className="cutting-header cap-purple">
                <Activity size={48} color="#fff" />
              </div>
              <div className="cutting-body">
                <h3>Laser Cutting</h3>
                <ul>
                  <li>Fabric laser cutting machines for complex patterns</li>
                  <li>High-precision cutting with minimal heat affected zone</li>
                  <li>Intricate design capabilities for technical textiles</li>
                  <li>Automated cutting systems for consistency</li>
                </ul>
              </div>
            </div>

            <div className="cutting-card fade-up delay-200">
              <div className="cutting-header cap-green">
                <Scissors size={48} color="#fff" />
              </div>
              <div className="cutting-body">
                <h3>Die Cutting</h3>
                <ul>
                  <li>Die cutting machines for precision fabric shaping</li>
                  <li>Custom die development for unique applications</li>
                  <li>High-speed production capabilities</li>
                  <li>Consistent quality across large production runs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fabric Bonding Technologies */}
      <section className="bonding-tech-section">
        <div className="container">
          <div className="bonding-tech-grid">
            <div className="bonding-tech-content fade-up">
              <h2>Fabric Bonding Technologies</h2>
              <p className="bonding-intro">
                Our comprehensive bonding solutions deliver superior adhesion, durability, 
                and performance for technical textiles and performance fabrics.
              </p>
              
              <div className="bonding-list">
                <div className="bonding-list-item">
                  <h3>Full-Width Bonding Machines</h3>
                  <p>Seamless fabric adhesion across the entire width for consistent quality and minimal waste</p>
                </div>
                <div className="bonding-list-item">
                  <h3>Heat Bonding & Adhesive Lamination</h3>
                  <p>Advanced thermal bonding techniques and precision adhesive application systems</p>
                </div>
                <div className="bonding-list-item">
                  <h3>Fabric Laydown Systems</h3>
                  <p>Precision placement technology ensuring optimal alignment and positioning</p>
                </div>
                <div className="bonding-list-item">
                  <h3>Pre-Shrink Processing</h3>
                  <p>Ensures fabric stability and consistency throughout the manufacturing process</p>
                </div>
                <div className="bonding-list-item">
                  <h3>Specialized Bonding Techniques</h3>
                  <p>Custom solutions for technical textiles and performance fabrics with unique requirements</p>
                </div>
              </div>
            </div>
            <div className="bonding-tech-image fade-up delay-200">
              <img src="/solutions-3.webp" alt="Bonding Technology" />
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
