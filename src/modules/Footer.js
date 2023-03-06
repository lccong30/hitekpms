import React from "react";
import { Rocket } from "../assets/icons";
import { Logo } from "../assets/images";

const Footer = ({ onClick }) => {
  return (
    <>
      <div className="footer bg-[#282F3A] w-full font-semibold text-lg">
        <div className="container">
          <div className="footer-main">
            <div className="footer-column">
              <div className="footer-logo footer-heading">
                <div className="pt-1 footer-logo-inner">
                  <img src={Logo} alt="" className="w-16 -mt-5" />
                  <p>Hitek Solution</p>
                </div>
              </div>
              <div
                className="footer-desc"
                //   style="line-height: 23px"
              >
                Giúp các doanh nghiệp tích hợp các hệ thống, giảm thiểu thời
                gian và chi phí để thực hiện các quy trình.
              </div>
              <div className="footer-social">
                <a href="#link" className="social-item">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href="#link" className="social-item">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
                <a href="#link" className="social-item">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="#link" className="social-item">
                  <ion-icon name="logo-dribbble"></ion-icon>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-header">
                <h2 className="footer-heading">Một số link có ích</h2>
              </div>
              <div className="footer-link">
                <a href="#link">
                  <h3>Về chúng tôi</h3>
                </a>
                <a href="#linkcontact-us">
                  <h3>Liên hệ</h3>
                </a>
                <a href="#link">
                  <h3>Điều khoản dịch vụ</h3>
                </a>
                <a href="#link">
                  <h3>Kế hoạch</h3>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-header">
                <h2 className="footer-heading">Liên Hệ</h2>
              </div>
              <div className="footer-info">
                <p>Tư vấn liên hệ : 02 8 3877 7072</p>
                <p>Hotline: 0909 375 118</p>
                <p>Email: contact@hitek-solution.com </p>
                <h4>Phòng kinh doanh</h4>
                <p>Email: sale@hitek-solution.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="footer-bottom">
        <div className="container">
          <div className="footer-bttom">
            <p>
              Copyright © 2023 Hitek Solution, Designed by <span>Hitek</span>{" "}
              All Rights Reserved.
            </p>
            <div className="cursor-pointer rocket" onClick={onClick}>
              <img src={Rocket} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
