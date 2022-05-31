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
      <MainResponsiveAppBar />

      <div class="container" style={{ backgroundColor: "orange" }}>
        <img src={farmerImg} className="video" />

        {/* <Grid container justifyContent="center">
          <Grid
            className="overlay"
            item
            md={5}
            sx={{
              fontFamily: "Roboto",
              fontSize: "20",
              fontWeight: "bold",
              marginTop: "12vh",
              color: "black",
            }}
          >
             */}
        {/* <Grid
              item
              align="center"
              sx={{ fontSize: "60px", marginBottom: "20px" }}
            > */}
        {/* VISION */}
        {/* </Grid>
            <Grid item align="center" sx={{ fontSize: "22px" }}>
             */}
        {/* To promote uniformity in agriculture marketing by streamlining of
              procedures across the integrated markets, removing information
              asymmetry between buyers and sellers and promoting real time price
              discovery based on actual demand and supply. */}
        {/* </Grid>
          </Grid> */}
        {/* </Grid> */}
        <Grid
          container
          // spacing={1}
          direction="row"
          justifyContent="left"
          // alignItems="center"
        >
          <Grid item md={4}>
            <div
              style={{
                borderLeft: " 4px solid black",
                height: "200px",
                position: "fixed",
                top: "63%",
                left: "1%",
              }}
            ></div>
            <div
              style={{
                borderBottom: " 4px solid black",
                width: "200px",
                position: "fixed",
                top: "94%",
                left: "1%",
              }}
            ></div>
            {/* <CardHeader
              sx={{
                fontSize: "150px",
                textAlign: "center",
                fontWeight: "bold",
                background: "rgba(200,247,197)",
              }}
            /> */}
            <Grid
              item
              md={12}
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "black",
                backgroundColor: "white",
              }}
            >
              VIKRAWIN
            </Grid>
            <CardActionArea style={{ fontSize: "20px", color: "black" }}>
              <CardContent
                style={{
                  height: "15rem",
                  fontStyle: "italic",
                  fontFamily: "cursive",
                  // border: "solid 2px black",
                  // backgroundColor: "white",
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
                <CardContent style={{ marginLeft: "10px" }}>
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
