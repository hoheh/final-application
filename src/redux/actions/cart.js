import firebase from "firebase";

export const ADDNEWITEM = "ADD_NEW_ITEM";
export const DELETEITEM = "DELETE_ITEM";
export const GETALLITEM = "GET_ALL_ITEM";
export const GETSELECTEDITEM = "GET_SELECTED_ITEM";

const addItem = (item) => ({
  type: ADDNEWITEM,
  item,
});

export const addNewItemFetch = (item) => (dispatch) => {
  dispatch(addItem(item));
};

const getAllItem = () => ({
  type: GETALLITEM,
});
export const fetchData = () => (dispatch) => {
  dispatch(getAllItem());
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
