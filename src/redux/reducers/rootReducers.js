import { combineReducers } from "redux";

import cart from "./cart";
import bookMark from "./bookMark";

const rootReducer = combineReducers({ cart, bookMark });

export default rootReducer;
