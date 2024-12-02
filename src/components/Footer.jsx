import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-700 pb-8">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-purple-500 mb-2">
              duobuddy.com
            </h2>
            <p className="text-sm">
              Your gateway to rank climbing with professional teammates.
              Learn, grow, and have fun while boosting your gameplay.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="/cookie-policy" className="hover:text-white transition">
              Cookie Policy
            </a>
            <a href="/dmca" className="hover:text-white transition">
              DMCA
            </a>
          </div>

          {/* Currency Selector */}
          <div className="text-center md:text-right">
            <select
              className="bg-gray-800 text-gray-300 rounded px-4 py-2 focus:outline-none hover:bg-gray-700 transition"
              defaultValue="EUR"
            >
              <option value="EUR">EUR (€)</option>
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
            </select>
          </div>
        </div>

        {/* Footer Middle: Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-500 transition"
          >
            <FaDiscord size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">
            duobuddy.com is not endorsed or affiliated with any game developers or
            publishers.
          </p>
          <p className="text-center md:text-right">
            &copy; 2024 duobuddy.com, All Rights Reserved | Created by{' '}
            <span className="text-purple-500">StefanStar</span>{' '}
            <span className="text-yellow-500">⭐</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;