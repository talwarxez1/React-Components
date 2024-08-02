import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../assets/one.png';
import img2 from '../assets/two.png';
import img3 from '../assets/three.png';
import img4 from '../assets/four.png';
import img5 from '../assets/five.png';
import img6 from '../assets/six.png';
import img7 from '../assets/seven.png';
import img8 from '../assets/eight.png';
import img9 from '../assets/nine.png';
import img10 from '../assets/ten.png';

function MarqueeLogos() {
  return (
    <>
    {/* <h2 className="text-2xl text-wrap  text-center block font-extrabold tracking-tight bg-white text-gray-800 lg:text-4xl">Companies associated with us</h2> */}
    <div className="text-center bg-white lg:mx-44 ">
      <Marquee direction="right" speed={100} delay={2}>
        <div className="flex items-center space-x-4">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={img} alt={`logo ${index + 1}`} className="w-28 py-4 mx-4 h-30 object-contain" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
    </>
  );
}

export default MarqueeLogos;
