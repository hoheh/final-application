import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="z-50 h-full w-full top-0 flex justify-center items-center bg-bgc-modal absolute">
      {children}
    </div>
  );
};

export default Modal;
