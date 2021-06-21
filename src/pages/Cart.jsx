import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItem } from "../redux/actions/cart";

import { trash } from "../assets/images/main";
import { CartBlock } from "../components/index";

const Cart = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { items, weight, count, price } = useSelector(({ cart }) => cart);
  const convertWeight = () => {
    return weight.toFixed(2);
  };
  return (
    <div className="px-20 py-8">
      <div className="w-full border-b border-gray-300">
        <div className="flex items-center space-x-6">
          <button className="border-b-4 py-1.5 focus:outline-none h-full border-dirty-green">
            <span className="text-2.5xl font-medium">Корзина</span>
          </button>
          <button className="py-1.5 focus:outline-none">
            <span className="text-2.5xl border-b-2 border-dashed border-blue-dirty text-blue-dirty">
              Отложенные товары
            </span>
          </button>
        </div>
      </div>
      {items.length > 0 ? (
        <div className="mt-4 flex justify-between">
          <div className="w-9/12 mb-10 space-y-4">
            <div className="flex flex-row-reverse mt-3">
              <button
                onClick={() => {
                  dispatch(removeAllItem());
                }}
                className="pb-0.5 focus:outline-none text-black font-light opacity-60 hover:opacity-100 flex items-center space-x-2">
                <img className="w-4 h-4" src={trash} alt="" />
                <span>Удалить все</span>
              </button>
            </div>
            {items.map((item) => (
              <CartBlock key={item.bookId} item={item} />
            ))}
          </div>
          <div className="mt-14 shadow-lg h-96">
            <div className="w-96 h-full border border-border-cart">
              <ul>
                <li className="border-b border-border-cart py-4 flex justify-between font-thin px-5">
                  <span>Товаров в заказе</span>
                  <span>{count}</span>
                </li>
                <li className="border-b border-border-cart py-4 flex justify-between font-thin px-5">
                  <span>Вес заказа</span>
                  <span>{convertWeight()} кг.</span>
                </li>
                <li className="border-b border-border-cart py-4 flex justify-between font-thin px-5">
                  <span>Сумма заказа</span>
                  <span>{price} руб.</span>
                </li>
                <li className="py-4 flex justify-between font-thin px-5">
                  <span>Доставка бесплатно</span>
                  <span>Бесплатно</span>
                </li>
                <li className="py-4 flex font-medium justify-between px-5">
                  <span className="text-lg">Итого к оплате</span>
                  <span className="text-lg">{price} руб.</span>
                </li>
              </ul>
              <div className="w-full px-5 mt-5">
                <button
                  onClick={() => {
                    history.push("/pay");
                  }}
                  className="w-full focus:outline-none bg-dirty-green py-2 px-4 text-white font-medium text-2xl">
                  Оплатить
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full space-y-8 py-28 h-full flex flex-col items-center justify-center">
          <div>
            <img className="w-36 h-36 opacity-70" src={trash} alt="" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl font-medium text-center">
              Ваша корзина сейчас пуста
            </p>
            <p className="text-lg text-center font-thin">
              Воспользуйтесь нашим каталогом, чтобы ее заполнить. <br />У нас всегда
              есть, что почитать!
            </p>
            <button
              onClick={() => history.push("/")}
              className="bg-dirty-green focus:outline-none rounded-lg w-64 py-3">
              <span className="text-xl text-white">Перейти в каталог</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
