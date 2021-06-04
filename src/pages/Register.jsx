import React from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useFormik } from "formik";

import { WhiteBlock } from "../components/main";
import { InputField } from "../components/main";

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
      console.log(values.password, values.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const inputField = [
    {
      label: "Электронная почта",
      nameId: "email",
      placeholder: "your_mail@example.com",
      type: "email",
    },
    {
      label: "Введите пароль",
      nameId: "password",
      placeholder: "",
      type: "password",
    },
    {
      label: "Повторите пароль",
      nameId: "repeat_password",
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
          src={plus}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center mb-5">
        <p className="text-3xl font-medium">Регистрация</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-8">
        <div className="space-y-3">
          {inputField.map(({ label, nameId, placeholder, type }) => {
            return (
              <InputField
                label={label}
                nameId={nameId}
                placeholder={placeholder}
                formik={formik}
                type={type}
              />
            );
          })}
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-md text-xl text-white py-3.5 focus:outline-none bg-dirty-green focus:ring ring-dirty-green focus:ring-offset-2">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <div>
        <div className="flex justify-center items-center mt-1">
          <p className="text-md">
            У меня уже есть аккаунт!
            <Link to="/auth">
              <span className="text-md ml-1 text-link">Войти</span>
            </Link>
          </p>
        </div>
      </div>
    </WhiteBlock>
  );
};

export default Register;
