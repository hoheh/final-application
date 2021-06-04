import React from "react";
import clsx from "clsx";

const Button = (props) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full rounded-md text-xl focus:ring-2 focus:outline-none",
        props.classnames,
      )}>
      {props.text}
    </button>
  );
};

export default Button;
