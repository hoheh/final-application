import React from "react";

import firebase from "firebase";
import moment from "moment";
import { ru } from "moment/locale/ru";
import { checkImage, starIcon } from "../assets/images/main";
import { BookBlock } from "../components/index";
import { useDispatch } from "react-redux";

const Book = () => {
  const [itemState, setItemState] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  let [countBook, setCountBook] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const dispatch = useDispatch();

  const getDate = () => {
    const now = moment().add(7, "days");
    moment.locale(ru);
    return now.format("DD MMMM");
  };

  const store = firebase
    .firestore()
    .collection("Book")
    .orderBy("bookId", "asc")
    .limitToLast(5);

  const getBook = () => {
    return store.onSnapshot((qSnap) => {
      const items = [];
      qSnap.forEach((item) => {
        items.push(item.data());
      });
      setItems(items);
    });
  };

  const getFromLocalStorage = async () => {
    setIsLoading(true);
    const str = await JSON.parse(localStorage.getItem("item"));
    setItemState((prev) => {
      return {
        ...prev,
        ...str,
      };
    });
    setIsLoading(false);
  };

  React.useEffect(() => {
    getBook();
    getFromLocalStorage();
    return () => {
      localStorage.removeItem("item");
    };
  }, []);

  return (
    <div className="py-10">
      <div className="space-y-5">
        <div className="px-20 flex space-x-8">
          <div className="p-1 flex flex-col space-y-6">
            <button className="w-20 focus:outline-none focus:ring-2 focus:ring-dirty-green h-20 overflow-hidden object-center">
              <img
                className="object-cover cursor-pointer"
                src={itemState.bookPhoto}
                alt=""
              />
            </button>
          </div>
          <div>
            <img className="w-96" src={itemState.bookPhoto} alt="Big book image" />
          </div>
          <div className="flex-1 px-5 py-3">
            <div className="w-11/12">
              <p className="text-4xl font-bold">{itemState.bookName}</p>
            </div>
            <div className="mt-3 mb-4">
              <p className="text-lg text-gray-500">
                Артикль: {itemState.bookArticle}
              </p>
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
                    <span className="text-3xl font-bold">{itemState.bookPrice}</span>
                    &nbsp;
                    <span className="text-2xl">р.</span>
                  </div>
                  <div className="h-full flex space-x-2 items-center">
                    <div
                      className="grid w-32 rounded-md border border-gray-300 h-full grid-cols-3
										grid-rows-1">
                      <div className="w-full">
                        <button
                          onClick={() => {
                            if (countBook !== 1) {
                              setCountBook(--countBook);
                            }
                          }}
                          className="w-full focus:outline-none text-2xl opacity-60 border-r border-gray-300">
                          &#8722;
                        </button>
                      </div>
                      <div className="h-full w-full">
                        <input
                          className="w-full h-full text-center focus:outline-none border-r
												border-gray-300"
                          onChange={({ target }) => setCountBook(target.value)}
                          value={countBook}
                          type="text"
                        />
                      </div>
                      <div className="w-full">
                        <button
                          onClick={() => {
                            setCountBook(++countBook);
                          }}
                          className="w-full focus:outline-none text-2xl opacity-60 border-r border-gray-300">
                          &#43;
                        </button>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 text-lg font-light tracking-wide">
                        = {itemState.bookPrice * countBook} р.
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex space-x-1.5 justify-end">
                      <img className="w-7 h-7" src={starIcon} alt="" />
                      <span className="text-2xl text-gray-400 font-medium">
                        {itemState.bookScore}
                      </span>
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
                  <p className="text-pre-xl font-light text-gray-500">
                    Курьерская доставка: {getDate()}, от 282 руб.
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
                          <span className="text-lg text-black cursor-pointer">
                            {itemState.authorName}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Жанр: &nbsp;
                          <span className="text-lg text-black cursor-pointer">
                            {itemState.genreName}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Издательский бренд: &nbsp;
                          <span className="text-lg text-black cursor-pointer">
                            {itemState.publishingName}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Год издания: &nbsp;
                          <span className="text-lg text-black">
                            {itemState.bookYearPublish}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Возрастное ограничение: &nbsp;
                          <span className="text-lg text-black">
                            {itemState.ageLimit}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Количество страниц: &nbsp;
                          <span className="text-lg text-black">
                            {itemState.bookCountPage}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Общий тираж: &nbsp;
                          <span className="text-lg text-black">
                            {itemState.bookTotalCirculation}
                          </span>
                        </p>
                      </div>
                      <div className="flex ml-4 items-center">
                        <p className="text-lg text-gray-400 font-light">
                          Вес: &nbsp;
                          <span className="text-lg text-black">
                            {itemState.bookWeight} кг.
                          </span>
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
          <div className="w-5/12 space-y-10 py-5">
            <div className="flex justify-center">
              <p className="text-3xl font-medium">О книге</p>
            </div>
            <div className="space-y-7 text-center">
              <p className="text-2xl font-light">{itemState.bookShortDescription}</p>
            </div>
          </div>
        </div>
        <div className="px-20">
          <div className="pt-3">
            <p className="text-3xl font-medium tracking-tight">Похожие товары</p>
          </div>
          <div className="grid grid-rows-1 py-3 gap-y-4 grid-cols-5">
            {items.map((value) => (
              <BookBlock value={value} key={value.bookId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
