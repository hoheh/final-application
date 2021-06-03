import React from "react";

import clsx from "clsx";

const WhiteBlock = ({ children, classname }) => {
  return (
    <div className={clsx("px-9 py-7 rounded-xl bg-white", classname)}>
      {children}
    </div>
  );
};

export default WhiteBlock;
