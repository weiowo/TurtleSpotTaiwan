'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/logo.svg';
import cn from '@/lib/cn';
import Audio from '@/components/icons/audio.svg';
import Hamburger from '@/components/icons/hamburger.svg';
import Close from '@/components/icons/close.svg';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const currentPath = usePathname();

  return (
    <div className="w-full">
      <header
        className={cn(
          'w-full h-10 lg:h-16 relative transition-colors duration-300 flex items-center justify-between custom-font-bold ',
          isMenuOpen ? 'bg-secondary-500' : 'bg-primary-300',
        )}
      >
        <Link
          href="/"
          passHref
          className="flex items-center gap-2 lg:gap-4 text-2xl px-4 py-2 lg:py-[15px]"
        >
          <button
            className={cn(
              isMenuOpen ? 'text-secondary-50' : 'text-secondary-500',
            )}
          >
            <Logo className="h-[22px] w-[22px]" />
          </button>
          <h1
            className={cn(
              'text-base lg:text-2xl transition-colors duration-300 custom-font-black ',
              isMenuOpen ? 'text-secondary-50' : 'text-secondary-500',
            )}
          >
            Turtle Spot Taiwan
          </h1>
        </Link>

        <div className="flex items-center text-secondary-50 bg-secondary-500 text-primary-50 h-full custom-font-bold tracking-[0.1rem] rounded-bl-2xl">
          <button className="px-3 lg:px-[26px] h-full">EN</button>
          <button className="px-3 lg:px-[26px] border-x border-[#363841] h-full">
            <Audio
              className={cn(
                'h-6 w-6',
                isMenuOpen ? 'text-secondary-50' : 'text-[#000000]',
              )}
            />
          </button>
          <button
            onClick={toggleMenu}
            className="flex items-center gap-[10px] px-3 lg:px-[26px] h-full"
          >
            {isMenuOpen ? (
              <Close className="h-6 w-6" />
            ) : (
              <Hamburger className="h-6 w-6" />
            )}
            <span className="hidden lg:block">MENU</span>
          </button>
        </div>
      </header>
      <div
        className={cn(
          'bg-secondary-500 w-full text-white overflow-hidden transition-all duration-300 ease-in-out rounded-b-3xl lg:rounded-b-[40px]',
          isMenuOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        <div className="max-w-[1038px] mx-auto p-10 lg:py-[120px] lg:px-5 xl:px-0">
          <div className="flex-col items-end flex lg:flex-row lg:justify-between gap-4 lg:gap-[80px]">
            {[
              { label: '海龜地圖', text: 'Map', link: '/' },
              { label: '文章分享', text: 'Article', link: '/articles' },
              { label: '關於我們', text: 'About', link: '/about-us' },
              { label: '教育資源', text: 'Resources', link: '/resources' },
              {
                label: '目擊回報',
                text: 'Report Sightings',
                link: 'whitness-report',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  'flex flex-col',
                  currentPath === item?.link
                    ? 'text-primary-300'
                    : 'text-secondary-100',
                )}
              >
                <span className="text-base lg:text-lg">{item.label}</span>
                <a
                  href={item.link}
                  className="hidden lg:block text-[32px] font-bold mt-1 hover:underline"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end text-secondary-100 lg:flex-row lg:justify-left gap-10 lg:gap-[80px] mt-10 lg:mt-[80px]">
            <div className="flex flex-col">
              <span className="text-base">聯絡我們 —</span>
              <a
                href="mailto:info@gmail.com"
                className="text-base lg:text-2xl mt-1 lg:mt-2 hover:underline custom-font-bold"
              >
                info@gmail.com
              </a>
            </div>

            <div className="flex flex-col">
              <span className="text-base">追蹤我們 —</span>
              <div className="text-base lg:text-2xl mt-1 lg:mt-2 custom-font-bold">
                <a href="#" className="hover:underline">
                  facebook
                </a>{' '}
                /{' '}
                <a href="#" className="hover:underline">
                  instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
