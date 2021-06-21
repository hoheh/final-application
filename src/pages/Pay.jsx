import React from "react";
import emailjs from "emailjs-com";
import moment from "moment";
import { ru } from "moment/locale/ru";
import { useSelector } from "react-redux";

const Pay = () => {
  const { items, price } = useSelector(({ cart }) => cart);

  const getDate = () => {
    const now = moment().add(7, "days");
    moment.locale(ru);
    return now.format("DD MMMM");
  };

  const sendEmail = (e) => {
    try {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_mkz2x6k",
          "template_ah0ybis",
          e.target,
          "user_yIuAcaR3jRIVK1F9x36uH",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        );
      alert("Сообщение успешно отправлено!");
    } catch (e) {
      alert("Произлошла ошибка, попробуйте позже.");
    }
  };
  return (
    <div className="px-20 py-8">
      <div className="flex justify-between">
        <div>
          <p className="text-4xl font-medium">Оформление заказа</p>
        </div>
      </div>
      <form onSubmit={sendEmail}>
        <input
          placeholder="Введите ваше имя"
          className="focus:outline-none text-xl font-thin py-3 px-6"
          type="text"
          name="name"
        />
        <p className="space-x-4">
          <span className="text-xl">Общая цена заказа составляет:</span>
          <span className="text-xl" name="price">
            {price} руб.
          </span>
        </p>
        <p>
          Примерная дата доставки: <span name="date_of_delivery">{getDate()}</span>
        </p>
        {items.map((item) => (
          <div className="py-5 flex">
            <div className="w-28">
              <img className="" name="image_url" src={item.bookPhoto} alt="" />
            </div>
            <div>
              <div>
                <p name="bookName" className="text-3xl font-thin ml-10">
                  {item.bookName}
                </p>
              </div>
              <div>
                <p name="priceBook" className="text-2xl font-thin ml-10">
                  {item.bookPrice} руб.
                </p>
              </div>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="bg-dirty-green px-3 text-2xl focus:outline-none text-white py-2">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Pay;
