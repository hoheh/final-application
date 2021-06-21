import { ADDNEWITEM, GETALLITEM, GETSELECTEDITEM } from "../actions/cart";

const initialState = {
  items: [],
  weight: 0.0,
  count: 0,
  isLoaded: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADDNEWITEM:
      return {
        ...state,
        items: [...state.items, ...[action.item]],
        weight: state.weight + action.item.bookWeight,
        count: state.items.push(action.item),
      };
    default:
      return state;
  }
};

export default cart;
