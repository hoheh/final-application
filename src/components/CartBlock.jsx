import React from "react";
import { useDispatch } from "react-redux";
import { trash } from "../assets/images/main";
import { bookMarkBlack } from "../assets/images/main";
import { removeSelectedItem } from "../redux/actions/cart";

const CartBlock = ({ item }) => {
  const dispatch = useDispatch();
  let [countBook, setCountBook] = React.useState(1);

  return (
    <div className="h-64 w-full">
      <div className="flex py-5 px-10 shadow-lg h-full border border-border-cart">
        <div className="w-36 flex items-center">
          <img src={item.bookPhoto} alt="" />
        </div>
        <div className="pl-10 py-8 w-full flex justify-between">
          <div className="flex flex-col">
            <div className="space-y-1">
              <p className="font-medium w-9/12 text-2xl">{item.bookName}</p>
              <p className="text-base font-thin text-border-cart">
                {item.authorName}
              </p>
              <div className="flex items-center space-x-1">
                <svg
                  className="w-3 h-3 opacity-70"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 11 12"
                  id="balance">
                  <path d="M5.501 7.01v-.944a.25.25 0 00-.251-.25.25.25 0 00-.252.25v.945a.846.846 0 00-.6.805.85.85 0 00.852.848.85.85 0 00.852-.848.846.846 0 00-.6-.806z"></path>
                  <path d="M10.491 10.713L9.747 4.64A1.153 1.153 0 008.6 3.633H6.404v-1.34H8.88c.627 0 1.135-.505 1.135-1.128v-.038C10.014.505 9.506 0 8.879 0H1.621C.994 0 .486.505.486 1.127v.038c0 .623.508 1.128 1.135 1.128h2.475v1.34H1.897c-.58 0-1.074.432-1.144 1.007l-.744 6.073c-.04.327.062.655.281.9.219.245.533.387.865.387h8.19c.332 0 .646-.143.865-.387.219-.245.322-.573.281-.9zm-5.241.195c-1.715 0-3.111-1.388-3.111-3.093s1.396-3.09 3.111-3.09c1.715 0 3.109 1.385 3.109 3.09a3.103 3.103 0 01-3.109 3.093z"></path>
                </svg>
                <p className="text-base font-thin text-gray-500">
                  Вес: {item.bookWeight} кг.
                </p>
              </div>
            </div>
          </div>
          <div className="py-1">
            <div className="flex space-x-10 items-center">
              <div className="grid w-32 rounded-md border border-gray-300 h-full grid-cols-3 grid-rows-1">
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
                    value={countBook}
                    onChange={(e) => {
                      if (e.target.value === 0) {
                        setCountBook(1);
                      } else {
                        setCountBook(e.target.value);
                      }
                    }}
                    className="w-full h-full text-center focus:outline-none border-r border-gray-300"
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
                <p className="text-2xl font-medium">
                  {item.bookPrice * countBook} руб.
                </p>
              </div>
            </div>
            <div className="flex mt-20 justify-end space-x-6">
              <div className="">
                <button
                  onClick={() => {
                    dispatch(removeSelectedItem(item));
                  }}
                  className="pb-0.5 focus:outline-none text-black font-light opacity-60 hover:opacity-100 flex items-center space-x-2">
                  <img className="w-4 h-4" src={trash} alt="" />
                  <span>Удалить</span>
                </button>
              </div>
              <div className=" ">
                <button className="pb-0.5 focus:outline-none text-black font-light opacity-60 hover:opacity-100 flex items-center space-x-2">
                  <img className="w-4 h-4 opacity-50" src={bookMarkBlack} alt="" />
                  <span>Отложить</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
