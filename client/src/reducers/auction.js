import { GET_AUCTIONS, REGISTER_AUCTION } from "../actions/types";

const initialState = {
  auctions: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_AUCTIONS:
      return {
        ...state,
        auctions: payload,
        loading: false,
      };

    case REGISTER_AUCTION:
      return state;

    default:
      return state;
  }
}
