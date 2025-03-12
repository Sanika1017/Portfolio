import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Download = () => {
  return (
    <div className="contact-card">
      <h3>Contact Information</h3>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope />
          <p>Email: sanikajadhav1803@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt />
          <p>Phone: 9604787967</p>
        </div>
      </div>

      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Download;
