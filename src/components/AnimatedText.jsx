// ./src/components/AnimatedText.js

import React, { useState } from 'react';
import '../index.css';

const AnimatedText = ({ text1, text2 }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="overflow-hidden h-8"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`transition-transform duration-500 ease-in-out ${hovered ? '-translate-y-8' : ''}`}
        >
          <div className="h-8 flex items-center">{text1}</div>
          <div className="h-8 flex items-center text-red-500">{text1}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
