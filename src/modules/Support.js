import React, { useEffect, useRef } from "react";
import { Support02 } from "../assets/images";

const Support = () => {
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
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-[50px]">
        <div
          className="w-full lg:w-2/4 text-[#778295]  font-light animate__animated opacity-0"
          ref={leftRef}
        >
          <h1 className="text-xl md:text-[36px] text-[#001238] font-bold mb-5 leading-normal">
            Hỗ trợ tận tình tận tâm, 24/7/365
          </h1>
          <p className="text-lg font-normal text-[#778295] md:text-[24px]">
            {/*  Chúng tôi luôn sẵn sàng hỗ trợ khách hàng
            một cách nhanh chóng, đáng tin cậy. */}
            Chúng tôi không chỉ là một nhà cung cấp công nghệ, cung cấp các giải
            pháp phần mềm chuyên nghiệp và hiệu quả cho các tòa nhà, khách sạn.
            <br />
            Đặc biệt, chúng tôi cam kết luôn đồng hành cùng khách hàng và cung
            cấp dịch vụ hỗ trợ tận tình và tận tâm.
            {/* Bất kể khách hàng cần hỗ trợ
            gì, chúng tôi luôn sẵn sàng và nhanh chóng giải đáp thắc mắc và giải
            quyết các vấn đề liên quan đến giải pháp phần mềm của chúng tôi. */}
            <div className="bg-blue-500 w-[100px] my-[20px] h-[2px]"></div>
            Với chúng tôi, sự hài lòng của khách hàng là ưu tiên hàng đầu và
            chúng tôi sẽ không ngừng nỗ lực để đáp ứng mọi nhu cầu của khách
            hàng một cách tốt nhất.
          </p>
          <button className="p-3 px-5 text-white text-sm w-[140px] md:w-[150px] mt-[20px] md:text-lg font-bold bg-blue-500">
            Đăng ký
          </button>
        </div>
        <img
          ref={rightRef}
          src={Support02}
          className="w-full opacity-0 lg:w-2/4 animate__animated"
          alt=""
        />
      </div>
    </div>
  );
};

export default Support;
