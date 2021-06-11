import React from "react";

import { bookImage, bookMarkOrange, bookMarkBlack } from "../assets/images/main";

const BookBlock = () => {
  const [bookMarkChoose, setBookMarkChoose] = React.useState(false);
  return (
    <div className="w-full h-140 flex items-center justify-center bg-transparent">
      <div className="my-auto space-y-3">
        <div className="w-10/12 mx-auto">
          <img src={bookImage} alt="Book image" />
        </div>
        <section className="mx-6">
          <p className="text-xl text-left font-medium">681 руб.</p>
          <p className="tracking-wide font-light mb-0.5 text-lg">
            Мара и Морок. 500 лет назад
          </p>
          <p className="text-gray-400 mb-3 tracking-wide">Лия арден</p>
          <div className="flex items-center">
            <button
              className="focus:outline-none w-4/5 p-2.5 border rounded-lg
                tracking-wider border-gray-300">
              В корзину
            </button>
            <div
              onClick={() => setBookMarkChoose(!bookMarkChoose)}
              className="w-8 h-8 flex-1 cursor-pointer">
              {!bookMarkChoose ? (
                <img
                  className="w-full h-full opacity-40"
                  src={bookMarkBlack}
                  alt="Usually bookmark"
                />
              ) : (
                <img
                  className="w-full h-full opacity-80"
                  src={bookMarkOrange}
                  alt="Unusually bookmark"
                />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookBlock;
