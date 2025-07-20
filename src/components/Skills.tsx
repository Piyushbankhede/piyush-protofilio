import React from 'react';
import { Cloud, Container, GitBranch, Settings, Monitor, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'AWS', icon: Cloud, level: 90 },
    { name: 'Kubernetes', icon: Container, level: 85 },
    { name: 'Docker', icon: Container, level: 95 },
    { name: 'Terraform', icon: Code, level: 80 },
    { name: 'Jenkins', icon: Settings, level: 85 },
    { name: 'Ansible', icon: Settings, level: 75 },
    { name: 'Linux', icon: Monitor, level: 90 },
    { name: 'Git/GitHub', icon: GitBranch, level: 90 },
    { name: 'Python', icon: Code, level: 80 },
    { name: 'Shell Script', icon: Code, level: 85 },
    { name: 'Prometheus', icon: Monitor, level: 70 },
    { name: 'Grafana', icon: Monitor, level: 75 },
    { name: 'Argocd', icon: Monitor, level: 80 },
    { name: 'Trivy', icon: Monitor, level: 90 },
    { name: 'Owasp', icon: Monitor, level: 75 }
    ,
    
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-teal-500/20 border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-all duration-300">
                  <skill.icon className="w-8 h-8 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;