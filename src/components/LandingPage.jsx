import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-6">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl lg:text-5xl ml-20 font-bold text-center text-gray-800">
              Elevate Your Skills with Our <span className="text-orange-500">EXPERT-LED</span> Courses
            </h1>
            <p className="mt-8 ml-20 text-sm lg:text-xl text-center text-gray-600">
              Boost your skills with our top-notch, job-ready courses. Our platform delivers cutting-edge technology and industry-leading content at competitive prices. Elevate your expertise and achieve your career goals efficiently with our curated programs.
            </p>
            <button className="mt-10 bg-orange-500 text-white py-3 px-6 ml-64 rounded-lg transition-transform transform hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
  Start Your Journey
</button>
          </div>
          <div className=" ml-32 lg:w-1/2 w-full lg:pl-12 mt-8 lg:mt-0 flex flex-col items-center space-y-4">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-full">
              <div className="relative  lg:w-[280px] lg:h-40 w-auto">
                <img
                  src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1659635843/BestColleges.com/Bootcamp-Student-Learning-to-Code_301240e55a/Bootcamp-Student-Learning-to-Code_301240e55a.jpg"
                  alt="Course 1"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                  <img src="https://cdn-icons-png.flaticon.com/128/1183/1183621.png" alt="React" className="h-6 w-6" />
                </div>
              </div>
              <div className="relative w-full lg:w-[280px] lg:h-40">
                <img
                  src="https://ckeditor.com/blog/is-coding-for-everyone/feature.png"
                  alt="Course 2"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                  <img src="https://cdn-icons-png.flaticon.com/512/1183/1183669.png" alt="Python" className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <div className="relative -left-6 w-full lg:w-[36rem] h-48 lg:h-[18rem]">
                <img
                  src="https://media.wired.com/photos/6340c6c2f93a1584dc57f353/master/pass/Tips-and-Apps-to-Help-Students-Gear-GettyImages-1132647177.jpg"
                  alt="Course 3"
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
                  <img src="https://cdn-icons-png.flaticon.com/128/6132/6132221.png" alt="Swift" className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
