import React from 'react';
import { ExternalLink, Globe, ShoppingCart, BriefcaseMedical } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Alumni-Econnect",
    description: "A dynamic platform for alumni to register, manage profiles, and connect based on shared interests. Features include event management, job postings, and blogs. Built using ReactJs, Tailwind CSS, .Net Core, and SQL.",
    link: "https://github.com/NidhiSharma-21/Alumni_Econnect_Major",
    icon: <Globe size={40} className="text-blue-400" />
  },
  {
    id: 2,
    name: "MediPrice",
    description: "A frontend web application where users can search and compare medicine prices from nearby local stores. Developed using React and Tailwind CSS.",
    link: "https://github.com/NidhiSharma-21/MediPrice",
    icon: <BriefcaseMedical size={40} className="text-green-400" />
  },
  {
    id: 3,
    name: "EKark-Ecommerce Site",
    description: "An e-commerce site with a clean and modern layout for enhanced user experience, built using HTML, CSS, JavaScript, and Bootstrap.",
    link: "https://github.com/NidhiSharma-21/Ecommerse_karK_",
    icon: <ShoppingCart size={40} className="text-yellow-400" />
  }
];

const Projects = () => {
  return (
    <div className="bg-[#0a0215] py-20 px-4" id='projects'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#160d2c] p-6 rounded-lg border border-[#291945] shadow-lg transition-all transform hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/30"
            >
              <div className="flex items-center gap-4">
                {project.icon}
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              </div>
              <p className="text-gray-300 mt-3 leading-relaxed">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-all duration-300"
              >
                View Project <ExternalLink size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;