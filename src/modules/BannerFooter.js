import React from "react";

const BannerFooter = () => {
  return (
    <>
      <div className="relative w-full bg-blue-500 py-[100px] text-center">
        <h2 className="font-bold text-center text-gray-400 scale-text text-[30px] sm:text-[120px] md:text-[200px]">
          HITEK PMS
        </h2>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 bg-opacity-60">
          <div className="absolute z-10 flex flex-col items-center gap-5 md:gap-10 left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
            <span className="text-xl font-bold text-red-800 uppercase">
              HiTek Solution
            </span>
            <h1 className="text-3xl font-semibold text-white md:text-6xl whitespace-nowrap">
              Phần mền quản lý tòa nhà
            </h1>
            <p className="text-sm font-semibold text-gray-100 md:text-xl">
              Phần mềm của chúng tôi là một giải pháp hoàn hảo cho việc quản lý
              tòa nhà của bạn. Là công cụ hỗ trợ để giúp bạn quản lý tòa nhà của
              bạn hiệu quả hơn và giúp bạn luôn đảm bảo rằng tòa nhà của bạn
              hoạt động tốt nhất.
            </p>
            <button className="px-10 py-5 text-lg font-semibold text-black bg-yellow-500 border border-black">
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerFooter;
