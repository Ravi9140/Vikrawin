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
      <div class="container">
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
            <CardActionArea>
              <CardContent
                style={{
                  height: "15rem",
                  marginTop: "75px",
                  fontFamily: "cursive",
                  color: "black",
                  "&hover": {
                    backgroundColor: "none",
                  },
                }}
              >
                <CardContent
                  align="center"
                  sx={{
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  VIKRAWIN
                </CardContent>
                <CardContent
                  align="center"
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    fontFamily: "cursive",
                  }}
                >
                  "When everyone is selling online,why not farmers!"
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
