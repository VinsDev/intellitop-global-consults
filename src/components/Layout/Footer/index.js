import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png"; // Ensure this is your Intelitop logo
import {
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined, // Replaced Github with Twitter for broader appeal
} from "@ant-design/icons";

function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#333333]">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-6 xl:col-span-1">
            <img className="h-10" src={logo} alt="Intelitop Global Consults Logo" />
            <p className="text-[#555555] text-base">
              Empowering students and businesses with world-class education and innovative technology solutions since 2025.<br /><br />Office address:<br />
              4th Floor, Building II, River House.
              Plot 83 Ralph shodeinde Street. Central Business District. Abuja.
            </p>
            <div className="flex space-x-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center bg-[#e0e0e0] hover:bg-[#4A4AF3] rounded-full h-10 w-10 transition-colors duration-300">
                  <LinkedinOutlined className="text-[#4A4AF3] hover:text-white text-xl" />
                </div>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center bg-[#e0e0e0] hover:bg-[#4A4AF3] rounded-full h-10 w-10 transition-colors duration-300">
                  <FacebookOutlined className="text-[#4A4AF3] hover:text-white text-xl" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center bg-[#e0e0e0] hover:bg-[#4A4AF3] rounded-full h-10 w-10 transition-colors duration-300">
                  <InstagramOutlined className="text-[#4A4AF3] hover:text-white text-xl" />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center justify-center bg-[#e0e0e0] hover:bg-[#4A4AF3] rounded-full h-10 w-10 transition-colors duration-300">
                  <TwitterOutlined className="text-[#4A4AF3] hover:text-white text-xl" />
                </div>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:mt-0 xl:col-span-2">
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#4A4AF3] tracking-wider uppercase">
                Services
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/education" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Educational Training
                  </Link>
                </li>
                <li>
                  <Link to="/software" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link to="/consulting" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#4A4AF3] tracking-wider uppercase">
                Resources
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/blog" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/guides" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Exam Prep Guides
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-[#4A4AF3] tracking-wider uppercase">
                Company
              </h4>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/about" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-base text-[#333333] hover:text-[#4A4AF3]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse justify-between items-center mt-12 sm:flex-row sm:justify-between border-t border-gray-200 pt-8">
          <div className="text-base text-[#555555] mb-4 sm:mb-0">
            © {new Date().getFullYear()} Intelitop Global Consults. All rights reserved.
          </div>
          <div className="flex gap-4 justify-center items-center">
            <span className="text-[#555555] text-base">
              <a href="mailto:info@intelitopglobal.com" className="hover:text-[#4A4AF3]">
                info@intelitopglobal.com
              </a>
            </span>
            <span className="text-[#555555] text-base">
              <a href="tel:+234123456789" className="hover:text-[#4A4AF3]">
                +234 123 456 789
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;