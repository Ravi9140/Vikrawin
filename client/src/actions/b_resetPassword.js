import { FORGOT_PASSWORD_REQUEST } from "./types";
import { backendurl } from "../utils/constants";
import axios from "axios";
import { setAlert } from "./alert";
const queryString = require("query-string");


export const forgot_b_password =
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
      const res = await axios.post(
        `${backendurl}/api/bidder-reset/resetpassword`,
        body,
        config
      );
      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
      });
      dispatch(setAlert(res.data.msg, res.data.type));
    } catch (err) {
      console.log(err);
    }
  };

export const reset_b_password =
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
      const res = await axios.post(
        `${backendurl}/api/bidder-reset/updatepassword`,
        body,
        config
      );

      dispatch({
        type: FORGOT_PASSWORD_REQUEST,
      });
      dispatch(setAlert(res.data.msg, res.data.type));
    } catch (err) {
      console.log(err);
    }
  };
