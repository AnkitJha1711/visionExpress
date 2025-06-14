import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="nav-button profile-btn">👤</button>
      <div className="navbar-title">VyaparGati</div>
      <div className="nav-right">
        <button className="nav-button">Home</button>
        <button className="nav-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
