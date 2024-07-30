// FeaturesComponent.jsx
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
  const videoRef = useRef(video);

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
    <div className="flex flex-col md:flex-row fade-in-right items-center font-inter p-8 bg-white min-h-screen">
      {/* Video Card */}
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-xl shadow-2xl">
          <video
            ref={videoRef}
            className="w-full rounded shadow-lg"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {/* Features List */}
      <div className="relative flex justify-center h-full w-full md:w-1/2 p-4 mx-auto ">
        <div className="p-6 rounded-lg text-gray-700 fade-in-right">
          <h2 className="text-4xl font-bold mb-8 ">
            Learn to Code : Piece by Piece
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li className="flex items-start">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>{" "}
              Lorem ipsum dolor sit amet, consectetur.
            </li>
            <li className="flex items-start">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>{" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, eius
            </li>
            <li className="flex items-start">
              <span className="text-[#fe7300] font-bold text-xl mr-2">✔</span>{" "}
              Lorem ipsum dolor sit amet, consectetur.
            </li>
          </ul>
          <a
            href="#_"
            class="relative ml-6 w-36 flex items-center justify-center mt-7 p-4 px-4 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-xl shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span class="relative text-white">Button Text</span>
          </a>
        </div>
        {/* flex items-center hover:text-black  mt-7 ml-5 justify-center bg-gradient-to-r from-[#fe7300] to-[#ff6f00] text-white py-2 px-4 rounded */}
      </div>
    </div>
  );
};

export default FeaturesComponent;
