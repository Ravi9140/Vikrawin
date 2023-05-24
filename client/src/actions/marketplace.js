import { MARKET_PLACE, BID_PLACED } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// View Data in market place

export const marketplace = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/registeredbids`);
    console.log(res.data);
    dispatch({
      type: MARKET_PLACE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const placebid =
  ({ biddingId, bidAmt }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ biddingId, bidAmt });
    try {
      const res = await axios.patch(`${backendurl}/api/placebid`, body, config);
      dispatch({
        type: BID_PLACED,
      });
      dispatch(setAlert(res.data.msg, "success"));
    } catch (err) {
      console.error(err);
    }
  };
