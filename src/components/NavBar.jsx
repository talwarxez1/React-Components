import React, { useState, useRef, useEffect } from 'react';
import CustomCursor from "./CustomCursor";
import AnimatedText from "./AnimatedText"; 
import logo from '../assets/logo.png';

const Navbar_One = () => {
  const [isCoursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isFaqsDropdownOpen, setFaqsDropdownOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const coursesRef = useRef(null);
  const servicesRef = useRef(null);
  const faqsRef = useRef(null);
  const dropdowns = {
    courses: coursesRef,
    services: servicesRef,
    faqs: faqsRef
  };

  const toggleFaq = (faqIndex) => {
    setOpenFaq(openFaq === faqIndex ? null : faqIndex);
  };

  const handleClickOutside = (event) => {
    if (
      coursesRef.current && !coursesRef.current.contains(event.target) &&
      servicesRef.current && !servicesRef.current.contains(event.target) &&
      faqsRef.current && !faqsRef.current.contains(event.target)
    ) {
      setCoursesDropdownOpen(false);
      setServicesDropdownOpen(false);
      setFaqsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="sticky top-0 mx-auto bg-transparent h-24 font-inter z-50 text-black ">
        <CustomCursor />
        <div className="flex justify-between items-center h-24 w-full py-3 backdrop-blur-md px-10 md:px-0">
          <div className="text-black w-[45px] h-[49px] flex items-center justify-center mx-12">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex md:text-[14px]">
            <ul className="flex gap-24 ml-8">
              <li 
                className="relative"
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => !isCoursesDropdownOpen && setCoursesDropdownOpen(false)}
                ref={coursesRef}
              >
                <button
                  onClick={() => setCoursesDropdownOpen(prev => !prev)}
                  className="text-black font-bold hover:text-gray-300 flex items-center"
                >
                  <AnimatedText text1="COURSES" />
                  <svg
                    className={`ml-2 transform transition-transform duration-300 ${
                      isCoursesDropdownOpen ? 'rotate-180' : ''
                    }`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15l-8-8h16l-8 8z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                {isCoursesDropdownOpen && (
                  <ul className=" font-poppins absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <li>
                      <a href="#course1" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Data Analytics
                      </a>
                    </li>
                    <li>
                      <a href="#course2" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Machine Learning
                      </a>
                    </li>
                    <li>
                      <a href="#course3" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Artificial Intelligence
                      </a>
                    </li>
                    <li>
                      <a href="#course4" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Web Development
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => !isServicesDropdownOpen && setServicesDropdownOpen(false)}
                ref={servicesRef}
              >
                <button
                  onClick={() => setServicesDropdownOpen(prev => !prev)}
                  className="text-black hover:text-gray-300 font-bold flex items-center"
                >
                  <AnimatedText text1="SERVICES" />
                  <svg
                    className={`ml-2 transform transition-transform duration-300 ${
                      isServicesDropdownOpen ? 'rotate-180' : ''
                    }`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15l-8-8h16l-8 8z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                {isServicesDropdownOpen && (
                  <ul className=" font-poppins absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <li>
                      <a href="#service1" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Online Tutoring
                      </a>
                    </li>
                    <li>
                      <a href="#service2" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Virtual Classrooms
                      </a>
                    </li>
                    <li>
                      <a href="#service3" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Learning Management Systems
                      </a>
                    </li>
                    <li>
                      <a href="#service4" className="block px-4 py-2 text-black hover:bg-gray-100">
                        Educational Content Creation
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#services" className="text-black font-bold hover:text-gray-300">
                  <AnimatedText text1="CONTACT" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-black font-bold hover:text-gray-300">
                  <AnimatedText text1="ABOUT" />
                </a>
              </li>
              <li 
                className="relative"
                onMouseEnter={() => setFaqsDropdownOpen(true)}
                onMouseLeave={() => !isFaqsDropdownOpen && setFaqsDropdownOpen(false)}
                ref={faqsRef}
              >
                <button
                  onClick={() => setFaqsDropdownOpen(prev => !prev)}
                  className="text-black hover:text-gray-300 font-bold flex items-center"
                >
                  <AnimatedText text1="FAQs" />
                  <svg
                    className={`ml-2 transform transition-transform duration-300 ${
                      isFaqsDropdownOpen ? 'rotate-180' : ''
                    }`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15l-8-8h16l-8 8z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                {isFaqsDropdownOpen && (
                  <ul className="absolute top-full mt-2 w-64 bg-white shadow-lg rounded-lg">
                    <li className="relative">
                      <button
                        onClick={() => toggleFaq(1)}
                        className="block px-4 py-2 text-black hover:bg-gray-100 w-full text-left flex items-center justify-between"
                      >
                        What is EdTech?
                        <svg
                          className={`transform transition-transform duration-300 ${
                            openFaq === 1 ? 'rotate-90' : ''
                          }`}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15l-8-8h16l-8 8z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      {openFaq === 1 && (
                        <ul className="absolute top-0 left-full ml-2 mt-0 w-64 bg-white shadow-lg rounded-lg">
                          <li className="px-4 py-2 text-black hover:bg-gray-100">
                            EdTech refers to the use of technology in education to improve learning and teaching.
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <button
                        onClick={() => toggleFaq(2)}
                        className=" px-4 py-2 text-black hover:bg-gray-100 w-full text-left flex items-center justify-between"
                      >
                        How do I enroll in a course?
                        <svg
                          className={`transform transition-transform duration-300 ${
                            openFaq === 2 ? 'rotate-90' : ''
                          }`}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15l-8-8h16l-8 8z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      {openFaq === 2 && (
                        <ul className="absolute top-0 left-full ml-2 mt-0 w-64 bg-white shadow-lg rounded-lg">
                          <li className="px-4 py-2 text-black hover:bg-gray-100">
                            You can enroll in a course by browsing our course catalog and clicking the "Enroll" button.
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <button
                        onClick={() => toggleFaq(3)}
                        className=" px-4 py-2 text-black hover:bg-gray-100 w-full text-left flex items-center justify-between"
                      >
                        What payment methods are accepted?
                        <svg
                          className={`transform transition-transform duration-300 ${
                            openFaq === 3 ? 'rotate-90' : ''
                          }`}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 15l-8-8h16l-8 8z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      {openFaq === 3 && (
                        <ul className="absolute top-0 left-full ml-2 mt-0 w-64 bg-white shadow-lg rounded-lg">
                          <li className="px-4 py-2 text-black hover:bg-gray-100">
                            We accept various payment methods including credit cards, PayPal, and more.
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <section className="flex">
            <button className="w-20 bg-gradient-to-r from-[#e97c10] to-[#f5b15e] text-white hover:text-black rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center px-4 h-12 text-[13px]">
              LOGIN
            </button>
            <button className="bg-gradient-to-r from-[#e97c10] to-[#f5b15e] text-white hover:text-black rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 flex items-center justify-center px-4 h-12 text-[13px] mx-5">
              SIGN UP
            </button>
          </section>
        </div>
      </div>
    </>
  );
}

export default Navbar_One;
