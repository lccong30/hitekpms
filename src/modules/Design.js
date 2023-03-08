import React, { useEffect, useRef } from "react";
import { System1 } from "../assets/images";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Design = () => {
  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!leftRef.current) return;
      if (leftRef.current.offsetTop - window.scrollY < 600) {
        leftRef.current.classList.add("animate__fadeInLeft");
        rightRef.current.classList.add("animate__fadeInRight");
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="w-full  py-[100px] flex flex-col gap-5 lg:flex-row items-center">
        <div
          className="w-full opacity-0 lg:w-2/4 animate__animated"
          ref={leftRef}
        >
          <img src={System1} alt="" className="block w-full" />
        </div>
        <div
          className="w-full opacity-0 lg:w-2/4 animate__animated"
          ref={rightRef}
        >
          <h1 className="text-xl md:text-[34px] text-[#001238] mb-5  font-bold">
            Hệ thống dễ sử dụng, dễ tào tạo
          </h1>
          <p className={`text-[#778295] font-normal text-lg md:text-[24px] `}>
            Thiết kế mở, trực quan, thân thiện với người dùng giúp đào tạo nhân
            viên nhanh chóng và dễ dàng. Hỗ trợ hạ tầng cloud chuyên nghiệp từ
            Google, Amazon, Microsoft .
          </p>

          <div className="w-[100px] border border-blue-500 my-[20px]"></div>

          <ul className="text-[#778295] text-lg md:text-[20px] ">
            <li
              className="flex items-center gap-3 mb-2 font-normal"
              color="blue"
            >
              <span>
                <BsFillArrowRightCircleFill color="blue" size={24} />
              </span>
              {/* Hỗ trợ khách hàng 24/7/365 */}
              An toàn, bảo mật
            </li>
            <li
              className="flex items-center gap-3 mb-2 font-norma l"
              color="blue"
            >
              <span>
                <BsFillArrowRightCircleFill color="blue" size={24} />
              </span>
              Phương pháp triển khai nhanh, hiệu quả
            </li>
            <li className="flex items-center gap-3 font-normal">
              <span>
                <BsFillArrowRightCircleFill color="blue" size={24} />
              </span>
              Hàng trăm bài viết trợ giúp và video dành cho đào tạo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Design;
