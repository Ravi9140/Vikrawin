import { MARKET_PLACE } from "../actions/types";

const initialState = {
  registeredevents: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MARKET_PLACE:
      return {
        ...state,
        registeredevents: payload,
        loading: false,
      };

    default:
      return state;
  }
}
