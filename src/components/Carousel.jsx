import React, { useRef } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Learn Python Programming",
    author: "Alice Johnson",
    image: "https://miro.medium.com/v2/resize:fit:840/1*RJMxLdTHqVBSijKmOO5MAg.jpeg",
    content: "Master the basics of Python programming, a versatile and powerful language for various applications.",
    link: "/course1"
  },
  {
    id: 2,
    title: "Complete Frontend Development",
    author: "Bob Smith",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlcryHWUb8QxKH4ARcJxlL4NDLo0fbQD0zsQVDgxUtG__QKlImlAnrxRaOz2_TgoANFxdD3tW9_MHvFntlcnmFrEqHtr-PJfAGXG0ODZo1w0jag9xlcpe1T_BrTFz2ONZevWv-IrMYnD4/w1200-h630-p-k-no-nu/The+Complete+Front-End+Web+Development+Course+best+Udemy+course.jpg",
    content: "Become proficient in frontend development with HTML, CSS, JavaScript, and modern frameworks.",
    link: "/course2"
  },
  {
    id: 3,
    title: "Mastering Django",
    author: "Charlie Brown",
    image: "https://img-c.udemycdn.com/course/750x422/1562632_a245_2.jpg",
    content: "Build robust web applications with Django, a high-level Python web framework.",
    link: "/course3"
  },
  {
    id: 4,
    title: "Java Programming Essentials",
    author: "Diana Green",
    image: "https://www.aqskill.com/wp-content/uploads/2021/05/52c9a98cf9e0-5.jpg",
    content: "Understand the fundamentals of Java, a popular language for enterprise-level applications.",
    link: "#"
  },
  {
    id: 5,
    title: "Advanced React Development",
    author: "Eve White",
    image: "https://fireship.io/courses/react/img/featured.png",
    content: "Deep dive into React, a powerful library for building user interfaces.",
    link: "#"
  },
  {
    id: 6,
    title: "Cybersecurity Basics",
    author: "Frank Black",
    image: "https://img-b.udemycdn.com/course/750x422/4821132_7d8d.jpg",
    content: "Learn the fundamentals of cybersecurity to protect systems and data.",
    link: "#"
  },
  {
    id: 7,
    title: "Introduction to Cloud Computing with AWS",
    author: "George Blue",
    image: "https://sysvine.com/wp-content/uploads/2023/11/AWS-Services-main-banner.svg",
    content: "Get started with machine learning techniques using Python and popular libraries.",
    link: "#"
  },
  {
    id: 8,
    title: "Fundamentals of Docker & Kubernetes",
    author: "Hannah Brown",
    image: "https://miro.medium.com/v2/resize:fit:980/1*WRocACNtWLIzZrxuGOyeBA.jpeg",
    content: "Docker & Kubernetes are the ultimate tools for building and deploying rock-solid apps.",
    link: "#"
  },
  {
    id: 9,
    title: "Data Science VS Machine Learning VS Artificial Intelligence",
    author: "Hannah Brown",
    image: "https://media.assettype.com/analyticsinsight%2Fimport%2Fwp-content%2Fuploads%2F2021%2F08%2FData-Analytics-vs-Data-Science-vs-Machine-Learning.jpg",
    content: "Ever wonder if AI, Machine Learning, and Data Science are the same thing? .",
    link: "#"
  }
];

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-5 pt-5 bg-white">
      <div className="px-12 relative md:mx-32">
        <h2 className=" text-wrap mb-8 text-center block antialiased  leading-10 tracking-tight lg:text-5xl mt-5
         font-bold text-gray-800
        ">Discover our Courses</h2>
        <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md z-10">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div ref={carouselRef} className="relative flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none w-80 h-[27rem] bg-gray-200 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 mx-4 flex flex-col justify-between"
              style={{ transition: 'transform 0.3s ease' }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{post.author}</p>
                  <p className="text-sm text-gray-500 mt-4">{post.content}</p>
                </div>
                <a href={post.link} className="text-blue-500 mt-4 block">Read more</a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full shadow-md z-10">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Carousel;
