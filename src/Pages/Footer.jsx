import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "../styles/Footer.css";
import galaxy from "../images/galaxy.mp4";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer">
      <video className="footer-background-video" autoPlay loop muted playsInline>
        <source src={galaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="stars-overlay"></div>

      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:sanika@example.com" className="social-icon">
            <FaEnvelope size={24} />
          </a>
        </div>

        <p className="footer-text">
          © 2025 <strong>Sanika Jadhav</strong>. All rights reserved. |{" "}
          <button onClick={scrollToContact} className="footer-link">
            Get in Touch
          </button>
        </p>

        <button onClick={scrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
          <FaArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
