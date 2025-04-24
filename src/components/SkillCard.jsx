function SkillCard({ skill, index }) {
    return (
      <div 
        className={`skill-card bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-fadeIn`} 
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
        <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
      </div>
    );
  }
  
  export default SkillCard;