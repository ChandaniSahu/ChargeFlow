"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    "/images/card1.png",
    "/images/card2.png",
    "/images/card3.png",
  ];

  // start / restart auto scroll
  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    if (!isHovered) startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <div
      className="w-full h-[400px] border border-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
  <div
    key={index}
    className="w-full min-w-9xl h-[400px] flex-shrink-0"
  >
   <img src={src} alt={`Slide ${index + 1}`} className="object-cover rounded-xl" />
  </div>
))}
      </div>
    </div>
  );
};

export default ImageCarousel;
