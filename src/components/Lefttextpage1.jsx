import React from 'react';
import '../styles/page1.css';

const LeftTextPage1 = () => {
  return (
    <div className='lefttext'>
        <h1>Hi, I'm <span className="highlight">Sanika</span></h1>
        <p>
            "A passionate and capable <span className="highlight">Full-Stack Web Developer</span> skilled in building dynamic, 
            responsive, and user-friendly web applications using modern technologies. 
            Always eager to learn and solve challenging problems."
        </p>
        <button className="cv-button">Download CV</button>
    </div>
  );
}

export default LeftTextPage1;
