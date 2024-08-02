import React, { useState, useEffect } from 'react';


const AnimatedText2 = ({ texts, className }) => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <span className={`relative ${className}`}>
      {texts.map((text, index) => (
        <span
          key={index}
          className={`absolute transition-opacity duration-1000 ease-in-out ${
            index === currentText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {text}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText2;
