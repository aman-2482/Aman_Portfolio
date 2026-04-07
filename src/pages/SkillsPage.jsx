import React from 'react';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div className="page-wrapper skills-page-wrapper">
      <div className="page-header text-center">
        <motion.h1 
          className="page-title text-gradient"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Technical Mastery
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive showcase of my specialized expertise and software development toolkit.
        </motion.p>
      </div>
      <Skills />
    </div>
  );
};

export default SkillsPage;
