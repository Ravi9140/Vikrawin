import { OTP_SEND, OTP_VERIFY, CHANGE_MOBILE } from "../actions/types";
const initialState = {
  verified: false,
  valid_mob: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case OTP_VERIFY:
      return {
        ...state,
        verified: true,
      };

    case OTP_SEND:
      return {
        ...state,
        valid_mob: true,
      };

    case CHANGE_MOBILE: {
      return {
        ...state,
        verified: false,
        valid_mob: false,
      };
    }
    default:
      return state;
  }
}
