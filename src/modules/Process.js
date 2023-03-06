import React from "react";
import { Collab, Easy, SaveTime } from "../assets/icons";
import { ItemProcess } from "../components";

const data = [
  {
    img1: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/sf_01.png",
    title: "Tiết kiệm thời gian",
    iconTop: SaveTime,
  },
  {
    img1: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/sf_02.png",
    title: "Dễ dàng sử dụng",
    iconTop: Easy,
  },
  {
    img1: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/sf_03.png",
    title: "Tích hợp nhiều tiện ích",
    iconTop: Collab,
  },
];

const Process = () => {
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
