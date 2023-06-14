import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutbidder } from "../actions/authbidder";

const pages = [
  "Home",
  "Upcoming Events",
  "Market Place",
  "Wishlist",
  "History",
  "About Us",
];

const path = [
  "BidderHome",
  "BidderUpcomingEvents",
  "BidderMarketPlace",
  "BidderWishlist",
  "BidderHistory",
  "BidderAboutUs",
];

const BidderDrawerComp = ({ logoutbidder }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {location.pathname === "/BidderUpcomingEvents"}
          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/BidderUpcomingEvents"
                >
                  Auctions
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/BidderMarketPlace"
                >
                  Market Place
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/BidderHistory"
                >
                  History
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton
            sx={{
              justifyContent: "center",
            }}
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/BidderProfile"
                >
                  Profile
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton
            sx={{
              background: "#397618",
              borderRadius: "30px",
              justifyContent: "center",

              "&:hover": {
                background: "white",
                border: "1px solid #397618",
              },
            }}
            component={Link}
            onClick={logoutbidder}
            to="/"
          >
            <ListItemIcon>
              <ListItemText
                style={{
                  color: "black",
                }}
              >
                Logout
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#90d042", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#90d042" />
      </IconButton>
    </React.Fragment>
  );
};

BidderDrawerComp.propTypes = {
  logoutbidder: PropTypes.func.isRequired,
};
export default connect(null, { logoutbidder })(BidderDrawerComp);
