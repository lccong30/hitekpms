import React, { useState } from "react";
import { Collapse } from "react-collapse";

const ItemSubsystem = ({ title, content, img, text, maxLength = 91 }) => {
  const [isReadMore, setReadMore] = useState(false);

  return (
    <div className="w-full lg:w-2/4">
      {/* bg-white rounded-lg shadow-2xl */}
      <div className="flex flex-col flex-grow px-5 py-5 bg-white rounded-lg shadow-2xl ">
        {/* <div className="py-5 px-7"> */}
        <img
          src={img}
          alt=""
          className="mb-6  xl:h-[460px] lg:h-[340px] object-cover w-full rounded-lg "
        />
        <div className="flex flex-col">
          <h1 className="2xl:mb-3 lg:mb-3 mb-3  text-lg leading-normal  h-auto lg:h-[57px] 2xl:h-auto flex-grow sm:text-2xl text-[#363636] font-bold ">
            {title}
          </h1>

          <div className="text-base sm:text-xl text-[#778295] mb-4 flex flex-col">
            <p className="mb-2  lg:h-[84px] h-auto 2xl:h-auto   text-ellipsis  grow">
              {content.split(".")[0]}
            </p>
            <Collapse isOpened={isReadMore}>
              {content
                .split(":")
                .slice(1)
                .map((item) => (
                  <span className="flex gap-2 mb-3 ">{item}</span>
                ))}
            </Collapse>
          </div>

          <button
            onClick={() => setReadMore(!isReadMore)}
            className="button-62 w-[150px]  transition duration-500 ease-in-out"
          >
            {isReadMore ? "Thu gọn" : " Đọc thêm"}
          </button>
        </div>
      </div>
    </div>

    // <div>
    //   {isTruncated ? (
    //     <div>
    //       {content.slice(0, maxLength)}...{" "}
    //       <button
    //         onClick={toggleIsTruncated}
    //         className="text-blue-500 transition duration-500 ease-in-out hover:text-blue-700"
    //       >
    //         Read more
    //       </button>
    //     </div>
    //   ) : (
    //     <div>
    //       {content}
    //       <button
    //         onClick={toggleIsTruncated}
    //         className="text-blue-500 transition duration-500 ease-in-out hover:text-blue-700"
    //       >
    //         Read less
    //       </button>
    //     </div>
    //   )}
    // </div>
  );
};

export default ItemSubsystem;
