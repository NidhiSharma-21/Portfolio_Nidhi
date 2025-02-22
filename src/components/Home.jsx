import React from 'react';
import Hero from './Hero'; 
import Skills from './Skills'; 
import Experience from './Experience'; 
import Projects from './Project'; 
import Contact from './Contact'; 
import Footer from './Footer';
import Education from "./Education"
import './Home.css';

const Home = () => {
  return (
    <div className='w-full h-auto'>
      <Hero />
     <Education/>
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;