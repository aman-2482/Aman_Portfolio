import React from 'react';
import { motion } from 'framer-motion';
import Experience from '../components/Experience';

const ExperiencePage = () => {
  return (
    <div className="page-wrapper experience-page-wrapper">
      <div className="page-header text-center">
        <motion.h1 
          className="page-title text-gradient"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h1>
        <motion.p 
          className="page-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A detailed look at my professional journey and technical contributions.
        </motion.p>
      </div>
      <Experience />
    </div>
  );
};

export default ExperiencePage;
