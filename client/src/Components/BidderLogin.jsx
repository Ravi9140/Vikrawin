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
import BidderResponsiveAppBar from "./BidderNav";
import { Navigate, Link as LINK } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginbidder } from "../actions/authbidder";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import BidderLayout from "./BidderLayout";

const BidderLogin = ({ loginbidder, isAuthenticatedBidder }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginbidder({ email, password });
  };
  const paperStyle = {
    padding: 10,
    margin: "20px  auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  // Redirect if Logged In

  if (isAuthenticatedBidder) {
    return (
      <>
        <BidderLayout />
        <Navigate to="/BidderUpcomingEvents" />
      </>
    );
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
        <Grid item xs={9} sm={7} md={3} sx={{}}>
          <Paper elevation={10} style={paperStyle}>
            <Grid
              item
              align="center"
              // md={3} xs={6}
            >
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Sign In</h2>
            </Grid>
            <Grid
              item
              // md={12} xs={12}
            >
              <form
                style={{ flexDirection: "row" }}
                onSubmit={(e) => onSubmit(e)}
              >
                <Grid item md={11} xs={11} sm={11}>
                  <TextField
                    label="Username"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter username"
                    fullWidth
                  />
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
                <Grid item>
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
                  <LINK to="/BidderForgotPassword">Forgot password?</LINK>
                </Typography>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticatedBidder: state.authbidder.isAuthenticatedBidder,
});

BidderLogin.propTypes = {
  loginbidder: PropTypes.func.isRequired,
  isAuthenticatedBidder: PropTypes.bool,
};

export default connect(mapStateToProps, { loginbidder })(BidderLogin);
