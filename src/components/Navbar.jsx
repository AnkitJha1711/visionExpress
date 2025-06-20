import React from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo and Company Name (Left) */}
        <div className="navbar-brand">
            <div className="logo">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#4F46E5"/>
                <path d="M8 12h16v2H8v-2zm0 4h12v2H8v-2zm0 4h8v2H8v-2z" fill="white"/>
                <circle cx="22" cy="20" r="3" fill="white"/>
            </svg>
            </div>
            <span className="company-name">LogiXjunction</span>
        </div>

        {/* Right Section: Links + Auth */}
        <div className="navbar-right">
            <div className="navbar-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#help" className="nav-link">Help</a>
            <a href="#contact" className="nav-link">Contact Us</a>
            </div>

            <div className="navbar-auth">
            <button className="sign-in-btn">Sign In</button>
            <button className="sign-up-btn">Sign Up</button>
            </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;