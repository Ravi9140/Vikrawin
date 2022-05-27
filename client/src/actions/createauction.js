import { CREATE_AUCTION } from "./types";
import axios from "axios";
import { setAlert } from "./alert";

// Create Auction

export const createauction =
  ({ cropName, quantity, basePrice, endDate }) =>
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
      endDate,
    });
    try {
      const res = await axios.post("api/createauction", body, config);
      dispatch({
        type: CREATE_AUCTION,
      });
      dispatch(setAlert(res.data.msg, "success"));
    } catch (err) {
      console.log(err);
    }
  };
