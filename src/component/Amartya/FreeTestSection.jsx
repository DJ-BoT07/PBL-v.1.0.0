import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from './images/logo5.png';
import person1 from './images/logo2.jpg';
import person2 from './images/logo3.jpeg';
import logo6 from './images/logo6.png';
import logo7 from './images/logo7.jpg';
import logo8 from './images/logo8.png';
import logo9 from './images/logo9.png';
import '../../App.css';

const FreeTestSection = () => {
  // State for managing image layout AOS effect
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init();
  }, []);

  return (
    <div className="bg-white">
      <main className="px-4 py-8 overflow-hidden">
        {/* Advantages of Our Test Section */}
        <div className="p-6 mb-8 flex flex-col md:flex-row items-center" data-aos="fade-up">
          <div className="md:w-1/2 md:pr-4 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Advantages of Our Test</h2>
            <p className="text-lg mb-4 text-gray-800">Our free mental health assessment test offers several advantages:</p>
            <ul className="list-disc pl-6">
              <li className="mb-2">Personalized insights into your mental well-being</li>
              <li className="mb-2">Recommendations tailored to your individual needs</li>
              <li className="mb-2">Accessible and convenient, take the test from anywhere</li>
              <li className="mb-2">Secure and confidential</li>
            </ul>
            {/* Go to Test Button */}
            <div className="mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full shadow-md transition duration-300">Go to Test</button>
            </div>
          </div>
          {/* Image */}
          <img src={image1} alt="" className="md:w-1/2 md:pl-4 w-full md:w-auto h-auto" />
        </div>

        {/* Testimonials Section */}
        <div className="p-6 mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 flex flex-col md:flex-row items-center">
              <div className="mr-4 mb-4 md:mb-0">
                <img src={person1} alt="Person 1" className="w-25 h-24 rounded-full mr-4" />
              </div>
              <div>
                <p className="text-gray-800">"Taking the mental health assessment test was a turning point for me. It helped me understand my emotions better and take positive steps towards healing."</p>
                <p className="text-gray-800 mt-2">- John Doe</p>
              </div>
            </div>
            <div className="p-4 flex flex-col md:flex-row items-center">
              <div className="mr-4 mb-4 md:mb-0">
                <img src={person2} alt="Person 2" className="w-25 h-24 rounded-full mr-4" />
              </div>
              <div>
                <p className="text-gray-800">"I highly recommend the mental health assessment test to anyone seeking clarity and guidance. It's easy to use and provides valuable insights."</p>
                <p className="text-gray-800 mt-2">- Jane Smith</p>
              </div>
            </div>
          </div>
        </div>

        {/* Test Preparation Tips Section */}
        <div className="p-6 mb-8 test-preparation-section" data-aos="fade-up">
  <div className="test-preparation-text">
    <h2 className="text-3xl font-bold mb-4 text-blue-800">Test Preparation Tips</h2>
    <p className="text-lg mb-4 text-gray-800">Prepare yourself for the mental health assessment test with these helpful tips:</p>
    <ul className="list-disc pl-6">
      <li className="mb-2">Get plenty of rest the night before</li>
      <li className="mb-2">Find a quiet and comfortable environment</li>
      <li className="mb-2">Take deep breaths and relax before starting</li>
      <li className="mb-2">Answer questions honestly and without judgment</li>
    </ul>
  </div>
  <img src={logo6} alt="" className="test-preparation-image" />
</div>


        {/* Benefits of Mental Health Assessment Section */}
        <div className="p-6 mb-8 benefits-section" data-aos="zoom-in">
  <div className="benefits-text">
    <h2 className="text-3xl font-bold mb-4 text-blue-800">Benefits of Mental Health Assessment</h2>
    <p className="text-lg mb-4 text-gray-800">Discover the benefits of taking a mental health assessment test:</p>
    <ul className="list-disc pl-6">
      <li className="mb-2">Early detection of mental health issues</li>
      <li className="mb-2">Guidance for seeking appropriate support and treatment</li>
      <li className="mb-2">Empowerment through self-awareness and understanding</li>
      <li className="mb-2">Improved overall well-being and quality of life</li>
    </ul>
  </div>
  <img src={logo7} alt="" className="benefits-image" />
</div>

        {/* Frequently Asked Questions Section */}
        <div className="p-6 mb-8" data-aos="zoom-in">
  <h2 className="text-3xl font-bold mb-4 text-blue-800">Frequently Asked Questions</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Changed grid-cols-1 to grid-cols-2 */}
    <div className="md:order-2"> {/* Reversed the order for larger screens */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">Is the test confidential?</h3>
        <p className="text-gray-800">Yes, your privacy is important to us. All information collected during the test is kept confidential and secure.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-blue-800">How long does the test take?</h3>
        <p className="text-gray-800">The test typically takes around 10-15 minutes to complete, but you can take as much time as you need.</p>
      </div>
    </div>
    <div className="md:order-1 flex justify-center items-center"> {/* Center image horizontally and vertically */}
      <img src={logo8} alt="Image" className="max-h-full" /> {/* Add your image here */}
    </div>
  </div>
</div>



        {/* Additional Resources Section */}
        <div className="p-6 mb-8" data-aos="zoom-in">
  <div className="flex flex-wrap items-center"> {/* Use flexbox to align items */}
    <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-4"> {/* Specify width for responsiveness and add right padding */}
      <h2 className="text-3xl font-bold mb-4 text-blue-800">Additional Resources</h2>
      <p className="text-lg mb-4 text-gray-800">Explore additional resources for mental health support and information:</p>
      <ul className="list-disc pl-6">
        <li className="mb-2">Online counseling services</li>
        <li className="mb-2">Community support groups</li>
        <li className="mb-2">Educational articles and videos</li>
        <li className="mb-2">Self-help books and podcasts</li>
      </ul>
    </div>
    <div className="w-full md:w-1/2"> {/* Specify width for responsiveness */}
      <img src={logo9} alt="Image" className="w-full h-auto" /> {/* Add your image here */}
    </div>
  </div>
</div>

      </main>
    </div>
  );
}

export default FreeTestSection;