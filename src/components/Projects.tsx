import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: ' CI/CD Pipeline with AWS, Terraform, Ansible, Docker, Jenkins, and Kubernetes',
      description: 'End-to-end CI/CD pipeline with DevOps tools',
      tech: ['AWS', 'Terraform', 'Kubernetes','Jenkins','Ansible'],
      category: 'AWS',
      github: 'https://github.com/Piyushbankhede/DevOps-project.git',
    },
    {
      title: 'CI/CD Pipeline with Jenkins',
      description: 'Complete CI/CD pipeline for Node.js applications',
      tech: ['Jenkins', 'Docker', 'GitHub'],
      category: 'CI/CD',
      github: 'https://github.com/Piyushbankhede',
    },
    {
      title: 'Docker Containerization',
      description: 'Multi-stage Docker builds for production applications',
      tech: ['Docker', 'Docker Compose'],
      category: 'Docker',
      github: 'https://github.com/Piyushbankhede',
    },
    {
      title: 'Infrastructure as Code',
      description: 'Complete AWS infrastructure provisioning with Terraform',
      tech: ['Terraform', 'AWS', 'VPC','ALB','Autoscaling','Security Group'],
      category: 'Terraform',
      github: 'https://github.com/Piyushbankhede/terraform-project.git',
    },
    {
      title: 'Shell Script ',
      description: 'Script to list AWS resources by service region.',
      tech: ['Shell Script', 'Bash', 'AWS'],
      category: 'Monitoring',
      github: 'https://github.com/Piyushbankhede/shellScript-project.git',
    },
    {
      title: 'Monitoring Stack',
      description: 'Prometheus and Grafana monitoring setup for Kubernetes',
      tech: ['Prometheus', 'Grafana', 'Kubernetes'],
      category: 'Monitoring',
      github: 'https://github.com/Piyushbankhede/kubernetes-monitoring.git',
    },
    {
      title: 'Monitoring Stack',
      description: 'Prometheus and Grafana monitoring setup for Kubernetes',
      tech: ['Prometheus', 'Grafana', 'Kubernetes'],
      category: 'Monitoring',
      github: 'https://github.com/Piyushbankhede',
    },
    {
      title: 'Ansible Automation',
      description: 'Server configuration and deployment automation',
      tech: ['Ansible', 'Linux', 'YAML'],
      category: 'Automation',
      github: 'https://github.com/Piyushbankhede',
    },
  ];

  const filters = ['All', 'AWS', 'CI/CD', 'Docker', 'Terraform', 'Monitoring', 'Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Piyushbankhede"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-full font-semibold hover:from-teal-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;