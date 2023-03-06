import React, { useEffect, useRef } from "react";

const ItemInfo = ({ src = "", number = 0, info = "", unit = "" }) => {
  const refInfo = useRef();
  // const springs = useSpring({
  //   totalDowload: number,
  //   from: { totalDowload: 0 },
  // });

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (!refInfo.current) return;
      if (refInfo.current.offsetTop - window.scrollY < 350) {
        refInfo.current.classList.add("active");
      }
    });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center gap-5 ">
        <img src={src} alt="" className="w-16" />
        <h1 className="text-5xl font-bold text-white title" ref={refInfo}>
          {number}
          {unit}
        </h1>
        <p className="font-bold text-white">{info}</p>
      </div>
    </>
  );
};

export default ItemInfo;
