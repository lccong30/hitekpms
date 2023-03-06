import React from "react";

const Contact = () => {
  return (
    <>
      <div id="#contactus" className="contact">
        <div className="container">
          <div className="contact-main">
            <div className="contact-heading">
              <h2>
                LIÊN HỆ <strong className="">TƯ VẤN</strong>
              </h2>
              <p className="font-semibold uppercase">
                Tối ưu hóa tài nguyên và tối đa hóa sự hiệu quả của bạn.
              </p>
            </div>
            <form className="contact-form">
              <input
                type="text"
                placeholder="Tên của bạn "
                className="contact-input"
              />
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="contact-input"
              />
              <textarea
                className="contact-area contact-field"
                placeholder="Để lại lời nhắn"
                required
                minLength="50"
              ></textarea>
              <input
                type="submit"
                value="Gửi "
                className="font-semibold text-[#363636] btn btn-contact"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
