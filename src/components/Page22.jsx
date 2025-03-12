import React from 'react';
import '../styles/Page2.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Page22 = () => {
  return (
    <div className="about-card">
      <p className="intro-text">
        Hi! I'm <span className="highlight">Sanika</span>, a passionate Computer Engineering student who loves coding, 
        problem-solving, and building cool projects. 🚀
      </p>

      <p>
        I specialize in front-end development and have a keen interest in AI and machine learning. I'm always 
        learning new technologies to create innovative solutions.
      </p>

      <div>
        <p className="personal">Personal Information</p>
      </div>

      <div className="info-list">
        <ul>
          <li><span>Name:</span> Sanika Shrirang Jadhav</li>
          <li><span>College:</span> Saraswati College of Engineering, Kharghar</li>
          <li><span>Degree:</span> Computer Engineering</li>
          <li><span>University:</span> Mumbai University</li>
          <li><span>Expected Graduation:</span> 2026</li>
        </ul>
      </div>

      {/* 🔹 Hobbies & Interests */}
      <div className="hobbies">
        <p className="personal">Hobbies & Interests</p>
        <ul>
          <li>📚 Reading Tech Blogs</li>
          <li>🎨 UI/UX Design</li>
          <li>🎵 Listening to Music</li>
          <li>📷 Photography</li>
        </ul>
      </div>

      {/* 🔹 Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/sanika" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" /> LinkedIn
        </a>
        <a href="https://github.com/sanika" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" /> GitHub
        </a>
      </div>
    </div>
  );
};

export default Page22;
