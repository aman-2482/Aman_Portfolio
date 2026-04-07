import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo text-gradient">Aman Chaudhary.</Link>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active-link' : ''}>Skills</Link></li>
          <li><Link to="/experience" className={location.pathname === '/experience' ? 'active-link' : ''}>Experience</Link></li>
          <li><Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>Projects</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link></li>
        </ul>

        {/* Backdrop for mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="navbar-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
