import React from 'react';

export default function Banner() {
  return (
    <div className="relative w-full h-[560px] rounded-lg overflow-hidden flex items-center">
      <div className="marquee-container absolute w-full h-full flex items-center justify-center custom-font-bold leading-[1.2] text-white text-[200px]">
        <div className="track">
          Information Information Information Information
        </div>
      </div>
      <div className="bg-[url('/images/turtle-hero.jpeg')] w-[400px] h-[400px] rounded-full border-[6px] border-white bg-cover bg-no-repeat bg-[right_60%_top] transform scale-x-[-1] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}
