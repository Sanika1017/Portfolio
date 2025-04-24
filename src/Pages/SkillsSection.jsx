import React, { useState } from 'react';
import { Brain, Star, Code, Database, Layers, PenTool } from 'lucide-react';
import '../styles/SkillsSection.css';
import galaxy from '../images/galaxy.mp4'; // ✅ Ensure this is in `src/` or correctly pathed

// ✅ Static video should be in /public and accessed via "/galaxy.mp4"
const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: <Layers size={24} />,
    description: 'Building beautiful, responsive user interfaces with modern frameworks and tools.',
    skills: [
      { name: 'HTML', proficiency: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', description: 'Semantic markup, accessibility, SEO optimization' },
      { name: 'CSS', proficiency: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', description: 'Flexbox, Grid, animations, responsive design' },
      { name: 'JavaScript', proficiency: 88, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'ES6+, DOM manipulation, async programming' },
      { name: 'React', proficiency: 82, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Hooks, Context API, Redux, Next.js' },
      { name: 'Bootstrap', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', description: 'Component customization, responsive utilities' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: <Database size={24} />,
    description: 'Creating robust server-side applications with scalable architecture.',
    skills: [
      { name: 'Node.js', proficiency: 78, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Express, RESTful APIs, middleware' },
      { name: 'Java', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Spring Boot, multithreading, enterprise applications' },
      { name: 'MongoDB', proficiency: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'Schema design, aggregation, indexing' },
      { name: 'MySQL', proficiency: 72, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Query optimization, stored procedures, transactions' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Methods',
    icon: <PenTool size={24} />,
    description: 'Leveraging modern tools and methodologies for efficient development workflows.',
    skills: [
      { name: 'Git', proficiency: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version control, branching strategies, collaboration' },
      { name: 'Docker', proficiency: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization, deployment, orchestration' },
      { name: 'Agile', proficiency: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg', description: 'Scrum, Kanban, sprint planning, retrospectives' },
      { name: 'Testing', proficiency: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', description: 'Unit testing, integration testing, TDD' }
    ]
  }
];

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="skill-section">
      {/* 🌌 Background video */}
      <div className="background-container">
        <div className="stars-overlay"></div>
        <video className="background-video" autoPlay loop muted playsInline>
          {/* ✅ In public folder */}
          <source src={galaxy} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="skills-content">
        <div className="skills-header">
        <h2 className="section-title">Technical Skills</h2>
          <p className="skills-subheading">
            A comprehensive overview of my technical capabilities and proficiency levels
          </p>
        </div>

        <div className="skill-categories">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-title">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="category-description">
          {activeCategoryData.icon}
          <h2>{activeCategoryData.title}</h2>
          <p>{activeCategoryData.description}</p>
        </div>

        <div className="skills-grid">
          {activeCategoryData.skills.map((skill) => (
            <div
              key={skill.name}
              className={`skill-card ${selectedSkill === skill.name ? 'selected' : ''}`}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
            >
              <div className="skill-card-header">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon"
                />
                <h3 className="skill-name">{skill.name}</h3>
              </div>

              <div className="skill-proficiency">
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="proficiency-level">{skill.proficiency}%</span>
              </div>

              {selectedSkill === skill.name && (
                <div className="skill-details">
                  <p>{skill.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default SkillSection;
