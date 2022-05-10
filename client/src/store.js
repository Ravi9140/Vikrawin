import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  devTools: composeWithDevTools(applyMiddleware(...middleware)),
  initialState,
});

export default store;
