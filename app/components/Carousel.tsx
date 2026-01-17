"use client";
import { useEffect, useRef, useState } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    './images/card1.png',
    './images/card2.png',
    './images/card3.png',
  ];

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    if (!isHovered) startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div className="w-full desktop:max-w-8xl desktop:mx-auto desktop:px-4 py-8">
      {/* Carousel Container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main carousel wrapper */}
        <div className="relative desktop:h-[230px] flex items-center justify-center">
          {/* Previous card (partial view) */}
          <div
            className="absolute left-0 w-[60px] h-50 hidden desktop:block opacity-50 cursor-pointer transition-all duration-500 z-10"
            style={{
              transform: "translateX(-20%)",
            }}
          >
            <img
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt="Previous"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Current card (center, full size) */}
          <div className="w-full desktop:w-[90%] h-full z-20 transition-all duration-700 ease-in-out bg-transparent">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain desktop:object-cover  rounded-xl shadow-2xl"
            />
          </div>

          {/* Next card (partial view) */}
          <div
            className="absolute right-0 w-[60px] h-50 hidden desktop:block  opacity-50 cursor-pointer transition-all duration-500 z-10"
            style={{
              transform: "translateX(20%)",
            }}
          >
            <img
              src={images[(currentIndex + 1) % images.length]}
              alt="Next"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;