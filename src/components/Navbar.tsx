'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center px-6">
      <div className="w-full h-16 flex items-center justify-between">
        <Link
          href="/"
          passHref
          className="flex items-center gap-4 text-2xl font-bold"
        >
          <Image
            src="/images/logo.png"
            alt="turtle spot Logo"
            width={22}
            height={22}
          />
          <span className="satoshi-black">Turtle Spot Taiwan</span>
        </Link>

        <div className="md:hidden">
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            <div className="flex flex-col gap-[5.4px]">
              <div
                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                  open && 'rotate-45'
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                  open && 'opacity-0'
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                  open && '-rotate-45'
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
