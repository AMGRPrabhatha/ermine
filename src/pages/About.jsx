import React, { useEffect } from 'react';
import { ArrowRight, Trophy, Users, ShieldAlert, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
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
    <div className="about-wrapper">
      {/* 1. Immersive Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        
        <div className="container about-hero-centered">
          <div className="about-hero-content fade-up text-center">
            <h1>Our Story & <span className="text-accent">Vision</span></h1>
            <p className="mx-auto">Redefining modern apparel manufacturing through advanced needle-free bonding technology</p>
            <div className="hero-cta-group justify-center">
              <Link to="/capabilities" className="btn-modern btn-primary-modern">
                Our Capabilities <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-modern btn-outline-modern">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Narrative Section */}
      <section className="about-story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content fade-up">
              <span className="section-badge">ESTABLISHED 2010</span>
              <h2>Pioneering the Future of Seamless Apparel</h2>
              <p className="lead-paragraph">
                Ermine is an innovative bonded apparel manufacturing company, led by dynamic and diverse professionals with decades of cumulative global experience.
              </p>
              <p>
                Founded in March 2010 in Sri Lanka (PV 71667), we specialize in delivering customized, turnkey bonded apparel solutions to international brands, high-growth startups, and large-scale industrial manufacturing partners.
              </p>
              <p>
                Stitchless garments represent the pinnacle of technical apparel evolution, abandoning traditional needle-and-thread stitching. Over the past decade, global demand has shifted toward bonding to assemble fabric panels, create smooth hems, and integrate precise, structural components. Ermine continues to invest heavily in proprietary R&D to stand as a premier turnkey apparel solution provider.
              </p>
            </div>
            <div className="story-media fade-up delay-200">
              <div className="story-image-card">
                <img src="/solutions-2.webp" alt="Ermine Precision R&D" />
                <div className="story-stat-badge">
                  <span className="stat-num">15+</span>
                  <span className="stat-label">Years of R&D Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars (Vision, Mission, Philosophy) */}
      <section className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card fade-up">
              <div className="pillar-num">01</div>
              <h3>Our Vision</h3>
              <p>To be the definitive global leader in stitchless apparel technology, constantly pushing the boundaries of fabric engineering.</p>
            </div>
            <div className="pillar-card fade-up delay-100">
              <div className="pillar-num">02</div>
              <h3>Our Mission</h3>
              <p>To empower global fashion and performance brands with sustainable, highly durable bonded apparel solutions and components.</p>
            </div>
            <div className="pillar-card fade-up delay-200">
              <div className="pillar-num">03</div>
              <h3>Our Philosophy</h3>
              <p>Delivering absolute precision while prioritizing ecological sustainability, continuous innovation, and employee wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Culture & Values (Visual Showcases) */}
      <section className="about-culture-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2>Our Culture & Values</h2>
            <p>Driven by passion, continuous innovation, and absolute integrity</p>
          </div>
        </div>

        <div className="culture-showcase-grid">
          <div className="culture-card fade-up">
            <div className="culture-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp')" }}></div>
            <div className="culture-overlay"></div>
            <div className="culture-content">
              <span>PASSION</span>
              <h3>Engaged & Inspired Teams</h3>
            </div>
          </div>
          <div className="culture-card fade-up delay-100">
            <div className="culture-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp')" }}></div>
            <div className="culture-overlay"></div>
            <div className="culture-content">
              <span>INNOVATIVE</span>
              <h3>Pioneering Fabric R&D</h3>
            </div>
          </div>
          <div className="culture-card fade-up delay-200">
            <div className="culture-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp')" }}></div>
            <div className="culture-overlay"></div>
            <div className="culture-content">
              <span>INTEGRITY</span>
              <h3>Sustainable Manufacturing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership Section (Modern Squircle Headshots) */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <h2>Leadership Team</h2>
            <p>Visionary directors guiding the future of seamless manufacturing</p>
          </div>

          <div className="team-grid">
            <div className="team-card fade-up">
              <div className="team-avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&fm=webp" alt="Pahan Vithanage" />
              </div>
              <div className="team-info">
                <h3>Pahan Vithanage</h3>
                <span className="team-role">Director & Founder</span>
                <p>
                  Visionary leader who founded Ermine following a successful executive engineering career. Under his management, the company has scaled exponentially. He holds a B.Sc. in Mechanical Engineering from the University of Moratuwa.
                </p>
              </div>
            </div>

            <div className="team-card fade-up delay-100">
              <div className="team-avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&fm=webp" alt="Nilmini Dassanayake" />
              </div>
              <div className="team-info">
                <h3>Nilmini Dassanayake</h3>
                <span className="team-role">Director & Co-Founder</span>
                <p>
                  Dynamic, results-driven leader with a proven history spanning engineering, corporate finance, and operations. As a founding partner, she plays a critical role in strategic growth. She holds a B.Sc. in Chemical Engineering from the University of Moratuwa.
                </p>
              </div>
            </div>

            <div className="team-card fade-up delay-200">
              <div className="team-avatar-wrapper">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80&fm=webp" alt="Gayan Yapa" />
              </div>
              <div className="team-info">
                <h3>Gayan Yapa</h3>
                <span className="team-role">Director & Co-Founder</span>
                <p>
                  Renowned thought leader and apparel technology specialist. Holding multiple patents in advanced garment engineering, he has pioneered Ermine's technological dominance. He holds a B.Sc. in Textile Engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
