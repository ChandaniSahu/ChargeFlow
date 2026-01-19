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

  // Determine which cards to show based on current index
  const showPrevCard = currentIndex > 0; // Don't show prev when index is 0
  const showNextCard = currentIndex < images.length - 1; // Don't show next when index is last

  // Determine center card width and positioning based on which cards are visible
  const getCenterCardStyles = () => {
    if (showPrevCard && showNextCard) {
      // Both prev and next are visible
      return {
        width: "desktop:w-[90%]",
        margin: "desktop:mx-auto",
        containerWidth: "60px",
        gap: "0px" // no extra gap when both sides visible
      };
    } else if (showPrevCard && !showNextCard) {
      // Only prev is visible
      return {
        width: "desktop:w-[calc(100%-40px)]", // Slightly narrower to create gap
        margin: "desktop:ml-[200px]", // Add margin to create gap
        containerWidth: "210px",
        gap: "40px" // gap between prev and center
      };
    } else if (!showPrevCard && showNextCard) {
      // Only next is visible
      return {
        width: "desktop:w-[calc(100%-40px)]", // Slightly narrower to create gap
        margin: "desktop:mr-[200px]", // Add margin to create gap
        containerWidth: "210px",
        gap: "40px" // gap between center and next
      };
    } else {
      // Neither prev nor next (edge case for single image)
      return {
        width: "desktop:w-[90%]",
        margin: "desktop:mx-auto",
        containerWidth: "60px",
        gap: "0px"
      };
    }
  };

  const centerCardStyles = getCenterCardStyles();

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
          {/* Previous card (partial view) - Only show if not first image */}
          {showPrevCard && (
            <div
              className="absolute left-0 h-50 hidden desktop:block cursor-pointer transition-all duration-500 z-10"
              style={{
                transform: "translateX(-20%)",
                width: `${centerCardStyles.containerWidth}`,
                // Add right margin when only prev is showing to create gap
                marginRight: centerCardStyles.gap !== "0px" && !showNextCard ? centerCardStyles.gap : "0px"
              }}
            >
              <img
                src={images[currentIndex - 1]}
                alt="Previous"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}

          {/* Current card (center, full size) */}
          <div className={`w-full ${centerCardStyles.width} h-full z-20 transition-all duration-700 ease-in-out bg-transparent ${centerCardStyles.margin}`}>
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain desktop:object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Next card (partial view) - Only show if not last image */}
          {showNextCard && (
            <div
              className="absolute right-0 h-50 hidden desktop:block cursor-pointer transition-all duration-500 z-10"
              style={{
                transform: "translateX(20%)",
                width: `${centerCardStyles.containerWidth}`,
                // Add left margin when only next is showing to create gap
                marginLeft: centerCardStyles.gap !== "0px" && !showPrevCard ? centerCardStyles.gap : "0px"
              }}
            >
              <img
                src={images[currentIndex + 1]}
                alt="Next"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;