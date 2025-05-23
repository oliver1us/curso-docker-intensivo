import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const InstructorProfile: React.FC = () => {
  return (
    <section id="instructor" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center md:justify-start">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Course Instructor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full px-4 py-2 font-medium text-sm shadow-md">
                  Lead Instructor
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Alex Morgan</h3>
              <p className="text-gray-600 mb-6">Docker Certified Associate & Lead DevOps Engineer</p>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  With over 10 years of experience in container technologies and cloud infrastructure, Alex has helped hundreds of companies implement Docker solutions at scale. Previously a Senior DevOps Engineer at AWS, Alex now focuses on training the next generation of containerization experts.
                </p>
                <p className="text-gray-700">
                  Alex is known for breaking down complex topics into simple, practical steps that students can immediately apply. His teaching methodology focuses on real-world applications rather than theoretical concepts alone.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Industry Experience:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Google Cloud</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Docker Swarm</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">CI/CD</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Microservices</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfile;