import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoClose, IoMenu } from 'react-icons/io5';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Form } from './';

const NAVIGATIONS = [
  { id: 1, name: 'About', link: 'about' },
  { id: 2, name: 'Education', link: 'education' },
  { id: 3, name: 'Skills', link: 'skills' },
  { id: 4, name: 'Experience', link: 'experience' },
  { id: 5, name: 'Projects', link: 'projects' },
  { id: 6, name: 'Contact', link: 'contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (link) => {
    navigate('/');
    const element = document.getElementById(link);
    if (element) {
      const position = element.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="text-3xl font-extrabold text-white tracking-wide"
        >
          Nidhi <span className="text-blue-400">Sharma</span>
        </motion.button>
        
        <ul className="hidden md:flex items-center gap-6">
          {NAVIGATIONS.map((nav, index) => (
            <li key={nav.id}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className={`transition-all duration-300 text-lg font-semibold px-4 py-2 rounded-lg ${
                  isActive === index ? 'bg-blue-500 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-blue-500'
                }`}
                onClick={() => {
                  setIsActive(index);
                  handleScroll(nav.link);
                }}
              >
                {nav.name}
              </motion.button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/nidhi-sharma-46929b271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-500 transition transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/NidhiSharma-21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-gray-400 hover:text-blue-500 transition transform" />
          </motion.a>
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-3xl text-white"
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </motion.button>
      </div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-16 right-0 w-3/4 h-full bg-gray-800 text-white shadow-lg md:hidden ${menuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col gap-6 p-6">
          {NAVIGATIONS.map((nav, index) => (
            <li key={nav.id}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className={`block text-lg px-4 py-2 rounded-lg ${
                  isActive === index ? 'bg-blue-500 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-blue-500'
                }`}
                onClick={() => {
                  setIsActive(index);
                  setMenuOpen(false);
                  handleScroll(nav.link);
                }}
              >
                {nav.name}
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
