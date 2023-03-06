import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Sidebar = ({ children, openSidebar }) => {
  return (
    <div
      className={`fixed bg-white top-20 left-0 w-full h-full transition-all ${
        openSidebar ? "trans left-0 top-20" : "left-[-100%]  top-20 trans"
      } bg-white close-btn-sidebar `}
    >
      {children}
    </div>
  );
};

export default Sidebar;
