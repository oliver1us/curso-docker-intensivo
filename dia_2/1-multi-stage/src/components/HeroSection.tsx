import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Master <span className="text-blue-500">Docker</span> in Weeks, Not Years
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Learn containerization from basics to production-ready skills with our comprehensive, hands-on Docker course.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                <span>Enroll Now</span>
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-500 border border-blue-500 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                View Curriculum
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                ))}
              </div>
              <p className="ml-4 text-gray-600">Join 2,500+ students already enrolled</p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white rounded-xl shadow-xl p-4 transform hover:scale-105 transition-transform duration-500">
              <div className="aspect-w-16 aspect-h-9 bg-blue-100 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-blue-500/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-semibold text-lg text-gray-800">Docker Essentials: Quick Start</h3>
                <p className="text-gray-600 text-sm mt-1">Watch the free preview and get started today</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full z-[-1]"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-200/50 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;