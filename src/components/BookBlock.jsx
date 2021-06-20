import React from "react";
import clsx from "clsx";

import { bookMarkOrange, bookMarkBlack } from "../assets/images/main";

const BookBlock = React.memo(({ value }) => {
  // TODO переделать с помощью redux
  const [addToCart, setAddToCart] = React.useState(false);
  const [bookMarkChoose, setBookMarkChoose] = React.useState(false);
  return (
    <div className="w-full h-140 cursor-pointer flex items-center justify-center bg-transparent">
      <div className="w-full space-y-2">
        <div
          className="bg-contain bg-center bg-no-repeat h-82"
          style={{ backgroundImage: `url(${value.bookPhoto})` }}></div>
        <section className="mx-6">
          <p className="text-xl text-left font-medium">{value.bookPrice} руб.</p>
          <p className="tracking-wide h-12 break-words overflow-ellipsis overflow-hidden font-light mb-0.5">
            {value.bookName}
          </p>
          <p className="text-gray-400 text-md mb-1 truncate w-11/12 tracking-wide">
            {value.authorName}
          </p>
          <div className="flex items-center">
            <button
              onClick={() => setAddToCart(!addToCart)}
              className={clsx(
                "focus:outline-none w-4/5 p-2.5 border rounded-lg tracking-wider",
                addToCart ? "bg-dirty-green text-white" : "border-gray-300",
              )}>
              {addToCart ? "Добавлено" : "В корзину"}
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
});

export default BookBlock;
