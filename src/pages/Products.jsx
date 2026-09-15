import React, { useEffect } from 'react';
import './Products.css';
import productsHero from '../assets/images/products.jpg';

const products = [
  {
    title: "Period Panty",
    description: "Period panty technology is a bonded apparel innovation developed by Ermine, where end users will have great comfort with highly tested leak proofing and proven high absorbency.",
    image: "/products/period-panty.jpg"
  },
  {
    title: "Bonded Bras",
    description: "Bonded bras are another product range which we can manufacture using bonded apparel technologies with a great level of customization. These high-end bras are highly comfortable and attractive.",
    image: "/products/bonded-bras.jpg"
  },
  {
    title: "Raw Cut Panty",
    description: "Raw-cut panty is another bonded apparel technology product line that provides excellent comfort to end users. The seamless and stitchless nature of these improves the aesthetics as well.",
    image: "/products/raw-cut-panty.jpg"
  },
  {
    title: "Bonded Leggings",
    description: "Bonded leggings are highly attractive, stylish bonded apparel products with excellent compression, elasticity, and comfort.",
    image: "/products/bonded-leggings.jpg"
  },
  {
    title: "One Size for All",
    description: "\"One size fits all panties\" are highly flexible through bonded apparel technologies. These are highly comfortable and best suited for online distribution strategies.",
    image: "/products/onesize-panty.jpg"
  },
  {
    title: "Sports Bra",
    description: "Bonded sports bras are highly stylish with a greater level of comfort and support. The lightweightness of these gives the wearer the ultimate freedom of carrying out sports without disturbance and aerodynamic drag.",
    image: "/products/sports-bra.jpg"
  },
  {
    title: "Molding",
    description: "Molding is mainly used in intimate bras, sports bras, and bonded molded bras. Molding creates properties like anti-bouncing, compression, comfort, and shaping in these end products.",
    image: "/products/molding-tech.jpg"
  },
  {
    title: "Compression Panels",
    description: "Compression panels are used for muscle compression and shape enhancement for sportswear. This improves muscle performance during sports and improves muscle recovery after workouts. This creates an anti-bouncing effect during the workouts as well.",
    image: "/products/compression-panel.jpg"
  },
  {
    title: "Lamination",
    description: "Lamination is used in intimate bras and sports bras, which results in higher modulus, directional perspiration flow, and compression. Lamination will also result in waterproofing as well, mostly applicable in swimwear.",
    image: "/products/lamination-tech.jpg"
  }
];

const Products = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="products-page">
      {/* Cinematic Hero */}
      <section className="products-hero">
        <div className="products-hero-bg" style={{ backgroundImage: `url(${productsHero})` }}></div>
        <div className="products-hero-overlay"></div>
        <div className="container products-hero-content">
          <h1 className="fade-up">Our Products</h1>
          <p className="fade-up delay-100">
            Ermine offers a range of high-quality finished and intermediary products in the bonded apparel space at very competitive prices. Our innovative products have a proven track record in improving comfort while reducing costs.
          </p>
        </div>
      </section>

      {/* 2. Products Resources Grid (Dribbble/Naturely Layout) */}
      <section className="prod-resources-section">
        <div className="container">
          
          {/* Header */}
          <div className="prod-resources-header fade-up text-center">
            <span className="prod-resources-eyebrow">Our Production</span>
            <h2>Browse Our Products</h2>
            <p>Ermine offers a range of high-quality finished and intermediary products in the bonded apparel space engineered for maximum comfort and cost efficiency.</p>
          </div>

          {/* Featured Product Card */}
          <div className="prod-featured-card fade-up">
            <div className="prod-featured-img">
              <img src={products[0].image} alt={products[0].title} />
            </div>
            <div className="prod-featured-body">
              <span className="prod-category-badge">Featured Product</span>
              <h3>{products[0].title}</h3>
              <p>{products[0].description}</p>
              <div className="prod-featured-footer">
                <div className="prod-feature-tags">
                  <span className="prod-feature-tag">• Leak Proofing</span>
                  <span className="prod-feature-tag">• High Absorbency</span>
                  <span className="prod-feature-tag">• Seamless Comfort</span>
                </div>
                <div className="prod-action-arrow">↗</div>
              </div>
            </div>
          </div>

          {/* 2-Column Grid for Remaining Products */}
          <div className="prod-cards-grid">
            {products.slice(1).map((product, index) => (
              <div 
                key={index + 1} 
                className={`prod-grid-card fade-up delay-${(index % 2) * 100}`}
              >
                <div className="prod-grid-img">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="prod-grid-body">
                  <span className="prod-category-badge">Bonded Apparel</span>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <div className="prod-grid-footer">
                    <div className="prod-feature-tags">
                      <span className="prod-feature-tag">• High Comfort</span>
                      <span className="prod-feature-tag">• Precision Bonding</span>
                    </div>
                    <div className="prod-action-arrow">↗</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Products;
