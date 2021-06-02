import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import clsx from "clsx";

import WhiteBlock from "../components/WhiteBlock";
import { validateMail } from "../utils/validation";

import plus from "../assets/images/krest.svg";

// TODO (5) перенести из старого проекта компоненты и стили [.]

// TODO (1) валидация гмыла и пароля с помощью регулярок [x] -> сделать тоже самое но с Auth

// TODO (4) подключить firebase и добавить авторизацию через GOOGLE [.]

// TODO (3?) мб переделать на форму (добавить Formik для лучшей рaботы с формами) [x] -> сделать тоже самое но с Auth

const Auth = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateMail,
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
        <p className="text-2xl font-medium">Войти</p>
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
              id="email"
              name="email"
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
            <label htmlFor="password">
              <span className="opacity-50 text-md">Введите пароль</span>
            </label>
            <input
              onChange={formik.handleChange}
              value={formik.values.password}
              name="password"
              id="password"
              className={clsx(
                "mt-0.5 w-full ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5",
                !formik.errors.password || !formik.touched.password
                  ? "focus:ring ring-dirty-green"
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
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-md text-white py-2.5 focus:outline-none bg-dirty-green focus:ring-2 ring-dirty-green focus:ring-offset-2">
            Войти в учетную запись
          </button>
        </div>
      </form>
      <div className="mt-3">
        <div>
          <button className="w-full rounded-md border focus:ring-2 ring-gray-400 focus:ring-offset-2 border-gray-400 text-gray-400 py-2 focus:outline-none">
            Войти с помощью Google
          </button>
        </div>
        <div className="flex justify-center items-center mt-1">
          <p className="text-s">
            У меня еще нет аккаунта!
            <Link to="/register">
              <span className="text-s ml-1 text-link">Зарегистрироваться</span>
            </Link>
          </p>
        </div>
      </div>
    </WhiteBlock>
  );
};

export default Auth;
