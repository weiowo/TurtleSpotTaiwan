import React from 'react';
import Image from 'next/image';

export default function TurtleProfile() {
  return (
    <div className="w-full px-0 md:px-10 lg:px-0 flex flex-cpl items-center justify-center">
      <div className="w-full max-w-[922px] h-full lg:h-[800px] rounded-lg">
        <div className="bg-secondary-100 p-4 w-full lg:w-1/3 rounded-t-[20px]">
          <h1 className="text-xl custom-font-bold text-center space-x-4 leading-[1.6] tracking-[0.02rem]">
            <span>淡定哥</span>
            <span>#TW01H0064</span>
          </h1>
        </div>
        <div className="text-lg bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:p-10 lg:pt-[35px]">
          <div className="space-y-6">
            <div className="border-b pb-4 border-b-primary-300">
              名字：淡定哥
            </div>
            <div className="border-b pb-4 border-b-primary-300">
              體型：成年龜
            </div>
            <div className="border-b pb-4 border-b-primary-300">
              右臉鱗片：眼下四片
            </div>
            <div className="border-b pb-4 border-b-primary-300">
              命名者：Chun-Ting Jeffery Liu
            </div>
          </div>
          <div className="space-y-6 text-lg">
            <div className="border-b pb-4 border-b-primary-300">
              品種：綠蠵龜
            </div>

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
          <div className="col-span-1 md:col-span-2 border-b pb-4 border-b-primary-300">
            <p className="text-lg">
              外型特徵：背甲中間受傷，2017/03/24記錄到時已經有受傷了，目前看起來還沒好。
            </p>
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-lg custom-font-bold">左臉：</p>
            <div className="relative w-[327px] h-[240px] md:w-[312px] md:h-[200px] lg:h-[262px] lg:w-[409px]">
              <Image
                src="/images/turtle1.jpeg"
                alt="turtle1"
                fill
                className="rounded object-cover"
              />
            </div>
            <div className="hidden md:block mt-4 h-[1px] w-full bg-primary-300" />
          </div>
          <div className="col-span-1 space-y-4">
            <p className="text-lg custom-font-bold">右臉：</p>
            <div className="relative w-[327px] h-[240px] md:w-[312px] md:h-[200px] lg:h-[262px] lg:w-[409px]">
  <Image
    src="/images/turtle2.jpeg"
    alt="turtle2"
    fill
    className="rounded object-cover"
  />
</div>

            <div className="hidden md:block mt-4 h-[1px] w-full bg-primary-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
