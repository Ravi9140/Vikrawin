import { FORGOT_PASSWORD_REQUEST } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
const queryString = require("query-string");

// Create Auction
export const forgot_f_password =
  ({ email }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      email,
    });
    try {
      const res = await axios.post("api/reset/reset-password", body, config);
      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
      });
      dispatch(setAlert(res.data.msg, res.data.type));
    } catch (err) {
      console.log(err);
    }
  };

export const reset_f_password =
  ({ password }) =>
  async (dispatch) => {
    const parsed = queryString.parse(window.location.search);
    const token = parsed.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      password,
      token,
    });
    try {
      const res = await axios.post("api/reset/update-password", body, config);

      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
      });
      dispatch(setAlert(res.data.msg, res.data.type));
    } catch (err) {
      console.log(err);
    }
  };
