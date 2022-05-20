import {
  B_REGISTER_SUCCESS,
  B_REGISTER_FAIL,
  B_LOADED,
  B_AUTH_ERROR,
  B_LOGIN_SUCCESS,
  B_LOGIN_FAIL,
  B_LOGOUT,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// Load Bidder
export const loadBidder = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/bidderauth");
    dispatch({
      type: B_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: B_AUTH_ERROR,
    });
  }
};

// Register Bidder
export const registerbidder =
  ({
    name,
    email,
    contact,
    address,
    city,
    state,
    pincode,
    adhaarno,
    panno,
    password,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      name,
      email,
      contact,
      address,
      city,
      state,
      pincode,
      adhaarno,
      panno,
      password,
    });

    try {
      const res = await axios.post("/api/bidder", body, config);
      dispatch(setAlert(res.data.msg, "success"));
      dispatch({
        type: B_REGISTER_SUCCESS,
      });
      //   dispatch({
      //     type: B_REGISTER_SUCCESS,
      //     payload: res.data,
      //   });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "error"));
        });
      }
      dispatch({
        type: B_REGISTER_FAIL,
      });
    }
  };

// Login Bidder
export const loginbidder =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    try {
      const res = await axios.post("/api/bidderauth", body, config);
      dispatch(setAlert("Login Successfully", "success"));
      dispatch({
        type: B_LOGIN_SUCCESS,
        payload: res.data,
      });

      dispatch(loadBidder());
      //   dispatch({
      //     type: B_REGISTER_SUCCESS,
      //     payload: res.data,
      //   });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert(error.msg, "error"));
        });
      }
      dispatch({
        type: B_LOGIN_FAIL,
      });
    }
  };

// Logout Bidder

export const logoutbidder = () => (dispatch) => {
  dispatch({
    type: B_LOGOUT,
  });
};
