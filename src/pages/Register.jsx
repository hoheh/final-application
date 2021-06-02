import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useFormik } from "formik";
import clsx from "clsx";

import { WhiteBlock } from "../components/main";

import { validateReg } from "../utils/validation";

import plus from "../assets/images/krest.svg";

const Register = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeat_password: "",
      name_surname: "",
    },
    validate: validateReg,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <WhiteBlock classname="flex flex-col">
      <div className="flex flex-row-reverse cursor-pointer">
        <img
          onClick={() => history.goBack()}
          className="w-7 h-7"
          src={plus}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center mb-7">
        <p className="text-2xl font-medium">Регистрация</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div className="space-y-2">
          <div>
            <label htmlFor="email">
              <span className="opacity-50 text-md">Электронная почта</span>
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              name="email"
              id="email"
              placeholder="your_mail@example.com"
              className={clsx(
                "mt-0.5 w-full focus:ring ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5",
                !formik.errors.email || !formik.touched.email
                  ? "ring-dirty-green"
                  : "ring ring-red-600",
              )}
              type="email"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-xs my-0.5 text-red-600">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="name_surname">
              <span className="opacity-50 text-md">ФИО</span>
            </label>
            <input
              value={formik.values.name_surname}
              onChange={formik.handleChange}
              name="name_surname"
              id="name_surname"
              placeholder="Иванов Игорь Дмитриевич"
              className={clsx(
                "mt-0.5 w-full focus:ring ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5",
                !formik.errors.name_surname || !formik.touched.name_surname
                  ? "ring-dirty-green"
                  : "ring ring-red-600",
              )}
              type="text"
            />
            {formik.errors.name_surname && formik.touched.name_surname && (
              <div className="text-xs my-0.5 text-red-600">
                {formik.errors.name_surname}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="password">
              <span className="opacity-50 text-md">Введите пароль</span>
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              id="password"
              className={clsx(
                "mt-0.5 w-full focus:ring ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5",
                !formik.errors.password || !formik.touched.password
                  ? "ring-dirty-green"
                  : "ring ring-red-600",
              )}
              type="password"
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-xs my-0.5 text-red-600">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="repeat_password">
              <span className="opacity-50 text-md">Повторите пароль</span>
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.repeat_password}
              name="repeat_password"
              id="repeat_password"
              className={clsx(
                "mt-0.5 w-full focus:ring ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5",
                !formik.errors.repeat_password || !formik.touched.repeat_password
                  ? "ring-dirty-green"
                  : "ring ring-red-600",
              )}
              type="password"
            />
            {formik.errors.repeat_password && formik.touched.repeat_password && (
              <div className="text-xs my-0.5 text-red-600">
                {formik.errors.repeat_password}
              </div>
            )}
          </div>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-md text-lg text-white py-3 focus:outline-none bg-dirty-green focus:ring ring-dirty-green focus:ring-offset-2">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div>
        <div className="flex justify-center items-center mt-1">
          <p className="text-s">
            У меня уже есть аккаунт!
            <Link to="/auth">
              <span className="text-s ml-1 text-link">Войти</span>
            </Link>
          </p>
        </div>
      </div>
    </WhiteBlock>
  );
};

export default Register;
