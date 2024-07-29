// ./src/components/CustomCursor.js
import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const updateCursorPosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const distanceX = mouseX - cursorX;
      const distanceY = mouseY - cursorY;

      cursorX += distanceX * 0.1;
      cursorY += distanceY * 0.1;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => {
      cursor.style.display = 'block';
    };

    const handleMouseLeave = () => {
      cursor.style.display = 'none';
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-3 h-3 bg-red-500 rounded-full pointer-events-none z-50 ring-2 ring-red-500 ring-opacity-50"
      style={{ display: 'none' }}
    />
  );
};

export default CustomCursor;
