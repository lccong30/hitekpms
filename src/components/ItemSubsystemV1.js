import React, { useState } from "react";
import { Collapse } from "react-collapse";

const ItemSubsystemV1 = ({ title, content, img }) => {
  const [isReadMore, setReadMore] = useState(false);
  return (
    <div className="flex flex-col px-5 py-5 text-xl subsystem__card">
      <img
        className="mb-6    xl:h-[460px] lg:h-[340px] object-cover w-full rounded-lg border"
        src={img}
        alt=""
      />
      <h1 className="mb-3 text-lg leading-normal sm:text-2xl text-[#363636] font-bold ">
        {title}
      </h1>
      <p className="flex-grow">{content.split(":")[0]}</p>
      {/* {content
          .split(":")
          .slice(1)
          .map((item) => (
            <p className="mb-5 ">{item}</p>
          ))} */}
      <Collapse className="" isOpened={isReadMore}>
        {content
          .split(":")
          .slice(1)
          .map((item) => (
            <span className="flex gap-2 mb-3 ">{item}</span>
          ))}
      </Collapse>{" "}
      <button
        onClick={() => setReadMore(!isReadMore)}
        className="button-62 w-[150px]  transition duration-500 ease-in-out"
      >
        {isReadMore ? "Thu gọn" : " Đọc thêm"}
      </button>
    </div>
  );
};

export default ItemSubsystemV1;
