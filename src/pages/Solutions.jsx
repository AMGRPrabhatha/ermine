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
      {/* 1. Refined Hero */}
      <section className="sol-hero">
        <div className="container">
          <div className="sol-hero-content fade-up">
            <h1 className="sol-title">Our Solutions</h1>
            <p className="sol-subtitle">
              Ermine provides one-stop solutions in the bonded apparel space by customizing our base products, 
              components, and services to our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Solutions Grid - Performance Optimized */}
      <section className="sol-grid-section">
        <div className="container">
          <div className="sol-grid">
            {services.map((service, index) => (
              <div key={index} className="sol-card fade-up">
                <div className="sol-card-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="sol-card-overlay"></div>
                </div>
                <div className="sol-card-body">
                  <div className="sol-card-header">
                    <span className="sol-number">{(index + 1).toString().padStart(2, '0')}</span>
                    <h2>{service.title}</h2>
                  </div>
                  <p>{service.description}</p>
                  <ul className="sol-features">
                    {service.features.map((feat, i) => (
                      <li key={i}><CheckCircle2 size={14} className="icon-red" /> {feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Streamlined CTA */}
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
