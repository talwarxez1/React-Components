import React, { useRef, useEffect } from "react";
import video from "../assets/video-pieces-screen.mp4";
import "../index.css";

const FeaturesComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInRight");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-right");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.playbackRate = -1; // This reverses the playback
        video.play();
      });
    }
    return () => {
      if (video) {
        video.removeEventListener("ended", () => {});
      }
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center font-inter bg-white p-2 lg:mx-32">
      {/* Video Card */}
      <div className="lg:mx-20 w-full md:w-[35rem] p-4">
        <div className="bg-gray-800 p-4 md:p-4 rounded-xl shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-32 md:h-64 rounded-lg shadow-lg object-cover"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {/* Features List */}
      <div className="relative flex flex-col items-center h-full w-full md:w-1/2 p-2 md:p-4 mx-auto">
        <div className="p-4 md:p-6 rounded-lg text-gray-800 fade-in-right">
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
            Learn to code : Piece By Piece...
          </h2>
          <p className="mb-6  text-left text-gray-600">
            Our platform offers a comprehensive range of courses designed to fit your learning style and career goals. Start with basic projects and gradually advance to more complex topics. Our hands-on approach ensures that you not only learn but also apply your knowledge effectively.
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>
              <span>Expert Guidance: Learn from industry professionals.</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>
              <span>Real-World Projects: Gain practical experience through projects.</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>
              <span>Interactive Learning: Engage with interactive content.</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>
              <span>Support Community: Access to a supportive learning community.</span>
            </li>
          </ul>
          <a
            href="#courses"
            className="relative ml-6 w-36 flex items-center justify-center mt-7 p-4 px-4 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">Explore</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
