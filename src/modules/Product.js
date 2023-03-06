import React from "react";
import "react-multi-carousel/lib/styles.css";
import ItemSlider from "../components/ItemSlider";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import useScrollFadeIn from "../hook/useScrollFadeIn";

// Import Swiper styles

const data = [
  {
    src: "https://download.odoocdn.com/icons/crm/static/description/icon.svg",
    title: "CRM",
  },
  {
    src: "https://download.odoocdn.com/icons/point_of_sale/static/description/icon.svg",
    title: "POS",
  },
  {
    src: "https://download.odoocdn.com/icons/project/static/description/icon.svg",
    title: "Dự án",
  },
  {
    src: "https://download.odoocdn.com/icons/hr_timesheet/static/description/icon.svg",
    title: "Bảng chấm công",
  },
  {
    src: "https://download.odoocdn.com/icons/account/static/description/icon.png",
    title: "Hóa đơn",
  },
  {
    src: "https://download.odoocdn.com/icons/stock/static/description/icon.svg",
    title: "Kho",
  },
];

const Product = () => {
  SwiperCore.use([Autoplay]);

  const refA = useScrollFadeIn("animate__backInDown");
  const refB = useScrollFadeIn("animate__backInRight");

  return (
    <section>
      <div className="container">
        <div className="blog-main py-[50px] md:py-[100px]">
          <div className="mb-20 blog-header">
            <h2
              className="mb-5 text-xl font-bold text-center text-[#001238] opacity-0 md:text-4xl animate__animated"
              ref={refA}
            >
              MỞ RỘNG VỚI CÁC ỨNG DỤNG KHÁC CỦA HITEK
            </h2>
            <p
              className="text-lg font-semibold text-center text-gray-500 opacity-0 animate__animated"
              ref={refB}
            >
              Nếu bạn có ý tưởng mới, đừng ngần ngại liên hệ với chúng tôi
            </p>
          </div>
          <div>
            <Swiper
              // freeMode={true}
              modules={[Navigation, Pagination, Scrollbar]}
              grabCursor={true}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log(1)}
              onSwiper={(swiper) => console.log(2)}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              {data.map((item) => (
                <SwiperSlide key={item.title}>
                  <ItemSlider item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
