// src/components/LeftTextPage1.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/page1.css';

const LeftTextPage1 = () => {
  return (
    <div className="left-text-container">
      {/* Greeting */}
      <motion.p
        className="greeting"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hii I’m
      </motion.p>

      {/* Name */}
      <motion.p
        className="name"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Sanika Jadhav
      </motion.p>

      {/* Description */}
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        A passionate and capable developer
      </motion.p>

      {/* Sub-description */}
      <motion.p
        className="sub-description"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Always eager to learn and solve challenging problems
      </motion.p>

      {/* Skills */}
      <motion.p
        className="skills"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Full-Stack Developer | Java | Python | React Js
      </motion.p>

      {/* Button */}
      <motion.button
        className="download-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>🚀 Download CV</span>
      </motion.button>
    </div>
  );
};

export default LeftTextPage1;