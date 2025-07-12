import React from 'react';
import { Briefcase } from 'lucide-react';

const HireMeButton: React.FC = () => {
  return (
    <button
      onClick={() => window.location.href = 'mailto:bankhedepiyush25@gmail.com'}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:from-teal-700 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-teal-500/30"
    >
      <Briefcase className="w-5 h-5" />
      Hire Me
    </button>
  );
};

export default HireMeButton;