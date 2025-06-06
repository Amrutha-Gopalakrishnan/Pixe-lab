import React from 'react';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from 'react-icons/fa';
import logo from './assets/logo1.png'

const Footer = () => {
  return (
    <footer className="bg-[#37474F] text-white pt-10 pb-4">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Section */}
        <div className="flex-1">
           <div className="flex items-center gap-2">
                    <img src={logo} alt="Pixe Lab Logo" className="h-15 w-15" />
                    <span className="text-[22px] font-bold text-black-600">
                      PIXE LAB
                    </span>
                  </div>

          <p className="text-sm leading-relaxed mb-4 max-w-[300px]">
            Transforming businesses with creative UI/UX designs, impactful logos and branding, cutting-edge web and mobile app development, and efficient BPO services that drive growth and excellence.
          </p>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#61dafb] text-base" />
              <span>pixelab@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#61dafb] text-base" />
              <span>23/3, Seelanaikanpatti, Salem</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#61dafb] text-base" />
              <span>+91 9875428969</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Subscribe */}
          <div>
            <h3 className="font-semibold text-base mb-2">Subscribe</h3>
            <div className="flex w-full max-w-[300px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-black text-sm rounded-l outline-none"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-sm font-semibold text-white px-4 py-2 rounded-r transition-colors duration-300">
                SIGN UP
              </button>
            </div>
          </div>

          {/* Quick Links and Our Services */}
          <div className="flex gap-10">
            <div>
              <h4 className="font-semibold text-base mb-2">Quick Links</h4>
              <ul className="text-sm flex flex-col gap-1">
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#services" className="hover:underline">Our Services</a></li>
                <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                <li><a href="#blog" className="hover:underline">Our Blogs</a></li>
                <li><a href="#contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-base mb-2">Our Services</h4>
              <ul className="text-sm flex flex-col gap-1">
                <li><a href="#" className="hover:underline">Team of Use</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Contact Support</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg mt-2">
            <a href="#" className="hover:text-[#61dafb] transition-colors duration-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-[#61dafb] transition-colors duration-300"><FaInstagram /></a>
            <a href="#" className="hover:text-[#61dafb] transition-colors duration-300"><FaFacebook /></a>
            <a href="#" className="hover:text-[#61dafb] transition-colors duration-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-3 text-center text-xs">
        All Rights Reserved © Pixe Lab 2025 | <a href="#" className="hover:underline">Terms & Conditions</a> | <a href="#" className="hover:underline">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
