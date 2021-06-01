import React from "react";

import clsx from "clsx";

const WhiteBlock = ({ children, classname }) => {
  return (
    <div className={clsx("px-7 py-6 rounded-xl bg-white", classname)}>
      {children}
    </div>
  );
};

export default WhiteBlock;
