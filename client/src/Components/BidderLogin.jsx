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
import { loginbidder } from "../actions/authbidder";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
const BidderLogin = ({ loginbidder }) => {
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
              required
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
              required
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
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              {" "}
              Do you have an account ?<Link href="#">Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

BidderLogin.propTypes = {
  loginbidder: PropTypes.func.isRequired,
};

export default connect(null, { loginbidder })(BidderLogin);
