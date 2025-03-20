'use client';

import React, { useState, useEffect, useRef } from 'react';

const Carousel: React.FC = () => {
  // Default images as a simple string array
  const defaultImages: string[] = [
    '/images/turtle1.jpeg',
    '/images/turtle2.jpeg',
    '/images/turtle-hero.jpeg',
    '/images/turtle1-1.jpeg',
    '/images/turtle2-2.jpeg',
    '/images/turtle-hero2.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  console.log('current', currentIndex);

  // Function to get all slides in the correct order for infinite loop
  const getOrderedSlides = () => {
    const totalSlides = defaultImages.length;

    // Create an array with the last item, all items, first item
    // This creates the illusion of an infinite loop
    const lastItem = defaultImages[totalSlides - 1];
    const firstItem = defaultImages[0];

    return [lastItem, ...defaultImages, firstItem];
  };

  const orderedSlides = getOrderedSlides();

  // Navigate to the next slide
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) =>
        prev === defaultImages.length - 1 ? 0 : prev + 1,
      );
    }
  };

  // Navigate to the previous slide
  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) =>
        prev === 0 ? defaultImages.length - 1 : prev - 1,
      );
    }
  };

  // Handle dot navigation
  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  // Reset autoplay timer when user interacts
  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Setup autoplay and cleanup
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  // Handle transition end
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('transitionend', handleTransitionEnd);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out ml-[200px]"
        style={{
          transform: `translateX(-${(currentIndex + 1) * 950}px)`,

          width: `${orderedSlides.length * 950}px`,
          height: '1000px',
        }}
      >
        {orderedSlides.map((imageSrc, index) => {
          const isCurrent = index === currentIndex + 1;

          return (
            <div
              key={`slide-${index}`}
              className={`relative flex-grow-0 flex-shrink-0 transition-all duration-500 px-4 flex justify-center items-center`}
              style={{
                width: '950px',
                height: 'auto',
                transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                zIndex: isCurrent ? 10 : 0,
              }}
            >
              <img
                src={imageSrc}
                alt={`Slide ${index}`}
                className="w-[680px] h-[500px] rounded-lg object-fit"
                style={{
                  maxHeight: '80vh',
                  transition: 'all 0.5s ease',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => {
          prevSlide();
          resetAutoplay();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 hover:bg-opacity-70 transition-all"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={() => {
          nextSlide();
          resetAutoplay();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 hover:bg-opacity-70 transition-all"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {defaultImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              resetAutoplay();
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? 'w-6 bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
