import React from "react";

const ItemSlider = ({ item }) => {
  return (
    <>
      <div className="text-center font-medium flex flex-col gap-2 pb-[40px]">
        <img
          className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 "
          alt=""
          src={item.src}
        />
        {item.title}
      </div>
    </>
  );
};

export default ItemSlider;
