import React, { useEffect } from 'react';
import { ArrowRight, Trophy, Users, ShieldAlert, Award, ThumbsUp, Flag, ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

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
        <div className="about-hero-bg"></div>
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
                <span className="star-rating"><Star size={14} fill="#d4af37" stroke="#d4af37" /> 5</span>
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
                      <Star key={i} size={15} fill="#d4af37" stroke="#d4af37" />
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
                      <Star key={i} size={15} fill="#d4af37" stroke="#d4af37" />
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
                      <Star key={i} size={15} fill="#d4af37" stroke="#d4af37" />
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
                      <Star key={i} size={15} fill="#d4af37" stroke="#d4af37" />
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
