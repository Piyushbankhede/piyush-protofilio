import React from 'react';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      date: 'Jan 2025 – Present',
      title: 'Technical Intern',
      company: 'Linux World Pvt Ltd',
      description: 'AWS infra, CI/CD pipelines, Docker + Kubernetes, Terraform',
      icon: MapPin,
      current: true,
    },
    {
      date: 'Dec 2024',
      title: '7-Day DevOps Workshop',
      company: 'Vimal Daga',
      description: 'Docker, GitHub, Linux, Shell Scripting',
      icon: Award,
      hasCertificate: true,
    },
    {
      date: 'Oct 2024',
      title: 'Started DevOps Projects',
      company: 'Personal Learning',
      description: 'EKS, Istio, ArgoCD, Helm',
      icon: Calendar,
    },
    {
      date: 'Aug 2025',
      title: 'Graduated',
      company: 'Sagar Institute of Science, Tech & Engg, Bhopal',
      description: 'Bachelor of Technology',
      icon: Award,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-purple-500"></div>

          {events.map((event, index) => (
            <div key={index} className="relative flex items-start mb-12 group">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-teal-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              
              {/* Content */}
              <div className="ml-20 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <event.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                      <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
                        {event.date}
                      </span>
                      {event.current && (
                        <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                      {event.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                  
                  {event.hasCertificate && (
                    <button className="ml-4 flex items-center gap-1 px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm hover:bg-teal-200 dark:hover:bg-teal-800/50 transition-colors">
                      <Award className="w-4 h-4" />
                      Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;