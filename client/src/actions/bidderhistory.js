import { GET_B_HISTORY } from "./types";
import { backendurl } from "../utils/constants";

import axios from "axios";
// Get Bidder history
export const getbidderhistory = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/bidderhistory`);
    dispatch({
      type: GET_B_HISTORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
