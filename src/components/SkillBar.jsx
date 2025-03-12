import React, { memo } from "react";

const SkillBar = memo(({ level }) => {
  return (
    <div className="skill-bar">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${level}%` }}></div>
      </div>
      <span className="skill-percentage">{level}%</span>
    </div>
  );
});

export default SkillBar;
