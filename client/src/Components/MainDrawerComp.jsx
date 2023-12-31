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

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clearotpstate } from "../actions/sendOtp";

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

const MainDrawerComp = ({ clearotpstate }) => {
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
                  to="/FarmerRegistration"
                >
                  Farmer Login
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/BidderRegistration"
                >
                  Bidder Login
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          {/* <ListItemButton style={{background:"black"}} component={Link} to="/">
              <ListItemIcon>
                  <ListItemText style={{color:"white"}}>Logout</ListItemText>
              </ListItemIcon>
          </ListItemButton> */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
          clearotpstate();
        }}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

MainDrawerComp.propTypes = {
  clearotpstate: PropTypes.func.isRequired,
};

export default connect(null, { clearotpstate })(MainDrawerComp);
