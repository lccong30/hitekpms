import React from "react";
import useScrollFadeIn from "../hook/useScrollFadeIn";

const ItemProcess = ({ img1, idx, title, icon }) => {
  // const refA = useRef();

  const refA = useScrollFadeIn("animate__swing", 600);

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     if (!refA.current) return;
  //     if (refA.current.offsetTop - window.scrollY < 600) {
  //       refA.current.classList.add("animate__fadeIn");
  //     }
  //   });
  // }, []);
  return (
    <div
      className={`h-[427px] lg:h-[497px]  bg-[#F5F5F7] animate__animated opacity-1 `}
      ref={refA}
    >
      <div className="flex flex-col justify-between h-full ">
        <div className="flex flex-col items-center pt-[20px] px-[50px]">
          <h3 className="mb-10 text-3xl ">
            {<img src={icon} alt="" className="w-20 h-20" />}
          </h3>
          <h2 className="w-full text-lg font-medium text-center md:text-2xl lg:text-3xl whitespace-nowrap">
            {title}
          </h2>
        </div>
        <img className="h-[190px] lg:h-[280px]  mx-auto" src={img1} alt="" />
      </div>
    </div>
  );
};

export default ItemProcess;
