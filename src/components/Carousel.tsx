'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ArrowLeft from '@/components/icons/arrow-left.svg';
import ArrowRight from '@/components/icons/arrow-right.svg';
import { defaultImages } from '@/lib/constants';
import Image from 'next/image';
import cn from '@/lib/cn';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [dimension, setDimension] = useState({
    translateValue: '0px',
    width: '832px',
    containerWidth: '832px',
  });
  const [marginLeft, setMarginLeft] = useState('1px');
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const orderedSlides = [
    defaultImages[defaultImages.length - 1],
    ...defaultImages,
    defaultImages[0],
  ];
  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) =>
        prev === defaultImages.length - 1 ? 0 : prev + 1,
      );
    }
  }, [isTransitioning]);

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) =>
        prev === 0 ? defaultImages.length - 1 : prev - 1,
      );
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
    }
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(nextSlide, 5000);
    }
  };

  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [nextSlide]);

  useEffect(() => {
    const handleTransitionEnd = () => setIsTransitioning(false);
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

  useEffect(() => {
    const updateTransform = () => {
      if (window.innerWidth < 768) {
        setDimension({
          translateValue: `-${(currentIndex + 1) * (100 / orderedSlides.length)}%`,
          width: `${100 / orderedSlides.length}%`,
          containerWidth: `${orderedSlides.length * 100}%`,
        });
      } else {
        setDimension({
          translateValue: `-${(currentIndex + 1) * 944}px`,
          width: '944px',
          containerWidth: `${orderedSlides.length * 944}px`,
        });
      }
    };

    updateTransform();
    window.addEventListener('resize', updateTransform);
    return () => window.removeEventListener('resize', updateTransform);
  }, [currentIndex, orderedSlides.length]);

  useEffect(() => {
    const updateMarginLeft = () => {
      if (window.innerWidth < 768) {
        setMarginLeft('1px');
      } else {
        setMarginLeft(`calc(50% - (${dimension.width} / 2))`);
      }
    };

    updateMarginLeft();
    window.addEventListener('resize', updateMarginLeft);
    return () => window.removeEventListener('resize', updateMarginLeft);
  }, [dimension.width]);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
      resetAutoplay();
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide();
      resetAutoplay();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) =>
    setTouchEndX(e.changedTouches[0].clientX);

  return (
    <div className="h-[473px] md:h-[748px] lg:h-[790px] bg-secondary-500 w-full">
      <div className="h-full bg-secondary-100 lg:rounded-b-[40px] w-full flex items-center flex-col justify-center">
        <div
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden w-full"
        >
          <div
            className="flex transition-transform duration-500 ease-in-out rounded-lg h-[260px] md:h-[530px] lg:h-[540px]"
            style={{
              transform: `translateX(${dimension.translateValue})`,
              width: dimension.containerWidth,
              marginLeft: marginLeft,
            }}
          >
            {orderedSlides.map((item, index) => {
              const isCurrent = index === currentIndex + 1;

              return (
                <div
                  key={`slide-${index}`}
                  className={cn(
                    'relative flex-grow-0 flex-shrink-0 transition-all rounded-lg duration-500 px-4 flex justify-center items-center',
                    isCurrent ? '' : 'opacity-50',
                  )}
                  style={{
                    width: dimension.width,
                    transform: isCurrent ? `scale(${720 / 680})` : 'scale(1)',
                  }}
                >
                  <Image
                    src={item?.imageUrl}
                    alt={`Slide ${index}`}
                    className="w-[310px] h-[235px] md:w-[650px] md:h-[495px] lg:w-[680px] lg:h-[510px] rounded-lg object-fit"
                    style={{ transition: 'all 0.5s ease' }}
                    width={680}
                    height={510}
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              prevSlide();
              resetAutoplay();
            }}
            className="absolute top-1/2 -translate-y-1/2 bg-secondary-500 text-white hidden lg:flex lg:left-10 xl:left-[calc(50%-(944px/2)-48px)] w-16 h-16 rounded-full items-center justify-center z-20 transition-all"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-10 w-10 text-secondary-50" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              resetAutoplay();
            }}
            className="absolute top-1/2 -translate-y-1/2 bg-secondary-500 text-white hidden lg:flex lg:right-10 xl:right-[calc(50%-(944px/2)-48px)] w-16 h-16 rounded-full flex items-center justify-center z-20 transition-all"
            aria-label="Next slide"
          >
            <ArrowRight className="h-10 w-10 text-secondary-50" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={() => {
              prevSlide();
              resetAutoplay();
            }}
            className="bg-secondary-500 text-white lg:hidden w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all"
            aria-label="Next slide"
          >
            <ArrowLeft className="h-6 w-6 text-secondary-50" />
          </button>

          <div className="flex space-x-[6px] lg:space-x-[10px] z-20 mt-10 h-full">
            {defaultImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  goToSlide(index);
                  resetAutoplay();
                }}
                className={cn(
                  'w-[6px] h-[6px] lg:w-[10px] lg:h-[10px] rounded-full transition-all',
                  currentIndex === index
                    ? 'w-3 lg:w-6 bg-secondary-500'
                    : 'bg-white',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => {
              nextSlide();
              resetAutoplay();
            }}
            className="bg-secondary-500 text-white lg:hidden w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all"
            aria-label="Next slide"
          >
            <ArrowRight className="h-6 w-6 text-secondary-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
