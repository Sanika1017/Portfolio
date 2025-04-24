import React from 'react';
import '../styles/Page2.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page22 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="about-card"
      style={{ marginRight: "100px" }}
    >
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

      <div className="hobbies">
        <p className="personal">Hobbies & Interests</p>
        <ul>
          <li>📚 Reading Tech Blogs</li>
          <li>🎨 UI/UX Design</li>
          <li>🎵 Listening to Music</li>
          <li>📷 Photography</li>
        </ul>
      </div>

      <div  style={{marginTop:"20px"}}className="social-links">
      

        
      </div>
    </motion.div>
  );
};

export default Page22;
