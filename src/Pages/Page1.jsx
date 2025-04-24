import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import '../styles/page1.css';
import galaxy from '../images/galaxy.mp4';


const Page1 = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const downloadVariant = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0 5px 20px rgba(0, 255, 255, 0.4)',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section className="page1-section" id="home">
      <div className="page1-wrapper">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          onError={() => console.error('Video failed to load: /galaxy.mp4')}
        >
          <source src={galaxy} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="stars-overlay"></div>
      </div>

      <div className="page1-content">
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="greeting-container" variants={item}>
            <div className="greeting-line"></div>
            <p className="greeting">Hello, I'm</p>
          </motion.div>

          <motion.h1 className="name" variants={item}>
            Sanika Jadhav
          </motion.h1>

          <motion.h2 className="title" variants={item}>
            Full-Stack Developer
          </motion.h2>

          <motion.p className="description" variants={item}>
            Passionate about creating elegant solutions to complex problems with a focus on user experience and clean code.
          </motion.p>

          <motion.div className="skills-container" variants={item}>
            {['Java', 'Python', 'React', 'Node.js', 'MongoDB'].map((skill) => (
              <motion.div
                key={skill}
                className="skill-tag"
                whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(65, 179, 255, 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            href="/Sanika_Jadhav_CV.pdf"
            className="download-btn"
            variants={downloadVariant}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            download
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Page1;
