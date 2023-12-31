import { CREATE_AUCTION } from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import { backendurl } from "../utils/constants";

// Create Auction

export const createauction =
  ({ cropName, quantity, basePrice }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      cropName,
      quantity,
      basePrice,
    });
    try {
      const res = await axios.post(`${backendurl}/api/createauction`, body, config);
      dispatch({
        type: CREATE_AUCTION,
      });
      dispatch(setAlert(res.data.msg, "success"));
    } catch (err) {
      console.log(err);
    }
  };
