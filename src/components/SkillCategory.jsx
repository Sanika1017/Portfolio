import React, { useState } from 'react';
import SkillBar from './SkillBar';

const SkillCategory = () => {
  const [category, setCategory] = useState('frontend');
  
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 }
  ];

  const backendSkills = [
    { name: 'Node.js', level: 70 },
    { name: 'Express', level: 65 },
    { name: 'MongoDB', level: 60 }
  ];

  const toolsSkills = [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'Webpack', level: 75 }
  ];

  const skills = category === 'frontend' ? frontendSkills : category === 'backend' ? backendSkills : toolsSkills;

  return (
    <div className="skill-category">
      <h2>My Skills</h2>
      <div className="category-buttons">
        <button onClick={() => setCategory('frontend')}>Frontend</button>
        <button onClick={() => setCategory('backend')}>Backend</button>
        <button onClick={() => setCategory('tools')}>Tools</button>
      </div>
      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <h3>{skill.name}</h3>
            <SkillBar level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;