import React from "react";
import { Grid, Paper } from "@mui/material";
import MainResponsiveAppBar from "../Components/MainPageNav";
import logo from "../Images/logo-2.png";
import farmerImg from "../Images/7.jpg";
import farmersMarket from "../Images/farmer's-market-1.jpg";
import bidding from "../Images/bidding-1.jpg";
import backgroundImg from "../Images/backgroungImg.jpg";
// import BidderNav from "../Components/BidderNav";
// import Overlay from "react-image-overlay";
import "./video.css";
// import "";
// import "../static/home.css";
const HomePage = () => {
  const h1style = {
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
  };

  return (
    <>
      <MainResponsiveAppBar />
      {/* <BidderNav /> */}
      <div class="container">
        <img src={farmerImg} className="video" />
      </div>
    </>
  );
};

export default HomePage;
