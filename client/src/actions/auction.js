import { GET_AUCTIONS, REGISTER_AUCTION } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// Get Available Auctions

export const getauctions = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/availableauctions`);
    dispatch({
      type: GET_AUCTIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Register for auction
export const registerauction = (biddingeventId) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ biddingeventId });
  console.log(biddingeventId);
  try {
    const res = await axios.post(`${backendurl}/api/registerauction`, body, config);
    dispatch({
      type: REGISTER_AUCTION,
    });
    dispatch(setAlert(res.data.msg, "success"));
  } catch (err) {
    console.log(err);
  }
};
