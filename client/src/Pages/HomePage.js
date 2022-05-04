import React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery,  useTheme,} from "@mui/material";
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    
    <br/><h1>This is a Landing Page.</h1>
    <Button component={Link} to="/FarmerAuctions" color="primary">
        Farmer Dashboard
    </Button>
    <Button component={Link} to="/BidderHome" color="primary">
        Bidder Dashboard
    </Button>
    </>
    
  );
};

export default HomePage;