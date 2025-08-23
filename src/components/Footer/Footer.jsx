import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';

import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#585379] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid 
      grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      
        <div className='flex flex-col'>
          <img className='w-16' src="/src/assets/gadget-100.png" alt="" />
    <a className="text-[#fdfdfd] text-xl font-bold">Gadget 
        Go</a>
          <p className="text-sm mt-4">
            Discover something new every month. 
            Curated subscription boxes delivered to your doorstep.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/about" className="hover:text-purple-200">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:text-purple-200">
                Terms & Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-purple-200">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className="hover:text-purple-200">
                Support
              </NavLink>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" 
             className="text-white hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" 
             className="text-white hover:text-pink-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" 
             className="text-white hover:text-blue-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" 
             className="text-white hover:text-blue-500">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-2 py-4 text-center 
      text-sm text-white/70">
        &copy; {new Date().getFullYear()} GadgetGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
