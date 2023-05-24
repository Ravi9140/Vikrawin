import { GET_F_HISTORY } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// GET Farmer history
export const getfarmerhistory = () => async (dispatch) => {
  try {
    const res = await axios.get(`${backendurl}/api/farmerhistory`);
    console.log(res.data);
    dispatch({
      type: GET_F_HISTORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
