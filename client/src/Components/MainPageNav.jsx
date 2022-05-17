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
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../Images/logo-2.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MainDrawerComp from "./MainDrawerComp";
import "./../static/nav.css";
const PAGES = [
  "Auctions",
  "CreateAuctions",
  "History",
  "MyCrops",
  "Profile",
  "UpdateAccount",
];

const MainResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const heading = {
    fontFamily: "Canela  Web",
    fontWeight: "bold",
    fontSize: "42px",
    lineHeight: "10px",
    textDecoration: "none solid rgb(212,46,35)",
    color: "#222",
    marginLeft: "-150px",
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "transparent" }} position="relative">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            style={{ height: "5rem", width: "9rem" }}
          ></Typography>
          <h3 style={heading}>vikraWin &#x2E;</h3>
          {isMatch ? (
            <>
              <MainDrawerComp />
            </>
          ) : (
            <>
              <Button
                className="tab1"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  marginLeft: "auto",
                  background: "transparent",
                  fontSize: "20px",
                  // // borderRadius: "35px",
                  color: "black",
                  width: "70",
                }}
              >
                LogIn
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  label="FarmerRegistration"
                  to="/FarmerRegistration"
                  component={Link}
                >
                  Farmer
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  label="BidderRegistration"
                  to="/BidderRegistration"
                  component={Link}
                >
                  Bidder
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default MainResponsiveAppBar;
