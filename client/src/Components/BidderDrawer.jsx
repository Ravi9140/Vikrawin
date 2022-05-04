import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages=["Home","Upcoming Events","Market Place","Wishlist","History","About Us"];

const path=["BidderHome","BidderUpcomingEvents","BidderMarketPlace","BidderWishlist","BidderHistory","BidderAboutUs"];

const BidderDrawerComp = () => {
const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {/*pages.map((page,path, index) => (
            <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to={`/${path}`}>
                      {page}
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))*/}

            <ListItemButton onClick={()=> setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to='/BidderHome'>
                      Home
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          
            <ListItemButton onClick={()=> setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to='/BidderUpcomingEvents'>
                      Upcoming Events
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to='/BidderMarketPlace'>
                      Market Place
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to='/BidderWishlist'>
                      Wishlist
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to='/BidderHistory'>
                      History
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton onClick={()=> setOpenDrawer(false)} >
              <ListItemIcon>
                <ListItemText>
                <Link style={{textDecoration:"none", color:"black" }} to='/BidderAboutUs'>
                      About Us
                </Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>

          <ListItemButton style={{background:"black"}} component={Link} to="/">
              <ListItemIcon>
                  <ListItemText style={{color:"white"}}>Logout</ListItemText>
              </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default BidderDrawerComp;