import React from "react";

import firebase from "firebase";

const Authors = () => {
  const [authors, setAuthors] = React.useState([]);
  const refs = firebase.firestore().collection("Book").orderBy("authorName");

  const getAuthor = () => {
    refs.onSnapshot((qSnap) => {
      const items = [];
      qSnap.forEach((item) => {
        items.push(item.data().authorName);
      });
      const newItems = [];
      items.forEach((item) => {
        if (!newItems.includes(item)) {
          newItems.push(item);
        }
      });
      setAuthors(newItems);
    });
  };

  React.useEffect(() => {
    getAuthor();
  }, []);

  return (
    <div className="px-20 py-8">
      <div>
        <p className="text-4xl font-medium">Авторы</p>
      </div>
      <div className="py-5">
        <ul>
          {authors.map((author) => {
            return (
              <li className="py-2">
                <span className="cursor-pointer text-2xl font-thin">{author}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Authors;
