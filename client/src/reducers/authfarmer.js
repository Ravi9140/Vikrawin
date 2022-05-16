import {
  F_REGISTER_SUCCESS,
  F_REGISTER_FAIL,
  F_LOADED,
  F_AUTH_ERROR,
  F_LOGIN_SUCCESS,
  F_LOGIN_FAIL,
  F_LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticatedFarmer: null,
  loading: true,
  farmer: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case F_LOADED:
      return {
        ...state,
        isAuthenticatedFarmer: true,
        loading: false,
        farmer: payload,
      };

    case F_AUTH_ERROR:
    case F_LOGIN_FAIL:
    case F_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticatedFarmer: false,
        loading: false,
      };

    case F_LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticatedFarmer: true,
        loading: false,
      };
    case F_REGISTER_SUCCESS:
      return state;

    case F_REGISTER_FAIL:
      return state;

    default:
      return state;
  }
}
