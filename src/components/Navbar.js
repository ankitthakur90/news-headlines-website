import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>NewsLogo</h1> {/* Placeholder for the news web logo */}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-box" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>India</li>
        <li>World</li>
        <li>Technology</li>
        <li>E-Paper</li>
      </ul>
    </nav>
  );
};

export default Navbar;
