import React, { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";

const ItemSubsystem = ({ title, content, img, text, maxLength = 91 }) => {
  const [isReadMore, setReadMore] = useState(false);

  const [isTruncated, setIsTruncated] = useState(true);

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <>
      <div className="w-full lg:w-2/4">
        <div className="py-5 bg-white rounded-lg shadow-2xl px-7">
          <img
            src={img}
            alt=""
            className="mb-6  xl:h-[460px] lg:h-[340px] object-cover w-full rounded-lg"
          />
          <div className="flex flex-col">
            <h1 className="mb-3 text-lg  sm:text-2xl text-[#363636] font-bold ">
              {title}
            </h1>
            <div className="text-base sm:text-2xl text-[#778295]  hover:text-blue-700 transition duration-500 ease-in-out   mb-4">
              {isReadMore
                ? content.split(":").map((item) => (
                    <p
                      className="flex gap-2 mb-3 text-blue-500 transition duration-500 ease-in-out hover:text-blue-700"
                      key={item}
                    >
                      {item}
                    </p>
                  ))
                : `${content.split(".")[0].slice(0, 91)}...`}
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
    </>

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
