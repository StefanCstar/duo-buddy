import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 w-full shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section: Logo and Social Icons */}
        <div className="flex items-center space-x-6">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-purple-500">Duo Buddy</div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#facebook"
              className="text-gray-400 hover:text-purple-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#twitter"
              className="text-gray-400 hover:text-purple-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#discord"
              className="text-gray-400 hover:text-purple-500 transition"
              aria-label="Discord"
            >
              <FaDiscord size={20} />
            </a>
            <a
              href="#instagram"
              className="text-gray-400 hover:text-purple-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a
            href="#boosting"
            className="text-lg font-bold hover:text-purple-500 transition duration-300"
          >
            Boosting
          </a>
          <a
            href="#coaching"
            className="text-lg font-bold hover:text-purple-500 transition duration-300"
          >
            Coaching
          </a>
          <a
            href="#teammates"
            className="text-lg font-bold hover:text-purple-500 transition duration-300"
          >
            Hire Teammate
          </a>

          {/* Currency Selector */}
          <div className="ml-4">
            <select
              className="text-lg font-bold bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              defaultValue="EUR"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>

          {/* Login Button */}
          <a
            href="#login"
            className="text-lg font-bold bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg ml-4 transition duration-300"
          >
            Login
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4">
          <a
            href="#boosting"
            className="block text-lg font-bold px-4 py-2 hover:text-purple-500 transition duration-300"
          >
            Boosting
          </a>
          <a
            href="#coaching"
            className="block text-lg font-bold px-4 py-2 hover:text-purple-500 transition duration-300"
          >
            Coaching
          </a>
          <a
            href="#teammates"
            className="block text-lg font-bold px-4 py-2 hover:text-purple-500 transition duration-300"
          >
            Hire Teammate
          </a>

          {/* Currency Selector */}
          <div className="mt-4 px-4">
            <select
              className="text-lg font-bold bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              defaultValue="EUR"
            >
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>

          {/* Login Button */}
          <a
            href="#login"
            className="block text-lg font-bold bg-purple-500 hover:bg-purple-600 text-white text-center px-4 py-2 rounded-lg mt-4 mx-4 transition duration-300"
          >
            Login
          </a>

          {/* Social Icons in Mobile Menu */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#facebook"
              className="text-purple-500 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#twitter"
              className="text-purple-500 hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#discord"
              className="text-purple-500 hover:text-white transition duration-300"
              aria-label="Discord"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="#instagram"
              className="text-purple-500 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;