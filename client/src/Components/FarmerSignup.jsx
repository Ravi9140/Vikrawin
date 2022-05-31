import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import {
  FormLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { connect } from "react-redux";
import axios from "axios";
import { setAlert } from "../actions/alert";
import PropTypes from "prop-types";
import { registerfarmer } from "../actions/authfarmer";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Navigate } from "react-router-dom";

const FarmerSignup = ({ setAlert, registerfarmer }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    landarea: "",
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
      await registerfarmer({
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
        landarea: "",
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
    padding: "30px 20px",
    height: "auto",
    width: "60vw",
    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const tfieldStyle = { marginTop: "14px" };
  const marginTop = { marginTop: 3 };
  return (
    <>
      <Grid container spacing={1}>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center" item>
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>

          <form onSubmit={(e) => onSubmit(e)}>
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
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} md={12} sm={12} spacing={1}>
              <Grid xs={12} sm={12} md={6} item>
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
              <Grid xs={12} sm={12} md={6} item>
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
              <Grid xs={12} sm={12} md={6} item>
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
              <Grid xs={12} sm={12} md={6} item>
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
              <Grid xs={12} sm={12} md={6} item>
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
              <Grid xs={12} sm={12} md={6} item>
                <TextField
                  style={tfieldStyle}
                  label="PAN No"
                  name="panno"
                  value={panno}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter your PAN No"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} md={12} sm={12} spacing={1}>
              <Grid xs={12} sm={12} md={6} item>
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
              <Grid xs={12} sm={12} md={6} item>
                <TextField
                  style={tfieldStyle}
                  label="Confirm Password"
                  name="password1"
                  value={password1}
                  onChange={(e) => onChange(e)}
                  placeholder="Confirm your Password"
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
                      color: "black",
                    },
                  }}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

FarmerSignup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerfarmer: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, registerfarmer })(FarmerSignup);
