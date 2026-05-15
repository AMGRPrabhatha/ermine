import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for your message! We will get back to you shortly.");
  };

  return (
    <div className="contact-wrapper">
      {/* Minimalist Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container contact-hero-content">
          <h1 className="contact-title fade-up">Get in Touch</h1>
          <p className="contact-subtitle fade-up delay-100">
            Discover how Ermine's innovative bonded apparel solutions can accelerate your brand. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Split Layout Content */}
      <section className="contact-content-section">
        <div className="container">
          <div className="contact-split-grid">
            
            {/* Left Column: Contact Info */}
            <div className="contact-info-col slide-in-left">
              <div className="info-card">
                <h2>Contact Information</h2>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
                
                <div className="info-list">
                  <div className="info-item">
                    <div className="info-icon"><Mail size={24} /></div>
                    <div className="info-text">
                      <h4>Email Us</h4>
                      <p>sales@ermine.com</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon"><Phone size={24} /></div>
                    <div className="info-text">
                      <h4>Call Us</h4>
                      <p>+94 11 234 5678</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon"><MapPin size={24} /></div>
                    <div className="info-text">
                      <h4>Headquarters</h4>
                      <p>123 Innovation Drive<br/>Colombo 00300, Sri Lanka</p>
                    </div>
                  </div>
                </div>

                <div className="info-map-placeholder">
                   <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp" alt="Ermine Office" />
                   <div className="map-overlay"></div>
                </div>
              </div>
            </div>

            {/* Right Column: Glassmorphic Form */}
            <div className="contact-form-col slide-in-right">
              <div className="glass-form-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" required placeholder="John" />
                    </div>
                    <div className="input-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">Work Email</label>
                    <input type="email" id="email" required placeholder="john@company.com" />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="company">Company (Optional)</label>
                    <input type="text" id="company" placeholder="Your Brand Name" />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required rows="5" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <button type="submit" className="btn-submit">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
