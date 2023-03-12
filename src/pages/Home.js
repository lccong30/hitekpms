import React, { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Logo } from "../assets/images";
import {
  // BannerFooter,
  Contact,
  Design,
  FAQ,
  Footer,
  Product,
  Sidebar,
  Subsystem,
  Support,
  TaskManagement,
} from "../modules";

import ItemSidebar from "../components/ItemSidebar";
import Banner from "../modules/Banner";
import Process from "../modules/Process";
import useScrollFadeIn from "../hook/useScrollFadeIn";
import Review from "../modules/Review";
const Home = () => {
  const services = useRef(null);
  const home = useRef(null);
  const contact = useRef(null);
  const support = useRef(null);

  const rollback = true;

  const bannerRef = useScrollFadeIn("sticky", 0, rollback);

  const [openSidebar, setOpenSidebar] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const menu = [
    {
      name: "Trang chủ",
      onClick: () => {
        setOpenSidebar(false);
        scrollToSection(home);
      },
    },
    {
      name: "Về chúng tôi",
      onClick: () => {
        setOpenSidebar(false);
        scrollToSection(home);
      },
    },
    {
      name: "Dịch vụ",
      onClick: () => {
        setOpenSidebar(false);
        scrollToSection(services);
      },
    },
    {
      name: "Hỗ trợ",
      onClick: () => {
        setOpenSidebar(false);
        scrollToSection(support);
      },
    },
    {
      name: "Liên hệ",
      onClick: () => {
        setOpenSidebar(false);
        scrollToSection(contact);
      },
    },
  ];
  return (
    <div className="overflow-hidden">
      <div
        ref={home}
        className="fixed top-0 left-0 z-20 w-full bg-white border shadow-sm"
      >
        <div className="w-[80%] mx-auto ">
          <nav className="flex items-center justify-between py-3 text-xl font-bold">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection(home)}
            >
              <img src={Logo} alt="" className="block w-16 select-none h-14 " />
              <span>Hitek Solution</span>
            </div>
            <ul className="items-center hidden xl:flex gap-x-5">
              <li
                onClick={() => scrollToSection(home)}
                className="cursor-pointer"
              >
                Trang chủ
              </li>
              <li
                onClick={() => scrollToSection(services)}
                className="cursor-pointer"
              >
                Dịch vụ
              </li>
              <li
                onClick={() => scrollToSection(support)}
                className="cursor-pointer"
              >
                Hỗ trợ
              </li>
              <li
                onClick={() => scrollToSection(contact)}
                className="cursor-pointer"
              >
                Liên hệ
              </li>
            </ul>

            <div className="block xl:hidden">
              <span onClick={() => setOpenSidebar(!openSidebar)}>
                {openSidebar ? <AiOutlineClose /> : <FaBars />}
              </span>
              <Sidebar
                openSidebar={openSidebar}
                onClick={() => scrollToSection(contact)}
              >
                {menu.map((item) => (
                  <ItemSidebar
                    key={item.name}
                    name={item.name}
                    onClick={item.onClick}
                  />
                ))}
              </Sidebar>
            </div>
          </nav>
        </div>
      </div>

      <div className="" ref={bannerRef}>
        <Banner onClick={() => scrollToSection(contact)} />
      </div>
      <div className="w-full border bg-[#FFB972]">
        <Process />
      </div>
      <div ref={services}>
        <TaskManagement />
      </div>
      <div className="bg-[#FFF5EE]">
        <Subsystem />
      </div>
      <Design />
      {/* bg-[#FFE2D7] */}
      <div ref={support} className="border-t">
        <Support />
      </div>

      <Review />

      <Product />

      <div className="bg-[#FFF5EE]">
        <FAQ />
      </div>

      <div className="" ref={contact}>
        <Contact />
      </div>
      <Footer onClick={() => scrollToSection(home)} />
    </div>
  );
};

export default Home;
