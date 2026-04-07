import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, 
  FaDocker, FaGitAlt, FaAws, FaMobileAlt, FaFire 
} from 'react-icons/fa';
import { 
  SiFlutter, SiFirebase, SiExpress, SiFastapi, 
  SiTailwindcss, SiVercel, SiRender, SiAndroidstudio 
} from 'react-icons/si';
import './Skills.css';

const skillsMastery = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: <FaPython />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 85 },
      { name: "Dart", icon: <FaMobileAlt />, level: 88 },
      { name: "SQL", icon: <FaDatabase />, level: 80 }
    ]
  },
  {
    category: "Frameworks & UI",
    skills: [
      { name: "Flutter", icon: <SiFlutter />, level: 92 },
      { name: "React.js", icon: <FaReact />, level: 85 },
      { name: "Node.js", icon: <FaNodeJs />, level: 82 },
      { name: "FastAPI", icon: <SiFastapi />, level: 80 },
      { name: "Express.js", icon: <SiExpress />, level: 78 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 }
    ]
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      { name: "Firebase", icon: <SiFirebase />, level: 90 },
      { name: "AWS", icon: <FaAws />, level: 75 },
      { name: "Git", icon: <FaGitAlt />, level: 88 },
      { name: "Vercel", icon: <SiVercel />, level: 85 },
      { name: "Docker", icon: <FaDocker />, level: 75 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="about" className="skills-section standalone">
      <div className="skills-grid-master">
        {skillsMastery.map((category, catIdx) => (
          <motion.div 
            key={catIdx} 
            className="skill-group-professional glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.2 }}
          >
            <h3 className="category-title text-gradient">{category.category}</h3>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-item-pro">
                  <div className="skill-info-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <motion.div 
                      className="progress-bar-active"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 + (skillIdx * 0.1) }}
                      style={{ background: 'var(--accent-gradient)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
