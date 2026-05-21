import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, Compass, ShieldCheck, Sparkles, Cpu, Sliders, Factory, Box, Layers, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const services = [
  {
    title: "Product Design",
    category: "design",
    categoryLabel: "Design & Components",
    description: "Ermine provides product design services from concept design to technical design for bonded apparel products. Our customers can introduce novel designs into the market with great attraction while optimizing costs.",
    image: "/solutions-1.webp",
    features: ["Concept Development", "Technical Specification", "Cost Optimization"],
    icon: Compass
  },
  {
    title: "Product Validation",
    category: "technology",
    categoryLabel: "Tech & Innovations",
    description: "Methodical and scientific validation of bonded apparel products for comfort, quality, and durability. We provide detailed datasheets with analysis and conclusions for washing and pressing applications.",
    image: "/solutions-2.webp",
    features: ["Quality Testing", "Durability Analysis", "Scientific Validation"],
    icon: ShieldCheck
  },
  {
    title: "Product Innovations",
    category: "technology",
    categoryLabel: "Tech & Innovations",
    description: "Enable your brand to release new apparel products or upgrades by adapting new innovations through our specialized bonded technologies and R&D expertise.",
    image: "/solutions-3.webp",
    features: ["New Feature Integration", "Version Upgrades", "Tech Adaptation"],
    icon: Sparkles
  },
  {
    title: "Tools and Machine Design",
    category: "technology",
    categoryLabel: "Tech & Innovations",
    description: "Most of our machinery is developed in-house. We can customize tools and machinery required for new manufacturing requirements to give you a competitive advantage.",
    image: "/solutions-1.webp",
    features: ["Custom Tooling", "In-house R&D", "Machine Engineering"],
    icon: Cpu
  },
  {
    title: "Process Innovations",
    category: "technology",
    categoryLabel: "Tech & Innovations",
    description: "Our agile manufacturing process enables us to introduce innovations and customizations. Adapt to market-winning new approaches with speed and agility.",
    image: "/solutions-2.webp",
    features: ["Agile Manufacturing", "Speed to Market", "Process Customization"],
    icon: Sliders
  },
  {
    title: "Contract Manufacturing",
    category: "operations",
    categoryLabel: "Scale & Sourcing",
    description: "We provide contract manufacturing for global companies and startups utilizing bonded production technologies. We offer exceptional quality and cost benefits.",
    image: "/solutions-3.webp",
    features: ["Global Scaling", "Startup Support", "Volume Production"],
    icon: Factory
  },
  {
    title: "Material Selection and Sourcing",
    category: "operations",
    categoryLabel: "Scale & Sourcing",
    description: "Completely eliminate the burden of material sourcing. We handle the complex process transparently while achieving your end-product quality objectives.",
    image: "/solutions-1.webp",
    features: ["Global Sourcing", "Quality Assurance", "Supply Chain Management"],
    icon: Box
  },
  {
    title: "Component Manufacturing",
    category: "design",
    categoryLabel: "Design & Components",
    description: "Design, develop, and manufacture bonded components for hybrid apparel products. Ideal for large-scale manufacturers looking to outsource specialized parts.",
    image: "/solutions-2.webp",
    features: ["Hybrid Integration", "Specialized Components", "Outsourcing Partner"],
    icon: Layers
  }
];

const categories = [
  { id: 'all', label: 'All Solutions' },
  { id: 'design', label: 'Design & Components' },
  { id: 'technology', label: 'Tech & Innovations' },
  { id: 'operations', label: 'Scale & Sourcing' }
];

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [activeCategory]); // Re-observe when filter updates list

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="solutions-wrapper">
      {/* 1. Immersive Hero Section */}
      <section className="sol-hero">
        <div className="sol-hero-bg"></div>
        <div className="sol-hero-overlay"></div>
        
        <div className="container sol-hero-centered">
          <div className="sol-hero-glass-card fade-up">
            <span className="sol-hero-tag">Tailored Excellence</span>
            <h1 className="sol-title">
              Our Bonded Solutions
            </h1>
            <p className="sol-subtitle mx-auto">
              Ermine provides end-to-end, high-performance solutions in the bonded apparel sector by customizing our base products, materials, components, and automated tooling systems.
            </p>
            <div className="hero-cta-group justify-center">
              <Link to="/contact" className="btn-modern btn-primary-modern">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <a href="#discover-solutions" className="btn-modern btn-outline-modern">
                Explore Services
              </a>
            </div>
            <div className="scroll-indicator">
              <span>Scroll to discover</span>
              <ChevronDown size={14} className="bounce-arrow" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filtering Tab Bar */}
      <section id="discover-solutions" className="sol-filter-section">
        <div className="container">
          <div className="filter-nav-bar fade-up">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 3. Solutions Grid - Performance Optimized & Asymmetric Layout */}
          <div className="sol-grid">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="sol-card fade-up">
                  <div className="sol-card-image">
                    <img src={service.image} alt={service.title} loading="lazy" />
                    <div className="sol-card-overlay"></div>
                    <span className="sol-card-category-badge">{service.categoryLabel}</span>
                  </div>
                  
                  <div className="sol-card-body">
                    <div className="sol-card-meta">
                      <div className="sol-icon-wrapper">
                        <IconComponent size={24} className="sol-icon-svg" />
                      </div>
                      <span className="sol-number">{(index + 1).toString().padStart(2, '0')}</span>
                    </div>

                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                    
                    <div className="sol-features-wrapper">
                      <h4>Core Competencies</h4>
                      <ul className="sol-features">
                        {service.features.map((feat, i) => (
                          <li key={i}>
                            <CheckCircle2 size={15} className="icon-gold" /> 
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
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
