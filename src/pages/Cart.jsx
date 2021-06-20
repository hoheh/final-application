import React from "react";
import { useHistory } from "react-router-dom";

import { trash } from "../assets/images/main";

const Cart = () => {
  const product = [];
  const history = useHistory();

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
      {product.length > 0 ? (
        <div></div>
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
