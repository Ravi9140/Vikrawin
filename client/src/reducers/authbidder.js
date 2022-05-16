import {
  B_REGISTER_SUCCESS,
  B_REGISTER_FAIL,
  B_LOADED,
  B_AUTH_ERROR,
  B_LOGIN_SUCCESS,
  B_LOGIN_FAIL,
  B_LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticatedBidder: null,
  loading: true,
  bidder: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case B_LOADED:
      return {
        ...state,
        isAuthenticatedBidder: true,
        loading: false,
        bidder: payload,
      };

    case B_AUTH_ERROR:
    case B_LOGIN_FAIL:
    case B_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticatedBidder: false,
        loading: false,
      };

    case B_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticatedBidder: true,
        loading: false,
      };
    case B_REGISTER_SUCCESS:
      return state;

    case B_REGISTER_FAIL:
      return state;

    default:
      return state;
  }
}
