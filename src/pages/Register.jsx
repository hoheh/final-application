import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";

import { WhiteBlock, Button, InputField } from "../components";
import { Context } from "../index";

import { validateReg } from "../utils/validation";

import plus from "../assets/images/krest.svg";

const Register = () => {
  const { auth } = React.useContext(Context);
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
      auth
        .createUserWithEmailAndPassword(values.email, values.password)
        .then((data) => {
          history.push("/");
          alert(data);
        })
        .catch((err) => {
          alert(err.message);
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
          onClick={() => history.push("/")}
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
          {inputField.map(({ label, nameId, placeholder, type }, idx) => {
            return (
              <InputField
                key={idx}
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
          <Button
            text="Зарегистрироваться"
            type="submit"
            classnames="text-white bg-dirty-green ring-dirty-green focus:ring-offset-2 py-3.5"
          />
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
