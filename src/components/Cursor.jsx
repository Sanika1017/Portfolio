// components/CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/cursor.css';

const Cursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const followCursor = () => {
      currentX += (mouseX - currentX) * 0.1; // smooth trailing
      currentY += (mouseY - currentY) * 0.1;

      outer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(followCursor);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      inner.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(followCursor);

    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="cursor-outer" ref={outerRef}></div>
      <div className="cursor-inner" ref={innerRef}></div>
    </>
  );
};

export default Cursor;
