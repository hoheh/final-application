import {
  ADDNEWBOOKMARK,
  REMOVEBOOKMARK,
  REMOVEALLBOOKMARK,
} from "../actions/bookMark";

const initialState = {
  items: [],
  count: 0,
  isLoaded: false,
};

const bookMark = (state = initialState, action) => {
  switch (action.type) {
    case ADDNEWBOOKMARK:
      return {
        ...state,
        items: [...state.items, ...[action.item]],
      };
    case REMOVEBOOKMARK:
      return {
        ...state,
        items: state.items.filter((item) => item.bookId !== action.item.bookId),
        count: --state.items.length,
      };
    case REMOVEALLBOOKMARK:
      return {
        items: [],
        count: 0,
      };
    default:
      return state;
  }
};

export default bookMark;
