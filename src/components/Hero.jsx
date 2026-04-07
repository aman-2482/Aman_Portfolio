import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <motion.span 
          className="greeting"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi there, I'm
        </motion.span>
        
        <motion.h1 
          className="name text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Aman Chaudhary
        </motion.h1>
        
        <motion.h2 
          className="role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Software Developer
        </motion.h2>
        
        <motion.p 
          className="bio"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I build highly scalable web and mobile applications using React.js and Flutter. 
          Passionate about creating elegant user experiences and integrating AI-driven features.
        </motion.p>
        
        <motion.div 
          className="action-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="#" className="btn btn-outline"><FaDownload /> Resume</a>
        </motion.div>
        
        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a href="https://github.com/aman-2482" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/aman-chaudhary-a8b630250/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-image glass-panel">
          <img src="/images/aman_avatar.jpg" alt="Aman Chaudhary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
