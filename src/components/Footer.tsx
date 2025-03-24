import Image from 'next/image';

export default function Footer() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row w-full h-[380px] justify-between px-6 lg:px-[80px] py-[80px] py-[80px] lg:py-12 bg-[#00CAD7] custom-font-bold leading-[1.6] tracking-[0.02rem]">
      <div className="flex flex-col justify-between gap-2 ">
        <h1 className="text-[32px] lg:text-[40px] custom-font-black leading-[1.4]">
          Turtle Spot Taiwan
        </h1>
        <p className="custom-font-bold text-[#363841]">
          © 2021 Turtle Spot Taiwan
        </p>
      </div>
      <div className="flex items-end gap-10">
        <div className="flex flex-col gap-2 w-[220px]">
          <span className="hidden lg:block">contact us:</span>
          <span className="text-[22px] lg:text-lg">tstservice@gmail.com</span>
          <span className="text-[22px] lg:text-lg">Facebook</span>
          <span className="text-[22px] lg:text-lg">Instagram</span>
        </div>
        <div className="hidden lg:flex flex-col space-y-2 w-[220px]">
          <span>sponsor:</span>
          <Image
            width={120}
            height={105}
            src="/images/dream-fund.png"
            alt="dream-fund-logo"
          />
        </div>
      </div>
    </div>
  );
}
