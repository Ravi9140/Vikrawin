import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navigate, Link as LINK } from "react-router-dom";
import { loginfarmer } from "../actions/authfarmer";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";

const FarmerLogin = ({ loginfarmer, isAuthenticatedFarmer }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    loginfarmer({ email, password });
  };
  const paperStyle = {
    padding: 10,
    height: "65vh",
    width: "40vw",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  // Redirect if logged In
  if (isAuthenticatedFarmer) {
    return <Navigate to="/FarmerMyCrops" />;
  }
  return (
    <>
      <center>
        {" "}
        <h2> Farmer </h2>{" "}
      </center>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form style={{ flexDirection: "row" }} onSubmit={(e) => onSubmit(e)}>
            <TextField
              label="Username"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Enter username"
              fullWidth
            />
            <TextField
              style={{ marginTop: "5px" }}
              label="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Enter password"
              type="password"
              fullWidth
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
            >
              Sign in
            </Button>
            <Typography align="center">
              <LINK to="/FarmerForgotPassword">Forgot password ?</LINK>
            </Typography>
            {/* <Typography>
              {" "}
              Don't have an account ?<Link href="#">Sign Up</Link>
            </Typography> */}
          </form>
        </Paper>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticatedFarmer: state.authfarmer.isAuthenticatedFarmer,
});

FarmerLogin.propTypes = {
  loginfarmer: PropTypes.func.isRequired,
  isAuthenticatedFarmer: PropTypes.bool,
};

export default connect(mapStateToProps, { loginfarmer })(FarmerLogin);
