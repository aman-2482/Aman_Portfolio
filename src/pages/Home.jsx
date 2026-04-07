import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="page-container">
      <main>
        <Hero />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
