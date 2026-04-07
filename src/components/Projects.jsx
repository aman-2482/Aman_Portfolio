import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: "Namur – Farmer Marketplace App",
    tech: ["Flutter", "Firebase", "REST APIs", "Maps"],
    description: "Farmer-focused marketplace app for land booking, cattle trading, and agricultural products. Integrated real-time features using Firebase and location-based services.",
    image: "/images/namur_app.png",
    links: { live: "https://play.google.com/store/apps/details?id=com.inkaanalysis.namur", github: "https://github.com/aman-2482/namur-app" }
  },

  {
    title: "VMS – Voyage Management System",
    tech: ["Flutter", "Firebase", "Google Maps", "Cloud Functions"],
    description: "A professional system to manage shipping operations, vessel tracking, and real-time logistics. Built to handle complex shipping workflows with a scalable backend.",
    image: "/images/vms_mockup.png",
    links: { live: "https://play.google.com/store/search?q=voyagex&c=apps", github: "#" }
  },
  {
    title: "AI-Powered Government Scheme Finder",
    tech: ["React.js", "FastAPI", "LLM", "Render"],
    description: "AI-powered web app to help users discover relevant government schemes based on eligibility. Simplified complex scheme discovery by providing personalized recommendations.",
    image: "/images/scheme_finder.png",
    links: { live: "https://gove-scheme-ai.vercel.app/", github: "https://github.com/aman-2482/SchemeFinder" }
  },

  {
    title: "Nyaya.AI – AI Legal Assistant",
    tech: ["Next.js", "AI APIs", "Firebase", "Vercel"],
    description: "Instant response AI-powered legal assistant for Indian legal queries. Integrated secure backend deployed on Vercel for seamless access.",
    image: "/images/nyaya_ai.png",
    links: { live: "https://nyaya-ai-vert.vercel.app/", github: "https://github.com/aman-2482/nyaya-ai" }
  },
  {
    title: "DrowseGuard – Driver Drowsiness Detection",
    tech: ["Python", "OpenCV", "Streamlit"],
    description: "Built real-time fatigue detection system using webcam streams. Applied Eye Aspect Ratio algorithm achieving 90% detection accuracy.",
    image: "/images/drowseguard.png",
    links: { live: "https://driver-drowsiness-detection-gsjgfdg57enjklwvhgs2ta.streamlit.app/", github: "https://github.com/aman-2482/drowseguard" }
  },
  {
    title: "Food Delivery App",
    tech: ["Flutter", "Firebase", "Dart"],
    description: "End-to-end food ordering app with real-time cart and order tracking. Implemented Firestore-based menu and order management system.",
    image: "/images/food_delivery.png",
    links: { live: "https://github.com/aman-2482/Food_Delivery_App", github: "https://github.com/aman-2482/Food_Delivery_App" }
  }
];

const Projects = () => {
  return (
    <div className="page-wrapper projects-page-wrapper">
      <section className="projects-section full-page-section">
        <div className="page-header">
          <motion.h1
            className="page-title text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A collection of my best work in App and Web Development, showcasing real-world scalable solutions.
          </motion.p>
        </div>

        <div className="projects-grid spacious-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-icon"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
