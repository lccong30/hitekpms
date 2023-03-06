import React from "react";
import { BackOfficeA, CSPB, SupportI, BMS, MLOP } from "../assets/images";
import ItemSubsystem from "../components/ItemSubsystem";
import useScrollFadeIn from "../hook/useScrollFadeIn";
const data = [
  {
    title: " Phân hệ CSP - Centralized Stacking Plan",
    content:
      "Phân hệ CSP - Centralized Stacking Plan là một phương pháp quản lý chặt chẽ, liên kết nhiều bộ phận từ sale / marketing, lễ tân đến kế toán.: Nó cung cấp công cụ quản lý Stack Plan trực quan, giúp kiểm soát trạng thái hợp đồng và số lượng tương quan đồng thời quản lý tập trung các đơn vị, tạo sự tiện lợi và nhanh chóng trong hoạt động.: Phân hệ này hỗ trợ quản lý sổ khách / khách đặt phòng, quản lý fitting out, quản lý không gian quảng cáo, và xử lý các yêu cầu của khách hàng.",
    img: MLOP,
  },
  {
    title: "Phân hệ Back Office - Tích hợp phân hệ tài chính",
    content:
      "HitekERP™ là một hệ thống phần mềm tích hợp đầy đủ với các phân hệ thuộc PMS.: Đây là một phân hệ kế toán tài chính mạnh mẽ, giúp quản trị tất cả các thông tin liên quan đến tài chính, tài sản và lương nhân sự.: HitekERP™ cũng tích hợp quy trình quản lý cung ứng P2P Procurement to Payable và phân hệ quản lý kỹ thuật / kho kỹ thuật tòa nhà.: Nhờ vào tính năng tích hợp, HitekERP™ giúp tối ưu hóa quá trình quản lý, giảm thiểu thời gian và chi phí cho các doanh nghiệp. ",
    img: BMS,
  },
];
const Subsystem = () => {
  const refTitle = useScrollFadeIn("animate__backInRight");
  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     if (!refTitle.current) return;
  //     if (refTitle.current.offsetTop - window.scrollY < 600) {
  //       refTitle.current.classList.add("active");
  //       // refContent.current.classList.add(" ");
  //     }
  //   });
  // }, []);

  return (
    <div className="container">
      <div className=" py-[50px] md:py-[100px]">
        <h1
          ref={refTitle}
          className="mb-[40px] md:mb-[60px] text-2xl md:text-4xl text-[#001238] animate__animated font-bold text-center task__management-heading opacity-0"
        >
          Tối ưu nhân lực và thời gian quản lý kinh doanh
        </h1>
        <div className="flex flex-col gap-5 lg:flex-row ">
          {data.map((item) => (
            <ItemSubsystem
              key={item.title}
              title={item.title}
              content={item.content}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subsystem;
