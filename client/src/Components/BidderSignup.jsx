import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { connect } from "react-redux";
import { setAlert } from "../actions/alert";
import PropTypes from "prop-types";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { registerbidder } from "../actions/authbidder";

const BidderSignup = ({ setAlert, registerbidder }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    accountno: "",
    adhaarno: "",
    panno: "",
    password: "",
    password1: "",
  });

  const {
    name,
    email,
    contact,
    address,
    city,
    state,
    pincode,
    accountno,
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
      setAlert("password doesnt match", "error");
    } else {
      registerbidder({
        name,
        email,
        contact,
        address,
        city,
        state,
        pincode,
        accountno,
        adhaarno,
        panno,
        password,
      });
    }
  };

  const paperStyle = {
    padding: "30px 20px",
    height: "90vh",
    width: "60vw",
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const tfieldStyle = { width: "25vw", marginLeft: "15px", marginTop: "14px" };
  // const marginTop = { marginTop: 5 };
  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form style={{ flexDirection: "row" }} onSubmit={(e) => onSubmit(e)}>
            <TextField
              style={tfieldStyle}
              label="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              placeholder="Enter your name"
            />
            <TextField
              style={tfieldStyle}
              label="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Enter your email"
              type="email"
            />
            <TextField
              style={tfieldStyle}
              label="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Enter your Password"
              type="password"
            />
            <TextField
              style={tfieldStyle}
              label="Confirm Password"
              name="password1"
              value={password1}
              onChange={(e) => onChange(e)}
              placeholder="Confirm Your Password"
              type="password"
            />
            <TextField
              style={tfieldStyle}
              label="Phone Number"
              name="contact"
              value={contact}
              onChange={(e) => onChange(e)}
              placeholder="Enter your phone number"
            />
            <TextField
              style={tfieldStyle}
              label="Address"
              name="address"
              value={address}
              onChange={(e) => onChange(e)}
              placeholder="Enter your Address"
            />
            <TextField
              style={tfieldStyle}
              label="City"
              name="city"
              value={city}
              onChange={(e) => onChange(e)}
              placeholder="Enter your City"
            />
            <TextField
              style={tfieldStyle}
              label="State"
              name="state"
              value={state}
              onChange={(e) => onChange(e)}
              placeholder="State"
            />
            <TextField
              style={tfieldStyle}
              label="PinCode"
              name="pincode"
              value={pincode}
              onChange={(e) => onChange(e)}
              placeholder="Pincode"
            />
            <TextField
              style={tfieldStyle}
              label="Account No"
              name="accountno"
              value={accountno}
              onChange={(e) => onChange(e)}
              laceholder="Enter your Account No"
            />
            <TextField
              style={tfieldStyle}
              label="Adhaar No"
              name="adhaarno"
              value={adhaarno}
              onChange={(e) => onChange(e)}
              placeholder="Enter your Adhaar No"
            />
            <TextField
              style={tfieldStyle}
              label="PAN No"
              name="panno"
              value={panno}
              onChange={(e) => onChange(e)}
              ss
              placeholder="Enter your PAN No"
            />

            <FormControlLabel
              control={<Checkbox name="checkedA" />}
              label="I accept the terms and conditions."
            />
            <center>
              <Button type="submit" variant="contained" color="primary">
                Sign up
              </Button>
            </center>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

BidderSignup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerbidder: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, registerbidder })(BidderSignup);
