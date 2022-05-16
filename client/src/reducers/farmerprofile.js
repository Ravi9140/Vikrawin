import { GET_F_PROFILE, UPDATE_F_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_F_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case UPDATE_F_PROFILE:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
