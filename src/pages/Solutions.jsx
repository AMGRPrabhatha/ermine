import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const services = [
  {
    title: "Product Design",
    description: "Ermine provides product design services from concept design to technical design for bonded apparel products. Our customers can introduce novel designs into the market with great attraction while optimizing costs.",
    image: "/solutions-1.webp",
    features: ["Concept Development", "Technical Specification", "Cost Optimization"]
  },
  {
    title: "Product Validation",
    description: "Methodical and scientific validation of bonded apparel products for comfort, quality, and durability. We provide detailed datasheets with analysis and conclusions for washing and pressing applications.",
    image: "/solutions-2.webp",
    features: ["Quality Testing", "Durability Analysis", "Scientific Validation"]
  },
  {
    title: "Product Innovations",
    description: "Enable your brand to release new apparel products or upgrades by adapting new innovations through our specialized bonded technologies and R&D expertise.",
    image: "/solutions-3.webp",
    features: ["New Feature Integration", "Version Upgrades", "Tech Adaptation"]
  },
  {
    title: "Tools and Machine Design",
    description: "Most of our machinery is developed in-house. We can customize tools and machinery required for new manufacturing requirements to give you a competitive advantage.",
    image: "/solutions-1.webp",
    features: ["Custom Tooling", "In-house R&D", "Machine Engineering"]
  },
  {
    title: "Process Innovations",
    description: "Our agile manufacturing process enables us to introduce innovations and customizations. Adapt to market-winning new approaches with speed and agility.",
    image: "/solutions-2.webp",
    features: ["Agile Manufacturing", "Speed to Market", "Process Customization"]
  },
  {
    title: "Contract Manufacturing",
    description: "We provide contract manufacturing for global companies and startups utilizing bonded production technologies. We offer exceptional quality and cost benefits.",
    image: "/solutions-3.webp",
    features: ["Global Scaling", "Startup Support", "Volume Production"]
  },
  {
    title: "Material Selection and Sourcing",
    description: "Completely eliminate the burden of material sourcing. We handle the complex process transparently while achieving your end-product quality objectives.",
    image: "/solutions-1.webp",
    features: ["Global Sourcing", "Quality Assurance", "Supply Chain Management"]
  },
  {
    title: "Component Manufacturing",
    description: "Design, develop, and manufacture bonded components for hybrid apparel products. Ideal for large-scale manufacturers looking to outsource specialized parts.",
    image: "/solutions-2.webp",
    features: ["Hybrid Integration", "Specialized Components", "Outsourcing Partner"]
  }
];

const Solutions = () => {
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
    <div className="solutions-wrapper">
      {/* 1. Immersive Hero Section */}
      <section className="sol-hero">
        <div className="sol-hero-bg"></div>
        <div className="sol-hero-overlay"></div>
        
        <div className="container sol-hero-centered">
          <div className="sol-hero-content fade-up text-center">
            <h1 className="sol-title">
              Our Solutions
            </h1>
            <p className="sol-subtitle mx-auto">
              Ermine provides one-stop solutions in the bonded apparel space by customizing our base products, 
              components, and services to our valued customers.
            </p>
            <div className="hero-cta-group justify-center">
              <Link to="/contact" className="btn-modern btn-primary-modern">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <Link to="/capabilities" className="btn-modern btn-outline-modern">
                Our Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solutions Grid - Redesigned to small, elegant cards */}
      <section className="sol-grid-section">
        <div className="container">
          <div className="sol-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`sol-card fade-up delay-${(index % 3) * 100}`}
              >
                <div className="sol-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="sol-card-overlay"></div>
                  <span className="sol-number">{(index + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="sol-card-body">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="sol-features">
                    {service.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="icon-gold" /> 
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="sol-card-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Immersive Process Workflow (Relevant Section) */}
      <section className="sol-workflow-section">
        <div className="container">
          <div className="section-header text-center fade-up">
            <span className="section-tag">Co-Creation Workflow</span>
            <h2>Our Development Process</h2>
            <p className="section-subtitle-muted">From custom material validation to scaled contract bonding, we deliver precision at every phase.</p>
          </div>

          <div className="workflow-timeline">
            <div className="workflow-step fade-up">
              <div className="step-number-wrapper">
                <span className="step-number">01</span>
                <div className="step-line"></div>
              </div>
              <h3>Consult & Co-Design</h3>
              <p>We work directly with your design teams to map custom aesthetic concepts into exact digital engineering blueprints.</p>
            </div>

            <div className="workflow-step fade-up delay-100">
              <div className="step-number-wrapper">
                <span className="step-number">02</span>
                <div className="step-line"></div>
              </div>
              <h3>Material & Validation</h3>
              <p>We conduct rigorous mechanical testing of fabric samples to guarantee bond durability through 50+ wash cycles.</p>
            </div>

            <div className="workflow-step fade-up delay-200">
              <div className="step-number-wrapper">
                <span className="step-number">03</span>
                <div className="step-line"></div>
              </div>
              <h3>Precision Bonding</h3>
              <p>We engineer custom machinery tools and run high-frequency laser & ultrasonic garment processing.</p>
            </div>

            <div className="workflow-step fade-up delay-300">
              <div className="step-number-wrapper">
                <span className="step-number">04</span>
              </div>
              <h3>Industrial Scaling</h3>
              <p>Our agile manufacturing lines seamlessly scale volume production with zero compromise on luxury quality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Streamlined CTA */}
      <section className="sol-cta">
        <div className="container text-center fade-up">
          <h2>Ready to revolutionize your apparel?</h2>
          <p>Let's discuss how our custom bonded solutions can accelerate your product lifecycle.</p>
          <Link to="/contact" className="btn-sol-cta">
            Contact Sales Team <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
