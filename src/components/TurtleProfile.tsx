import React from 'react';
import Image from 'next/image';

export default function TurtleProfile() {
  return (
    <div className="w-full max-w-[922px] h-[800px] rounded-lg">
      <div className="bg-gray-200 p-4 w-full lg:w-1/3 rounded-t-[20px]">
        <h1 className="text-xl custom-font-bold text-center space-x-4 leading-[1.6] tracking-[0.02rem]">
          <span>淡定哥</span>
          <span>#TW01H0064</span>
        </h1>
      </div>
      <div className="text-lg bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-10 pt-[35px]">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="border-b pb-4 border-b-primary-300">名字：淡定哥</div>

          <div className="border-b pb-4 border-b-primary-300">體型：成年龜</div>

          <div className="border-b pb-4 border-b-primary-300">
            右臉鱗片：眼下四片
          </div>

          <div className="border-b pb-4 border-b-primary-300">
            命名者：Chun-Ting Jeffery Liu
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 text-lg">
          <div className="border-b pb-4 border-b-primary-300">品種：綠蠵龜</div>

          <div className="border-b pb-4 border-b-primary-300">
            背甲花紋：迷彩
          </div>

          <div className="border-b pb-4 border-b-primary-300">
            左臉鱗片：眼下三片
          </div>

          <div className="border-b pb-4 border-b-primary-300">
            回報者：陳坤田
          </div>
        </div>

        {/* Full-width description */}
        <div className="col-span-1 md:col-span-2 border-b pb-4 border-b-primary-300">
          <p className="text-lg">
            外型特徵：背甲中間受傷，2017/03/24記錄到時已經有受傷了，目前看起來還沒好。
          </p>
        </div>

        {/* Turtle Images Section */}
        <div className="col-span-1 space-y-4">
          <p className="text-lg custom-font-bold">左臉：</p>
          <div className="relative h-[262px] w-full">
            <Image
              src="/images/turtle1.jpeg"
              alt="turtle1"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
        <div className="col-span-1 space-y-4">
          <p className="text-lg custom-font-bold">右臉：</p>
          <div className="relative h-[262px] w-full">
            <Image
              src="/images/turtle2.jpeg"
              alt="turtle2"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
