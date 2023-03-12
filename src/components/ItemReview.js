import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Avatar_Custormer, Comma } from "../assets/images";

const ItemReview = () => {
  return (
    <div className="md:w-[256px] w-[226px] md:h-[246px] h-[216px] shadow-lg rounded-md p-4 bg-white relative">
      <div>
        <div className="flex justify-between mb-2">
          <img
            src={Avatar_Custormer}
            className="w-[60px] h-[60px]  object-cover"
            alt=""
          />

          <div className="flex gap-1 items-center  h-[40px]">
            <AiFillStar color={"#F4A71D"} size={18} />
            <span className="text-base">4.5</span>
          </div>
        </div>
        <h2 className="text-[13px] text-[#051441] mb-1 font-bold">
          Mark Parker
        </h2>
        <p className="font-medium text-[#949CB7] mb-2 text-[10px]">
          CEO of Fiverr
        </p>
        <p className="font-normal text-[#79899D] text-[12px]">
          Cura bitur susci pit nequeut lacus interd sit amet dictum nunc
          eleifend. Mauris pulvinar odio at nunc labortis.
        </p>
      </div>
      <img
        src={Comma}
        className="w-[19px] h-[19px]  object-cover absolute bottom-[23px] right-[34px]"
        alt=""
      />
    </div>
  );
};

export default ItemReview;
