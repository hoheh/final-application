export const validateMail = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Поле обязательно для заполнения";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Неверный адрес электронной почты";
  }

  if (!values.password) {
    errors.password = "Поле обязательно для заполнения";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(values.password)
  ) {
    errors.password = "Пароль введен неверно";
  }

  return errors;
};
