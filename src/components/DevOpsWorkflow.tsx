import React from 'react';
import { Code, GitBranch, Settings, Package, Cloud, ArrowRight } from 'lucide-react';

const DevOpsWorkflow: React.FC = () => {
  const workflowSteps = [
    { icon: Code, title: 'Code', description: 'Write & Review' },
    { icon: GitBranch, title: 'GitHub', description: 'Version Control' },
    { icon: Settings, title: 'Jenkins', description: 'CI/CD Pipeline' },
    { icon: Package, title: 'Docker', description: 'Containerization' },
    { icon: Cloud, title: 'Kubernetes', description: 'Orchestration' },
    { icon: Cloud, title: 'AWS', description: 'Cloud Deployment' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🔁 How I Work as a DevOps Engineer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {workflowSteps.map((step, index) => (
            <React.Fragment key={step.title}>
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-teal-500/30">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  {step.description}
                </p>
              </div>
              
              {index < workflowSteps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-teal-600 dark:text-teal-400 hidden lg:block animate-pulse" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsWorkflow;