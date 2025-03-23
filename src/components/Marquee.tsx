import React, { ReactNode } from 'react';
import cn from '@/lib/cn';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

export default function Marquee({ children, className }: MarqueeProps) {
  return (
    <div
      className={cn(
        'marquee-container absolute w-full h-full flex items-center justify-center custom-font-bold leading-[1.2] text-white text-[80px] md:text-[120px] lg:text-[200px]',
        className,
      )}
    >
      <div className="track">{children}</div>
    </div>
  );
}
