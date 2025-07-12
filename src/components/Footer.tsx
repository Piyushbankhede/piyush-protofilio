import React from 'react';
import { Heart, Mail, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Piyush <span className="text-teal-400">Bankhede</span>
            </h3>
            <p className="text-gray-400 mb-4">
              DevOps Engineer crafting scalable, secure infrastructure with automation and care.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:bankhedepiyush25@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/piyush-bankhede"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Piyushbankhede"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition-colors hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cloud Infrastructure</li>
              <li>CI/CD Pipelines</li>
              <li>Container Orchestration</li>
              <li>Infrastructure as Code</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Piyush Bankhede
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Piyush Bankhede. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;