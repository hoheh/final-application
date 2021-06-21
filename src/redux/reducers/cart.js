import { ADDNEWITEM, REMOVEITEM, REMOVEALLITEM } from "../actions/cart";

const initialState = {
  items: [],
  weight: 0.0,
  count: 0,
  price: 0,
  isLoaded: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADDNEWITEM:
      return {
        ...state,
        items: [...state.items, ...[action.item]],
        weight: state.weight + action.item.bookWeight,
        price: state.price + action.item.bookPrice,
        count: state.items.push(action.item),
      };
    case REMOVEITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.bookId !== action.item.bookId),
        weight: state.weight - action.item.bookWeight,
        price: state.price - action.item.bookPrice,
        count: --state.items.length,
      };
    case REMOVEALLITEM:
      return {
        items: [],
        weight: 0.0,
        count: 0,
        price: 0,
      };
    default:
      return state;
  }
};

export default cart;
