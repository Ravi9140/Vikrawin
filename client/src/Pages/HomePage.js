import React from "react";
import { Grid, Paper } from "@mui/material";
import MainResponsiveAppBar from "../Components/MainPageNav";
import logo from "../Images/logo-2.png";
import farmerImg from "../Images/14.jpg";
import farmersMarket from "../Images/farmer's-market-1.jpg";
import bidding from "../Images/bidding-1.jpg";
import backgroundImg from "../Images/backgroungImg.jpg";
import {
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Box,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./video.css";

const HomePage = () => {
  const h1style = {
    fontWeight: "bold",
    fontSize: "30px",
    textAlign: "center",
  };

  return (
    <>
      <div class="container" style={{ backgroundColor: "orange" }}>
        <img src={farmerImg} className="video" />

        <MainResponsiveAppBar />
        <Grid
          container
          // spacing={1}
          direction="row"
          justifyContent="left"
          // alignItems="center"
        >
          <Grid item md={4}>
            <CardActionArea style={{ fontSize: "20px", color: "black" }}>
              <CardContent
                style={{
                  height: "15rem",
                  fontStyle: "italic",
                  fontFamily: "cursive",
                  "&hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <CardContent
                  align="center"
                  sx={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "cursive",
                  }}
                >
                  VIKRAWIN
                </CardContent>
                <CardContent
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "cursive",
                  }}
                >
                  "When everyone is selling online,why not farmers!"
                </CardContent>
                <CardContent
                  align="center"
                  sx={{
                    marginTop: "90px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontFamily: "cursive",
                  }}
                >
                  VISION
                </CardContent>
                <CardContent
                  sx={{
                    marginLeft: "30px",
                  }}
                >
                  To promote connectivity between farmers and dealers for crop
                  sales, resulting in increased sales and businesses.
                </CardContent>
              </CardContent>
            </CardActionArea>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
