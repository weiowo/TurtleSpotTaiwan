import React from 'react';
import Marquee from './Marquee';
import Spot from './Spot';

export default function Location() {
  return (
    <div className="relative w-full h-[764px] lg:h-[840px] rounded-b-[40px] bg-secondary-500 overflow-hidden flex items-center">
      <Marquee className="text-secondary-300">
        Favorite Dive Site Favorite Dive Site
      </Marquee>
      <Spot
        text="花瓶岩"
        subText="最愛潛點"
        position="top-[80px] left-1/2 -translate-x-1/2 md:left-[88px] lg:left-[150px] md:translate-x-0"
      />
      <Spot
        text="美人洞"
        subText="最愛潛點"
        className="bg-white"
        pinBaseClassName="bg-white"
        position="bottom-[80px] right-1/2 translate-x-1/2 md:right-[88px] lg:right-[150px] md:translate-x-0"
      />
    </div>
  );
}
