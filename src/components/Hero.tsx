import React from 'react';
import { Download, Briefcase, User } from 'lucide-react';
import myImage from '../assets/myphoto.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-teal-400 to-purple-400 p-1 shadow-xl group-hover:shadow-2xl transition-shadow duration-500">
              <img
                src={myImage}
                alt="My portrait"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Piyush <span className="text-teal-600 dark:text-teal-400">Bankhede</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          DevOps Engineer | Cloud Builder | CI/CD Specialist
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Crafting scalable, secure infrastructure with automation and care
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/My_resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
            style={{ textDecoration: 'none' }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </a>
          
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3 border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/30"
            style={{ textDecoration: 'none' }}
          >
            <Briefcase className="w-5 h-5 group-hover:animate-bounce" />
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;