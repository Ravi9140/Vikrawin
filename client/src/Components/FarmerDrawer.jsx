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
import { Link } from "react-router-dom";
import { logoutfarmer } from "../actions/authfarmer";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const pages = [
  "Auctions",
  "Create Auctions",
  "History",
  "My Crops",
  "Profile",
  "Update Account",
];
const path = [
  "FarmerAuctions",
  "FarmerCreateAuctions",
  "FarmerHistory",
  "FarmerMyCrops",
  "FarmerProfile",
  "FarmerUpdateAccount",
];

const FarmerDrawerComp = ({ logoutfarmer }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/FarmerMyCrops"
                >
                  My Crops
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/FarmerCreateAuctions"
                >
                  Create Auctions
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/FarmerHistory"
                >
                  History
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/FarmerProfile"
                >
                  Profile
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton
            style={{ background: "#397618" }}
            component={Link}
            onClick={logoutfarmer}
            to="/"
          >
            <ListItemIcon>
              <ListItemText style={{ color: "white" }}>Logout</ListItemText>
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

FarmerDrawerComp.propTypes = {
  logoutfarmer: PropTypes.func.isRequired,
};

export default connect(null, { logoutfarmer })(FarmerDrawerComp);
