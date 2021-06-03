import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useFormik } from "formik";
import firebase from "firebase";

import { InputField, WhiteBlock } from "../components/main";

import { validateAuth } from "../utils/validation";
import { Context } from "../index";

import { krest } from "../assets/images/main";

// TODO (1) переделать отображение форм тк это новая страница и задний план просто удаляется

// TODO (4) сделать бд в firebase

// TODO (3) переход при регистрации/авторизации на главную страницу

// TODO (2) регистрацию и авторизация с помощью почты и пароля

// TODO (5) отображение авы (google ава/ава из первых букв имени-фамилии c каким нибудь цветом на беке)

// TODO (7) отдельный компонент кнопки

// TODO (6) мб сделать изображения на странице книг button

const Auth = () => {
  const history = useHistory();

  let { auth } = React.useContext(Context);
  const authGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateAuth,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const inputField = [
    {
      label: "Электронная почта",
      name: "email",
      placeholder: "your_email@example.com",
      type: "email",
    },
    {
      label: "Введите пароль",
      name: "password",
      placeholder: "",
      type: "password",
    },
  ];

  return (
    <WhiteBlock classname="w-104 flex justify-center flex-col">
      <div className="flex flex-row-reverse cursor-pointer">
        <img
          onClick={() => history.goBack()}
          className="w-8 h-8"
          src={krest}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center mb-5">
        <p className="text-3xl font-medium">Войти</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div className="space-y-4">
          {inputField.map(({ label, name, placeholder, type }) => {
            return (
              <InputField
                label={label}
                nameId={name}
                placeholder={placeholder}
                formik={formik}
                type={type}
              />
            );
          })}
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-md text-xl text-white py-3.5 focus:outline-none bg-dirty-green focus:ring-2 ring-dirty-green focus:ring-offset-2">
            Войти в учетную запись
          </button>
        </div>
      </form>
      <div className="mt-3">
        <div>
          <button
            onClick={() => authGoogle()}
            className="w-full rounded-md text-xl border focus:ring-2 ring-gray-400 focus:ring-offset-2 border-gray-400 text-gray-400 py-3 focus:outline-none">
            Войти с помощью Google
          </button>
        </div>
        <div className="flex justify-center items-center mt-1">
          <p className="text-md">
            У меня еще нет аккаунта!
            <Link to="/register">
              <span className="text-md ml-1 text-link">Зарегистрироваться</span>
            </Link>
          </p>
        </div>
      </div>
    </WhiteBlock>
  );
};

export default Auth;
