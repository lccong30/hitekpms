import React from "react";
import ItemInfo from "../components/ItemInfo";

const Info = () => {
  return (
    <div className="bg-[#423EF3]  w-full">
      <div className="w-full   py-[75px] mx-auto   ">
        <div className="grid items-center h-full gap-5 text-center sm:justify-between grid-col-1 sm:grid-cols-2 xl:grid-cols-4">
          <ItemInfo
            src="https://themexriver.com/wp/appics/wp-content/uploads/2022/10/count_03.svg"
            number={3}
            unit="M"
            info="5 star odometers"
          />
          <ItemInfo
            src="https://themexriver.com/wp/appics/wp-content/uploads/2022/10/count_04.svg"
            number={221}
            unit="k+"
            info="internation Award"
          />
          <ItemInfo
            src="https://themexriver.com/wp/appics/wp-content/uploads/2022/10/count_02.svg"
            number={140}
            unit="k+"
            info="Love Impressions"
          />
          <ItemInfo
            src="https://themexriver.com/wp/appics/wp-content/uploads/2022/10/count_01.svg"
            number={600}
            unit="k+"
            info="Total Downloads"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
