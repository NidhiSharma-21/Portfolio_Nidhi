import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Frontend Web Developer",
    company: "RowX Inventive LLP",
    duration: "February 2025 - Present",
    description: "Leading the development of AgricTools, a React and Tailwind-based platform aimed at revolutionizing agricultural tool management. Enhancing UI/UX, optimizing performance, and ensuring seamless backend integration for a smooth user experience."
  },
  {
    title: "Technical Trainee",
    company: "Authnull",
    duration: "October 2024 - November 2024",
    description: "Collaborated on cutting-edge web solutions, focusing on frontend optimization and authentication security to create an intuitive and seamless user experience."
  },
  {
    title: "React Developer Intern",
    company: "WorkSaga",
    duration: "June 2024 - August 2024",
    description: "Designed and developed engaging landing and authentication pages, ensuring seamless user interaction and backend connectivity. Focused on UI consistency and accessibility."
  },
  {
    title: "Web Developer Intern",
    company: "LEAP.AI",
    duration: "October 2023 - January 2024",
    description: "Implemented dynamic and interactive features, enhancing user engagement through React-based components and responsive design techniques."
  },
  {
    title: "Web Developer Intern",
    company: "Ormap Forensicmart Private Limited",
    duration: "November 2023 - February 2024",
    description: "Developed and refined web applications using React, improving usability and performance with efficient component-based structures."
  },
  {
    title: "Web Developer Intern",
    company: "Tanmay Sachin Foundation",
    duration: "August 2023 - September 2023",
    description: "Revamped the foundation’s website, enhancing UI/UX for better accessibility and engagement while ensuring fast load times."
  },
  {
    title: "Online Marketing Intern",
    company: "Edusha",
    duration: "January 2023 - March 2023",
    description: "Focused on generating leads through strategic online marketing initiatives. Developed targeted campaigns, optimized engagement strategies, and leveraged digital tools to enhance brand visibility and customer acquisition."
  }
];

const Experience = () => {
  return (
    <div className="bg-gray-900 py-20 px-4" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Experience</h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center w-full my-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full shadow-lg border-4 border-gray-900">
                <FaBriefcase className="text-white text-xl" />
              </div>

              <div className={`bg-gray-800 p-6 rounded-lg shadow-lg w-[45%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="text-gray-400">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
