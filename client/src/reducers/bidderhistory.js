import { GET_B_HISTORY } from "../actions/types";

const initialState = {
  history: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_B_HISTORY:
      return {
        ...state,
        history: payload,
        loading: false,
      };
    default:
      return state;
  }
}
