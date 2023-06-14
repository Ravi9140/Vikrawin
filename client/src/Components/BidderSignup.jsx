import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import axios from "axios";
import { setAlert } from "../actions/alert";
import PropTypes from "prop-types";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { registerbidder } from "../actions/authbidder";
import { sendotp, verifyotp, changemobile } from "../actions/sendOtp";

const BidderSignup = ({
  setAlert,
  registerbidder,
  isAuthenticatedBidder,
  verified,
  sendotp,
  verifyotp,
  valid_mob,
  changemobile,
}) => {
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    adhaarno: "",
    panno: "",
    password: "",
    password1: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://api.worldpostallocations.com/pincode?postalcode=${pincode}&countrycode=IN`
      )
      .then((res) => {
        const location = res.data.result[0];
        if (location != null) {
          setFormData({
            ...formData,
            state: location.state,
            city: location.district,
          });
        }
        if (location == null) {
          setAlert("Invalid PinCode", "error");
        }
      });
  }, [formData.pincode]);

  const {
    name,
    email,
    contact,
    address,
    city,
    state,
    pincode,
    adhaarno,
    panno,
    password,
    password1,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password1) {
      setAlert("Password doesn't match", "error");
    } else {
      await registerbidder({
        name,
        email,
        contact,
        address,
        city,
        state,
        pincode,
        adhaarno,
        panno,
        password,
      });
      setFormData({
        name: "",
        email: "",
        contact: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        adhaarno: "",
        panno: "",
        password: "",
        password1: "",
      });
    }
  };

  const paperStyle = {
    padding: 10,
    margin: "20px auto",
    borderRadius: "25px",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const tfieldStyle = {
    /*width: "25vw", marginLeft: "5px",*/ marginTop: "14px",
  };
  // const marginTop = { marginTop: 5 };

  // Return if logged in
  if (isAuthenticatedBidder) {
    return <Navigate to="/BidderUpcomingEvents" />;
  }
  return (
    <>
      <center>
        {" "}
        <h2> Bidder </h2>{" "}
      </center>
      <Grid
        container
        align="center"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center" item>
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Sign Up</h2>
              <Typography variant="caption" gutterBottom>
                Please fill this form to create an account !
              </Typography>
            </Grid>
            <form
              /*style={{ flexDirection: "row" }} */ onSubmit={(e) =>
                onSubmit(e)
              }
            >
              <Grid xs={12} sm={12} md={12} item>
                <TextField
                  style={tfieldStyle}
                  label="Name"
                  name="name"
                  value={name}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter your name"
                  fullWidth
                />
              </Grid>
              <Grid container item xs={12} md={12} sm={12} spacing={1}>
                <Grid xs={12} sm={12} md={6} item>
                  <TextField
                    style={tfieldStyle}
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your email"
                    type="email"
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={12} md={6} item>
                  <TextField
                    style={tfieldStyle}
                    label="Phone Number"
                    name="contact"
                    value={contact}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your phone number"
                    fullWidth
                  ></TextField>
                  {/* {valid_mob ? (
                    <React.Fragment> */}
                  {/* <TextField
                        style={tfieldStyle}
                        label="OTP"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6 digit OTP"
                        fullWidth
                        disabled={verified}
                      ></TextField> */}
                  {/* <Button
                        onClick={() => {
                          verifyotp({ contact, otp });
                          // setVerified(true);
                        }}
                        disabled={verified}
                      >
                        Verify OTP
                      </Button>
                      <Button
                        onClick={() => {
                          changemobile();
                        }}
                      >
                        Change Mobile No
                      </Button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <TextField
                        style={tfieldStyle}
                        label="Phone Number"
                        name="contact"
                        value={contact}
                        onChange={(e) => onChange(e)}
                        placeholder="Enter your phone number"
                        fullWidth
                      ></TextField>
                      <Button
                        onClick={() => {
                          sendotp({ contact });
                          console.log(contact);
                          // setPhoneVerify(!phoneVerify);
                        }}
                      >
                        Send OTP
                      </Button>
                    </React.Fragment>
                  )} */}
                </Grid>
              </Grid>
              <Grid container item xs={12} md={12} sm={12} spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="Address"
                    name="address"
                    value={address}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your Address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="PinCode"
                    name="pincode"
                    value={pincode}
                    onChange={(e) => onChange(e)}
                    placeholder="Pincode"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} md={12} sm={12} spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="City"
                    name="city"
                    value={city}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your City"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="State"
                    name="state"
                    value={state}
                    onChange={(e) => onChange(e)}
                    placeholder="State"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} md={12} sm={12} spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="Adhaar No"
                    name="adhaarno"
                    value={adhaarno}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your Adhaar No"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="PAN No"
                    name="panno"
                    value={panno}
                    onChange={(e) => onChange(e)}
                    ss
                    placeholder="Enter your PAN No"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} md={12} sm={12} spacing={1}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter your Password"
                    type="password"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    style={tfieldStyle}
                    label="Confirm Password"
                    name="password1"
                    value={password1}
                    onChange={(e) => onChange(e)}
                    placeholder="Confirm Your Password"
                    type="password"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container item xs={12} md={12} sm={12} spacing={1}>
                <Grid xs={3} sm={4} md={4} item></Grid>
                <Grid xs={6} sm={4} md={4} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      marginTop: "20px",
                      borderRadius: "20px",
                      backgroundColor: "#1bbd7e",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#1bbd7e",
                        border: "1px solid #1bbd7e ",
                      },
                    }}
                    // disabled={!verified}
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticatedBidder: state.authbidder.isAuthenticatedBidder,
  verified: state.sendOtp.verified,
  valid_mob: state.sendOtp.valid_mob,
});

BidderSignup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerbidder: PropTypes.func.isRequired,
  isAuthenticatedBidder: PropTypes.bool,
  sendotp: PropTypes.func.isRequired,
  changemobile: PropTypes.func.isRequired,
  verifyotp: PropTypes.func,
  verified: PropTypes.bool,
  valid_mob: PropTypes.bool,
};

export default connect(mapStateToProps, {
  setAlert,
  registerbidder,
  sendotp,
  verifyotp,
  changemobile,
})(BidderSignup);
