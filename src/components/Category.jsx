import React from "react";
import firebase from "firebase";

const Category = ({ genreName }) => {
  const [items, setItems] = React.useState([]);
  const refs = firebase.firestore().collection("Book").orderBy("genreName");
  // TODO переписать на добавление только одного жанра
  const getItems = () => {
    refs.onSnapshot((qSnap) => {
      const items = [];
      qSnap.forEach((item) => {
        items.push(item.data());
      });
      setItems(items);
    });
  };

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <ul className="space-y-3 relative left-0.5">
      {items.map((value) => (
        <li className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
          {value.genreName}
        </li>
      ))}
    </ul>
  );
};

export default Category;
