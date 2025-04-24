import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';
import galaxy from '../images/galaxy.mp4';
import logo from '../images/avtaar.avif'; // Adjust the path as per your structure

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    console.log(`Button clicked to scroll to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = window.innerWidth <= 768 ? 80 : 100;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth',
      });
    } else {
      console.error(`Section with ID "${id}" not found.`);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    console.log(`Hamburger clicked, mobile menu open: ${!isMobileMenuOpen}`);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Background Video */}
      <video className="navbar-background-video" autoPlay loop muted playsInline>
        <source src={galaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="stars-overlay"></div>

      {/* Navbar Content */}
      <div className="navbar-content">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">
            <span className="logo-highlight">Sanika</span>
          </span>
        </div>

        {/* Center Tabs (Desktop) */}
        <div className="navbar-tabs-wrapper">
          <div className="navbar-tabs">
            <button className="navbar-button" onClick={() => handleScroll('home')}>
              Home
            </button>
            <button className="navbar-button" onClick={() => handleScroll('page2')}>
              About
            </button>
            <button className="navbar-button" onClick={() => handleScroll('projects')}>
              Projects
            </button>
            <button className="navbar-button" onClick={() => handleScroll('skills')}>
              Skills
            </button>
            <button className="navbar-button" onClick={() => handleScroll('page5')}>
              Experience
            </button>
            <button className="navbar-button" onClick={() => handleScroll('contact')}>
              Contact
            </button>
          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="navbar-icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            onClick={() => console.log('GitHub icon clicked')}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            onClick={() => console.log('LinkedIn icon clicked')}
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="stars-overlay"></div>
        <div className="mobile-menu-items">
          <button className="mobile-navbar-button" onClick={() => handleScroll('home')}>
            Home
          </button>
          <button className="mobile-navbar-button" onClick={() => handleScroll('page2')}>
            About
          </button>
          <button className="mobile-navbar-button" onClick={() => handleScroll('projects')}>
            Projects
          </button>
          <button className="mobile-navbar-button" onClick={() => handleScroll('skills')}>
            Skills
          </button>
          <button className="mobile-navbar-button" onClick={() => handleScroll('page5')}>
            Experience
          </button>
          <button className="mobile-navbar-button" onClick={() => handleScroll('contact')}>
            Contact
          </button>
          <div className="mobile-social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onClick={() => console.log('Mobile GitHub icon clicked')}
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onClick={() => console.log('Mobile LinkedIn icon clicked')}
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}