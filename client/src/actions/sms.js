import axios from "axios";
import { SMS_SEND } from "./types";

export const sendsms =
  ({ phone, message }) =>
  async (dispatch) => {
    console.log("SEND SMS called");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(phone, message);
    const body = JSON.stringify({
      phone,
      message,
    });
    console.log(body);
    try {
      const res = await axios.post("api/send", body, config);
      dispatch({
        type: SMS_SEND,
      });
      console.log("SMS_SEND");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
