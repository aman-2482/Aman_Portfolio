import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="edu-cert-container">
        <div className="edu-column">
          <motion.h2 
            className="section-title text-gradient"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Education
          </motion.h2>
          
          <motion.div 
            className="edu-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Institute of Engineering and Technology</h3>
            <h4>B.Tech - Computer Science and Engineering</h4>
            <div className="edu-meta">
              <span>2020 – 2024</span>
              <span>Uttar Pradesh</span>
            </div>
            <p className="grade">Percentage: 74%</p>
          </motion.div>

          <motion.div 
            className="edu-card glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3>Divine Public School, Gorakhpur</h3>
            <h4>12th - Physics, Chemistry, Mathematics (90%)</h4>
            <h4>10th - Science, Mathematics, Social Science (90%)</h4>
            <div className="edu-meta">
              <span>2017 – 2020</span>
            </div>
          </motion.div>
        </div>

        <div className="cert-column">
          <motion.h2 
            className="section-title text-gradient"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Certifications
          </motion.h2>
          
          <div className="cert-list">
            {['Flutter and Firebase – Udemy', 'Web Development – Udemy', 'Python – OPENEDG'].map((cert, index) => (
              <motion.div 
                key={index} 
                className="cert-item glass-panel"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="cert-bullet"></span>
                <p>{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
