import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Search, Plus, Minus, ArrowRight } from 'lucide-react';
import './Contact.css';
import contactHero from '../assets/images/capabilities-hero.jpg';

const faqData = [
  { question: "What is your minimum order quantity (MOQ)?", answer: "Our standard MOQ is 500 units per style and color. For specialized bonded garments, the MOQ might vary based on material availability." },
  { question: "What is your typical production lead time?", answer: "Our standard lead time is 60-90 days after sample approval, depending on the complexity of the bonded apparel and material sourcing." },
  { question: "Do you provide prototyping and sampling services?", answer: "Yes, we have a dedicated R&D facility for prototyping and sampling. We work closely with your design team to perfect the stitchless construction." },
  { question: "What materials can be bonded?", answer: "We can bond a wide variety of synthetic and natural performance fabrics, including nylon, polyester blends, and elastane. We test every fabric to ensure optimal adhesion." },
  { question: "Do you handle international shipping and logistics?", answer: "Yes, we provide turnkey solutions including packaging and global logistics. We partner with reliable freight forwarders to deliver your garments safely." },
  { question: "Can you accommodate custom machinery for unique designs?", answer: "Absolutely. We engineer custom machinery and attachments to fulfill highly specific and complex bonding requirements for our clients." },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

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

    const elements = document.querySelectorAll('.fade-up, .slide-in-right, .slide-in-left');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const filteredFaqs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="contact-wrapper">
      {/* 1. Immersive Hero Section with Background Photo */}
      <section className="contact-hero">
        <div className="contact-hero-bg" style={{ backgroundImage: `url(${contactHero})` }}></div>
        <div className="contact-hero-overlay"></div>
        
        <div className="container contact-hero-centered">
          <div className="contact-hero-content fade-up text-center">
            <h1>Contact Us</h1>
            <p className="mx-auto">
              Discover how Ermine's innovative bonded apparel solutions can accelerate your brand. Connect with our engineering team today.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Get In Touch – Redesigned Form matching reference UI */}
      <section className="get-in-touch-section">
        <div className="container">
          
          {/* Header */}
          <div className="get-in-touch-header fade-up text-center">
            <h2>Get In Touch</h2>
            <p>
              We'd love to hear from you. Reach out to discuss custom apparel bonding solutions, technical inquiries, or manufacturing partnerships.
            </p>
          </div>

          {/* Form Container Card */}
          <div className="contact-main-card fade-up">
            
            {/* Left Teal Info Box */}
            <div className="contact-info-teal-box">
              <div className="teal-box-top">
                <h3>Contact Information</h3>
                <p>We'll respond to your inquiry within 24 hours with expert technical guidance.</p>
              </div>

              <div className="teal-info-list">
                <div className="teal-info-item">
                  <div className="teal-icon-circle">
                    <Phone size={18} />
                  </div>
                  <div className="teal-info-text">
                    <span>+94 34 227 7777</span>
                    <span>+94 77 123 4567</span>
                  </div>
                </div>

                <div className="teal-info-item">
                  <div className="teal-icon-circle">
                    <Mail size={18} />
                  </div>
                  <div className="teal-info-text">
                    <span>sales@ermine.com</span>
                  </div>
                </div>

                <div className="teal-info-item">
                  <div className="teal-icon-circle">
                    <MapPin size={18} />
                  </div>
                  <div className="teal-info-text">
                    <span>No 4, Ridee Mawatha, Kalamulla, Kalutara, Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Decorative Translucent Circle */}
              <div className="teal-decorative-circle"></div>
            </div>

            {/* Right Form Fields */}
            <form className="contact-form-fields" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row-2col">
                <div className="form-field-group">
                  <label>Your Name</label>
                  <input type="text" placeholder="John Trangely" className="underline-input" required />
                </div>
                <div className="form-field-group">
                  <label>Your Email</label>
                  <input type="email" placeholder="hello@nurency.com" className="underline-input" required />
                </div>
              </div>

              <div className="form-field-group">
                <label>Your Subject</label>
                <input type="text" placeholder="I want to hire you quickly" className="underline-input" required />
              </div>

              <div className="form-field-group">
                <label className="active-label">Message</label>
                <textarea rows={3} placeholder="Write here your message..." className="underline-input underline-textarea" required></textarea>
              </div>

              <div className="form-submit-wrapper">
                <button type="submit" className="teal-send-btn">
                  Send Message
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>

      {/* 3. FAQ Section (Naturely Style Layout) */}
      <section className="faq-section">
        <div className="container">
          
          {/* Eyebrow */}
          <div className="faq-naturely-eyebrow fade-up">
            <span className="faq-line"></span>
            <span>FAQ</span>
          </div>

          {/* Header Split */}
          <div className="faq-naturely-header fade-up">
            <h2 className="faq-naturely-title">
              Answers to Your <span className="title-grey">Ermine</span><br />
              <span className="title-grey">Manufacturing Questions</span>
            </h2>
            <p className="faq-naturely-subtitle">
              Find comprehensive answers to all your Ermine apparel bonding questions right here. Whether you need details on MOQs, lead times, or prototyping, we've got the information to ensure a smooth manufacturing partnership.
            </p>
          </div>

          {/* Stacked Cards Accordion List */}
          <div className="faq-naturely-list fade-up delay-100">
            {filteredFaqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-naturely-card ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="faq-naturely-card-header">
                  <h4>{faq.question}</h4>
                  <span className="faq-naturely-icon">
                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-naturely-card-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
