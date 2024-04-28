import React from 'react';
import logo1 from './images/logo1.jpeg';

const HeroSection = () => {
  return (
    <section className="flex items-center py-16 px-8 bg-blue-100">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">AI-based Mental Health Assessment</h1>
        <p className="text-lg mb-8">Our AI assistant provides personalized mental health assessments to help relieve you from depression and guide you towards a healthier state of mind.</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">Get Started</button>
      </div>
      <div className="w-1/2">
        <img src={logo1} alt="Illustration" className="w-full h-auto" />
      </div>
    </section>
  );
}

export default HeroSection;
