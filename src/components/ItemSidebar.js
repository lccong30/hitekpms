import React from "react";

const ItemSidebar = ({ onClick, name }) => {
  return (
    <div
      className="w-full px-5 py-3 bg-white border-b border-gray-400 cursor-pointer"
      onClick={onClick}
    >
      <div className="container"> {name}</div>
    </div>
  );
};

export default ItemSidebar;
