import React from "react";
import useScrollFadeIn from "../hook/useScrollFadeIn";

const ItemProcess = ({ img1, className = "", title, icon, x }) => {
  const refA = useScrollFadeIn("animate__swing", 600);

  return (
    <div
      className={`h-[327px] lg:h-[497px]  bg-[#F5F5F7] pb-2 animate__animated opacity-1 rounded`}
      ref={refA}
    >
      <div className="flex flex-col justify-between h-full overflow-hidden">
        <div className="flex flex-col items-center pt-[20px] px-[30px]">
          <h3 className="mb-10 text-2xl ">
            {<img src={icon} alt="" className={`w-20 h-20 ${className}`} />}
          </h3>
          <h2 className="w-full text-xl font-medium text-center md:text-xl lg:text-2xl whitespace-nowrap">
            {title}
          </h2>
        </div>
        <img
          className={` mx-auto ${
            x ? "h-[230px] lg:h-[360px]" : "h-[170px] lg:h-[280px] "
          }`}
          src={img1}
          alt=""
        />
      </div>
    </div>
  );
};

export default ItemProcess;
