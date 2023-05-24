import {
  GET_F_PROFILE,
  UPDATE_F_PROFILE,
  UPDATE_F_PROFILE_FAIL,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// GET Farmer Profile

export const getfarmerprofile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/farmerprofile`);
    dispatch({
      type: GET_F_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

//UPDATE Farmer Profile

export const updatefarmerprofile =
  ({ name, email, contact, address, pincode, city, state, panno, adhaarno }) =>
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
    });
    console.log(body);
    try {
      const res = await axios.patch(`${backendurl}api/farmerprofile`, body, config);
      dispatch(setAlert(res.data.msg, "success"));
      dispatch({
        type: UPDATE_F_PROFILE,
      });
    } catch (err) {
      console.log(err);
    }
  };
