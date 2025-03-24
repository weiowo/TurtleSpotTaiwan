'use client';

import React, { useState, useEffect, useRef } from 'react';
import { stories } from '@/lib/constants';
import Marquee from './Marquee';
import Logo from '@/components/icons/logo.svg';

export default function InstagramStoryUI() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goToNextStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextStory();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentStoryIndex]);

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch end and detect swipe direction
  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;

    if (deltaX > 50) {
      goToPrevStory(); // Swipe Right → Go to Previous Story
    } else if (deltaX < -50) {
      goToNextStory(); // Swipe Left → Go to Next Story
    }
  };

  const currentStory = stories[currentStoryIndex];

  return (
    <div
      className="w-full overflow-hidden relative flex items-center justify-center h-[536px] md:h-[760px] bg-primary-300 leading-[1.6] tracking-[0.02rem]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Marquee>Witness story Witness story</Marquee>
      <div className="absolute bottom-0 flex items-center gap-2 lg:gap-10">
        <button
          onClick={goToPrevStory}
          className="hidden md:flex w-[80px] h-[80px] items-center justify-center bg-secondary-500 rounded-full text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          aria-label="Previous story"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="rounded-t-3xl overflow-hidden w-[311px] h-[496px] md:w-[512px] md:h-[680px] lg:w-[560px] shadow-2xl mx-auto">
          <div
            className={`${currentStory.bgColor} h-full relative px-4 md:px-6 py-10`}
          >
            <div className="flex space-x-1">
              {stories.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full ${
                    index === currentStoryIndex
                      ? 'bg-primary-300'
                      : 'bg-[#363841]'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center mt-3 text-white">
              <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center">
                <Logo className="h-[22px] w-[22px] text-secondary-500" />
              </div>
              <span className="ml-3 text-secondary-300 leading-[1.8]">
                目擊動態
              </span>
            </div>
            <div className="flex justify-center mt-[44px] custom-font-bold leading-[1.6] tracking-[0.02rem]">
              <p className="text-xl text-white md:text-3xl font-bold">
                {currentStory.date}
              </p>
            </div>
            <div className="flex flex-col items-center mt-10 gap-4 custom-font-bold leading-[1.6] tracking-[0.02rem] text-lg md:text-[28px]">
              <div className="bg-white px-4 py-1 md:px-5 md:py-2">
                {currentStory.title}
              </div>
              <div className="bg-white px-4 py-1 md:px-5 md:py-2">
                {currentStory.subtitle}
              </div>
            </div>
            <div className="absolute bottom-16 left-0 right-0 flex justify-center custom-font-bold leading-[1.6] tracking-[0.02rem]">
              <button className="bg-primary-300 text-secondary-500 px-8 py-3 rounded-full text-lg">
                VIEW POST
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={goToNextStory}
          className="hidden md:flex w-[80px] h-[80px] flex items-center justify-center bg-secondary-500 rounded-full text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          aria-label="Next story"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
