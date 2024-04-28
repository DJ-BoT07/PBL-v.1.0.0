import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FacilitiesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-blue-100 py-16" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Facilities We Provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Facility 1: Take a Free Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-semibold mb-4">Take a Free Test to Know Your Mental Health State</h3>
            <p>Take our comprehensive mental health assessment test for free to gain insights into your current mental well-being. Our test is designed to provide you with personalized recommendations and resources based on your results.</p>
          </div>
          {/* Facility 2: Guided Meditation Sessions */}
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4">Guided Meditation Sessions</h3>
            <p>Participate in our guided meditation sessions to reduce stress, improve focus, and promote emotional well-being. Our experienced instructors will guide you through relaxation techniques to help you achieve a state of calm and balance.</p>
          </div>
        </div>
        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-md transition duration-300">Take a Free Test Now</button>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
