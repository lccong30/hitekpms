import React, { useState, useEffect } from "react";
import "./css/review.css";
import data from "../data";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const ReviewV2 = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="relative review__section">
      <section className="bg-[#67C3F3] border py-10  rounded-3xl section">
        <div className="title">
          <h2 className="text-lg md:text-2xl review__section-name">
            PHẢN HỒI TỪ KHÁCH HÀNG
          </h2>
        </div>
        <div className="section-center   md:h-[450px]">
          {people.map((item, indexPeople) => {
            const { id, image, name, title, quote } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide";
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article className={`${position}`} key={id}>
                <img
                  src={image}
                  alt={name}
                  className="md:w-[150px] md:h-[150px] w-[90px] h-[90px] person-img"
                />
                <h4 className="mt-5">{name}</h4>
                <p className="title">{title}</p>
                <p className="text-sm md:text-lg text">{quote}</p>
              </article>
            );
          })}
          <button className="prev md:block" onClick={() => setIndex(index - 1)}>
            <MdArrowBackIosNew />
          </button>
          <button
            className=" next md:block"
            onClick={() => setIndex(index + 1)}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </section>
      <div className="absolute top-0 left-2/4"></div>
    </div>
  );
};

export default ReviewV2;
