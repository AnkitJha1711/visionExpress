// Home.jsx
import React, { useState } from 'react';
import { Menu, X, Truck, Users, Shield, Clock, ArrowRight, Star, CheckCircle } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const features = [
    {
      icon: <Truck className="feature-icon" />,
      title: "Pan-India Network",
      description: "Deliver to 19,000+ pin codes across all states and territories"
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Real-time Tracking",
      description: "Monitor every shipment with GPS tracking and instant updates"
    },
    {
      icon: <Shield className="feature-icon" />,
      title: "Secure & Insured",
      description: "Full insurance coverage with end-to-end security protocols"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Dedicated Support",
      description: "24/7 customer support in Hindi, English, and regional languages"
    }
  ];

  const stats = [
    { number: "1M+", label: "Deliveries Completed" },
    { number: "5000+", label: "Business Partners" },
    { number: "19K+", label: "Pin Codes Covered" },
    { number: "99.2%", label: "On-time Delivery" }
  ];

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon">
                <Truck className="logo-truck" />
              </div>
              <span className="logo-text">DeliveryPro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <a href="#about" className="nav-link">About</a>
              <a href="#help" className="nav-link">Help</a>
              <a href="#contact" className="nav-link">Contact Us</a>
              <a href="#signin" className="nav-signin">Sign In</a>
              <a href="#signup" className="nav-signup">Sign Up</a>
            </div>

            {/* Mobile menu button */}
            <div className="nav-mobile-btn">
              <button onClick={toggleMenu} className="menu-toggle">
                {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="nav-mobile">
              <div className="nav-mobile-links">
                <a href="#about" className="nav-mobile-link">About</a>
                <a href="#help" className="nav-mobile-link">Help</a>
                <a href="#contact" className="nav-mobile-link">Contact Us</a>
                <a href="#signin" className="nav-mobile-signin">Sign In</a>
                <a href="#signup" className="nav-mobile-signup">Sign Up</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Scale Your
                  <span className="hero-highlight">B2B Deliveries</span>
                  Across India
                </h1>
                <p className="hero-subtitle">
                  Streamline your business deliveries with our AI-powered logistics platform. 
                  Connect suppliers, manage inventory, and deliver faster than ever before.
                </p>
              </div>
              
              <div className="hero-buttons">
                <button className="btn-primary">
                  Start Free Trial
                  <ArrowRight className="btn-arrow" />
                </button>
                <button className="btn-secondary">Watch Demo</button>
              </div>

              <div className="hero-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="star" />
                  ))}
                </div>
                <span className="rating-text">Trusted by 1000+ businesses</span>
              </div>
            </div>

            <div className="hero-dashboard">
              <div className="dashboard-card">
                <div className="dashboard-content">
                  <div className="dashboard-header">
                    <h3 className="dashboard-title">Live Dashboard</h3>
                    <div className="status-indicator"></div>
                  </div>
                  <div className="dashboard-stats">
                    <div className="stat-item stat-green">
                      <div className="stat-text">✓ 247 deliveries completed today</div>
                    </div>
                    <div className="stat-item stat-blue">
                      <div className="stat-text">📦 85 packages in transit</div>
                    </div>
                    <div className="stat-item stat-yellow">
                      <div className="stat-text">⏱ Average delivery: 2.3 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Choose DeliveryPro?</h2>
            <p className="features-subtitle">
              Built specifically for Indian B2B markets with advanced technology and local expertise
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Transform Your Delivery Operations?</h2>
          <p className="cta-subtitle">
            Join thousands of businesses already scaling their operations with DeliveryPro. 
            Start your free trial today.
          </p>
          
          <div className="cta-buttons">
            <button className="btn-primary">
              Get Started Free
              <ArrowRight className="btn-arrow" />
            </button>
            <button className="btn-secondary">Schedule Demo</button>
          </div>

          <div className="cta-features">
            <CheckCircle className="check-icon" />
            <span>No setup fees</span>
            <CheckCircle className="check-icon" />
            <span>Cancel anytime</span>
            <CheckCircle className="check-icon" />
            <span>24/7 support</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <Truck className="footer-truck" />
                </div>
                <span className="footer-logo-text">DeliveryPro</span>
              </div>
              <p className="footer-description">
                India's leading B2B delivery platform connecting businesses across the nation.
              </p>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">About Us</a>
                <a href="#" className="footer-link">Careers</a>
                <a href="#" className="footer-link">Press</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Support</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Help Center</a>
                <a href="#" className="footer-link">Contact Us</a>
                <a href="#" className="footer-link">API Docs</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-heading">Legal</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Cookie Policy</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 DeliveryPro. All rights reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;