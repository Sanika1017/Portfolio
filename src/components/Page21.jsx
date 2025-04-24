import React from 'react';
import img1 from '../images/img1.jpg';
import '../styles/Page2.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page21 = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -200, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="photo-wrapper"
    >
      <img src={img1} alt="Profile" className="profile-image" />
    </motion.div>
  );
};

export default Page21;
