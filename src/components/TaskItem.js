import React from "react";

const TaskItem = ({ icon = "", title = "", desc = "", idx = 0 }) => {
  let arr1 = [0, 2];
  let arr2 = [0, 3];
  // ${arr1.includes(idx) ? " bg-[#F5F5F7]  " : "bg-white"}

  return (
    <>
      <div
        className={` h-[270px] border  px-2 

         task__item flex flex-col items-center justify-center gap-3 shadow-md`}
      >
        <img
          src={icon}
          alt=""
          className="flex-shrink-0 w-20 h-20 mb-2 task__item-icon"
        />
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-xl font-semibold md:text-2xl xl:text-xl">
            {title}
          </h2>
          <p className="text-base font-semibold text-center text-gray-600 md:text-lg xl:text-base">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
