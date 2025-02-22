import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Education</h2>
        
        <div className="space-y-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl flex items-center gap-6 border-l-4 border-blue-400">
            <FaGraduationCap className="text-blue-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-300">Gyan Ganga College Of Technology, Jabalpur</h3>
              <p className="text-gray-300">Bachelor of Technology in Computer Science (2021 - 2025)</p>
              <p className="text-blue-400 font-bold text-lg">CGPA: 8.64</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl flex items-center gap-6 border-l-4 border-blue-400">
            <FaGraduationCap className="text-blue-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-300">Swami Vivekanand Government Model School, Indawer, Rajasthan</h3>
              <p className="text-gray-300">12th Class (2020 - 2021)</p>
              <p className="text-blue-400 font-bold text-lg">Percentage: 85.2%</p>
            </div>
          </div>
          
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl flex items-center gap-6 border-l-4 border-blue-400">
            <FaGraduationCap className="text-blue-400 text-4xl" />
            <div>
              <h3 className="text-2xl font-semibold text-blue-300">Paradise Public School, Borunda, Rajasthan</h3>
              <p className="text-gray-300">10th Class (2018 - 2019)</p>
              <p className="text-blue-400 font-bold text-lg">Percentage: 80.83%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
