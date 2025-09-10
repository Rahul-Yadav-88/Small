import React from "react";
import LogoImg from "../assets/logo_white.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info with Logo */}
          <div>
            <img src={LogoImg} alt="Small Copper" className="h-13 w-40 mb-5" />
            <p className="text-gray-400 text-sm mt-2">
              Innovative technology solutions for your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-md font-semibold mb-3">Services</h3>
            <ul className="space-y-1">
              <li className="text-gray-400 text-sm">Web Development</li>
              <li className="text-gray-400 text-sm">Mobile App Development</li>
              <li className="text-gray-400 text-sm">Cloud & DevOps</li>
              <li className="text-gray-400 text-sm">AI & Machine Learning</li>
              <li className="text-gray-400 text-sm">UI/UX Design</li>
              <li className="text-gray-400 text-sm">IT Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-semibold mb-3">Contact Info</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>123 Tech Park, Innovation Road</li>
              <li>Bengaluru, India - 560001</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: hello@smallcopper.com</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Small Copper. All Rights Reserved.
          </p>
          
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <i className="fab fa-linkedin-in text-md"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <i className="fab fa-twitter text-md"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <i className="fab fa-instagram text-md"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <i className="fab fa-github text-md"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
              <i className="fab fa-youtube text-md"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}