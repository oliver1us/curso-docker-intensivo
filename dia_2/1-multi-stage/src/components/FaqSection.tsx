import React, { useState } from 'react';
import { faqs } from '../data/courseData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our Docker course and learning process.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaq === faq.id}
              >
                <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                {openFaq === faq.id ? (
                  <ChevronUp className="text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-4 ${openFaq === faq.id ? 'block' : 'hidden'}`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-white rounded-xl shadow-sm p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-gray-700 mb-6">
            We're here to help! Reach out to our support team and we'll get back to you as soon as possible.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;