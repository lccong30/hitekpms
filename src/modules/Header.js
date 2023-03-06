import React from "react";
import { Logo } from "../assets/images";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-white border">
      <div className="w-[80%] mx-auto">
        <nav className="flex items-center justify-between py-5 text-xl font-bold">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="" className="block w-16 h-14" />
            <span>Hitek Solution</span>
          </div>
          <ul className="items-center hidden md:flex gap-x-5">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Service</li>

            <li
              // onClick={() => scrollToSection(contact)}
              className="cursor-pointer"
            >
              Liên hệ
            </li>
          </ul>
          <div className="flex gap-5">
            <button className="h-16 px-6 text-sm border">Đăng nhập</button>
            {/* <button className="h-16 px-6 text-sm bg-yellow-400 border"></button> */}

            {/* <button class="button-75" role="button">
              <span class="text"> Đăng ký</span>
            </button> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
