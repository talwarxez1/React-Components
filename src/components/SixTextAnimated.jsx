// ./src/components/SixTextAnimated.js

import React, { useState, useEffect } from 'react';
import '../index.css';


const SixTextAnimated = ({ texts }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500); // Change text every 3.5 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative inline-block overflow-hidden h-8"> {/* Set the height for animation container */}
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${index * 2}rem)` }}
      >
        {texts.map((text, i) => (
          <div key={i} className='h-8 ml-2 flex items-center justify-center text-gray-400'> 
            <span className="text-2xl h-8 ml-12 glow-text text-center">{text.text}</span> {/* Apply a smaller font size */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SixTextAnimated;
