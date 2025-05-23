import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CourseFeatures from './components/CourseFeatures';
import CurriculumSection from './components/CurriculumSection';
import InstructorProfile from './components/InstructorProfile';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "DockerMastery - Master Containerization";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CourseFeatures />
        <CurriculumSection />
        <InstructorProfile />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;