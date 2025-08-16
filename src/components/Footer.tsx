import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Aultrix</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative digital solutions, workflow automation, and strategic consulting. 
              Your partner in digital transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:sksiitkgp2010@gmail.com" className="hover:text-blue-400 transition-colors">
                  sksiitkgp2010@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:9999418369" className="hover:text-blue-400 transition-colors">
                  9999418369
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Social */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Aultrix. All rights reserved. | 
              <span className="hover:text-blue-400 transition-colors cursor-pointer ml-1">Privacy Policy</span> | 
              <span className="hover:text-blue-400 transition-colors cursor-pointer ml-1">Terms of Service</span>
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://linkedin.com/company/aultrix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;