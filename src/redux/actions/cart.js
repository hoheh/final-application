import firebase from "firebase";

export const ADDNEWITEM = "ADD_NEW_ITEM";
export const GETSELECTEDITEM = "GET_SELECTED_ITEM";
export const ADDNEWSELECTEDITEM = "ADD_NEW_SELECTED_ITEM";
export const REMOVEITEM = "REMOVE_ITEM";
export const REMOVEALLITEM = "REMOVE_ALL_ITEM";

const addItem = ({ item }) => ({
  type: ADDNEWITEM,
  item,
});
export const addNewItemFetch = (item) => (dispatch) => {
  dispatch(addItem(item));
};

const addSelectedItem = ({ item, price, count }) => ({
  type: ADDNEWSELECTEDITEM,
  item,
  price,
  count,
});
export const addNewSelectedItem = (item, price, count) => (dispatch) => {
  dispatch(addSelectedItem({ item, price, count }));
};

const removeAll = () => ({
  type: REMOVEALLITEM,
});
export const removeAllItem = () => (dispatch) => {
  dispatch(removeAll());
};

const removeItem = (item) => ({
  type: REMOVEITEM,
  item,
});
export const removeSelectedItem = (item) => (dispatch) => {
  dispatch(removeItem(item));
};

export const fetchSelectedBook = (bookId) => {
  const ref = firebase.firestore().collection("Book").where("bookId", "==", bookId);
  ref.onSnapshot((qSnap) => {
    let item = {};
    qSnap.forEach((newItem) => {
      item = { ...item, ...newItem.data() };
    });
    localStorage.setItem("item", JSON.stringify(item));
  });
};
