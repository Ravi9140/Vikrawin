import { GET_F_CROPS, END_BIDDING } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// GET my Crops

export const getmycrops = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/mycrops`);
    dispatch({
      type: GET_F_CROPS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const endbidding = (biddingeventId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    biddingeventId,
  });
  try {
    const res = await axios.patch(`${backendurl}/api/endbid`, body, config);
    dispatch({
      type: END_BIDDING,
    });
    dispatch(setAlert(res.data.msg, "info"));
  } catch (err) {
    console.log(err);
  }
};
