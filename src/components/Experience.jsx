import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChartLine, FaDatabase } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    role: "Software Developer",
    company: "VoyageXai",
    date: "Dec 2024 - Present",
    location: "Gurugram, Haryana",
    icon: <FaLaptopCode />,
    points: [
      "Developed 3+ scalable mobile/web apps using Flutter and Firebase (Firestore, Auth, Cloud Functions) supporting 1,000+ users.",
      "Conducted manual and automated testing across 20+ modules, reducing bugs by 30%.",
      "Implemented AI-driven features (chatbots, analytics, recommendations) improving user engagement by 25%.",
      "Collaborated with cross-functional teams to integrate REST APIs and robust state management (Provider/Riverpod).",
      "Optimized backend queries and database structures in Firestore, leading to a 40% improvement in data retrieval speed."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "JPMorgan & Co.",
    date: "May 2024 - Sep 2024",
    location: "Remote",
    icon: <FaChartLine />,
    points: [
      "Analyzed real-time stock data streams processing 10,000+ datapoints daily for trend prediction.",
      "Created visualizations improving reporting accuracy and speed by 20%.",
      "Implemented statistical models to identify market trends, supporting data-driven strategy decision making.",
      "Presented technical findings to senior leadership through comprehensive interactive dashboards built with Python."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "The Spark Foundation",
    date: "May 2023 - Jun 2023",
    location: "Remote",
    icon: <FaDatabase />,
    points: [
      "Performed data analysis on large sales datasets using SQL and Python to drive business insights.",
      "Cleaned and validated high-volume datasets achieving 95%+ accuracy for ML model readiness.",
      "Applied advanced feature engineering and data preprocessing techniques to improve model performance metrics by 12%.",
      "Collaborated in an agile team environment to deliver end-to-end data pipelines for business intelligence reporting."
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-icon text-gradient">
              {exp.icon}
            </div>
            <div className="timeline-content glass-panel">
              <span className="date">{exp.date}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company} <span>| {exp.location}</span></h4>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
