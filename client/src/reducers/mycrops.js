import { GET_F_CROPS, END_BIDDING } from "../actions/types";

const initialState = {
  mycrops: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_F_CROPS:
      return {
        ...state,
        mycrops: payload,
        loading: false,
      };

    case END_BIDDING:
      return state;
    default:
      return state;
  }
}
