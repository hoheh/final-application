import React from "react";
import { Link, useHistory } from "react-router-dom";

import WhiteBlock from "../components/WhiteBlock";

import plus from "../assets/images/krest.svg";

const Register = () => {
  const history = useHistory();

  return (
    <WhiteBlock classname="flex flex-col">
      <div
        onClick={() => history.goBack()}
        className="flex flex-row-reverse cursor-pointer">
        <img className="w-7 h-7" src={plus} alt="" />
      </div>
      <div className="flex justify-center items-center mb-7">
        <p className="text-2xl font-medium">Регистрация</p>
      </div>
      <div className="space-y-6">
        <div>
          <label htmlFor="mail">
            <span className="opacity-50 text-md">Электронная почта</span>
          </label>
          <input
            id="mail"
            placeholder="your_mail@example.com"
            className="mt-0.5 w-full focus:ring ring-dirty-green ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="name_surname">
            <span className="opacity-50 text-md">ФИО</span>
          </label>
          <input
            id="name_surname"
            placeholder="Иванов Игорь Дмитриевич"
            className="mt-0.5 w-full focus:ring ring-dirty-green ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="pass">
            <span className="opacity-50 text-md">Введите пароль</span>
          </label>
          <input
            id="pass"
            className="mt-0.5 w-full focus:ring ring-dirty-green ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="repeat_pass">
            <span className="opacity-50 text-md">Повторите пароль</span>
          </label>
          <input
            id="repeat_pass"
            className="mt-0.5 w-full focus:ring ring-dirty-green ring-opacity-50 border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5"
            type="password"
          />
        </div>
      </div>
      <div>
        <div className="mt-8">
          <button className="w-full rounded-md text-lg text-white py-3 focus:outline-none bg-dirty-green focus:ring ring-dirty-green focus:ring-offset-2">
            Зарегистрироваться
          </button>
        </div>
        <div className="flex justify-center items-center mt-2">
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
