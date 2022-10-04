import { CHANGE_MOBILE, CLEAR_OTP_STATE, OTP_SEND, OTP_VERIFY } from "./types";
import { setAlert } from "./alert";
import axios from "axios";

export const sendotp =
  ({ contact }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      contact,
    });
    try {
      const res = await axios.post("api/sendotp", body, config);
      dispatch({
        type: OTP_SEND,
      });
      dispatch(setAlert("OTP sent to mobile number", "info"));
      return true;
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "error"));
        });
      }
    }
  };

export const verifyotp =
  ({ contact, otp }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      contact,
      otp,
    });
    console.log(body);
    try {
      const res = await axios.post("api/sendotp/verify-otp", body, config);
      if (res.data.status === "approved") {
        dispatch({
          type: OTP_VERIFY,
        });
        dispatch(setAlert("OTP Verified Successfully", "success"));
      }
      console.log("******************", res.data.status);
    } catch (err) {
      dispatch(setAlert("Invalid OTP", "error"));
      console.log(err);
    }
  };

export const changemobile = () => async (dispatch) => {
  dispatch({
    type: CHANGE_MOBILE,
  });
};

export const clearotpstate = () => async (dispatch) => {
  dispatch({
    type: CLEAR_OTP_STATE,
  });
};
