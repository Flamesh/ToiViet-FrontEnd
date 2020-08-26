import { combineReducers } from "redux";
import { authorReducer } from "./data/auth";

const reducer = combineReducers({
  auth: authorReducer,
});

export default reducer;
