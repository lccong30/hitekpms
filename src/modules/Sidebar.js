import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Sidebar = ({ children }) => {
  return (
    <div className="close-btn-sidebar fixed left-0 top-20 w-full h-full bg-white">
      {children}
    </div>
  );
};

export default Sidebar;
