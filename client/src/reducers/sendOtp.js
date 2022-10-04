import {
  OTP_SEND,
  OTP_VERIFY,
  CHANGE_MOBILE,
  CLEAR_OTP_STATE,
} from "../actions/types";
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

    case CLEAR_OTP_STATE: {
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
