import {
  F_REGISTER_SUCCESS,
  F_REGISTER_FAIL,
  F_LOADED,
  F_AUTH_ERROR,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

// Load Farmer
export const loadFarmer = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/farmerauth");
    dispatch({
      type: F_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: F_AUTH_ERROR,
    });
  }
};

// Register Farmer
export const registerfarmer =
  ({
    name,
    email,
    contact,
    landarea,
    address,
    city,
    state,
    pincode,
    accountno,
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
      accountno,
      adhaarno,
      panno,
      password,
    });

    try {
      const res = await axios.post("/api/farmer", body, config);
      dispatch(setAlert(res.data.msg, "success"));
      dispatch({
        type: F_REGISTER_SUCCESS,
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
        type: F_REGISTER_FAIL,
      });
    }
  };
