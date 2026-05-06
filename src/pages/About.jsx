import React, { useEffect } from 'react';
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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.fade-up, .scale-in, .slide-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="about-wrapper">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>
        
        <div className="container about-hero-content">
          <h1 className="about-title fade-up">About Us</h1>
        </div>
      </section>

      {/* Introduction Text */}
      <section className="about-intro-section">
        <div className="container about-intro-container fade-up delay-200">
          <p className="intro-lead">
            Ermine is an innovative bonded apparel manufacturing company, led by dynamic and diverse professionals with years of experience from different walks of life. Our utmost priority is providing innovative and high-quality solutions in the evolving bonded apparel space to our valued customers.
          </p>
          <div className="intro-columns">
            <p>
              Ermine was established in March 2010 as Ermine (Pvt) Ltd under the “Registration of the Companies Act” in Sri Lanka under registration number PV 71667. We specialize in providing customized bonded apparel solutions to a wide range of customers, such as well-known global apparel brands, innovative apparel startups, and leading apparel manufacturers.
            </p>
            <p>
              Bonded garments have evolved by abandoning the sewing techniques of using needles and thread as the main joining method. Over the last five years, brands in the global garment sphere have started increasingly relying on bonding techniques to join fabric panels, create hems and incorporate features like pockets and patterns. Hence, Ermine has heavily invested in its RnD and innovated this technology with great confidence as a full garment solution provider.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section (Glassmorphic Banner instead of Hexagon) */}
      <section className="vision-section fade-up">
        <div className="vision-banner">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>Global leader in innovative apparel.</p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section">
        <div className="container text-center fade-up">
          <h2 className="section-title">Our Culture</h2>
          <p className="culture-text">
            Our culture is driven by our key values, which are passion, innovativeness, and integrity. Our philosophy is to provide the highest quality and value to our customers while ensuring environmental sustainability and the wellbeing of our employees.
          </p>
        </div>
        
        <div className="culture-grid">
          <div className="culture-img-wrap fade-up delay-100">
            <div className="culture-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}></div>
          </div>
          <div className="culture-img-wrap fade-up delay-200">
            <div className="culture-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}></div>
          </div>
          <div className="culture-img-wrap fade-up delay-300">
            <div className="culture-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}></div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title text-center fade-up">Leadership Team</h2>
          
          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-card fade-up delay-100">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Pahan Vithanage" />
              </div>
              <div className="team-info">
                <h3>Pahan Vithanage</h3>
                <h4>Director/Founder</h4>
                <p>
                  Pahan is a visionary leader who started the journey of building Ermine by stepping away from his lucrative executive engineering job. Ermine has gone through a tremendous growth journey under his leadership. Pahan has an engineering and management background with a B Sc in Mechanical Engineering from the University of Moratuwa.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-card fade-up delay-200">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Nilmini Dassanayake" />
              </div>
              <div className="team-info">
                <h3>Nilmini Dassanayake</h3>
                <h4>Director/Co-Founder</h4>
                <p>
                  Nilmini is a charismatic and dynamic leader with a proven track record in different roles spanning from engineering to management to finance. She is a founding member and a key contributor to Ermine's success story. Nilmini holds a B Sc in Chemical and Process Engineering from the University of Moratuwa.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-card fade-up delay-300">
              <div className="team-avatar">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Gayan Yapa" />
              </div>
              <div className="team-info">
                <h3>Gayan Yapa</h3>
                <h4>Director/Co-Founder</h4>
                <p>
                  Gayan is an innovative thought leader and technology expert with decades of experience in apparel-related technologies along with several filed patents. Gayan has been a key contributor to Ermine's extraordinary growth journey since the company's inception. Gayan holds a B Sc in Textile Engineering.
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
