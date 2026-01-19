"use client";
import { useEffect, useRef, useState } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    './images/card1.png',
    './images/card2.png',
    './images/card3.png',
  ];

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideFrameLeft {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
      
      @keyframes slideFrameRight {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(0);
        }
      }
      
      .animate-frame-slide-left {
        animation: slideFrameLeft 0.7s ease-in-out;
      }
      
      .animate-frame-slide-right {
        animation: slideFrameRight 0.7s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setSlideDirection('left');
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    if (!isHovered) startAutoScroll();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  // Reset slide direction after animation
  useEffect(() => {
    if (slideDirection) {
      const timer = setTimeout(() => setSlideDirection(null), 700);
      return () => clearTimeout(timer);
    }
  }, [slideDirection]);

  // Determine which cards to show based on current index
  const showPrevCard = currentIndex > 0;
  const showNextCard = currentIndex < images.length - 1;

  // Determine center card width and positioning based on which cards are visible
  const getCenterCardStyles = () => {
    if (showPrevCard && showNextCard) {
      return {
        width: "desktop:w-[90%]",
        margin: "desktop:mx-auto",
        containerWidth: "60px",
        gap: "0px"
      };
    } else if (showPrevCard && !showNextCard) {
      return {
        width: "desktop:w-[calc(100%-40px)]",
        margin: "desktop:ml-[200px]",
        containerWidth: "210px",
        gap: "40px"
      };
    } else if (!showPrevCard && showNextCard) {
      return {
        width: "desktop:w-[calc(100%-40px)]",
        margin: "desktop:mr-[200px]",
        containerWidth: "210px",
        gap: "40px"
      };
    } else {
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
        {/* Main carousel wrapper - Apply animation to entire frame */}
        <div 
          className={`relative desktop:h-[230px] flex items-center justify-center ${
            slideDirection === 'left' ? 'animate-frame-slide-left' : 
            slideDirection === 'right' ? 'animate-frame-slide-right' : ''
          }`}
          key={currentIndex}
        >
          {/* Previous card (partial view) - Only show if not first image */}
          {showPrevCard && (
            <div
              className="absolute left-0 h-50 hidden desktop:block cursor-pointer transition-all duration-500 z-10"
              style={{
                transform: "translateX(-20%)",
                width: `${centerCardStyles.containerWidth}`,
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
          <div 
            className={`w-full ${centerCardStyles.width} h-full z-20 transition-all duration-700 ease-in-out bg-transparent ${centerCardStyles.margin}`}
          >
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
