import React from "react";

const TaskItem = ({ icon = "", title = "", desc = "", idx = 0 }) => {
  let arr1 = [0, 2, 5, 7];
  return (
    <>
      <div
        className={` h-[270px] border px-2  ${
          arr1.includes(idx) ? " bg-[#F5F5F7] " : ""
        } task__item flex flex-col items-center justify-center gap-3`}
      >
        <img src={icon} alt="" className="w-20 h-20 mb-2 task__item-icon" />
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-lg font-semibold text-center text-gray-600 ">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
