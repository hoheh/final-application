import React from "react";

import {
  arrow,
  bookImage,
  bookMarkOrange,
  bookMarkBlack,
} from "../assets/images/main";

function Main() {
  const sortByFiled = React.useRef(null);
  const [visibilityPopup, setVisibilityPopup] = React.useState(false);
  const [bookMarkChoose, setBookMarkChoose] = React.useState(false);

  const categoriesToChoose = [
    "Сначала новые",
    "Сначала дешевые",
    "Сначала дорогие",
    "Сначала популярные",
  ];

  return (
    <main className="px-16 py-10">
      <div>
        <p className="text-4xl font-medium">Новинки</p>
      </div>
      <div className="flex pt-8">
        <div id="navigation-side" className="w-56 flex-none space-y-3">
          <span className="tracking-wider font-medium text-lg leading-7">
            Категории
          </span>
          <ul className="space-y-3 relative left-0.5">
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Художественная литература
            </li>
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Научно-популярная литература
            </li>
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Хобби и досуг
            </li>
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Детские книги
            </li>
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Учебная литература
            </li>
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Религия
            </li>
            <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
              Книги с автографом
            </li>
          </ul>
        </div>
        <div className="flex-grow px-8">
          <div className="mb-10">
            <button
              ref={sortByFiled}
              onClick={() => {
                setVisibilityPopup(!visibilityPopup);
              }}
              className="border border-gray-300 w-80 flex items-center opacity-90 justify-between
							focus:outline-none rounded-lg px-5 p-2">
              <span className="tracking-wider mr-4">Сначала популярные</span>
              <span className="w-4 font-medium">
                <img src={arrow} alt="Down arrow" />
              </span>
            </button>
            {visibilityPopup && (
              <div className="bg-white absolute border mt-0.5 shadow-md w-80">
                <ul>
                  {categoriesToChoose &&
                    categoriesToChoose.map((value, idx) => (
                      <li
                        key={idx}
                        className="py-3 px-5 hover:bg-hover-dirty-green-50 text-gray-600
													cursor-pointer">
                        {value}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <div className="grid grid-rows-2 divide-gray-200 divide-y">
              {[1, 2].map((idx) => (
                <div className="grid grid-rows-1 py-3 grid-cols-5" key={idx}>
                  <div className="w-full h-140 flex items-center justify-center bg-transparent">
                    <div className="my-auto space-y-3">
                      <div className="w-4/5 mx-auto">
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
                            className="focus:outline-none w-3/4 p-2.5 border rounded-lg
													tracking-wider border-gray-300">
                            В корзину
                          </button>
                          <div className="w-8 h-8 flex-1 cursor-pointer">
                            {!bookMarkChoose ? (
                              <img
                                className="w-full h-full opacity-40"
                                src={bookMarkBlack}
                                alt="Usually bookmark"
                              />
                            ) : (
                              <img
                                className="w-full h-full opacity-90"
                                src={bookMarkOrange}
                                alt="Unusually bookmark"
                              />
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="w-full h-140 flex items-center justify-center bg-transparent">
                    <div className="my-auto space-y-3">
                      <div className="w-4/5 mx-auto">
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
                            className="focus:outline-none w-3/4 p-2.5 border rounded-lg
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
                                className="w-full h-full opacity-90"
                                src={bookMarkOrange}
                                alt="Unusually bookmark"
                              />
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="w-full h-140 flex items-center justify-center bg-transparent">
                    <div className="my-auto space-y-3">
                      <div className="w-4/5 mx-auto">
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
                            className="focus:outline-none w-3/4 p-2.5 border rounded-lg
													tracking-wider border-gray-300">
                            В корзину
                          </button>
                          <div className="w-8 h-8 flex-1 cursor-pointer">
                            {!bookMarkChoose ? (
                              <img
                                className="w-full h-full opacity-40"
                                src={bookMarkBlack}
                                alt="Usually bookmark"
                              />
                            ) : (
                              <img
                                className="w-full h-full opacity-90"
                                src={bookMarkOrange}
                                alt="Unusually bookmark"
                              />
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="w-full h-140 flex items-center justify-center bg-transparent">
                    <div className="my-auto space-y-3">
                      <div className="w-4/5 mx-auto">
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
                            className="focus:outline-none w-3/4 p-2.5 border rounded-lg
													tracking-wider border-gray-300">
                            В корзину
                          </button>
                          <div className="w-8 h-8 flex-1 cursor-pointer">
                            {!bookMarkChoose ? (
                              <img
                                className="w-full h-full opacity-40"
                                src={bookMarkBlack}
                                alt="Usually bookmark"
                              />
                            ) : (
                              <img
                                className="w-full h-full opacity-90"
                                src={bookMarkOrange}
                                alt="Unusually bookmark"
                              />
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="w-full h-140 flex items-center justify-center bg-transparent">
                    <div className="my-auto space-y-3">
                      <div className="w-4/5 mx-auto">
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
                            className="focus:outline-none w-3/4 p-2.5 border rounded-lg
													tracking-wider border-gray-300">
                            В корзину
                          </button>
                          <div className="w-8 h-8 flex-1 cursor-pointer">
                            {!bookMarkChoose ? (
                              <img
                                className="w-full h-full opacity-40"
                                src={bookMarkBlack}
                                alt="Usually bookmark"
                              />
                            ) : (
                              <img
                                className="w-full h-full opacity-90"
                                src={bookMarkOrange}
                                alt="Unusually bookmark"
                              />
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
