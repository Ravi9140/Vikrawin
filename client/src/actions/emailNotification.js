import axios from "axios";
import { EMAIL_SEND } from "./types";

export const sendemail =
  ({ bidderId, msg1, farmerId, msg2 }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      bidderId,
      msg1,
      farmerId,
      msg2,
    });
    console.log(body);
    try {
      const res = await axios.post("api/emailsend", body, config);
      dispatch({
        type: EMAIL_SEND,
      });
    } catch (error) {
      console.log(error);
    }
  };
