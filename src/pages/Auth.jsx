import React from "react";
import { Link, useHistory } from "react-router-dom";

import WhiteBlock from "../components/WhiteBlock";

import plus from "../assets/images/krest.svg";

// TODO мб стоит объединить Auth и Register в один компонент [.]

// TODO поменять цвет ринга у инпутов [.]

// TODO перенести из старого проекта компоненты и стили [.]

// TODO объединить компонент AUTH and REGISTER ->
// TODO в один компонент и передавать информацию через пропсы + children [.]

// TODO валидация гмыла и пароля с помощью регулярок [.]

// TODO подключить firebase и добавить авторизацию через GOOGLE [.]

const Auth = () => {
  const history = useHistory();

  return (
    <WhiteBlock classname="flex flex-col">
      <div
        onClick={() => history.goBack()}
        className="flex flex-row-reverse cursor-pointer">
        <img className="w-7 h-7" src={plus} alt="" />
      </div>
      <div className="flex justify-center items-center mb-7">
        <p className="text-2xl font-medium">Войти</p>
      </div>
      <div className="space-y-6">
        <div>
          <label htmlFor="mail">
            <span className="opacity-50 text-md">Электронная почта</span>
          </label>
          <input
            id="mail"
            placeholder="your_mail@example.com"
            className="w-full focus:ring border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="pass">
            <span className="opacity-50 text-md">Введите пароль</span>
          </label>
          <input
            id="pass"
            className="w-full focus:ring border rounded-md font-thin border-gray-300 focus:outline-none px-2 py-2.5"
            type="password"
          />
        </div>
      </div>
      <div>
        <div className="mt-8">
          <button className="w-full rounded-md text-lg text-white py-3 focus:outline-none bg-green-500 focus:ring ring-green-500 focus:ring-offset-2">
            Войти в учетную запись
          </button>
        </div>
        <div className="flex justify-center items-center mt-2">
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
