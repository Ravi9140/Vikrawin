import { GET_F_HISTORY } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// GET Farmer history
export const getfarmerhistory = () => async (dispatch) => {
  try {
    const res = await axios.get("api/farmerhistory");
    console.log(res.data);
    dispatch({
      type: GET_F_HISTORY,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
