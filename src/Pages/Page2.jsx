import React from 'react';
import Page21 from '../components/Page21';
import Page22 from '../components/Page22';
import '../styles/Page2.css';
import galaxy from '../images/galaxy.mp4';

const Page2 = () => {
  return (
    <div className="page2-wrapper">
       {/* Background Video */}
            <video className="background-video" autoPlay loop muted playsInline>
              <source src={galaxy} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      <div className="page2-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <Page21 />
          <Page22 />
        </div>
      </div>
    </div>
  );
};

export default Page2;
