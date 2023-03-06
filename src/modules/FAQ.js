import React, { useState } from "react";
import "animate.css";
import { ItemFaq } from "../components";
import useScrollFadeIn from "../hook/useScrollFadeIn";
const faq = [
  {
    heading: "Phần mềm quản lý tòa nhà là gì?",
    content:
      "Phần mềm quản lý tòa nhà là một công cụ giúp quản lý tất cả các hoạt động của tòa nhà, bao gồm quản lý hợp đồng, quản lý thu chi, bảo trì và sửa chữa, quản lý kế hoạch vận hành và các hoạt động khác.",
  },
  {
    heading: "Tại sao nên sử dụng phần mềm quản lý tòa nhà?",
    content:
      "Sử dụng phần mềm quản lý tòa nhà giúp quản lý tòa nhà hiệu quả hơn, tiết kiệm thời gian và chi phí, đồng thời cải thiện chất lượng dịch vụ và tăng tính an toàn cho tòa nhà.",
  },
  {
    heading: "Lợi ích của việc sử dụng phần mềm quản lý tòa nhà là gì?",
    content:
      "Sử dụng phần mềm quản lý tòa nhà giúp quản lý tòa nhà hiệu quả hơn, tiết kiệm thời gian và chi phí, tăng tính an toàn cho tòa nhà, cải thiện chất lượng dịch vụ, nâng cao sự hài lòng của khách hàng và cải thiện hiệu suất hoạt động.",
  },
  {
    heading: "Phần mềm quản lý tòa nhà có phù hợp cho mọi loại tòa nhà không?",
    content:
      "Phần mềm quản lý tòa nhà có thể được tùy chỉnh để phù hợp với mọi loại tòa nhà, bao gồm tòa nhà văn phòng, tòa nhà căn hộ, khách sạn, trung tâm thương mại, tòa nhà công nghiệp và các loại tòa nhà khác.",
  },
  {
    heading:
      "Phần mềm quản lý tòa nhà có thể được sử dụng trên nền tảng di động không?",
    content:
      "Có, nhiều phần mềm quản lý tòa nhà hiện nay có thể được sử dụng trên nền tảng di động, giúp người dùng có thể quản lý tòa nhà một cách dễ dàng và thuận tiện từ bất kỳ đâu.",
  },
  {
    heading: "Phần mềm quản lý tòa nhà có thể tùy chỉnh được không?",
    content:
      "Có, phần mềm quản lý tòa nhà có thể được tùy chỉnh để phù hợp với nhu cầu cụ thể của từng khách hàng, bao gồm các tính năng, giao diện và báo cáo.",
  },
  {
    heading: "Có cần đào tạo để sử dụng phần mềm quản lý tòa nhà không?",
    content:
      "Tùy thuộc vào phần mềm quản lý tòa nhà cụ thể, một số phần mềm yêu cầu đào tạo trước khi sử dụng, trong khi đó một số phần mềm lại được thiết kế để sử dụng đơn giản và dễ dàng mà không cần đào tạo.",
  },
];
const FAQ = () => {
  const [isShow, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const handleClick = (idx) => {
    setSelected(idx);
    setShow(!isShow);
  };

  const refTitle = useScrollFadeIn("animate__backInRight");
  return (
    <div className="container">
      <div className="py-[50px] md:py-[100px]">
        <h2
          ref={refTitle}
          className=" mb-5 md:mb-20 text-black font-bold text-center text-3xl md:text-5xl animate__animated opacity-0"
        >
          Câu hỏi thường gặp
        </h2>
        <div>
          {faq.map((item, idx) => (
            <ItemFaq
              key={idx}
              heading={item.heading}
              content={item.content}
              onClick={() => handleClick(idx)}
              isShow={isShow}
              idx={idx}
              selected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
