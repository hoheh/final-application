export const ADDNEWITEM = "ADD_NEW_ITEM";
export const DELETEITEM = "DELETE_ITEM";
export const GETALLITEM = "GET_ALL_ITEM";

const addItem = (item) => ({
  type: ADDNEWITEM,
});

export const addNewItemFetch = (item) => (dispatch) => {
  dispatch(addItem(item));
};
