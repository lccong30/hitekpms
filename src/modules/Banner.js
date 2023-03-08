import React from "react";
import { BannerI, Banner2 } from "../assets/images";

const Banner = () => {
  return (
    <div className="container">
      <div className="md:flex flex flex-col-reverse lg:flex-row  justify-between py-[90px] md:py-[150px]   ">
        <div className=" w-full lg:w-[45%] flex flex-col gap-5  md:gap-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mt-[40px] md:mt-[100px]  animate__animated animate__flipInX">
            HiTek PMS <br />
            Sự lựa chọn hoàn hảo cho quản lý tòa nhà thông minh.
          </h1>
          <p className="text-base font-medium text-gray-500 md:text-xl animate__animated animate__jello">
            Quản lý tòa nhà là một công việc quan trọng và đòi hỏi nhiều thời
            gian, tài nguyên. Tuy nhiên, với giải pháp phần mềm quản lý tòa nhà
            thông minh, việc quản lý tòa nhà trở nên dễ dàng và tiện lợi hơn bao
            giờ hết.
          </p>
          <div>
            <div className="flex gap-3 p-2 border border-black rounded animate__animated animate__pulse">
              <input
                type={"email"}
                required
                className="w-[70%] border-none outline-none"
                placeholder="abc@gmail.com "
              />
              <button
                // onClick={onClick}
                className="w-[35%] px-1 py-2 text-lg h-full md:p-5 md:px-3 rounded-xl text-white font-semibold bg-blue-600   "
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
        <img
          className=" w-full mt-5 md:mt-0 lg:w-[49%] object-contain animate__animated  animate__bounceInRight"
          src={BannerI}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
