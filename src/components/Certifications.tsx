import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Completed Certifications */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-teal-50 to-purple-50 dark:from-teal-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    7-Day DevOps Workshop
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                    Vimal Daga
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Docker, Linux, GitHub, Shell Scripting
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    December 2024
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-purple-50 dark:from-teal-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-teal-200 dark:border-teal-700 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  <Award className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Devops Internship
                  </h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium mb-2">
                    Linux World Pvt Ltd
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Hands-on cloud infra, CI/CD, K8s, Terraform, GitHub
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    January 2025 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Viewer */}
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              📜 Certificate Viewer
            </h3>
            <div className="aspect-video bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-teal-200 dark:border-teal-700 shadow-lg">
              <iframe
                src="https://drive.google.com/file/d/1zUG9jgx7K4H0xUB2MhETWJ042GT4iAY-/preview"
                className="w-full h-full"
                title="DevOps Workshop Certificate"
                style={{
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 0 15px rgba(74, 157, 174, 0.3)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Future Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Future Goals
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Azure Fundamentals', provider: 'Microsoft', status: 'Planned' },
              { name: 'CKAD', provider: 'CNCF', status: 'In Progress' },
              { name: 'DevSecOps Workshop', provider: 'Various', status: 'Planned' },
            ].map((cert) => (
              <div key={cert.name} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 opacity-75">
                <div className="text-center">
                  <Award className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {cert.provider}
                  </p>
                  <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-full">
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;