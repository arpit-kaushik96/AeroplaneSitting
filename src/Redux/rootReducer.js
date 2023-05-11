import { combineReducers } from "redux";
import reducer from "./mainReducer.js";

const rootReducer = combineReducers({
  mainReducer: reducer
});

export default rootReducer;
