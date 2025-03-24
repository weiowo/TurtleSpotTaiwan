'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';
import Marquee from './Marquee';
import Logo from '@/components/icons/logo.svg';
import Link from 'next/link';
import ArrowLeft from '@/components/icons/arrow-left.svg';
import ArrowRight from '@/components/icons/arrow-right.svg';
import { Activity } from '@/lib/constants';

const GET_ACTIVITIES_DATA = gql`
  {
    activities {
      date
      title
      description
      post_link
    }
  }
`;

export default function InstagramStoryUI() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const { data, loading, error } = useQuery<{ activities: Activity[] }>(
    GET_ACTIVITIES_DATA,
    { client },
  );
  const activities = data?.activities || [];

  const goToNextStory = useCallback(() => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === activities.length - 1 ? 0 : prevIndex + 1,
    );
  }, [activities.length]);

  const goToPrevStory = () => {
    setCurrentStoryIndex((prevIndex) =>
      prevIndex === 0 ? activities.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextStory();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentStoryIndex, goToNextStory]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const deltaX = touchEndX.current - touchStartX.current;

    if (deltaX > 50) {
      goToPrevStory();
    } else if (deltaX < -50) {
      goToNextStory();
    }
  };

  const currentStory = activities[currentStoryIndex];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
          <ArrowLeft className="h-10 w-10" />
        </button>
        <div className="rounded-t-3xl overflow-hidden w-[311px] h-[496px] md:w-[512px] md:h-[680px] lg:w-[560px] shadow-2xl mx-auto">
          <div className="bg-secondary-500 h-full relative px-4 md:px-6 py-10">
            <div className="flex space-x-1">
              {activities.map((_, index) => (
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
            {currentStory?.date && (
              <div className="flex justify-center mt-[44px] custom-font-bold leading-[1.6] tracking-[0.02rem] text-xl text-white md:text-3xl">
                {currentStory?.date || ''}
              </div>
            )}
            <div className="flex flex-col items-center mt-10 gap-4 custom-font-bold leading-[1.6] tracking-[0.02rem] text-lg md:text-[28px]">
              {currentStory?.title && (
                <div className="bg-white px-4 py-1 md:px-5 md:py-2">
                  {currentStory?.title || ''}
                </div>
              )}
              {currentStory?.description && (
                <div className="bg-white px-4 py-1 md:px-5 md:py-2">
                  {currentStory?.description || ''}
                </div>
              )}
            </div>
            <div className="absolute bottom-16 left-0 right-0 flex justify-center custom-font-bold leading-[1.6] tracking-[0.02rem]">
              <Link
                href={currentStory?.post_link || '/'}
                className="bg-primary-300 text-secondary-500 px-8 py-3 rounded-full text-lg"
              >
                VIEW POST
              </Link>
            </div>
          </div>
        </div>
        <button
          onClick={goToNextStory}
          className="hidden md:flex w-[80px] h-[80px] flex items-center justify-center bg-secondary-500 rounded-full text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          aria-label="Next story"
        >
          <ArrowRight className="h-10 w-10" />
        </button>
      </div>
    </div>
  );
}
