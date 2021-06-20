import React from "react";
import firebase from "firebase";

import { BookBlock } from "../components";

import { arrow } from "../assets/images/main";

const NewItems = () => {
  const sortByFiled = React.useRef(null);
  const [visibilityPopup, setVisibilityPopup] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const refs = firebase.firestore().collection("Book").where("category");

  const getItems = () => {
    refs.onSnapshot((qSnap) => {
      const items = [];
      qSnap.forEach((item) => {
        items.push(item.data());
      });
      setItems(items);
      console.log(items);
    });
  };

  React.useEffect(() => {
    getItems();
  }, []);

  const categoriesToChoose = [
    "Сначала новые",
    "Сначала дешевые",
    "Сначала дорогие",
    "Сначала популярные",
  ];
  return (
    <div className="px-20 py-8">
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
          <div className="mb-7">
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
              <div className="bg-white rounded-lg absolute border mt-0.5 shadow-md w-80">
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
            <div className="grid grid-rows-1 py-3 gap-y-4 grid-cols-5">
              {[1, 2, 3, 4, 5].map(() => (
                <BookBlock />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItems;
