import React from 'react';
import LeftTextPage1 from '../components/LeftTextPage1';
import '../styles/page1.css'
import galaxy from '../images/galaxy.mp4';
import Rightimgpage1 from '../components/Rightimgpage1';

const Page1 = () => {
  return (
    <div className="page1-wrapper">
      {/* Background Video */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src={galaxy} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="page1-content">
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", height: "80vh", marginTop: "20vh" ,marginLeft:"300px"}}>
          <LeftTextPage1 />
        </div>
        <div>
          <Rightimgpage1/>
        </div>
      </div>
    </div>
  );
};

export default Page1;