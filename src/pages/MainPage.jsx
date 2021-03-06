import React from "react";

import firebase from "firebase";

import { BookBlock, Skeleton } from "../components";

function Main() {
  const [items, setItems] = React.useState([]);
  const [state, setState] = React.useState(false);
  const refs = firebase
    .firestore()
    .collection("Book")
    .orderBy("bookId", "desc")
    .limitToLast(6);

  const getItems = () => {
    setState(true);
    refs.onSnapshot((qSnap) => {
      const items = [];
      qSnap.forEach((item) => {
        items.push(item.data());
      });
      setState(false);
      setItems(items);
    });
  };

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="px-20 py-8">
      <div>
        <div>
          <div>
            <p className="text-3xl font-medium">Вам может понравится</p>
          </div>
          <div>
            <div className="grid grid-cols-6 grid-rows-1">
              {state
                ? Array(5)
                    .fill(0)
                    .map(() => <Skeleton />)
                : items.map((value) => (
                    <BookBlock value={value} key={value.bookId} />
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p className="text-3xl font-medium">Новинки</p>
          </div>
          <div>
            <div className="grid grid-cols-6 grid-rows-1">
              {state
                ? Array(5)
                    .fill(0)
                    .map(() => <Skeleton />)
                : items.map((value) => {
                    return value.categoryName === "Новинки" ? (
                      <BookBlock value={value} key={value.bookId} />
                    ) : null;
                  })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <p className="text-3xl font-medium">Бестселлеры</p>
          </div>
          <div>
            <div className="grid grid-cols-6 grid-rows-1">
              {state
                ? Array(5)
                    .fill(0)
                    .map(() => <Skeleton />)
                : items.map((value) => {
                    return value.categoryName === "Бестселлеры" ? (
                      <BookBlock value={value} key={value.bookId} />
                    ) : null;
                  })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
