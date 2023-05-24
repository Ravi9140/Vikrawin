import {
  GET_B_PROFILE,
  UPDATE_B_PROFILE,
  UPDATE_F_PROFILE_FAIL,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// GET Bidder Profile

export const getbidderprofile = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/bidderprofile`);
    console.table(res.data);
    dispatch({
      type: GET_B_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch();
  }
};

//UPDATE Bidder Profile

export const updatebidderprofile =
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
      const res = await axios.patch(`${backendurl}/api/bidderprofile`, body, config);
      dispatch(setAlert(res.data.msg, "success"));
      dispatch({
        type: UPDATE_B_PROFILE,
      });
    } catch (error) {
      dispatch();
    }
  };
