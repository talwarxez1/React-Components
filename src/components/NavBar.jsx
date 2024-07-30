import React from 'react';
import CustomCursor from "./CustomCursor";
import AnimatedText from "./AnimatedText"; 
import logo from '../assets/logo.png';

const Navbar_One = () => {
  return (
    <>
      <div className="sticky top-0 max-w-[970px] mx-auto bg-transparent h-24 font-inter z-50 ">
        <CustomCursor />
        <div className="flex justify-between items-center h-24 w-full py-3 backdrop-blur-md 
        px-10
        md:px-0">
          <div className="text-white w-[45px] h-[49px] flex items-center justify-center">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex md:text-[14px]"> 
            <ul className="flex gap-7 ml-8">
              <li>
                <a href="#process" className="text-white hover:text-gray-300">
                  <AnimatedText text1="Process" />
                </a>
              </li>
              <li>
                <a href="#work" className="text-white hover:text-gray-300">
                  <AnimatedText text1="Work" />
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-gray-300">
                  <AnimatedText text1="Services" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-300">
                  <AnimatedText text1="About" />
                </a>
              </li>
              <li>
                <a href="#faqs" className="text-white hover:text-gray-300">
                  <AnimatedText text1="FAQs" />
                </a>
              </li>
            </ul>
          </div>
          <button className="bg-transparent border border-[#616161] text-[#e97c10] no-underline rounded-xl hover:text-[#939292] transition duration-300 flex items-center justify-center px-4 h-12 text-[13px] mx-8">
            <AnimatedText text1="Login" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar_One;