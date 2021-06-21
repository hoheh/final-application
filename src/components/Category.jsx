import React from "react";
import firebase from "firebase";

const Category = () => {
  const [genreName, setGenreName] = React.useState([]);

  const refs = firebase.firestore().collection("Book");

  const getItems = () => {
    refs.onSnapshot((qSnap) => {
      const genres = [];
      qSnap.forEach((item) => {
        genres.push(item.data().genreName);
      });
      const newItems = [];
      genres.forEach((item) => {
        if (!newItems.includes(item)) {
          newItems.push(item);
        }
      });
      setGenreName(newItems);
    });
  };

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <ul className="space-y-3 relative left-0.5">
      {genreName.map((value, idx) => (
        <li
          key={idx}
          className="opacity-80 leading-7 cursor-pointer hover:opacity-100 tracking-wider-more">
          {value}
        </li>
      ))}
    </ul>
  );
};

export default Category;
