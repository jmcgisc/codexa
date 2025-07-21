'use client'

import React from "react";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg", 
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
];

const ThreeDCarousel = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center perspective-[1000px] overflow-hidden">
      <div className="relative w-[300px] h-[300px] animate-[spinY_20s_linear_infinite] [transform-style:preserve-3d]">
        {images.map((src, i) => (
          <div
            key={i}
            style={{
              transform: `rotateY(${i * 45}deg) translateZ(400px)`,
            }}
            className="absolute w-[250px] h-[150px] transition-transform duration-500"
          >
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCarousel;
