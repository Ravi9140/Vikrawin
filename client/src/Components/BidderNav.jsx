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
// import gif1 from "../Images/gif1.gif";
import BidderDrawerComp from "./BidderDrawer";
import "./../static/nav.css";
import { logoutbidder } from "../actions/authbidder";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// const PAGES=["Auctions","CreateAuctions","History","MyCrops","Profile","UpdateAccount"];

const BidderResponsiveAppBar = ({ logoutbidder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#222" }} position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            style={{ height: "5rem", width: "9rem" }}
          >
            <img
              style={{
                backgroundColor: "#222",
                height: "75px",
              }}
              src={logo}
              alt="Logo"
            />
          </Typography>
          {isMatch ? (
            <>
              <BidderDrawerComp />
            </>
          ) : (
            <>
              <Tabs
                TabIndicatorProps={{ style: { background: "white" } }}
                sx={{
                  marginLeft: "auto",
                  color: "white",

                  fontSize: "22px",

                  // textDecoration: "underline",
                }}
                indicatorColor="secondary"
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {/* <Tab
                  className="tab"
                  sx={{
                    // fontWeight: "bold",
                    fontSize: "17px",
                  }}
                  label="Home"
                  to="/BidderHome"
                  component={Link}
                /> */}
                <Tab
                  className="tab"
                  sx={{
                    // fontWeight: "bold",
                    fontSize: "17px",
                  }}
                  label="Auctions"
                  value={0}
                  to="/BidderUpcomingEvents"
                  component={Link}
                />
                <Tab
                  className="tab"
                  sx={{
                    // fontWeight: "bold",
                    fontSize: "17px",
                  }}
                  label="Market Place"
                  value={1}
                  to="/BidderMarketPlace"
                  component={Link}
                />
                <Tab
                  className="tab"
                  sx={{
                    // fontWeight: "bold",
                    fontSize: "17px",
                  }}
                  label="History"
                  value={2}
                  to="/BidderHistory"
                  component={Link}
                />
                <Tab
                  className="tab"
                  sx={{
                    // fontWeight: "bold",
                    fontSize: "17px",
                  }}
                  label="Profile"
                  value={3}
                  to="/BidderProfile"
                  component={Link}
                />
              </Tabs>

              <Button
                className="tab1"
                sx={{
                  fontWeight: "bolder",
                  marginLeft: "auto",
                  background: "#ea4f4c",
                  color: "white",
                  borderRadius: "25px",
                }}
                onClick={handleClickOpen}
                // component={Link}
                // to="/"
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
                  <Button autoFocus onClick={handleClose}>
                    No
                  </Button>
                  <Button
                    onClick={logoutbidder}
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
  bidder: state.authbidder.bidder,
});

BidderResponsiveAppBar.propTypes = {
  logoutbidder: PropTypes.func.isRequired,
  bidder: PropTypes.object,
};

export default connect(mapStateToProps, { logoutbidder })(
  BidderResponsiveAppBar
);
