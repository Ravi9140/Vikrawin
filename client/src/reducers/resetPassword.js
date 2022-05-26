import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from "../actions/types";

const initialState = {
  email: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        email: payload,
        loading: false,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
