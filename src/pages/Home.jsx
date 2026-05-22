import React, { useEffect } from 'react';
import { ArrowRight, Activity, Zap, ShieldCheck, Globe, Droplet, ArrowDownRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

import homeHero from '../assets/images/homehero.webp';
import brandVideo from '../assets/images/video.mp4';
import textileImg from '../assets/images/Textile.jpg';

const Home = () => {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isMuted, setIsMuted] = React.useState(true);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const skipBackward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 15);
  };

  const skipForward = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.min(duration, videoRef.current.currentTime + 15);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    videoRef.current.currentTime = percentage * duration;
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

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
      { 
        threshold: 0.01,              // Trigger as soon as 1% of the element is near view
        rootMargin: '0px 0px 150px 0px' // Pre-load elements 150px before entering viewport
      }
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
              Precision Bonding Technologies
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

      {/* 2. Innovation Section (Redesigned Modern Layout) */}
      <section className="innovation-section">
        <div className="container">
          <div className="innovation-grid">
            <div className="innovation-content fade-up">
              <span className="why-choose-badge">WHY CHOOSE</span>
              <h2>Leading Innovation in <span className="highlight-gold">Textile Technology</span></h2>
              <div className="title-underline"></div>
              
              <p className="innovation-intro">
                Ermine is a leading provider of state-of-the-art bonding and fabric processing solutions. 
                With a strong focus on innovation and precision, our goal is to revolutionize textile 
                manufacturing through advanced technology and sustainable practices.
              </p>
              
              <div className="innovation-why-grid">
                <div className="innovation-why-card">
                  <div className="why-icon-badge">
                    <ShieldCheck size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Advanced Technology</h3>
                    <p>Cutting-edge bonding and fabric processing solutions engineered for tomorrow</p>
                  </div>
                </div>

                <div className="innovation-why-card">
                  <div className="why-icon-badge">
                    <Zap size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Precision Manufacturing</h3>
                    <p>State-of-the-art climate-controlled facilities and dedicated expert technical team</p>
                  </div>
                </div>

                <div className="innovation-why-card">
                  <div className="why-icon-badge">
                    <Globe size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Sustainable Practices</h3>
                    <p>Eco-friendly, energy-efficient, and environmentally responsible production systems</p>
                  </div>
                </div>

                <div className="innovation-why-card">
                  <div className="why-icon-badge">
                    <Activity size={22} />
                  </div>
                  <div className="why-card-content">
                    <h3>Global Compliance</h3>
                    <p>Robust quality assurance protocols compliant with elite international apparel standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="innovation-image-col">
              <div className="innovation-image-wrapper fade-up delay-200">
                <img src={textileImg} alt="Textile Innovation" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Expertise (Modernized Bento Layout) */}
      <section className="expertise-section-modern">
        {/* Glow Effects */}
        <div className="expertise-glow-1"></div>
        <div className="expertise-glow-2"></div>
        
        <div className="container">
          <div className="expertise-header-modern fade-up">
            <span className="expertise-badge">Our Capabilities</span>
            <h2 className="expertise-title-modern">Core Expertise</h2>
            <div className="expertise-header-divider"></div>
            <p className="expertise-subtitle-modern">
              Engineered with absolute precision, utilizing state-of-the-art technologies to redefine textile performance and industrial bonding.
            </p>
          </div>

          <div className="expertise-bento-grid">
            {/* Bento Card 1: Ultrasonic (Large featured card) */}
            <div className="expertise-bento-card bento-large fade-up">
              <div className="bento-card-bg"></div>
              <div className="bento-card-content">
                <div className="bento-top-meta">
                  <span className="bento-number">01</span>
                  <div className="bento-icon-wrapper"><Zap size={26} /></div>
                </div>
                <div className="bento-text">
                  <h3>Ultrasonic Cutting</h3>
                  <p>
                    Utilizing high-frequency acoustic vibrations to slice fabrics with unmatched speed, sealing edges simultaneously to eliminate fraying and create seamless borders.
                  </p>
                  <div className="bento-tech-tags">
                    <span>Acoustic Vibrations</span>
                    <span>Self-Sealing Edges</span>
                    <span>Zero Fraying</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Laser Cutting */}
            <div className="expertise-bento-card bento-standard fade-up delay-100">
              <div className="bento-card-bg"></div>
              <div className="bento-card-content">
                <div className="bento-top-meta">
                  <span className="bento-number">02</span>
                  <div className="bento-icon-wrapper"><Activity size={26} /></div>
                </div>
                <div className="bento-text">
                  <h3>Laser Cutting</h3>
                  <p>
                    CNC-controlled multi-dimensional laser heads deliver complex shapes with micron-level tolerance. Ideal for high-performance activewear and technical garments.
                  </p>
                  <div className="bento-tech-tags">
                    <span>Micron Tolerance</span>
                    <span>CNC Precision</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 3: Fabric Bonding */}
            <div className="expertise-bento-card bento-standard fade-up delay-200">
              <div className="bento-card-bg"></div>
              <div className="bento-card-content">
                <div className="bento-top-meta">
                  <span className="bento-number">03</span>
                  <div className="bento-icon-wrapper"><Droplet size={26} /></div>
                </div>
                <div className="bento-text">
                  <h3>Fabric Bonding</h3>
                  <p>
                    State-of-the-art molecular adhesion and film technology replaces standard seams, offering superior stretch, hydro-resistance, and streamlined silhouettes.
                  </p>
                  <div className="bento-tech-tags">
                    <span>Molecular Adhesion</span>
                    <span>Hydro-Resistance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 4: Quality Assurance (Wide featured card) */}
            <div className="expertise-bento-card bento-wide fade-up delay-300">
              <div className="bento-card-bg"></div>
              <div className="bento-card-content">
                <div className="bento-top-meta">
                  <span className="bento-number">04</span>
                  <div className="bento-icon-wrapper"><ShieldCheck size={26} /></div>
                </div>
                <div className="bento-text-horizontal">
                  <div className="horizontal-main">
                    <h3>Quality Assurance</h3>
                    <p>
                      Every bonding and cut undergoes rigorous multi-cycle stress, elongation, and hydrostatic testing to ensure compliance with elite athletic standards.
                    </p>
                  </div>
                  <div className="horizontal-stats">
                    <div className="stat-box">
                      <span className="stat-num">100%</span>
                      <span className="stat-label">Inspected</span>
                    </div>
                    <div className="stat-box">
                      <span className="stat-num">50+</span>
                      <span className="stat-label">Wash Cycles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Featured Categories (Premium 2-Column Grid Layout) */}
      <section className="featured-categories-section">
        <div className="container">
          <div className="categories-grid">
            <Link to="/products" className="category-card-wide fade-up">
              <div className="category-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp')" }}></div>
              <div className="category-overlay"></div>
              <div className="category-content">
                <span className="category-tag">97% Polyester</span>
                <h3>Elegant coat with the best materials</h3>
              </div>
            </Link>
            
            <Link to="/solutions" className="category-card-narrow fade-up delay-100">
              <div className="category-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp')" }}></div>
              <div className="category-overlay"></div>
              <div className="category-content">
                <span className="category-tag">Precision Bonding</span>
                <h3>Durable and strong stitches</h3>
              </div>
            </Link>
          </div>
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
          <div className="location-grid">
            <div className="location-image-container fade-up">
              <img src="/products-hero.webp" alt="Ermine Headquarters" className="location-image" />
            </div>
            <div className="location-content fade-up delay-100">
              <h2 className="section-title-alt">Strategically Located</h2>
              <p className="location-text">
                With both our corporate office and manufacturing facility strategically positioned in Sri Lanka, 
                we provide seamless access to regional markets and global partners.
              </p>
              
              <div className="address-grid">
                <div className="address-card">
                  <h4>Company Address</h4>
                  <p>Ermine Pvt Ltd<br/>No 192/10 9th Lane, Nawala Rd<br/>Kotte, Sri Lanka</p>
                </div>
                <div className="address-card">
                  <h4>Factory Address</h4>
                  <p>Ermine International Pvt Ltd<br/>No 4, Ridee Mawatha<br/>Kalamulla, Kalutara<br/>Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Product Showcase Section */}
      <section className="product-showcase-section">
        <div className="container">
          <div className="showcase-header fade-up">
            <div className="showcase-title-side">
              <h2>Stylish Women's Coats <ArrowRight size={28} className="title-arrow" /></h2>
              <span className="showcase-subtitle">Your Outerwear Upgrade</span>
            </div>
            <div className="showcase-desc-side">
              <p>Stay cozy and stylish with our selection of women's coats! From classic trenches to warm parkas, we've got you covered in every season.</p>
            </div>
          </div>
          
          <div className="showcase-video-container fade-up delay-100">
            <div className="video-mockup-wrapper">
              <video 
                ref={videoRef}
                src={brandVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="showcase-video-player"
                onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
                onLoadedMetadata={() => setDuration(videoRef.current.duration)}
              />
              <div className="video-overlay-tint"></div>
              
              {/* Bottom Video Controls Bar - Fully Functional */}
              <div className="video-controls-mockup">
                <div className="controls-top-row">
                  <div className="progress-bar-bg" onClick={handleSeek} style={{ cursor: 'pointer' }}>
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="controls-bottom-row">
                  <div className="controls-left">
                    <span className="play-icon" onClick={togglePlay} style={{ cursor: 'pointer' }}>
                      {isPlaying ? '⏸' : '▶'}
                    </span>
                    <span className="skip-icon" onClick={skipBackward} style={{ cursor: 'pointer' }}>⟲ 15</span>
                    <span className="skip-icon" onClick={skipForward} style={{ cursor: 'pointer' }}>⟳ 15</span>
                    <span className="detail-product-label">Live Video</span>
                  </div>
                  <div className="controls-right">
                    <span className="time-display">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    <span className="volume-icon" onClick={toggleMute} style={{ cursor: 'pointer' }}>
                      {isMuted ? '🔇' : '🔊'}
                    </span>
                    <span className="fullscreen-icon" onClick={toggleFullscreen} style={{ cursor: 'pointer' }}>⛶</span>
                  </div>
                </div>
              </div>
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
