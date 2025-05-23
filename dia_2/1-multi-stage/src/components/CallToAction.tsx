import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Master Docker?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students who have transformed their careers with our comprehensive Docker course.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-xl font-semibold mb-2">Limited Time Offer</h3>
                <p className="text-blue-100">
                  Get 20% off all course plans when you enroll today!
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$99</div>
                <div className="text-blue-200 line-through mb-4">$129</div>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center mx-auto">
                  <span>Claim Discount</span>
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
              <span>Enroll Now</span>
              <ArrowRight size={18} className="ml-2" />
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-white border border-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              View Course Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;