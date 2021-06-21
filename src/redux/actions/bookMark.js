export const ADDNEWBOOKMARK = "ADD_NEW_BOOKMARK";
export const REMOVEBOOKMARK = "REMOVE_BOOKMARK";
export const REMOVEALLBOOKMARK = "REMOVE_ALL_BOOKMARK";

const addBookMark = (item) => ({
  type: ADDNEWBOOKMARK,
  item,
});
export const addNewBookMark = (item) => (dispatch) => {
  dispatch(addBookMark(item));
};

const removeAll = () => ({
  type: REMOVEALLBOOKMARK,
});
export const removeAllBookMark = () => (dispatch) => {
  dispatch(removeAll());
};

const removeItem = (item) => ({
  type: REMOVEBOOKMARK,
  item,
});
export const removeSelectedBookMark = (item) => (dispatch) => {
  dispatch(removeItem(item));
};
