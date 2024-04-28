import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const UniqueSection = () => {
    useEffect(() => {
        AOS.init();
      }, []);


  return (
    <section className="py-16 bg-white" data-aos="zoom-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Makes Us Unique</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: AI Emotion Detection */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI Emotion Detection</h3>
            <p>Our AI technology detects and analyzes emotions in real-time, providing personalized support and guidance based on your emotional state. This allows for more effective interventions and tailored recommendations for mental well-being.</p>
          </div>
          {/* Feature 2: 24/7 Availability */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
            <p>We are available round-the-clock to provide support whenever you need it. Whether it's day or night, our team is here to assist you, ensuring you receive the help and guidance you deserve at any hour.</p>
          </div>
          {/* Feature 3: Exciting Feature (Customized) */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Interactive Mood Tracker</h3>
            <p>Our platform features an interactive mood tracker that allows you to monitor and track your emotions over time. With insightful visualizations and personalized insights, you can gain a deeper understanding of your mental well-being and take proactive steps towards improvement.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UniqueSection;
