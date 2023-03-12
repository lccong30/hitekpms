import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { BgReview } from "../assets/images";
import ItemReview from "../components/ItemReview";

const Review = ({ onClick }) => {
  return (
    <div className="container ">
      <div className="py-[140px] flex flex-col-reverse  xl:flex-row">
        <div className="relative flex flex-wrap items-center w-full gap-5 xl:w-2/4">
          <img
            src={BgReview}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 left-0 w-[70%] xl:w-[506px] h-[425px]  -z-10"
          />
          <div className="flex flex-row xl:flex-col flex-wrap gap-5 review__customer pl-[40px]">
            <ItemReview />
            <ItemReview />
          </div>
          <div className="pl-[40px] xl:pl-0 xl:block flex justify-center  xl:w-auto w-full">
            <ItemReview />
          </div>
        </div>
        <div className="w-full p-5 xl:w-2/4 ">
          <h3 className="mt-3 uppercase text-[#FF7D00] text-base font-semibold">
            TESTMONIALS
          </h3>
          <h1 className="my-5 text-[#051441] font-bold text-[40px]">
            Client’s Fedback
          </h1>
          <p className="text-base text-[#79899D] font-medium mb-5">
            Why I say okl chap that is. sprffing aff his rut car blimey valmor
            gooxo blaka krcus up bobby shed a-50 William cock Richard. Bloke
            fanny around cheseci. Why I say okl chap that is. sprffing aff his
            rut car blimey valmor gooxo blaka krcus up bobby shed a-50 William
            cock Richard. Bloke fanny around cheseci
          </p>
          <div className="flex items-center gap-4 mb-7">
            <span>
              <BsCheck2Circle size={18} color="blue" />
            </span>
            <span className="text-[#F4A11A] font-semibold text-2xl">450+</span>
            <span className="font-medium text-base text-[#8189A3]">
              Client’s Feedback
            </span>
          </div>
          <button
            className="px-8 py-3 text-lg font-bold text-white bg-blue-400 rounded"
            onClick={onClick}
          >
            Liên hệ tư vấn{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
