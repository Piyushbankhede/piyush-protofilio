import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Open to DevOps, MLOps, or Cloud Engineering roles. Passionate about building 
                secure, scalable, cloud-native solutions with automation-first mindset.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <a 
                    href="mailto:bankhedepiyush25@gmail.com"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    bankhedepiyush25@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <a 
                    href="tel:+919630817308"
                    className="text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    +91 9630817308
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full group-hover:bg-teal-200 dark:group-hover:bg-teal-800/50 transition-colors">
                  <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Location</p>
                  <p className="text-gray-600 dark:text-gray-300">Chhindwara, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/piyush-bankhede"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </a>
              <a
                href="https://github.com/Piyushbankhede"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors hover:scale-110 duration-300"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-lg font-semibold hover:from-teal-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;