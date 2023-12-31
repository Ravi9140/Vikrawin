import { combineReducers } from "redux";
import alert from "./alert";
import authbidder from "./authbidder";
import authfarmer from "./authfarmer";
import profile from "./farmerprofile";
import bidderprofile from "./bidderprofile";
import farmerhistory from "./farmerhistory";
import createauction from "./createauction";
import mycrops from "./mycrops";
import auction from "./auction";
import marketplace from "./marketplace";
import bidderhistory from "./bidderhistory";
import resetPassword from "./resetPassword";
import sendOtp from "./sendOtp";
// import bidderhistory from "./bidderhistory";
export default combineReducers({
  alert,
  authbidder,
  authfarmer,
  profile,
  bidderprofile,
  farmerhistory,
  bidderhistory,
  createauction,
  mycrops,
  auction,
  marketplace,
  resetPassword,
  sendOtp,
});
