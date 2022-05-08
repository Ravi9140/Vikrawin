import React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery,  useTheme,} from "@mui/material";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    
    <br/><h1>This is a Landing Page.</h1>
    <Button component={Link} to="/FarmerRegistration" color="primary">
        Farmer Registration
    </Button>
    {/* <Button component={Link} to="/LoginSignupPage" color="primary">
       Login
    </Button> */}

    <Button component={Link} to="/BidderRegistration" color="primary">
        Bidder Registration
    </Button>
    </>
    
  );
};

export default HomePage;