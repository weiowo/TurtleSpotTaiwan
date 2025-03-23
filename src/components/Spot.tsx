import React from 'react';
import cn from '@/lib/cn';

interface Spot {
  text: string;
  subText?: string;
  className?: string;
  position?: string;
  pinBaseClassName?: string;
}

export default function Spot({
  text,
  subText,
  className,
  position,
  pinBaseClassName,
}: Spot) {
  return (
    <div className={cn('absolute inline-flex flex-col items-center', position)}>
      <div
        className={cn(
          'relative w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] bg-[#AAF5FA] rounded-r-full rounded-tl-full flex items-center justify-center transform -rotate-45',
          className,
        )}
      >
        <div className="flex flex-col items-center justify-center w-full h-full transform rotate-45">
          {subText && (
            <div className="text-base custom-font-medium">{subText}</div>
          )}
          <div className="text-[28px] lg:text-[40px] custom-font-bold leading-[1.6] tracking-[0.02rem] lg:leading-[1.4] lg:tracking-0">
            {text}
          </div>
        </div>
      </div>
      <div
        className={cn(
          'h-6 w-[80px] lg:h-10 lg:w-[120px] bg-[#AAF5FA] rounded-[50%] mt-14 lg:mt-20',
          pinBaseClassName,
        )}
      ></div>
    </div>
  );
}
