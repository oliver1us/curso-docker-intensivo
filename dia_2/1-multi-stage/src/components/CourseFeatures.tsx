import React from 'react';
import { CheckCircle, Clock, Globe, BookOpen, Award, Users } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CourseFeatures: React.FC = () => {
  const features = [
    {
      icon: <BookOpen size={24} />,
      title: "Comprehensive Curriculum",
      description: "From Docker basics to advanced orchestration and production deployment strategies."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Hands-on Projects",
      description: "Build real-world applications and infrastructure with guided, practical projects."
    },
    {
      icon: <Clock size={24} />,
      title: "Self-Paced Learning",
      description: "Study at your own pace with lifetime access to all course materials and updates."
    },
    {
      icon: <Award size={24} />,
      title: "Industry Certification",
      description: "Earn a recognized certificate to showcase your Docker expertise to employers."
    },
    {
      icon: <Users size={24} />,
      title: "Community Support",
      description: "Join our active community of learners and get help when you need it."
    },
    {
      icon: <Globe size={24} />,
      title: "Production-Ready Skills",
      description: "Learn best practices directly applicable to real-world containerization challenges."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Docker Course</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Designed to take you from beginner to expert with practical, hands-on learning and real-world applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;