import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/glass-action-logo-4x-current.png'; // Ensure correct path

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-4 md:px-8 py-3 max-w-7xl mx-auto">
        {/* Left: Nav links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Center: Logo */}
        <div className="flex-shrink-0">
          <a href="#top">
            <img src={logo} alt="Glass Action Cleaning Logo" className="h-10 mx-auto" />
          </a>
        </div>

        {/* Right: Instagram + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/glassactioncleaning"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl text-gray-600 hover:text-pink-600" />
          </a>
          <a
            href="#quote"
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

