import React from 'react';
import Marquee from './Marquee';

export default function Banner() {
  return (
    <div className="relative w-full h-[560px] rounded-lg overflow-hidden flex items-center">
      <Marquee className="text-white">
        Information Information Information Information
      </Marquee>
      <div className="bg-[url('/images/turtle-hero.jpeg')] w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border-[6px] border-white bg-cover bg-no-repeat bg-[right_60%_top] transform scale-x-[-1] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}
