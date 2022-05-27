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

import { Navigate, Link as LINK } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginbidder } from "../actions/authbidder";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";

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
    height: "65vh",
    width: "40vw",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  // Redirect if Logged In

  if (isAuthenticatedBidder) {
    return <Navigate to="/BidderUpcomingEvents" />;
  }
  return (
    <>
      <center>
        {" "}
        <h2> Bidder </h2>{" "}
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
              style={{ marginTop: "15px" }}
              label="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Enter password"
              type="password"
              fullWidth
            />
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
              fullWidth
            >
              Sign in
            </Button>
            <Typography align="center" marginTop="20px">
              <LINK to="/BidderForgotPassword">Forgot password ?</LINK>
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
  isAuthenticatedBidder: state.authbidder.isAuthenticatedBidder,
});

BidderLogin.propTypes = {
  loginbidder: PropTypes.func.isRequired,
  isAuthenticatedBidder: PropTypes.bool,
};

export default connect(mapStateToProps, { loginbidder })(BidderLogin);
