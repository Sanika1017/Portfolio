import React, { useState } from "react";
import SkillBar from "../components/SkillBar"; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaDocker, FaNodeJs } from "react-icons/fa";
import "../styles/SkillsSection.css";

// Move skill categories outside to prevent re-creation on re-renders
const skillCategories = {
  frontend: [
    { name: "HTML", level: 90, icon: <FaHtml5 className="icon html" />, description: "Structuring web content efficiently." },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="icon css" />, description: "Designing responsive and modern UI." },
    { name: "JavaScript", level: 80, icon: <FaJs className="icon js" />, description: "Building interactive web applications." },
    { name: "React", level: 75, icon: <FaReact className="icon react" />, description: "Creating scalable UI components." },
  ],
  backend: [
    { name: "Node.js", level: 70, icon: <FaNodeJs className="icon node" />, description: "Building scalable server-side apps." },
    { name: "Express", level: 65, icon: <FaDatabase className="icon db" />, description: "Creating robust REST APIs." },
    { name: "MongoDB", level: 60, icon: <FaDatabase className="icon db" />, description: "Managing NoSQL databases effectively." },
  ],
  tools: [
    { name: "Git", level: 90, icon: <FaGitAlt className="icon git" />, description: "Version control & collaboration." },
    { name: "Docker", level: 80, icon: <FaDocker className="icon docker" />, description: "Containerizing applications efficiently." },
  ],
};

const SkillsSection = () => {
  const [category, setCategory] = useState("frontend");

  return (
    <section className="skills-section">
      <div className="skills-intro">
        <h2>My Technical Skills</h2>
        <p>Passionate about web development and always learning new technologies. Explore my key skills across different domains.</p>
      </div>

      {/* Circular Progress Bar */}
      <div className="progress-wheel">
        <div className="circular-progress">
          <div className="inner-circle">
            <span>85%</span>
          </div>
        </div>
        <p>Overall Proficiency</p>
      </div>

      {/* Skill Categories */}
      <div className="category-buttons">
        {Object.keys(skillCategories).map((key) => (
          <button 
            key={key} 
            onClick={() => setCategory(key)} 
            className={category === key ? "active" : ""}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skillCategories[category].map((skill) => (
          <div key={skill.name} className="skill-card">
            {skill.icon}
            <h3>{skill.name}</h3>
            <p className="tooltip">{skill.description}</p> {/* Skill description */}
            <SkillBar level={skill.level} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
