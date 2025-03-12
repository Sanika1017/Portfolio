import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaDocker, FaNodeJs } from 'react-icons/fa';

const IconSection = () => {
  return (
    <div className="icon-section">
      <div className="html">
      <FaHtml5 className="icon html" />
      <FaCss3Alt className="icon css" />
      <FaJs className="icon js" />
      </div>

      <div className="react">
      <FaReact className="icon react" />
      <FaDatabase className="icon mongodb" />
      <FaNodeJs className="icon node" />
      </div>
    </div>
  );
};

export default IconSection;