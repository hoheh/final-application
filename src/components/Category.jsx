import React from "react";
import firebase from "firebase";
import { Skeleton } from ".";

const Category = () => {
  const [genreName, setGenreName] = React.useState([]);
  const [state, setState] = React.useState(false);
  const refs = firebase.firestore().collection("Book");

  const getItems = () => {
    setState(true);
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
      setState(false);
      setGenreName(newItems);
    });
  };

  React.useEffect(() => {
    getItems();
  }, []);

  if (state) {
    return (
      <div className="w-full h-full">
        <Skeleton />
      </div>
    );
  } else {
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
  }
};

export default Category;
