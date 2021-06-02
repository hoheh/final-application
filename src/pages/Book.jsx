import React from "react";

import {
  secondBigImage,
  bigBookImage,
  checkImage,
  starIcon,
  bookImage,
  bookMarkBlack,
  bookMarkOrange,
} from "../assets/images/main";

const Book = () => {
  const article = "8fc3986138a61";
  const inStock = 10;
  const sum = 821;
  const [bookMarkChoose, setBookMarkChoose] = React.useState(false);
  const addBorder = (target) => {
    target["parentNode"].classList.add("ring-2", "ring-dirty-green");
  };

  return (
    <div className="py-10">
      <div className="space-y-5">
        <div className="px-20 flex space-x-8">
          <div className="p-1 space-y-6">
            <div
              // TODO переписать логику переключения на useReducer
              onClick={({ target }) => addBorder(target)}
              className="w-20 h-20 overflow-hidden object-center">
              <img
                className="object-cover cursor-pointer"
                src={bigBookImage}
                alt=""
              />
            </div>
            <div
              onClick={({ target }) => addBorder(target)}
              className="w-20 h-20 overflow-hidden object-center">
              <img
                className="object-cover cursor-pointer"
                src={secondBigImage}
                alt=""
              />
            </div>
          </div>
          <div>
            <img className="w-96" src={bigBookImage} alt="Big book image" />
          </div>
          <div className="flex-1 px-5 py-3">
            <div>
              <p className="text-4xl font-bold">Мара и Морок. 500 лет назад</p>
            </div>
            <div className="mt-3 mb-4">
              <p className="text-lg text-gray-500">Артикль: {article}</p>
            </div>
            <div className="w-9/12">
              <div className="w-full space-y-3 py-6 px-7 rounded-lg bg-hover-dirty-green-50">
                <div>
                  <p className="flex font-medium text-lg tracking-wide items-center text-green-600">
                    <span className="mr-1.5">
                      <img className="w-5 h-5" src={checkImage} alt="" />
                    </span>
                    В наличии
                  </p>
                </div>
                <div className="flex items-center space-x-5">
                  <div className="text-2xl font-light">
                    Цена &nbsp;
                    <span className="text-3xl font-bold">821</span>
                    &nbsp;
                    <span className="text-2xl">р.</span>
                  </div>
                  <div className="h-full flex space-x-2 items-center">
                    <div
                      className="grid w-32 rounded-md border border-gray-300 h-full grid-cols-3
										grid-rows-1">
                      <div className="w-full">
                        <button className="w-full focus:outline-none text-2xl opacity-60 border-r border-gray-300">
                          &#8722;
                        </button>
                      </div>
                      <div className="h-full w-full">
                        <input
                          className="w-full h-full text-center focus:outline-none border-r
												border-gray-300"
                          value="1"
                          type="text"
                        />
                      </div>
                      <div className="w-full">
                        <button className="w-full focus:outline-none text-2xl opacity-60 border-r border-gray-300">
                          &#43;
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 text-lg font-light tracking-wide">
                        = {sum} р.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    {/* TODO мб чтото добавить нужно */}
                    <div className="flex space-x-1.5 justify-end">
                      <img className="w-7 h-7" src={starIcon} alt="" />
                      <span className="text-2xl text-gray-400 font-medium">5.0</span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 pb-1.5">
                  <button
                    className="bg-green-500 text-lg rounded-lg text-white font-medium tracking-wider
									focus:outline-none px-7 py-3">
                    Добавить в корзину
                  </button>
                </div>
                <div>
                  {/* TODO дата курьерской доставки = число сегодня + неделя */}
                  <p className="text-pre-xl font-light text-gray-500">
                    Курьерская доставка: 16 мая, от 282 руб.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <div className="w-full h-92 overflow-hidden rounded-lg border border-gray-300">
                  <ul className="grid grid-rows-1 divide-x divide-gray-200 divide-solid grid-cols-3">
                    <li className="text-lg font-medium cursor-pointer text-center px-5 py-4">
                      Характеристика
                    </li>
                    <li className="text-lg cursor-pointer border-b bg-gray-10 text-center px-5 py-4">
                      Оплата
                    </li>
                    <li className="text-lg cursor-pointer border-b bg-gray-10 text-center px-5 py-4">
                      Доставка
                    </li>
                  </ul>
                  <div className="flex items-center justify-center h-5/6">
                    <div className="grid h-4/5 w-5/6 grid-rows-4 gap-x-5 grid-cols-2 py-8 px-10">
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Автор: &nbsp;
                          <span className="text-lg text-blue-400 cursor-pointer underline">
                            Лия Арден
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Жанр: &nbsp;
                          <span className="text-lg text-blue-400 cursor-pointer underline">
                            Фэнтези
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Издательский бренд: &nbsp;
                          <span className="text-lg text-blue-400 cursor-pointer underline">
                            Эксмо
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Год издания: &nbsp;
                          <span className="text-lg text-black">2021</span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Возрастное ограничение: &nbsp;
                          <span className="text-lg text-black">16+</span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Количество страниц: &nbsp;
                          <span className="text-lg text-black">300</span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Общий тираж: &nbsp;
                          <span className="text-lg text-black">3000</span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Вес: &nbsp;
                          <span className="text-lg text-black">0.2 кг.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center shadow-big-inner-shadow w-full h-152">
          <div className="w-5/12 space-y-12">
            <div className="flex justify-center">
              <p className="text-3xl font-medium">О книге</p>
            </div>
            <div className="space-y-7">
              <p className="text-2xl font-light">
                В прежние времена персонажи из сказок были реальны и встречались
                смертным едва ли не каждый день.
              </p>
              <p className="text-2xl font-light">
                Я много путешествовал, собирая легенды, слухи и даже откровенные
                небылицы о Марах и Мороках. Однажды я наткнулся на историю одной
                Мары, которая жила приблизительно за три сотни лет до исчезновения
                всех служительниц богини Смерти.
              </p>
              <p className="text-2xl font-light">
                Её настоящее имя намеренно скрывали, и я уверен, что эта история
                вышла особенной, потому что семья девочки не смогла выполнить главное
                правило – покинуть родные места.
              </p>
              <p className="text-2xl font-light">Малахий Зотов</p>
            </div>
          </div>
        </div>
        <div className="px-20">
          <div className="pt-3">
            <p className="text-3xl font-medium tracking-tight">Похожие товары</p>
          </div>
          <div className="grid grid-cols-7 grid-rows-1">
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
        </div>
      </div>
    </div>
  );
};

export default Book;
