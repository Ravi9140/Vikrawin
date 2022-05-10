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

  return (
    <React.Fragment>
      <AppBar sx={{ background: "green" }} position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
            style={{ height: "5rem", width: "9rem", backgroundColor: "white" }}
          >
            <img style={{ backgroundColor: "white" }} src={logo} alt="Logo" />
          </Typography>
          {isMatch ? (
            <>
              <MainDrawerComp />
            </>
          ) : (
            <>
              {/* <Tabs sx={{ marginLeft:"auto", color:"black", fontWeight:"bold", fontSize:"20px" }}  indicatorColor="secondary" textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab sx={{ fontWeight:"bold",fontSize:"17px" }} label="Auctions" to='/FarmerAuctions' component={Link}/>
                <Tab sx={{ fontWeight:"bold", fontSize:"17px" }} label="Create Auctions"  to='/FarmerCreateAuctions' component={Link} />
              </Tabs> */}
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  marginLeft: "auto",
                  background: "rgba(200,247,197)",
                  color: "black",
                }}
              >
                Log In
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
                {/* <MenuItem
                  onClick={handleClose}
                  label="Logout"
                  to="/"
                  component={Link}
                >
                  Logout
                </MenuItem> */}
              </Menu>
              {/* <Button sx={{ marginLeft: "auto" , background:"rgba(200,247,197)", color:"black"}} component={Link} to="/" >
                Logout
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default MainResponsiveAppBar;
