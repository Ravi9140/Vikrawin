import { CREATE_AUCTION } from "../actions/types";

const initialState = {
  loading: true,
};

export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_AUCTION:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    default:
      return state;
  }
}
