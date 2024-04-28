import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white-shadow-md">
      <div className="text-3xl font-extrabold">Mental Wellness Hub</div>
      <div className="flex space-x-4">
        <Link to="/logined" className="text-lg font-semibold hover:text-blue-200">Home</Link>
        <Link to="/about" className="text-lg font-semibold hover:text-blue-200">About</Link>
        <Link to="/contact" className="text-lg font-semibold hover:text-blue-200">Contact Us</Link>
        <Link to="/" className="text-lg font-semibold hover:text-blue-200">Login</Link>
        {/* <Link to="/register" className="text-lg font-semibold hover:text-blue-200">Register</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
