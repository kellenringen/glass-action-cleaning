import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} Glass Action Cleaning. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
