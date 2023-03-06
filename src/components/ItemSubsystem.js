import React, { useState } from "react";

const ItemSubsystem = ({ title, content, img }) => {
  const [isReadMore, setReadMore] = useState(false);

  return (
    <>
      <div className="  w-full lg:w-2/4">
        <div className="py-5 rounded-lg shadow-2xl px-7 bg-white">
          <img
            src={img}
            alt=""
            className="mb-6  xl:h-[460px] lg:h-[340px] object-cover w-full rounded-lg"
          />
          <div className="flex flex-col">
            <h1 className="mb-3 text-lg  sm:text-2xl text-[#363636] font-bold ">
              {title}
            </h1>
            <div className="text-base sm:text-2xl text-[#778295]   mb-4">
              {isReadMore
                ? content.split(":").map((item) => (
                    <p className="flex mb-3" key={item}>
                      {item}
                    </p>
                  ))
                : `${content.split(".")[0].slice(0, 91)}...`}
            </div>

            <button
              onClick={() => setReadMore(!isReadMore)}
              className="button-62 w-[150px] "
            >
              {isReadMore ? "Thu gọn" : " Đọc thêm"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSubsystem;
