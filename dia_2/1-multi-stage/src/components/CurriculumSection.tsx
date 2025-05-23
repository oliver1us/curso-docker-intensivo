import React, { useState } from 'react';
import { modules, getIconComponent } from '../data/courseData';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CurriculumSection: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setExpandedModule(expandedModule === id ? null : id);
  };

  return (
    <section id="curriculum" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Course Curriculum</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A comprehensive, step-by-step curriculum designed to build your Docker expertise from the ground up.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {modules.map((module) => {
            const IconComponent = getIconComponent(module.icon);
            const isExpanded = expandedModule === module.id;
            
            return (
              <div 
                key={module.id}
                className={`mb-4 border rounded-lg overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-md border-blue-200' : 'border-gray-200'
                }`}
              >
                <div 
                  className={`flex items-center justify-between p-4 cursor-pointer ${
                    isExpanded ? 'bg-blue-50' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => toggleModule(module.id)}
                >
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
                      isExpanded ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-500'
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{module.title}</h3>
                      <p className="text-sm text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </div>
                </div>
                
                {isExpanded && (
                  <div className="p-4 bg-white border-t border-gray-100">
                    <p className="text-gray-700 mb-4">{module.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
                        <p className="text-sm text-gray-600">Introduction to key concepts</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
                        <p className="text-sm text-gray-600">Hands-on exercises</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
                        <p className="text-sm text-gray-600">Real-world project implementation</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
                        <p className="text-sm text-gray-600">Challenge assignment</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            Get Full Curriculum
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;