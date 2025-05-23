import React from 'react';
import { pricingPlans } from '../data/courseData';
import { CheckCircle } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose the plan that fits your learning goals and budget. All plans include lifetime access to course content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-2xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 ${
                plan.isPopular 
                  ? 'border-2 border-blue-500 shadow-xl relative' 
                  : 'border border-gray-200 shadow-md'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-blue-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600"> / one-time</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={20} className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
                    plan.isPopular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-white hover:bg-gray-50 text-blue-500 border border-blue-500'
                  }`}
                >
                  {plan.isPopular ? 'Enroll Now' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution for your team or company?</p>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Contact Us for Enterprise Solutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;