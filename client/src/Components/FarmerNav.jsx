import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery,  useTheme,} from "@mui/material";
import { Link } from 'react-router-dom';
import logo from "../Images/logo-2.png";
import FarmerDrawerComp from "./FarmerDrawer";

const PAGES=["Auctions","CreateAuctions","History","MyCrops","Profile","UpdateAccount"];

const FarmerResponsiveAppBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "green"}} position='sticky' >
        <Toolbar>        
        <Typography variant="h6" noWrap  component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
            style={{height:"5rem", width:"9rem", backgroundColor:"white"}}
        >
              <img style={{backgroundColor:"white"}} src={logo} alt="Logo" />        
        </Typography>
          {isMatch ? (
            <>
               <FarmerDrawerComp/>
            </>
          ) : (
            <>
              <Tabs sx={{ marginLeft:"auto", color:"black", fontWeight:"bold", fontSize:"20px" }}  indicatorColor="secondary" textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab sx={{  fontWeight:"bold",fontSize:"17px" }} label="Auctions" to='/FarmerAuctions' component={Link}/>
                <Tab sx={{ fontWeight:"bold", fontSize:"17px" }} label="Create Auctions"  to='/FarmerCreateAuctions' component={Link} />
                <Tab sx={{ fontWeight:"bold",fontSize:"17px" }} label="History" to='/FarmerHistory' component={Link}/>
                <Tab sx={{ fontWeight:"bold",fontSize:"17px" }} label="My Crops" to='/FarmerMyCrops' component={Link}/>
                <Tab sx={{ fontWeight:"bold",fontSize:"17px" }} label="Profile" to='/FarmerProfile' component={Link} />
                <Tab sx={{ fontWeight:"bold", fontSize:"17px" }} label="Update Account" to='/FarmerUpdateAccount' component={Link}/>
              </Tabs>
             
              <Button sx={{ marginLeft: "auto" , background:"rgba(200,247,197)", color:"black"}} component={Link} to="/" >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default FarmerResponsiveAppBar; 
