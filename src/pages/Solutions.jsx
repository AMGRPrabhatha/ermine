import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Solutions.css';
import solutionsHero from '../assets/images/solution.jpg';

const services = [
  {
    title: "Product Design",
    description: "Ermine provides product design services from concept design to technical design for bonded apparel products. Our customers can introduce novel designs into the market with great attraction while optimizing costs.",
    image: "/solutions/product-design.jpg",
    features: ["Concept Development", "Technical Specification", "Cost Optimization"]
  },
  {
    title: "Product Validation",
    description: "Methodical and scientific validation of bonded apparel products for comfort, quality, and durability. We provide detailed datasheets with analysis and conclusions for washing and pressing applications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    features: ["Quality Testing", "Durability Analysis", "Scientific Validation"]
  },
  {
    title: "Product Innovations",
    description: "Enable your brand to release new apparel products or upgrades by adapting new innovations through our specialized bonded technologies and R&D expertise.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
    features: ["New Feature Integration", "Version Upgrades", "Tech Adaptation"]
  },
  {
    title: "Tools and Machine Design",
    description: "Most of our machinery is developed in-house. We can customize tools and machinery required for new manufacturing requirements to give you a competitive advantage.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    features: ["Custom Tooling", "In-house R&D", "Machine Engineering"]
  },
  {
    title: "Process Innovations",
    description: "Our agile manufacturing process enables us to introduce innovations and customizations. Adapt to market-winning new approaches with speed and agility.",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1000&q=80",
    features: ["Agile Manufacturing", "Speed to Market", "Process Customization"]
  },
  {
    title: "Contract Manufacturing",
    description: "We provide contract manufacturing for global companies and startups utilizing bonded production technologies. We offer exceptional quality and cost benefits.",
    image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=1000&q=80",
    features: ["Global Scaling", "Startup Support", "Volume Production"]
  },
  {
    title: "Material Selection and Sourcing",
    description: "Completely eliminate the burden of material sourcing. We handle the complex process transparently while achieving your end-product quality objectives.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1000&q=80",
    features: ["Global Sourcing", "Quality Assurance", "Supply Chain Management"]
  },
  {
    title: "Component Manufacturing",
    description: "Design, develop, and manufacture bonded components for hybrid apparel products. Ideal for large-scale manufacturers looking to outsource specialized parts.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80",
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
        <div className="sol-hero-bg" style={{ backgroundImage: `url(${solutionsHero})` }}></div>
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

      {/* 2. Solutions Resources Grid (Redesigned matching reference) */}
      <section className="sol-resources-section">
        <div className="container">
          
          {/* Header */}
          <div className="sol-resources-header fade-up text-center">
            <span className="sol-resources-eyebrow">Our Solutions</span>
            <h2>Browse Our Solutions</h2>
            <p>We provide specialized bonded apparel technologies and engineering services from industry leaders.</p>
          </div>

          {/* Featured Card (Card 0) */}
          <div className="sol-featured-card fade-up">
            <div className="sol-featured-img">
              <img src={services[0].image} alt={services[0].title} />
            </div>
            <div className="sol-featured-body">
              <span className="sol-category-badge">Featured Solution</span>
              <h3>{services[0].title}</h3>
              <p>{services[0].description}</p>
              <div className="sol-featured-footer">
                <div className="sol-feature-tags">
                  {services[0].features.map((feat, i) => (
                    <span key={i} className="sol-feature-tag">• {feat}</span>
                  ))}
                </div>
                <div className="sol-action-arrow">↗</div>
              </div>
            </div>
          </div>

          {/* 2-Column Grid for Remaining Cards */}
          <div className="sol-cards-grid">
            {services.slice(1).map((service, index) => (
              <div 
                key={index + 1} 
                className={`sol-grid-card fade-up delay-${(index % 2) * 100}`}
              >
                <div className="sol-grid-img">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="sol-grid-body">
                  <span className="sol-category-badge">{service.title.split(' ')[0]}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="sol-grid-footer">
                    <div className="sol-feature-tags">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <span key={i} className="sol-feature-tag">• {feat}</span>
                      ))}
                    </div>
                    <div className="sol-action-arrow">↗</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Immersive Process Workflow */}
      <section className="sol-workflow-section">
        <div className="container">

          {/* Large editorial headline */}
          <div className="workflow-headline fade-up">
            <p>
              Discover the precision of our process
              <br />
              <span className="workflow-headline-light">and the impact of bonding innovation</span>
              <br />
              <span className="workflow-headline-light">on every garment we craft</span>
            </p>
          </div>

          {/* Process rows list */}
          <div className="workflow-rows">

            <div className="workflow-row fade-up">
              <div className="workflow-row-img">
                <img src="/solutions-2.webp" alt="Consult & Co-Design" />
              </div>
              <div className="workflow-row-body">
                <h3>Consult & Co-Design</h3>
                <p>We work directly with your design teams to map custom aesthetic concepts into exact digital engineering blueprints.</p>
              </div>
              <div className="workflow-row-meta">
                <span className="workflow-meta-label">Key Deliverable:</span>
                <a className="workflow-meta-link">→ Design Blueprints</a>
                <a className="workflow-meta-link">→ Adhesive Selection</a>
              </div>
            </div>

            <div className="workflow-row fade-up delay-100">
              <div className="workflow-row-img">
                <img src="/solutions-1.webp" alt="Material & Validation" />
              </div>
              <div className="workflow-row-body">
                <h3>Material & Validation</h3>
                <p>We conduct rigorous mechanical testing of fabric samples to guarantee bond durability through 50+ wash cycles.</p>
              </div>
              <div className="workflow-row-meta">
                <span className="workflow-meta-label">Key Deliverable:</span>
                <a className="workflow-meta-link">→ Wash-Test Reports</a>
                <a className="workflow-meta-link">→ Material Approval</a>
              </div>
            </div>

            <div className="workflow-row fade-up delay-200">
              <div className="workflow-row-img">
                <img src="/product-1.webp" alt="Precision Bonding" />
              </div>
              <div className="workflow-row-body">
                <h3>Precision Bonding</h3>
                <p>We engineer custom machinery tools and run high-frequency laser & ultrasonic garment processing.</p>
              </div>
              <div className="workflow-row-meta">
                <span className="workflow-meta-label">Key Deliverable:</span>
                <a className="workflow-meta-link">→ Stitchless Samples</a>
                <a className="workflow-meta-link">→ QA Certification</a>
              </div>
            </div>

            <div className="workflow-row fade-up delay-300">
              <div className="workflow-row-img">
                <img src="/solutions-hero.webp" alt="Industrial Scaling" />
              </div>
              <div className="workflow-row-body">
                <h3>Industrial Scaling</h3>
                <p>Our agile manufacturing lines seamlessly scale volume production with zero compromise on luxury quality.</p>
              </div>
              <div className="workflow-row-meta">
                <span className="workflow-meta-label">Key Deliverable:</span>
                <a className="workflow-meta-link">→ Bulk Production</a>
                <a className="workflow-meta-link">→ Global Dispatch</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
