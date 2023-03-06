import React from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Collapse } from "react-collapse";

const ItemFaq = ({ heading, content, onClick, selected }) => {
  return (
    <>
      <div className="border-b cursor-pointer">
        <h2
          className="text-base md:text-2xl flex items-center px-4 md:px-10 justify-between  w-full  text-[#363636] font-semibold py-4 transition-all accordion-heading  animate__slideOutDown"
          onClick={onClick}
        >
          {heading}
          <>
            {selected ? (
              <AiOutlineMinusCircle color={"blue"} />
            ) : (
              <AiOutlinePlusCircle color={"blue"} />
            )}
          </>
        </h2>

        <Collapse isOpened={selected}>
          <p
            className={` px-4 md:px-10 text-black pb-5 text-sm md:text-lg font-medium   transition-all accordion-content animate__slideOutDown`}
          >
            {content}
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default ItemFaq;
