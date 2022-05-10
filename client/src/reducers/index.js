import { combineReducers } from "redux";
import alert from "./alert";
import authbidder from "./authbidder";
import authfarmer from "./authfarmer";

export default combineReducers({
  alert,
  authbidder,
  authfarmer,
});
