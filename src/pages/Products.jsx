import React, { useEffect } from 'react';
import './Products.css';

const products = [
  {
    title: "Period Panty",
    description: "Period panty technology is a bonded apparel innovation developed by Ermine, where end users will have great comfort with highly tested leak proofing and proven high absorbency.",
    image: "/product-1.png"
  },
  {
    title: "Bonded Bras",
    description: "Bonded bras are another product range which we can manufacture using bonded apparel technologies with a great level of customization. These high-end bras are highly comfortable and attractive.",
    image: "/product-2.png"
  },
  {
    title: "Raw Cut Panty",
    description: "Raw-cut panty is another bonded apparel technology product line that provides excellent comfort to end users. The seamless and stitchless nature of these improves the aesthetics as well.",
    image: "/product-3.png"
  },
  {
    title: "Bonded Leggings",
    description: "Bonded leggings are highly attractive, stylish bonded apparel products with excellent compression, elasticity, and comfort.",
    image: "/product-2.png"
  },
  {
    title: "One Size for All",
    description: "\"One size fits all panties\" are highly flexible through bonded apparel technologies. These are highly comfortable and best suited for online distribution strategies.",
    image: "/product-3.png"
  },
  {
    title: "Sports Bra",
    description: "Bonded sports bras are highly stylish with a greater level of comfort and support. The lightweightness of these gives the wearer the ultimate freedom of carrying out sports without disturbance and aerodynamic drag.",
    image: "/product-1.png"
  },
  {
    title: "Molding",
    description: "Molding is mainly used in intimate bras, sports bras, and bonded molded bras. Molding creates properties like anti-bouncing, compression, comfort, and shaping in these end products.",
    image: "/product-3.png"
  },
  {
    title: "Compression Panels",
    description: "Compression panels are used for muscle compression and shape enhancement for sportswear. This improves muscle performance during sports and improves muscle recovery after workouts. This creates an anti-bouncing effect during the workouts as well.",
    image: "/product-1.png"
  },
  {
    title: "Lamination",
    description: "Lamination is used in intimate bras and sports bras, which results in higher modulus, directional perspiration flow, and compression. Lamination will also result in waterproofing as well, mostly applicable in swimwear.",
    image: "/product-2.png"
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
        <div className="products-hero-bg" style={{ backgroundImage: 'url(/products-hero.png)' }}></div>
        <div className="products-hero-overlay"></div>
        <div className="container products-hero-content">
          <h1 className="fade-up">Our Products</h1>
          <p className="fade-up delay-100">
            Ermine offers a range of high-quality finished and intermediary products in the bonded apparel space at very competitive and attractive prices for our customers. Our innovative products have a proven track record in improving the end user's comfort while reducing the cost base.
          </p>
        </div>
      </section>

      {/* Premium Bento Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="product-card fade-up"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="product-image-container">
                  <div 
                    className="product-image" 
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
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
