import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Solutions.css';

const services = [
  {
    title: "Product Design",
    description: "Ermine provides product design services from concept design to technical design for bonded apparel products. Our customers can introduce novel designs into the market with great attraction while optimizing costs by designing their products through our product design services.",
    image: "/solutions-1.webp"
  },
  {
    title: "Product Validation",
    description: "Methodical and scientific validation of bonded apparel products for their desired attributes such as comfort, quality, durability, as well as applications such as bending, washing, and pressing is carried out under the product validation services. Our customers will get a detailed datasheet for the above along with an analysis and conclusions.",
    image: "/solutions-2.webp"
  },
  {
    title: "Product Innovations",
    description: "We provide product innovation services to our customers to enable them to release new apparel products to the market as well as to release product upgrades (releasing a new version of an existing product) by adapting new innovations to the products through bonded technologies.",
    image: "/solutions-3.webp"
  },
  {
    title: "Tools and Machine Design",
    description: "Most of our machinery for bonded apparel manufacturing is developed in-house by our RnD team. So we can customize tools and machinery required for new manufacturing requirements by our customers in order to introduce novel apparel products to the market with a competitive advantage.",
    image: "/solutions-1.webp"
  },
  {
    title: "Process Innovations",
    description: "Our agile manufacturing process enables us to introduce innovations and customizations in the manufacturing of bonded apparel products. This allows our customers to adapt to market-winning new approaches to achieve much needed speed and agility in today's world.",
    image: "/solutions-2.webp"
  },
  {
    title: "Contract Manufacturing",
    description: "Ermine provides contract manufacturing services for global apparel companies and new apparel startups for items that utilize bonded apparel production technologies. We provide exceptional quality, speed, and cost benefits to our customers through our efficient and effective contract manufacturing services.",
    image: "/solutions-3.webp"
  },
  {
    title: "Material Selection and Sourcing",
    description: "Ermine can carry out material selection and sourcing for the products we produce, especially in contract manufacturing and component manufacturing. This way, our customers can completely eliminate the burden of the complex and tedious process of material selection and sourcing while achieving their quality objectives in the end product in a transparent manner.",
    image: "/solutions-1.webp"
  },
  {
    title: "Component Manufacturing",
    description: "Ermine can design, develop, and manufacture bonded product components used in regular or hybrid apparel products. This service is especially valuable for large-scale contract manufacturers in the apparel industry, where they can outsource bonded apparel component manufacturing to Ermine.",
    image: "/solutions-2.webp"
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

    const elements = document.querySelectorAll('.fade-up, .slide-in-right, .slide-in-left');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="solutions-wrapper">
      {/* Cinematic Hero */}
      <section className="solutions-hero">
        <div className="solutions-hero-bg"></div>
        <div className="solutions-hero-overlay"></div>
        
        <div className="container solutions-hero-content">
          <h1 className="solutions-title fade-up">Our Solutions</h1>
          <div className="solutions-summary glass-card fade-up delay-200">
            <p>
              Ermine provides one-stop solutions in the bonded apparel space by customizing our base products, components, and services to our valued customers. Global apparel brands and apparel startups can vastly benefit from our tailor-made solutions by reducing the innovation cycle and cost. Apparel brands can get their new product concepts into the market in record time with Ermine’s services.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Immersive Services Section */}
      <section className="premium-services-section">
        <div className="container">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`premium-service-row ${isEven ? 'row-left' : 'row-right'}`}>
                
                {/* Background Number */}
                <div className="premium-service-number fade-up">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Massive Image */}
                <div className={`premium-image-col ${isEven ? 'slide-in-left' : 'slide-in-right'}`}>
                  <div className="premium-image" style={{ backgroundImage: `url(${service.image})` }}></div>
                </div>

                {/* Overlapping Glass Text Box */}
                <div className={`premium-text-col delay-200 ${isEven ? 'slide-in-right' : 'slide-in-left'}`}>
                  <div className="glass-text-box">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Modern CTA */}
      <section className="solutions-cta fade-up">
        <div className="container text-center">
          <h2>Ready to revolutionize your apparel?</h2>
          <p>Let's discuss how our custom bonded solutions can accelerate your product lifecycle.</p>
          <div className="hero-cta-group justify-center" style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn-modern btn-primary-modern">
              Contact Sales <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
