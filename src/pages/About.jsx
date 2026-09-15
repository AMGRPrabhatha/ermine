import React, { useEffect } from 'react';
import { ArrowRight, Trophy, Users, ShieldAlert, Award, ThumbsUp, Flag, ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutHero from '../assets/images/about-hero.jpg';
import nuwanImg from '../assets/images/Nuwan Muthuthanthri.jpeg';
import shanthaImg from '../assets/images/Shantha Rathnayake.jpeg';
import gayanRanganaImg from '../assets/images/Gayan Rangana.jpeg';
import anushkaImg from '../assets/images/Anushka Mangala.jpg';

const About = () => {
  useEffect(() => {
    const runObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.05 } // Lower threshold for instant, robust activation
      );

      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));

      return observer;
    };

    // Run immediately
    const observerInstance = runObserver();

    // Run again after a short delay to capture any late-rendered elements
    const timer = setTimeout(() => {
      runObserver();
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observerInstance) {
        const elements = document.querySelectorAll('.fade-up');
        elements.forEach((el) => observerInstance.unobserve(el));
      }
    };
  }, []);

  return (
    <div className="about-wrapper">
      {/* 1. Immersive Hero Section */}
      <section className="about-hero">
        <div className="about-hero-bg" style={{ backgroundImage: `url(${aboutHero})` }}></div>
        <div className="about-hero-overlay"></div>
        
        <div className="container about-hero-centered">
          <div className="about-hero-content fade-up text-center">
            <h1>Our Story & Vision</h1>
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

          {/* Pill label */}
          <div className="story-pill-label fade-up">
            <span>• Who we are?</span>
          </div>

          {/* Large editorial statement */}
          <div className="story-statement fade-up delay-100">
            <p>
              Ermine is an <strong>innovative bonded apparel</strong> manufacturing company, led by{' '}
              <strong>dynamic professionals</strong> with decades of global experience.{' '}
              Founded in <strong>Sri Lanka in 2010,</strong> we deliver{' '}
              <strong>customized, turnkey bonded solutions</strong> that redefine the future of{' '}
              stitchless apparel.
            </p>
          </div>

          {/* Inline image trio */}
          <div className="story-image-trio fade-up delay-200">
            <div className="story-trio-img">
              <img src="/solutions-2.webp" alt="Ermine craftsmanship" />
            </div>
            <div className="story-trio-img">
              <img src="/product-1.webp" alt="Ermine performance" />
            </div>
            <div className="story-trio-img">
              <img src="/solutions-hero.webp" alt="Ermine innovation" />
            </div>
          </div>

          {/* Achievements divider */}
          <div className="story-achievements-divider fade-up delay-300">
            <span className="divider-line"></span>
            <span className="divider-label">Our Achievements</span>
            <span className="divider-line"></span>
          </div>

          {/* Stats row */}
          <div className="story-stats-row fade-up delay-400">
            <div className="story-stat-card">
              <span className="stat-big-num">15+</span>
              <span className="stat-desc">years of experience</span>
            </div>
            <div className="story-stat-card">
              <span className="stat-big-num">500+</span>
              <span className="stat-desc">global brand partners</span>
            </div>
            <div className="story-stat-card highlight-stat">
              <span className="stat-big-num">100%</span>
              <span className="stat-desc">stitchless technology</span>
            </div>
            <div className="story-stat-card">
              <span className="stat-big-num">50+</span>
              <span className="stat-desc">countries served</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Core Pillars Section (Refined Split Layout) */}
      <section className="pillars-section-new">
        <div className="container">
          
          {/* Header */}
          <div className="pillars-new-header fade-up">
            <span className="pillars-eyebrow">WHERE PRECISION MEETS SUSTAINABILITY</span>
            <h2 className="pillars-new-title">
              EXPERIENCE THE ART OF STITCHLESS APPAREL & FABRIC ENGINEERING
            </h2>
          </div>

          {/* 3-Column Split Body */}
          <div className="pillars-new-grid">
            
            {/* Left Column (Pillars 01 & 03) */}
            <div className="pillars-col pillars-col-left fade-up">
              
              <div className="pillar-item-box">
                <div className="pillar-item-header">
                  <span className="pillar-num-green">01</span>
                  <h3>OUR VISION</h3>
                </div>
                <p>
                  To be the definitive global leader in stitchless apparel technology, constantly pushing the boundaries of fabric engineering.
                </p>
              </div>

              <div className="pillar-divider-line"></div>

              <div className="pillar-item-box">
                <div className="pillar-item-header">
                  <span className="pillar-num-green">03</span>
                  <h3>OUR PHILOSOPHY</h3>
                </div>
                <p>
                  Delivering absolute precision while prioritizing ecological sustainability, continuous innovation, and employee wellbeing.
                </p>
              </div>

            </div>

            {/* Center Column: Tall Portrait Image */}
            <div className="pillars-center-media fade-up delay-100">
              <div className="pillars-media-wrapper">
                <img src="/solutions-hero.webp" alt="Ermine Apparel Engineering" />
              </div>
            </div>

            {/* Right Column (Pillars 02 & 04) */}
            <div className="pillars-col pillars-col-right fade-up delay-200">
              
              <div className="pillar-item-box">
                <div className="pillar-item-header right-aligned">
                  <h3>OUR MISSION</h3>
                  <span className="pillar-num-green">02</span>
                </div>
                <p className="text-right">
                  To empower global fashion and performance brands with sustainable, highly durable bonded apparel solutions and components.
                </p>
              </div>

              <div className="pillar-divider-line"></div>

              <div className="pillar-item-box">
                <div className="pillar-item-header right-aligned">
                  <h3>OUR COMMITMENT</h3>
                  <span className="pillar-num-green">04</span>
                </div>
                <p className="text-right">
                  Pioneering eco-friendly PU & TPU films, zero-waste manufacturing, and uncompromising luxury quality across global supply chains.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Culture & Values (Naturely-inspired Layout) */}
      <section className="about-culture-naturely">
        <div className="container">
          
          {/* Header */}
          <div className="culture-naturely-header fade-up">
            <div className="culture-header-left">
              <h2>Embrace Sustainable Innovation</h2>
              <p>
                Driven by passion, continuous R&D innovation, and absolute integrity, our team crafts seamless apparel engineered for tomorrow.
              </p>
            </div>
            <Link to="/capabilities" className="culture-learn-btn">
              Learn more <span className="btn-arrow">↗</span>
            </Link>
          </div>

          {/* 2-Column Cards Grid */}
          <div className="culture-naturely-grid">
            
            {/* Card 1 */}
            <div className="culture-naturely-card fade-up">
              <div className="culture-card-img">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp" 
                  alt="Engaged & Inspired Teams" 
                />
              </div>
              <div className="culture-card-body">
                <h3>Engaged & Inspired Teams</h3>
                <p>
                  Our passionate workforce thrives in a collaborative, climate-controlled facility engineered for technical apparel excellence.
                </p>
                <p className="culture-subtext">
                  Every team member is empowered to innovate, ensuring uncompromised precision and luxury quality across all product lines.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="culture-naturely-card fade-up delay-100">
              <div className="culture-card-img">
                <img 
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp" 
                  alt="Pioneering Fabric R&D" 
                />
              </div>
              <div className="culture-card-body">
                <h3>Pioneering Fabric R&D</h3>
                <p>
                  We continuously engineer and test new adhesive film formulations to maximize garment bond flexibility and 50+ wash durability.
                </p>
                <p className="culture-subtext">
                  Our dedicated in-house R&D laboratory delivers rapid prototyping and custom attachments for leading global fashion brands.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Leadership Section (Modern Squircle Headshots) */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-header fade-up">
            <h2>Leadership Team</h2>
            <p>Visionary directors guiding the future of seamless manufacturing</p>
          </div>

          <div className="team-grid">

            <div className="team-card fade-up">
              <div className="team-avatar-wrapper">
                <img src={nuwanImg} alt="Nuwan Muthutanthri" />
              </div>
              <div className="team-info">
                <h3>Nuwan Muthutanthri</h3>
                <span className="team-role">Director & Co-Founder</span>
                <p>21+ Years Experience in IE, Production & Operation in Bodyline, InQube & Bondville.</p>
              </div>
            </div>

            <div className="team-card fade-up delay-100">
              <div className="team-avatar-wrapper">
                <img src={shanthaImg} alt="Shantha Rathnayake" />
              </div>
              <div className="team-info">
                <h3>Shantha Rathnayake</h3>
                <span className="team-role">Director & Co-Founder</span>
                <p>30 Years Experience in IE, Planning, Merchandising, Production, & Quality Assurance in Bodyline, MAST Industries Inc. USA, & InQube.</p>
              </div>
            </div>

            <div className="team-card fade-up delay-200">
              <div className="team-avatar-wrapper">
                <img src={gayanRanganaImg} alt="Gayan Rangana" />
              </div>
              <div className="team-info">
                <h3>Gayan Rangana</h3>
                <span className="team-role">Director & Co-Founder</span>
                <p>15+ Years Experience in IE, Engineering, & Automation in Omega line, Bodyline, & Bondville.</p>
              </div>
            </div>

            <div className="team-card fade-up delay-300">
              <div className="team-avatar-wrapper">
                <img src={anushkaImg} alt="Anushka Mangala" />
              </div>
              <div className="team-info">
                <h3>Anushka Mangala</h3>
                <span className="team-role">Director & Co-Founder</span>
                <p>15+ Years Experience in IE, Production & Apparel Operations in Leading Garment Enterprises.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Ratings & Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-top-bar fade-up">
            <div className="reviews-title-side">
              <h2>Rating & Reviews (328)</h2>
              <span className="reviews-sub-info">Showing 4 results from total of 23 reviews</span>
            </div>
            <div className="reviews-filter-side">
              <span className="filter-label">Filter by</span>
              <div className="filter-dropdown">
                <span className="star-rating"><Star size={14} fill="var(--color-accent)" stroke="var(--color-accent)" /> 5</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <div className="reviews-grid">
            {/* Review 1 */}
            <div className="review-card fade-up">
              <div className="review-header">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&fm=webp" alt="Hasna Azlya" className="review-avatar" />
                <div className="review-user-info">
                  <div className="user-name-row">
                    <h4>Hasna Azlya</h4>
                    <span className="review-time">yesterday</span>
                  </div>
                  <div className="star-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--color-accent)" stroke="var(--color-accent)" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">
                "I absolutely adore my beige coat from Ermine! It's not just a coat; it's a statement piece that adds elegance to any outfit. The color is versatile, and the fit is incredibly flattering. It's become my go-to outerwear choice for both casual outings and formal events."
              </p>
              <div className="review-actions">
                <button className="btn-action">Reply</button>
                <button className="btn-action">
                  <ThumbsUp size={14} /> <span>22</span>
                </button>
                <button className="btn-action report-btn">
                  <Flag size={14} />
                </button>
              </div>
            </div>

            {/* Review 2 */}
            <div className="review-card fade-up delay-100">
              <div className="review-header">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&fm=webp" alt="Hellena Joy" className="review-avatar" />
                <div className="review-user-info">
                  <div className="user-name-row">
                    <h4>Hellena Joy</h4>
                    <span className="review-time">yesterday</span>
                  </div>
                  <div className="star-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--color-accent)" stroke="var(--color-accent)" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">
                "As a busy professional, I need outerwear that's both stylish and practical, and this beige coat ticks all the boxes. It's sleek and sophisticated, ideal for meetings and client lunches, yet comfortable enough for everyday wear. I've received countless compliments since I started wearing it!"
              </p>
              <div className="review-actions">
                <button className="btn-action">Reply</button>
                <button className="btn-action">
                  <ThumbsUp size={14} /> <span>22</span>
                </button>
                <button className="btn-action report-btn">
                  <Flag size={14} />
                </button>
              </div>
            </div>

            {/* Review 3 */}
            <div className="review-card fade-up">
              <div className="review-header">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&fm=webp" alt="Sarah Jasmine" className="review-avatar" />
                <div className="review-user-info">
                  <div className="user-name-row">
                    <h4>Sarah Jasmine</h4>
                    <span className="review-time">2 days ago</span>
                  </div>
                  <div className="star-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--color-accent)" stroke="var(--color-accent)" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">
                "I'm in love with my beige coat! It's so soft and cozy, like being wrapped in a warm hug. The color is gorgeous and goes with everything in my wardrobe. Whether I'm running errands or meeting friends for brunch, this coat effortlessly elevates my look."
              </p>
              <div className="review-actions">
                <button className="btn-action">Reply</button>
                <button className="btn-action">
                  <ThumbsUp size={14} /> <span>10</span>
                </button>
                <button className="btn-action report-btn">
                  <Flag size={14} />
                </button>
              </div>
            </div>

            {/* Review 4 */}
            <div className="review-card fade-up delay-100">
              <div className="review-header">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80&fm=webp" alt="Taylor Swift" className="review-avatar" />
                <div className="review-user-info">
                  <div className="user-name-row">
                    <h4>Taylor Swift</h4>
                    <span className="review-time">2 days ago</span>
                  </div>
                  <div className="star-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--color-accent)" stroke="var(--color-accent)" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">
                "This beige coat is a game-changer! I've never felt more confident and put-together than when I'm wearing it. The quality is top-notch, and the attention to detail is evident in every stitch. Plus, it's surprisingly warm without being bulky, making it perfect for chilly days."
              </p>
              <div className="review-actions">
                <button className="btn-action">Reply</button>
                <button className="btn-action">
                  <ThumbsUp size={14} /> <span>10</span>
                </button>
                <button className="btn-action report-btn">
                  <Flag size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="reviews-footer fade-up">
            <button className="btn-show-more">
              Show More <ArrowRight size={16} style={{ transform: 'rotate(90deg)' }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
