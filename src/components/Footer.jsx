import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/FooterStyle.css';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <footer ref={ref} className="footer">
      <motion.div
        className="footer-content-wrapper"
        variants={footerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="footer-content">
          {/* Sections */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Track Shipment</li>
              <li>Request a Quote</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#">🌐</a>
              <a href="#">📞</a>
              <a href="#">📱</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} Your Logistics Co. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
