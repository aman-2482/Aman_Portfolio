import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mdapbwwr", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setFormState('success');
      e.target.reset(); // Clear the form
    } else {
      setFormState('idle');
      alert("Oops! There was a problem submitting your form. Please check your Formspree ID.");
    }
  };

  return (
    <div className="page-wrapper contact-page-wrapper">
      <section className="contact-section full-page-section">
        <div className="contact-grid">
          
          <motion.div 
            className="contact-info-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="page-title text-gradient">Let's Connect</h1>
            <p className="contact-desc">
              I'm always open to discussing product design work or partnership opportunities. Let's create something amazing together.
            </p>

            <div className="info-list">
              <a href="mailto:amanc248278@gmail.com" className="info-item glass-panel">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email Me Let's Talk</h4>
                  <span>amanc248278@gmail.com</span>
                </div>
              </a>
              
              <a href="tel:+917084015952" className="info-item glass-panel">
                <div className="info-icon"><FaPhoneAlt /></div>
                <div>
                  <h4>Call Me Directly</h4>
                  <span>+91-7084015952</span>
                </div>
              </a>
            </div>

            <div className="social-profiles">
              <h3>Follow My Work</h3>
              <div className="social-links-large">
                <a href="https://github.com/aman-2482" target="_blank" rel="noopener noreferrer" className="social-pill">
                  <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/aman-chaudhary-a8b630250/" target="_blank" rel="noopener noreferrer" className="social-pill linkedin">
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <div className="success-icon text-gradient"><FaCheckCircle /></div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out, Aman will get back to you soon.</p>
                  <button className="btn btn-outline" onClick={() => setFormState('idle')}>Send Another</button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2>Send a Message</h2>
                  <form className="modern-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input type="text" name="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" name="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input type="text" name="subject" placeholder="Project Inquiry" required />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea rows="5" name="message" placeholder="Tell me about your project..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn" disabled={formState === 'sending'}>
                      {formState === 'sending' ? (
                        <span className="loader"></span>
                      ) : (
                        <><FaPaperPlane /> Send Message Ratio</>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      <footer className="footer">
        <p>Designed & Built by Aman Chaudhary © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Contact;
