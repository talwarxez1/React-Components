import React , {useEffect}from "react";
import outlier from "../assets/LandingImage.jpg";
import NavBar from "./NavBar.jsx";
import SixTextAnimated from "./SixTextAnimated.jsx";

const LandingPage = () => {
  const texts = [
    { text: "~4.8/5 Learner's Rating" },
    { text: "~100k+ placements" },
    { text: "~10+ faculty" },
    { text: "~Lorem Ipsum" },
    { text: "~Dolor Sit amet" },
    { text: "~Voluptatum Dicta" },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInLeft');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-left');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
  return (
    // Lorem ipsum  consectetur adipisicing elit.  officia itaque qui explicabo neque quidem voluptate nisi nobis impedit ea ab beatae quo pariatur error quis, eius nulla earum!
    <div className="bg-gradient-to-tl from-transparent to-black w-full absolute min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Background Image */}
      <img
        src={outlier}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-55"></div>

      {/* Text Content */}
      <div className="relative font-inter z-10 mx-20 flex flex-col justify-center items-start h-full py-14 text-white">
        <h1 className="text-4xl md:text-4xl font-inter mb-4 ml-4 text-center leading-tight fade-in-left">
          Unlock your <span className="text-[#e97c10] mx-2 font-mono text-5xl glow-text">Potential</span>with
          <br className="mt-3" />
           Future-Ready Learning.
          <hr className="mt-" />
        </h1>
        
        <p className=" relative ml-8 text-sm mt-3 max-w-lg leading-relaxed fade-in-left delay-1s">
          Your gateway to amazing content and experiences. Explore and enjoy! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, facilis.
        </p>
        <div className="relative font-playwrite inline-block items-center mt-6 ml-16 fade-in-left">
          <SixTextAnimated texts={texts} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
