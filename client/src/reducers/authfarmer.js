import {
  F_REGISTER_SUCCESS,
  F_REGISTER_FAIL,
  F_LOADED,
  F_AUTH_ERROR,
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
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticatedFarmer: false,
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
