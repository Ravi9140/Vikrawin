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
    // height: "65vh",
    // width: "40vw",
    // margin: "20px auto",
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
      <Grid
        container
        align="center"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={9} sm={7} md={3} sx={{}}>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <form
              style={{ flexDirection: "row" }}
              onSubmit={(e) => onSubmit(e)}
            >
              {" "}
              <Grid item md={11} xs={11} sm={11}>
                <TextField
                  label="Username"
                  name="email"
                  value={email}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter username"
                  fullWidth
                />{" "}
              </Grid>
              <Grid item md={11} xs={11} sm={11}>
                <TextField
                  style={{ marginTop: "15px" }}
                  label="Password"
                  name="password"
                  value={password}
                  onChange={(e) => onChange(e)}
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                />
              </Grid>
              <Grid item md={12} xs={12} sm={12}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
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
                  // fullWidth
                >
                  Sign in
                </Button>
              </Grid>
              <Typography align="center" marginTop="20px">
                <LINK to="/FarmerForgotPassword">Forgot password ?</LINK>
              </Typography>
              {/* <Typography>
              {" "}
              Don't have an account ?<Link href="#">Sign Up</Link>
            </Typography> */}
            </form>
          </Paper>
        </Grid>
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
