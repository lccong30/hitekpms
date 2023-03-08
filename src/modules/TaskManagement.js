import React from "react";
import { Analytics, Integration, Management, Remote } from "../assets/icons";
import { TaskItem } from "../components";
import useScrollFadeIn from "../hook/useScrollFadeIn";
const TaskManagement = () => {
  const dataTask = [
    {
      icon: Management,
      title: "Quản lý tổng thể",
      desc: "Cho phép quản lý riêng hoặc một chuỗi các tòa nhà",
    },
    {
      icon: Integration,
      title: "Tích hợp nhiều tiện ích",
      desc: "Cơ sở dữ liệu tập trung, bảo mật an toàn, đảm bảo",
    },
    {
      icon: Analytics,
      title: "Hệ thống báo cáo đầy đủ",
      desc: "Tích hợp module phân tích dữ liệu thông minh BI",
    },
    {
      icon: Remote,
      title: "Quản lý từ xa",
      desc: "Mọi báo cáo đều có thể xem trên thiết bị thông minh.",
    },
    // {
    //   icon: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/tf_02.svg",
    //   title: "Track bugs & issues",
    //   desc: " With the right credit card",
    // },
    // {
    //   icon: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/tf_05.svg",
    //   title: "Workflow Track",
    //   desc: " With the right credit card",
    // },
    // {
    //   icon: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/tf_06.svg",
    //   title: "Work Progress",
    //   desc: " With the right credit card",
    // },
    // {
    //   icon: "https://themexriver.com/wp/appics/wp-content/uploads/2022/10/tf_07.svg",
    //   title: "Customer Feedback",
    //   desc: " With the right credit card",
    // },
  ];

  const refInfo = useScrollFadeIn("animate__fadeInUp");

  return (
    <>
      <div className="container ">
        <div className="py-10 md:py-28">
          <div className="flex flex-col items-center justify-between gap-4 mb-20 lg:flex-row">
            <div className="w-full lg:w-[48%] py-5 overflow-hidden">
              <h2
                className="text-2xl text-[#001238] font-bold transition-all md:text-5xl md:translate-y-20 animate__animated task__management-heading"
                ref={refInfo}
              >
                Giải pháp quản lý hiệu quả
              </h2>
            </div>
            <p className="w-full lg:w-[48%] text-lg text-[#001238]">
              Quản lý luôn là một thách thức khó khăn và không bao giờ dễ dàng.
              Sự kết hợp giữa công nghệ hiện đại và phần mềm cung cấp cho các
              doanh nghiệp một cách quản lý hiệu quả hơn so với cách thức truyền
              thống.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {dataTask.map((item, idx) => (
              <TaskItem
                key={idx}
                idx={idx}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagement;
