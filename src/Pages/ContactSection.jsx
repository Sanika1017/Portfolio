import React from 'react';
import Download from '../components/Download';
import Submit from '../components/Submit';
import '../styles/ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-container">
        <Download />
        <Submit />
      </div>
    </section>
  );
};

export default ContactSection;
