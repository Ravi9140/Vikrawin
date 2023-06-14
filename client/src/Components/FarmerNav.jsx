import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { Link } from "react-router-dom";
import logo from "../Images/logo-2.png";
import FarmerDrawerComp from "./FarmerDrawer";
import "./../static/nav.css";
import { logoutfarmer } from "../actions/authfarmer";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

const FarmerResponsiveAppBar = ({ farmer, logoutfarmer }) => {
  const location = useLocation();
  let curpage = 0;

  if (location.pathname === "/FarmerCreateAuctions") {
    curpage = 1;
  } else if (location.pathname === "/FarmerMyCrops") {
    curpage = 0;
  } else if (location.pathname === "/FarmerHistory") {
    curpage = 2;
  } else {
    curpage = 3;
  }

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(curpage);
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  console.log(isMatch);
  // console.log("farmer", farmer);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "white" }} position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            style={{ height: "5rem", width: "9rem" }}
          >
            <img
              style={{ backgroundColor: "white", height: "75px" }}
              src={logo}
              alt="Logo"
            />
          </Typography>
          {isMatch ? (
            <>
              <FarmerDrawerComp />
            </>
          ) : (
            <>
              <Tabs
                TabIndicatorProps={{
                  style: { background: "white", backgroundColor: "white" },
                }}
                sx={{
                  marginLeft: "auto",
                  color: "black",
                }}
                indicatorColor="secondary"
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab
                  className="tab"
                  sx={{
                    fontWeight: "",
                    fontSize: "17px",
                    "&:hover": { backgroundColor: "white", color: "#90d042" },
                    "&.Mui-selected": {
                      color: "#90d042",
                      fontWeight: "bold",
                    },
                  }}
                  label="My Crops"
                  value={0}
                  to="/FarmerMyCrops"
                  component={Link}
                />
                <Tab
                  className="tab"
                  sx={{
                    fontWeight: "",
                    fontSize: "17px",
                    "&:hover": { backgroundColor: "white", color: "#90d042" },
                    "&.Mui-selected": {
                      color: "#90d042",
                      fontWeight: "bold",
                    },
                  }}
                  label="Create Auctions"
                  value={1}
                  to="/FarmerCreateAuctions"
                  component={Link}
                />
                <Tab
                  className="tab"
                  sx={{
                    fontWeight: "",
                    fontSize: "17px",
                    "&:hover": { backgroundColor: "white", color: "#90d042" },
                    "&.Mui-selected": {
                      color: "#90d042",
                      fontWeight: "bold",
                    },
                  }}
                  label="History"
                  value={2}
                  to="/FarmerHistory"
                  component={Link}
                />
                <Tab
                  className="tab"
                  sx={{
                    fontWeight: "",
                    fontSize: "17px",
                    "&:hover": { backgroundColor: "white", color: "#90d042" },
                    "&.Mui-selected": {
                      color: "#90d042",
                      fontWeight: "bold",
                    },
                  }}
                  label="Profile"
                  value={3}
                  to="/FarmerProfile"
                  component={Link}
                />
              </Tabs>
              <Button
                // className="tab1"
                sx={{
                  marginLeft: "auto",
                  background: "#90d042",
                  color: "white",
                  paddingX: "25px",
                  borderRadius: "25px",
                  fontWeight: "bolder",
                  "&:hover": {
                    backgroundColor: "white",
                    border: "1px solid #90d042",
                    color: "#90d042",
                  },
                }}
                onClick={handleClickOpen}
              >
                Logout
              </Button>
              <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Logout"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Are you sure, You want to logout ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    sx={{
                      marginLeft: "auto",
                      background: "#90d042",
                      color: "white",
                      borderRadius: "25px",
                      fontWeight: "bolder",
                      "&:hover": {
                        backgroundColor: "white",
                        border: "1px solid #90d042",
                        color: "#90d042",
                      },
                    }}
                    autoFocus
                    onClick={handleClose}
                  >
                    No
                  </Button>
                  <Button
                    sx={{
                      marginLeft: "10px",
                      background: "#90d042",
                      color: "white",
                      borderRadius: "25px",
                      fontWeight: "bolder",
                      "&:hover": {
                        backgroundColor: "white",
                        border: "1px solid #90d042",
                        color: "#90d042",
                      },
                    }}
                    onClick={logoutfarmer}
                    component={Link}
                    to="/"
                    autoFocus
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  farmer: state.authfarmer.farmer,
});

FarmerResponsiveAppBar.propTypes = {
  logoutfarmer: PropTypes.func.isRequired,
  farmer: PropTypes.object,
};

export default connect(mapStateToProps, { logoutfarmer })(
  FarmerResponsiveAppBar
);
