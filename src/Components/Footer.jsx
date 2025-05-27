import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Library System</h2>
          <p className="text-sm text-gray-400">
            A modern library management system to manage books, members, and transactions with ease.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/books" className="hover:underline">Books</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="text-sm text-gray-400">📧 info@librarysystem.com</p>
          <p className="text-sm text-gray-400">📞 +880 1234 567 890</p>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-sky-400">Twitter</a>
            <a href="#" className="hover:text-pink-400">Instagram</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Library System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
