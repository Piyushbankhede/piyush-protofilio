import React from 'react';
import { Users, Code, Cloud } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Proficient in Cloud and DevOps with expertise in AWS, Terraform, Jenkins, Docker, and Kubernetes. 
              Strong believer in automation, scalability, and collaboration.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hands-on with CI/CD pipelines, Infrastructure as Code (IaC), and cloud-native deployment. 
              Passionate about building secure, scalable solutions with an automation-first mindset.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <Cloud className="w-5 h-5" />
                <span>Cloud Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <Code className="w-5 h-5" />
                <span>Infrastructure as Code</span>
              </div>
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <Users className="w-5 h-5" />
                <span>Team Collaboration</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Internship</h3>
              <p className="text-gray-600 dark:text-gray-300"> Experience</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">20+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projects Deployed</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">System Monitoring</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 hover:scale-105">
              <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">100%</h3>
              <p className="text-gray-600 dark:text-gray-300">Automation Focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;