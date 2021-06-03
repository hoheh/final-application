import React from "react";

import clsx from "clsx";

const InputField = ({ classname, label, nameId, placeholder, formik, type }) => {
  return (
    <div>
      <label htmlFor={nameId}>
        <span className="opacity-50 text-lg">{label}</span>
      </label>
      <input
        onChange={formik.handleChange}
        value={formik.values[nameId]}
        id={nameId}
        name={nameId}
        placeholder={placeholder}
        className={clsx(
          "mt-1 w-full focus:ring text-xl ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-3",
          !formik.errors[nameId] || !formik.touched[nameId]
            ? "ring-dirty-green"
            : "ring ring-red-600",
        )}
        type={type}
      />
      {formik.errors[nameId] && formik.touched[nameId] && (
        <div className="text-md my-0.5 text-red-600">{formik.errors[nameId]}</div>
      )}
    </div>
  );
};

export default InputField;
