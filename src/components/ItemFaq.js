import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const ItemFaq = ({ heading, content, onClick, isShow, idx, selected }) => {
  return (
    <>
      <div className="border-b cursor-pointer">
        <h2
          className="text-base md:text-2xl flex items-center px-4 md:px-10 justify-between  w-full  text-[#363636] font-semibold py-4 transition-all accordion-heading  animate__slideOutDown"
          onClick={onClick}
        >
          {heading}
          <>
            {isShow && idx === selected ? (
              <AiOutlineMinusCircle color={"blue"} />
            ) : (
              <AiOutlinePlusCircle color={"blue"} />
            )}
          </>
        </h2>
        {idx === selected && isShow && (
          <p
            className={`${
              idx === selected && isShow
                ? "h-auto transition-all"
                : "h-0 transition-all"
            } px-10 text-black pb-5 text-lg font-medium   transition-all accordion-content animate__slideOutDown`}
          >
            {content}
          </p>
        )}
      </div>
    </>
  );
};

export default ItemFaq;
