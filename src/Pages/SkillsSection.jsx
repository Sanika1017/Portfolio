import React from "react";
import "../styles/SkillsSection.css";
import brainImage from "../images/brain.png";
import galaxy from '../images/galaxy.mp4';

const skills = [
  { name: "HTML", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

export default function SkillSection() {
  return (
    <section className="skill-section">

      {/* 🌌 Background Video */}
     <video className="background-video" autoPlay loop muted playsInline>
                   <source src={galaxy} type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                
                 <h1 className="skills-heading">My Skills</h1>
      {/* ✨ Content */}
      <div className="text-panel left">
        <h2 className="gradient-title">
          Developer <span className="icon">💻</span>
        </h2>
        <p>
          I have expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js. My strength lies in blending aesthetics with functionality to create seamless user experiences.
        </p>
      </div>

      <div className="brain-panel">
        <img src={brainImage} alt="Brain" className="brain-img" />
        <div className="skills-scroll">
          <div className="scroll-wrapper">
            {skills.concat(skills).map((skill, index) => (
              <img
                key={index}
                src={skill.url}
                alt={skill.name}
                title={skill.name}
                className="skill-icon"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-panel right">
        <h2 className="gradient-title">
          Coder <span className="icon">👨‍💻</span>
        </h2>
        <p>
          I'm skilled in frontend and backend technologies, including MongoDB and MySQL. I build complete web solutions with clean, scalable code.
        </p>
      </div>
    </section>
  );
}
