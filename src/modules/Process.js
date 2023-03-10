import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { Collab, Easy, SaveTime } from "../assets/icons";
import { Easy1, Integrate, SaveTimeI } from "../assets/images";
import { ItemProcess } from "../components";
import useScrollFadeIn from "../hook/useScrollFadeIn";

const data = [
  {
    img1: SaveTimeI,
    title: "Tiết kiệm thời gian",
    iconTop: SaveTime,
    x: true,
  },
  {
    img1: Easy1,
    title: "Dễ dàng sử dụng",
    iconTop: Easy,
  },
  {
    img1: Integrate,
    title: "Tích hợp nhiều tiện ích",
    iconTop: Collab,
  },
];

const Process = () => {
  const refA = useScrollFadeIn("animate__swing", 600);
  return (
    <div className="container w-full ">
      <div className="py-[40px] md:py-[100px]">
        <h1 className="mb-[40px] md:mb-[60px] text-[#001238] text-center text-2xl md:text-4xl font-bold">
          Phần mền đơn giản, tính năng mạnh mẽ
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[50px]  ">
          {data.map((item, idx) => (
            <ItemProcess
              key={idx}
              idx={idx}
              icon={item.iconTop}
              title={item.title}
              img1={item.img1}
              className=""
              x={item?.x ? item.x : false}
            />
          ))}
          <div
            ref={refA}
            className={`h-[327px] lg:h-[497px] xl:hidden bg-white   animate__animated opacity-1 `}
          >
            <div className="flex flex-col h-full gap-5 p-5 border lg:gap-10">
              <div className="mt-3 text-xl font-bold text-center lg:mt-10 md:">
                Liên hệ với chúng tôi
              </div>
              <div className="flex items-center w-full gap-5">
                <span>
                  <CiUser size={28} />
                </span>
                <input
                  className="w-full text-sm md:text-base p-2 border-b outline-none placeholder:font-medium lg:placeholder:font-bold placeholder:text-[#000000]"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div className="flex items-center w-full gap-5 ">
                <span>
                  <AiOutlinePhone size={28} />
                </span>
                <input
                  className="w-full text-sm md:text-base p-2 placeholder:font-medium border-b outline-none lg:placeholder:font-bold placeholder:text-[#000000]"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="flex items-center w-full gap-5">
                <span>
                  <AiOutlineMail size={28} />
                </span>
                <input
                  className="w-full p-2 text-sm md:text-base border-b outline-none  placeholder:font-medium lg:placeholder:font-bold placeholder:text-[#000000]"
                  placeholder="Email"
                />
              </div>
              <button className="py-2 mt-2 font-semibold text-white bg-blue-500 rounded hover:text-gray-300 lg:mt-4 lg:py-3 lg:text-2xl bg">
                Đăng ký ngay{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
