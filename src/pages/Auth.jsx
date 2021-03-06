import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { Button, InputField, WhiteBlock } from "../components";

import { validateAuth } from "../utils/validation";
import { Context } from "../index";

import { krest } from "../assets/images/main";

const Auth = () => {
  const history = useHistory();
  const { auth, firebase } = React.useContext(Context);

  const authGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateAuth,
    onSubmit: (values) => {
      auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then(({ user }) => {
          history.push("/");
          console.log(user);
        });
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
          onClick={() => history.push("/")}
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
          {inputField.map(({ label, name, placeholder, type }, idx) => {
            return (
              <InputField
                key={idx}
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
          <Button
            type="submit"
            text="Войти в учетную запись"
            classnames="text-white py-3.5 bg-dirty-green ring-dirty-green focus:ring-offset-2"
          />
        </div>
      </form>
      <div className="mt-3">
        <div>
          <Button
            text="Войти с помощью Google"
            onClick={() => authGoogle()}
            classnames="border ring-gray-400 border-gray-400 text-gray-400 py-2.5 focus:ring-offset-2 focus:ring-2"
          />
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
