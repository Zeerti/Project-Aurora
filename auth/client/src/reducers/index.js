// Creating Root reducer
// Combines auth and error reducers ???

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducers from "./errorReducers";
import searchReducers from "./searchReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducers,
  search: searchReducers,
});
