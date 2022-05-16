import { GET_AUCTIONS, REGISTER_AUCTION } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// Get Available Auctions

export const getauctions = () => async (dispatch) => {
  try {
    const res = await axios.get("api/availableauctions");
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
    const res = await axios.post("api/registerauction", body, config);
    dispatch({
      type: REGISTER_AUCTION,
    });
    dispatch(setAlert(res.data.msg, "success"));
  } catch (err) {
    console.log(err);
  }
};
