import React, { useEffect, useState } from 'react';
import { ArrowRight, Activity, Zap, ShieldCheck, Globe, Droplet, ArrowDownRight, ArrowUpRight, Scissors, MapPin, Copy, Check, ExternalLink, Compass, Truck, Sun, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

import homeHero from '../assets/images/homehero.webp';
import homeHero2 from '../assets/images/homehero2.jpg';
import brandVideo from '../assets/images/video.mp4';
import textileImg from '../assets/images/Textile.jpg';
import capImg from '../assets/images/capabilities.jpg';
import solutionImg from '../assets/images/solution.jpg';
import prodImg from '../assets/images/products.jpg';

const heroImages = [homeHero, homeHero2];

const whyChooseItems = [
  {
    title: "Expert Guidance, Unforgettable Precision",
    desc: "Trust our expert team to craft personalized, high-performance apparel bonding solutions tailored to your every technical desire."
  },
  {
    title: "Expertly Curated Engineering",
    desc: "State-of-the-art ultrasonic and heat-press bonding patterns created to maximize fabric durability and flexibility."
  },
  {
    title: "Sustainable & Eco-Focused Process",
    desc: "Utilizing eco-friendly PU/TPU adhesive films and energy-efficient manufacturing systems."
  },
  {
    title: "Turnkey Apparel Solutions",
    desc: "End-to-end prototyping, material testing, scalable production, and global dispatch logistics."
  },
  {
    title: "Exclusive Quality Assurance",
    desc: "Rigorous stress testing and 50+ wash cycle validations guaranteeing zero bond degradation."
  }
];

const Home = () => {
  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isCopied, setIsCopied] = React.useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [prevHeroIndex, setPrevHeroIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeAccordIndex, setActiveAccordIndex] = useState(0);

  // Auto slideshow — switches every 5 seconds with a 1s crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevHeroIndex((prev) => prev);
      setHeroIndex((prev) => {
        setPrevHeroIndex(prev);
        setIsTransitioning(true);
        setTimeout(() => {
          setIsTransitioning(false);
          setPrevHeroIndex(null);
        }, 1000);
        return (prev + 1) % heroImages.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = () => {
    const addressText = "Ermine International Pvt Ltd\nNo 4, Ridee Mawatha\nKalamulla, Kalutara\nSri Lanka";
    navigator.clipboard.writeText(addressText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy address: ", err);
      });
  };

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
        threshold: 0.01,
        rootMargin: '200px 0px 200px 0px' // Pre-trigger both above and below viewport
      }
    );

    const elements = document.querySelectorAll('.fade-up, .slide-in-right, .scale-in');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="home-modern-wrapper">
      {/* 1. Immersive Hero Section */}
      <section className="hero-modern-container">
        {/* Slideshow background layers */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`hero-modern-bg ${i === heroIndex ? 'hero-slide-active' : 'hero-slide-hidden'}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className="hero-modern-overlay"></div>

        <div className="container hero-centered-content fade-up">
          <h1 className="hero-title">Precision Bonding<br/>with Ermine</h1>
          <p className="hero-description">
            Experience the extraordinary with Ermine. Explore advanced bonding innovations, enjoy premium manufacturing, and create magical apparel through carefully curated and unique industrial progress.
          </p>
          <div className="hero-cta-group">
            <Link to="/solutions" className="btn-modern btn-primary-pill">
              EXPLORE NOW <span className="arrow-circle"><ArrowRight size={16} /></span>
            </Link>
            <Link to="/about" className="btn-modern btn-text-link">
              OUR STORY
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Brand Statement Section */}
      <section className="innovation-section">
        <div className="container">
          <div className="innovation-three-col">

            {/* Left: narrow label */}
            <div className="innov-label-col">
              <span className="innov-label-text">Precision Bonding,<br />Reimagined</span>
            </div>

            {/* Center: large editorial statement */}
            <div className="innov-statement-col">
              <p className="innov-statement">
                <strong>Tired of standard apparel manufacturing?</strong> At Ermine, we specialize in{' '}
                <strong>precision stitchless bonding</strong> solutions for global brands.{' '}
                <span className="innov-statement-muted">
                  We handle the technology so you can focus on design, the brand, and the vision.
                </span>
              </p>
              <Link to="/about" className="innov-more-btn">More About Us</Link>
            </div>

            {/* Right: portrait image */}
            <div className="innov-image-col">
              <div className="innov-image-wrapper">
                <img src={textileImg} alt="Ermine precision bonding" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Discover Capabilities Section (Grid Layout) */}
      <section className="discover-section">
        <div className="container">
          {/* Header */}
          <div className="discover-header text-center fade-up">
            <span className="discover-eyebrow">[EXPERIENCE OUR CAPABILITIES]</span>
            <h2 className="discover-title">
              Discover the innovation awaiting you at our<br />specialized bonding facilities
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="discover-grid">
            
            {/* Left Large Card */}
            <div className="discover-card-main fade-up">
              <img src={capImg} alt="Curated Apparel Solutions" className="discover-card-bg" />
              <div className="discover-card-overlay"></div>
              
              <Link to="/capabilities" className="discover-explore-btn">
                Explore More <ArrowRight size={16} />
              </Link>

              <div className="discover-card-content">
                <h3>Curated and Tailor-Made Apparel Solutions</h3>
                <p>Explore specialized bonding technologies chosen for their precision engineering and performance.</p>
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="discover-right-stack">
              
              {/* Right Top Card */}
              <div className="discover-card-sub fade-up delay-100">
                <img src={solutionImg} alt="Expert Guidance" className="discover-card-bg" />
                <div className="discover-card-overlay"></div>
                <div className="discover-card-content">
                  <h3>Expert Technical Guidance for a Deeper, Superior Result</h3>
                </div>
              </div>

              {/* Right Bottom Card */}
              <div className="discover-card-sub fade-up delay-200">
                <img src={prodImg} alt="Turnkey Manufacturing" className="discover-card-bg" />
                <div className="discover-card-overlay"></div>
                <div className="discover-card-content">
                  <h3>Effortless Turnkey Manufacturing for Stress-Free Production</h3>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section (Selatan-inspired Layout) */}
      <section className="why-choose-selatan-section">
        <div className="container">
          
          {/* Top Header */}
          <div className="selatan-header fade-up">
            <div className="selatan-header-left">
              <div className="selatan-eyebrow">
                <span className="eyebrow-line"></span>
                <span>WHY CHOOSE US</span>
              </div>
              <h2 className="selatan-title">
                Unmatched Bonding <span className="title-muted">Expertise</span><br />
                <span className="title-muted">at Ermine Apparel</span>
              </h2>
            </div>
            
            <Link to="/capabilities" className="selatan-learn-btn">
              Learn more <span className="btn-arrow">↗</span>
            </Link>
          </div>

          <div className="selatan-header-divider"></div>

          {/* Body Content Grid */}
          <div className="selatan-body-grid">
            
            {/* Left Column: Image + Caption */}
            <div className="selatan-left-col fade-up">
              <div className="selatan-img-wrapper">
                <img src={capImg} alt="Ermine Bonding Expertise" />
              </div>
              <p className="selatan-img-caption">
                At Ermine Apparel, we offer personalized apparel bonding solutions tailored to your unique manufacturing needs. Our expert team ensures a seamless experience, from initial planning to final dispatch.
              </p>
            </div>

            {/* Right Column: Accordion List */}
            <div className="selatan-right-col fade-up delay-100">
              <div className="selatan-accordion-list">
                {whyChooseItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`selatan-accordion-item ${activeAccordIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveAccordIndex(idx)}
                  >
                    <div className="selatan-item-header">
                      <h3>{item.title}</h3>
                      <ChevronRight size={18} className="selatan-chevron" />
                    </div>
                    {activeAccordIndex === idx && (
                      <p className="selatan-item-desc">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 4.5 Video Showcase Section (Editorial Style Layout) */}
      <section className="product-showcase-section">
        <div className="container">
          
          {/* Editorial Text Statement */}
          <div className="showcase-editorial-header fade-up">
            <p className="showcase-editorial-text">
              <strong>We specialize in creating tailor-made bonded solutions across the globe,</strong>{' '}
              <span className="editorial-text-muted">
                blending must-see innovation with precision manufacturing to give you a true sense of apparel craftsmanship.
              </span>
            </p>
          </div>

          {/* Video Frame Container */}
          <div className="showcase-video-frame fade-up delay-100">
            <video 
              ref={videoRef}
              src={brandVideo} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="showcase-frame-video"
            />
            <div className="video-frame-overlay"></div>
          </div>

        </div>
      </section>

      {/* 5. Immersive CTA Banner (Reference Card Design) */}
      <section className="home-banner-cta-section">
        <div className="container">
          <div className="home-cta-card fade-up">
            <div className="cta-card-overlay"></div>
            <div className="cta-card-inner">
              <h2 className="cta-card-title">
                Begin Your Exciting Ermine<br />
                Apparel Experience Today
              </h2>
              <div className="cta-card-bottom">
                <Link to="/contact" className="cta-pill-btn">
                  <span className="cta-pill-text">Get In Touch</span>
                  <span className="cta-pill-circle">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
                <p className="cta-card-desc">
                  Start your Ermine partnership today. Explore cutting-edge bonding technology and enjoy tailored, expert-guided manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
