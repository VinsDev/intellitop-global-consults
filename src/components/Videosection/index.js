import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import {
  GlobalOutlined,
  AlignLeftOutlined,
  UserOutlined,
  StarOutlined,
  SafetyOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import features from "../../assets/images/features.webp";
import office from "../../assets/images/office.avif";
import AOS from "aos";
import "aos/dist/aos.css";
import RegistrationForm from "./RegistrationForm";
import "./styles.css";

function Videosection() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  const showForm = () => setIsFormVisible(true);
  const hideForm = () => setIsFormVisible(false);

  return (
    <div className="my-12 mx-4 md:mx-8 lg:mx-36 bg-white">
      {/* Home Section */}
      <div className="mx-auto max-w-3xl text-center pb-8 md:pb-12 lg:pb-16">
        <h1
          className="text-[#1a1a1a] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          data-aos="fade-up"
        >
          Empowering Your Future with Education & Innovation
        </h1>
        <p
          className="text-sm md:text-base lg:text-xl text-[#333333] mb-4 md:mb-8"
          data-aos="fade-up"
        >
          Welcome to <strong>Intelitop Global Concepts</strong>, where we empower students and businesses with world-class education and cutting-edge technology solutions.
        </p>
        <div className="flex justify-center items-center gap-x-4">
          <div>
          <Button
              data-aos="fade-up"
              type="primary"
              onClick={showForm} 
              className="bg-[#4A4AF3] h-10 md:h-12 lg:h-14 px-4 md:px-6 lg:px-8 text-sm md:text-base lg:text-lg font-semibold rounded-xl text-white hover:bg-[#3b3bd6]"
            >
              Get Started Today
            </Button>
          </div>
          <div>
            <Button
              data-aos="fade-up"
              type="primary"
              className="bg-[#e0e0e0] rounded-xl h-10 md:h-12 lg:h-14 w-24 md:w-32 lg:w-36 font-semibold text-[#333333] hover:bg-[#d1d1d1]"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-12">
        <img
          src={office}
          alt="Intelitop Office"
          className="w-full md:max-w-3xl"
        />
      </div>

      {/* About Us Section */}
      <div className="max-w-3xl text-center pb-8 md:pb-12 lg:pb-16 mx-auto my-12">
        <h1
          className="text-[#1a1a1a] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4"
          data-aos="fade-up"
        >
          About Intelitop Global Concepts
        </h1>
        <p
          className="text-sm md:text-base lg:text-xl text-[#333333] mb-4 md:mb-8"
          data-aos="fade-up"
        >
          We are dedicated to equipping individuals with the knowledge and skills needed to succeed in academic and professional endeavors.
        </p>
      </div>

      {/* Services Section */}
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="flex items-center justify-center mb-4 bg-[#4A4AF3] rounded-full h-16 w-16">
                <span className="text-white text-3xl">
                  <StarOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Scholarship Exam Prep
              </h1>
              <p className="text-[#333333]">
                Unlock global opportunities with expert preparation for international scholarship exams.
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full mb-4 h-16 w-16">
                <span className="text-white text-3xl">
                  <AlignLeftOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Language Proficiency
              </h1>
              <p className="text-[#333333]">
                Excel in IELTS, TOEFL, and more with tailored coaching from experienced instructors.
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span className="text-white text-3xl">
                  <GlobalOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Standardized Exams
              </h1>
              <p className="text-[#333333]">
                Master SAT, GRE, GMAT, and CET with structured guidance and modern tools.
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span className="text-white text-3xl">
                  <SafetyOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Web Development
              </h1>
              <p className="text-[#333333]">
                Responsive, scalable websites tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span className="text-white text-3xl">
                  <UserOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Mobile Apps
              </h1>
              <p className="text-[#333333]">
                High-performance Android and iOS apps built with the latest tech.
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span className="text-white text-3xl">
                  <ProductOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Enterprise Solutions
              </h1>
              <p className="text-[#333333]">
                Automation and AI-driven tools to optimize your business processes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="max-w-3xl text-center pb-12 md:pb-16 mx-auto my-20">
        <div className="mb-4" data-aos="fade-up">
          <Button className="bg-[#4A4AF3] rounded-2xl font-bold text-white hover:bg-[#3b3bd6] no-hover-effect">
            Our Approach
          </Button>
        </div>
        <h1
          className="text-[#1a1a1a] text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          Personalized Solutions, Proven Results
        </h1>
        <p className="text-xl text-[#333333] mb-8" data-aos="fade-up">
          Whether it’s academic success or digital transformation, we deliver tailored, measurable outcomes.
        </p>
      </div>

      {/* Detailed Service Highlights */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <div className="font-architects-daughter text-xl text-[#4A4AF3] mb-2">
              Education Excellence
            </div>
            <h3 className="text-2xl text-[#1a1a1a] font-bold mb-3">Ace Your Exams</h3>
            <p className="text-xl text-[#333333] mb-4">
              Our personalized learning programs ensure you’re ready for scholarships, language tests, and more.
            </p>
            <ul className="text-lg text-[#333333] -mb-2">
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-green-600 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Flexible in-person or online coaching</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-green-600 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Expert instructors with proven success</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-600 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Tech-driven resources for better results</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={features} alt="Education Features" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src={features} alt="Software Features" />
          </div>
          <div className="md:pr-4 lg:pr-12 xl:pr-16">
            <div className="font-architects-daughter text-xl text-[#4A4AF3] mb-2">
              Tech Innovation
            </div>
            <h3 className="text-2xl text-[#1a1a1a] font-bold mb-3">Transform Your Business</h3>
            <p className="text-xl text-[#333333] mb-4">
              Custom software solutions designed to streamline processes and drive growth.
            </p>
            <ul className="text-lg text-[#333333] -mb-2">
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-green-600 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Web, mobile, and desktop applications</span>
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-3 h-3 fill-current text-green-600 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>Industry-standard tech stack</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-current text-green-600 mr-2 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                </svg>
                <span>AI-driven enterprise solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-3xl text-center pb-12 md:pb-16 mx-auto my-24">
        <h1
          className="text-[#1a1a1a] text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h1>
        <p className="text-xl text-[#333333] mb-8" data-aos="fade-up">
          Hear from students and businesses who’ve achieved success with Intelitop Global Concepts.
        </p>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col" data-aos="fade-up">
              <div className="flex items-center justify-center mb-4 bg-[#4A4AF3] rounded-full h-16 w-16">
                <span className="text-white text-3xl">
                  <StarOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Scholarship Success
              </h1>
              <p className="text-[#333333]">
                "Intelitop’s coaching helped me secure a full scholarship abroad. The personalized approach made all the difference!"
              </p>
            </div>
            <div className="border-t border-gray-300 mx-auto w-full mt-6 mb-6"></div>
            <div className="font-semibold">
              <p className="text-[#555555]">
                Aisha Bello - <Link>Student</Link>
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full mb-4 h-16 w-16">
                <span className="text-white text-3xl">
                  <AlignLeftOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                Business Growth
              </h1>
              <p className="text-[#333333]">
                "Their team built us a custom app that streamlined our operations. We’ve seen a 30% efficiency boost!"
              </p>
            </div>
            <div className="border-t border-gray-300 mx-auto w-full mt-6 mb-6"></div>
            <div className="font-semibold">
              <p className="text-[#555555]">
                Chinedu Okeke - <Link>Entrepreneur</Link>
              </p>
            </div>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200">
            <div className="flex flex-col" data-aos="fade-up">
              <div className="flex items-center justify-center bg-[#4A4AF3] rounded-full h-16 w-16 mb-4">
                <span className="text-white text-3xl">
                  <GlobalOutlined />
                </span>
              </div>
              <h1 className="text-2xl text-[#1a1a1a] font-bold mb-2">
                IELTS Mastery
              </h1>
              <p className="text-[#333333]">
                "Thanks to Intelitop, I scored 8.0 on my IELTS. The instructors were amazing and supportive."
              </p>
            </div>
            <div className="border-t border-gray-300 mx-auto w-full mt-6 mb-6"></div>
            <div className="font-semibold">
              <p className="text-[#555555]">
                Fatima Yusuf - <Link>Student</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-3xl text-center pb-12 md:pb-16 mx-auto my-24">
        <h1
          className="text-[#1a1a1a] text-5xl font-bold mb-4"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-[#333333] mb-8" data-aos="fade-up">
          Got questions? We’ve got answers to help you get started.
        </p>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="shadow-md p-6 bg-white border border-gray-200" data-aos="fade-up">
            <h3 className="text-xl text-[#1a1a1a] font-bold mb-2">
              What exams do you prepare students for?
            </h3>
            <p className="text-[#333333]">
              We cover a wide range, including IELTS, TOEFL, SAT, GRE, GMAT, CET, and scholarship-specific exams.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200" data-aos="fade-up">
            <h3 className="text-xl text-[#1a1a1a] font-bold mb-2">
              Do you offer online classes?
            </h3>
            <p className="text-[#333333]">
              Yes, we provide flexible options—both in-person and personalized online coaching.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200" data-aos="fade-up">
            <h3 className="text-xl text-[#1a1a1a] font-bold mb-2">
              Can you build software for my small business?
            </h3>
            <p className="text-[#333333]">
              Absolutely! We create custom solutions for businesses of all sizes, from startups to enterprises.
            </p>
          </div>
          <div className="shadow-md p-6 bg-white border border-gray-200" data-aos="fade-up">
            <h3 className="text-xl text-[#1a1a1a] font-bold mb-2">
              How do I get started?
            </h3>
            <p className="text-[#333333]">
              Contact us via phone, email, or our website, and we’ll guide you through the next steps!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="p-4 md:p-8">
        <div className="bg-[#4A4AF3] text-white h-auto md:h-48 p-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-16">
          <div className="space-y-2 md:w-1/2">
            <h1 className="text-lg md:text-3xl font-bold">Let’s Help You Succeed!</h1>
            <p className="text-xs md:text-sm">
              Contact us today to start your journey toward academic excellence or digital transformation.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-0 md:w-1/2">
            <input
              type="text"
              placeholder="Your email..."
              className="p-2 w-full md:w-64 text-[#333333]"
            />
            <button className="bg-white text-[#4A4AF3] px-6 py-2 font-semibold w-full md:w-auto hover:bg-[#e0e0e0]">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* Add the Registration Form Modal */}
      <RegistrationForm visible={isFormVisible} onClose={hideForm} />
    </div>
  );
}

export default Videosection;