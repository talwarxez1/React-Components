import React from 'react'
import CustomCursor from "./CustomCursor";
import AnimatedText from "./AnimatedText"; 
import logo from '../assets/logo.png'

const Navbar_One = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-black via-[#4A1C06] to-[#8B3D1E] h-full px-[100px] py-[20px] w-100% items-center ">
      <CustomCursor />
      <div className=" flex justify-center gap-x-72 font-inter items-center self-center">
        <div className="text-white  w-[45px] h-[40px] items-center justify-center">
          <img src={logo} alt="" />
        </div>
        <ul className="flex gap-7 ml-4 w-[333px] text-sm">
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
        <button className="bg-transparent border border-[#ff5700] text-white no-underline text-sm rounded-xl hover:text-[#ff5700] transition duration-300 items-center px-4 py-2">
          <AnimatedText text1="Book a call" text2="Schedule" />
        </button>
      </div>
    </div>
    </div>
  )
}

export default Navbar_One
