import React from 'react';
import Page21 from '../components/Page21';
import Page22 from '../components/Page22';
import '../styles/Page2.css';

const Page2 = () => {
  return (
    <div className="page2-container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <Page21 />
        <Page22 />
      </div>
    </div>
  );
};

export default Page2;
