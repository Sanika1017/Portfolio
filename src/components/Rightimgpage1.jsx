import React from 'react';
import '../styles/page1.css';
import hero from '../images/hero.mp4';

const Rightimgpage1 = () => {
  return (
    <div className="right-img-container w-100">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="right-bg-video"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Rightimgpage1;
