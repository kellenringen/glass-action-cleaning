import React from 'react';
import { FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-lg font-bold">
          <a href="#top">Glass Action Cleaning</a>
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#testimonials" className="hover:underline">Testimonials</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="https://www.instagram.com/glassactioncleaning" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href="#quote" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get a Quote</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
