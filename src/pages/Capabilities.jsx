import React, { useEffect, useState } from 'react';
import { Zap, Scissors, Building2, Leaf, Settings, ShieldCheck, ArrowRight, ArrowUpRight, Activity, MapPin, Award, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Capabilities.css';
import capHero from '../assets/images/capabilities-hero.jpg';
import solutionImg from '../assets/images/solution.jpg';
import textileImg from '../assets/images/Textile.jpg';

const ecoTabData = [
  {
    id: 'bonding',
    tabLabel: 'For Daily Use',
    tabIcon: Zap,
    headline: 'Everything You Need to Master Your Apparel Bonding',
    subtitle: 'With Ermine, you get a complete suite of advanced apparel bonding technologies built to simplify, secure, and supercharge your manufacturing journey.',
    mainImage: capHero,
    mainDesc: 'Complete end-to-end bonded garment manufacturing with specialized adhesive films and continuous lamination systems.',
    mainButtonText: 'Learn More',
    mainButtonLink: '/contact',
    limeCardItems: [
      {
        icon: Award,
        title: 'Full-Width Lamination',
        desc: 'Seamless fabric adhesion across the entire roll width with strict temperature and pressure control.'
      },
      {
        icon: ShieldCheck,
        title: 'Waterproof Seam Sealing',
        desc: 'Zero-stitch tape application ensuring 100% water resistance and ultra-sleek aesthetic lines.'
      }
    ],
    darkCardLines: [
      'With Ermine, you get a complete suite of smart bonding technologies built to simplify, secure, and scale.',
      'With Ermine, you get a complete suite of smart bonding technologies built to simplify, secure, and scale.'
    ]
  },
  {
    id: 'cutting',
    tabLabel: 'For Smart User',
    tabIcon: Scissors,
    headline: 'State-of-the-Art Precision Cutting & Tooling',
    subtitle: 'Explore our in-house engineering and automated cutting systems engineered for complex technical textile patterns.',
    mainImage: textileImg,
    mainDesc: 'Automated laser and ultrasonic cutting cells delivering clean edge finishing without fraying or material distortion.',
    mainButtonText: 'Explore Tooling',
    mainButtonLink: '/solutions',
    limeCardItems: [
      {
        icon: Zap,
        title: 'Ultrasonic Edge Finishing',
        desc: 'Simultaneous cutting and edge sealing for synthetic fabrics, eliminating seam fraying completely.'
      },
      {
        icon: Activity,
        title: 'Automated Laser Patterning',
        desc: 'Sub-millimeter accuracy for complex mesh ventilation holes and intricate apparel components.'
      }
    ],
    darkCardLines: [
      'Our in-house machine design team creates custom die tools and specialized slitting equipment tailored to your exact garment geometry.',
      'Achieve zero-waste nesting layout efficiency with fast turnaround times for prototype sampling and mass production.'
    ]
  }
];

const reportCategories = ['All', 'Bonding Tech', 'R&D Insights', 'Events'];

const reportsList = [
  {
    id: 1,
    category: 'Bonding Tech',
    badge: 'BONDING TECH',
    title: 'At Ermine, We Drive Advanced Apparel Bonding Innovation Across Global Production Hubs.',
    desc: 'Explore how our proprietary adhesive chemistry, continuous lamination, and ultrasonic cutting cells deliver seamless, zero-stitch garments with superior durability and comfort.',
    image: capHero,
    author: 'BY ERMINE TECH TEAM',
    date: 'NOV 12, 2025',
    readTime: '8 MIN READ'
  },
  {
    id: 2,
    category: 'Bonding Tech',
    badge: 'BONDING TECH',
    title: 'Bonded Garment Manufacturing: The New Growth Playbook for Apparel Brands',
    desc: 'How technical activewear and seamless apparel brands are implementing stitchless construction to capture premium market share.',
    image: solutionImg,
    author: 'BY CHIDINMA NNAMANI',
    date: 'NOV 12, 2025',
    readTime: '8 MIN READ'
  },
  {
    id: 3,
    category: 'R&D Insights',
    badge: 'R&D INSIGHTS',
    title: 'Why Leading Performance Brands Choose Bonded Seams Over Traditional Stitching',
    desc: 'Comprehensive comparative analysis on wash durability, stretch recovery, and wearer comfort in high-performance bonded activewear.',
    image: textileImg,
    author: 'BY CATHIE ERICSON',
    date: 'FEB 24, 2026',
    readTime: '4 MIN READ'
  },
  {
    id: 4,
    category: 'Events',
    badge: 'MARKET TRENDS',
    title: 'The State of Seamless & Waterproof Apparel Technologies in 2026',
    desc: 'Key industry statistics and engineering insights shaping hot-melt adhesive films, laser cutting precision, and sustainable textile bonding.',
    image: '/solutions-3.webp',
    author: 'BY CATHIE ERICSON',
    date: 'MAR 05, 2026',
    readTime: '6 MIN READ'
  }
];

const Capabilities = () => {
  const [activeEcoTab, setActiveEcoTab] = useState(0);
  const [activeReportCat, setActiveReportCat] = useState('All');

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

  const currentTab = ecoTabData[activeEcoTab];

  const filteredReports = activeReportCat === 'All'
    ? reportsList
    : reportsList.filter(item => item.category === activeReportCat);

  const featuredReport = filteredReports[0] || reportsList[0];
  const sideReports = activeReportCat === 'All'
    ? filteredReports.slice(1, 4)
    : filteredReports;

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

      {/* 2. Technology Ecosystem (Redesigned matching Monexa UI tab card layout) */}
      <section className="eco-monexa-section">
        <div className="container">
          
          {/* Section Header */}
          <div className="eco-monexa-header fade-up">
            <div className="eco-header-left">
              <h2>{currentTab.headline}</h2>
            </div>
            <div className="eco-header-right">
              <p>{currentTab.subtitle}</p>
            </div>
          </div>

          {/* Interactive Toggle Capsule */}
          <div className="eco-capsule-wrapper fade-up text-center">
            <div className="eco-capsule-toggle">
              {ecoTabData.map((tab, idx) => {
                const TabIcon = tab.tabIcon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`eco-toggle-btn ${activeEcoTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveEcoTab(idx)}
                  >
                    <TabIcon size={18} />
                    <span>{tab.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Grid */}
          <div className="eco-monexa-grid fade-up">
            {/* Left Large Media Card */}
            <div className="eco-left-media-card">
              <img src={currentTab.mainImage} alt={currentTab.headline} className="eco-left-img" />
              <div className="eco-left-card-overlay">
                <p className="eco-left-desc">{currentTab.mainDesc}</p>
                <Link to={currentTab.mainButtonLink} className="eco-left-learn-btn">
                  {currentTab.mainButtonText}
                </Link>
              </div>
            </div>

            {/* Right Stacked Cards */}
            <div className="eco-right-stacked-cards">
              {/* Top Lime Container Card */}
              <div className="eco-lime-card">
                {currentTab.limeCardItems.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <React.Fragment key={i}>
                      {i > 0 && <div className="eco-lime-divider"></div>}
                      <div className="eco-lime-item">
                        <div className="eco-lime-icon-badge">
                          <ItemIcon size={20} />
                        </div>
                        <div className="eco-lime-item-info">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Bottom Dark Container Card */}
              <div className="eco-dark-card">
                {currentTab.darkCardLines.map((line, i) => (
                  <p key={i} className="eco-dark-card-text">{line}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Precision Cutting Technologies (Redesigned matching LuxeGolf List Reference) */}
      <section className="cutting-luxegolf-section">
        <div className="container">
          
          {/* Header */}
          <div className="cutting-luxegolf-header fade-up text-center">
            <h2>Master The Finest Cutting Technologies</h2>
            <p>
              Experience high-precision cutting engineered for technical apparel manufacturers who value speed, sub-millimeter tolerances, and zero material waste.
            </p>
          </div>

          {/* Rows List */}
          <div className="cutting-luxegolf-list">
            
            {/* Item 01 */}
            <div className="cutting-list-item fade-up">
              <span className="cutting-item-num">01</span>
              <div className="cutting-item-img-wrapper">
                <img src="/product-1.webp" alt="Ultrasonic Cutting" className="cutting-item-img" />
              </div>
              <div className="cutting-item-info">
                <h3>Ultrasonic Cutting</h3>
                <p>
                  Continuous ultrasonic cutting machines for high-volume technical apparel. Delivers clean edge finishing without fraying while significantly reducing material waste.
                </p>
                <div className="cutting-item-specs">
                  <span>⚡ High-Volume</span>
                  <span>🎯 Zero Fraying</span>
                  <span>✂️ Synthetic Fabrics</span>
                </div>
              </div>
              <Link to="/solutions" className="cutting-item-arrow-btn" aria-label="Learn about Ultrasonic Cutting">
                <ArrowUpRight size={22} />
              </Link>
            </div>

            {/* Item 02 */}
            <div className="cutting-list-item fade-up delay-100">
              <span className="cutting-item-num">02</span>
              <div className="cutting-item-img-wrapper">
                <img src="/product-2.webp" alt="Laser Cutting" className="cutting-item-img" />
              </div>
              <div className="cutting-item-info">
                <h3>Laser Cutting</h3>
                <p>
                  Fabric laser cutting machines for complex geometric patterns. High-precision laser optics create minimal heat-affected zones and support intricate design ventilation.
                </p>
                <div className="cutting-item-specs">
                  <span>⚡ Sub-Millimeter</span>
                  <span>🎯 Complex Patterns</span>
                  <span>✂️ Automated Nesting</span>
                </div>
              </div>
              <Link to="/solutions" className="cutting-item-arrow-btn" aria-label="Learn about Laser Cutting">
                <ArrowUpRight size={22} />
              </Link>
            </div>

            {/* Item 03 */}
            <div className="cutting-list-item fade-up delay-200">
              <span className="cutting-item-num">03</span>
              <div className="cutting-item-img-wrapper">
                <img src="/product-3.webp" alt="Die Cutting" className="cutting-item-img" />
              </div>
              <div className="cutting-item-info">
                <h3>Die Cutting</h3>
                <p>
                  Specialized press machines for precision fabric shaping. In-house custom die development ensures high-speed production and consistent quality across mass runs.
                </p>
                <div className="cutting-item-specs">
                  <span>⚡ Custom Tooling</span>
                  <span>🎯 High-Speed Pressing</span>
                  <span>✂️ Exact Tolerances</span>
                </div>
              </div>
              <Link to="/solutions" className="cutting-item-arrow-btn" aria-label="Learn about Die Cutting">
                <ArrowUpRight size={22} />
              </Link>
            </div>

            {/* Item 04 */}
            <div className="cutting-list-item fade-up delay-300">
              <span className="cutting-item-num">04</span>
              <div className="cutting-item-img-wrapper">
                <img src="/solutions-1.webp" alt="Tape Slitting" className="cutting-item-img" />
              </div>
              <div className="cutting-item-info">
                <h3>Tape Slitting</h3>
                <p>
                  High-precision roll slitting equipment for specialized adhesive film width customization. Optimized process ensures minimal waste and exact edge tolerances for seamless bonding.
                </p>
                <div className="cutting-item-specs">
                  <span>⚡ Custom Rolls</span>
                  <span>🎯 Zero Waste</span>
                  <span>✂️ Adhesive Film Tapes</span>
                </div>
              </div>
              <Link to="/solutions" className="cutting-item-arrow-btn" aria-label="Learn about Tape Slitting">
                <ArrowUpRight size={22} />
              </Link>
            </div>

          </div>

          {/* Bottom Pill Outline Button */}
          <div className="cutting-bottom-btn-wrapper fade-up text-center">
            <Link to="/solutions" className="cutting-outline-pill-btn">
              <span>Explore More Solutions</span>
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Latest Industry Reports Section (Redesigned matching reference UI) */}
      <section className="reports-section">
        <div className="container">
          
          {/* Header */}
          <div className="reports-header fade-up text-center">
            <h2>Latest Industry Reports</h2>
            <p>Data and analysis on where technical apparel manufacturing & bonding innovation is heading</p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="reports-pills-wrapper fade-up text-center">
            <div className="reports-pills-container">
              {reportCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`reports-pill-btn ${activeReportCat === cat ? 'active' : ''}`}
                  onClick={() => setActiveReportCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Reports Grid */}
          <div className="reports-grid fade-up">
            
            {/* Left Big Featured Card */}
            <div className="reports-featured-card">
              <img src={featuredReport.image} alt={featuredReport.title} className="reports-featured-img" />
              <div className="reports-featured-overlay"></div>
              <div className="reports-featured-content">
                <span className="reports-featured-badge">{featuredReport.badge}</span>
                <h3>{featuredReport.title}</h3>
                <p>{featuredReport.desc}</p>
                <Link to="/solutions" className="reports-read-more-btn">
                  Read more
                </Link>
              </div>
            </div>

            {/* Right Stacked Horizontal Article Cards */}
            <div className="reports-side-list">
              {sideReports.map((report, idx) => (
                <React.Fragment key={report.id}>
                  {idx > 0 && <div className="reports-item-divider"></div>}
                  <Link to="/solutions" className="reports-side-item">
                    <div className="reports-side-img-wrapper">
                      <img src={report.image} alt={report.title} className="reports-side-img" />
                    </div>
                    <div className="reports-side-info">
                      <span className="reports-side-badge">{report.badge}</span>
                      <h4>{report.title}</h4>
                      <div className="reports-side-meta">
                        <span>{report.author}</span> • <span>{report.date}</span> — <span>{report.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </React.Fragment>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 5. Footer CTA Banner (Reference Card Design) */}
      <section className="home-banner-cta-section">
        <div className="container">
          <div className="home-cta-card fade-up">
            <div className="cta-card-overlay"></div>
            <div className="cta-card-inner">
              <h2 className="cta-card-title">
                Discover Our Manufacturing<br />
                Excellence Today
              </h2>
              <div className="cta-card-bottom">
                <Link to="/contact" className="cta-pill-btn">
                  <span className="cta-pill-text">Explore Facilities</span>
                  <span className="cta-pill-circle">
                    <ArrowUpRight size={20} />
                  </span>
                </Link>
                <p className="cta-card-desc">
                  Learn more about our state-of-the-art infrastructure, advanced bonding machinery, and rigorous quality control processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Capabilities;
