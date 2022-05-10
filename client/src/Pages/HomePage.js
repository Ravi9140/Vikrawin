import React from "react";
import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import MainResponsiveAppBar from "../Components/MainPageNav";
import logo from "../Images/logo-2.png";
import farmerImg from "../Images/farmer-2.jpg";
import farmersMarket from "../Images/farmer's-market-1.jpg";
import backgroundImg from "../Images/backgroungImg.jpg";

const HomePage = () => {
  const imgStyle1 = { height: "55vh", width: "60vw", marginTop: "20px" };
  const imgStyle2 = { height: "50vh", width: "30vw", marginLeft: "10rem" };
  const imgStyle3 = {
    height: "40vh",
    width: "25vw",
    marginTop: "6rem",
    marginLeft: "5rem",
  };
  return (
    <>
      <MainResponsiveAppBar />
      <div style={{ alignContent: "center" }}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            style={{ background: { backgroundImg }, height: "35rem" }}
          >
            <center>
              <img src={logo} style={imgStyle1} />
            </center>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <center>
              <div style={{ display: "flex", marginTop: "2rem" }}>
                <img src={farmerImg} style={imgStyle2} alt="farmer" />
                <Paper
                  style={{
                    width: "45vw",
                    marginLeft: "70px",
                    textAlign: "justify",
                    padding: "2rem",
                  }}
                >
                  Agriculture, with its allied sectors, is unquestionably the
                  largest livelihood provider in India, more so in the vast
                  rural areas. It also contributes a significant figure to the
                  Gross Domestic Product (GDP). Sustainable agriculture, in
                  terms of food security, rural employment, and environmentally
                  sustainable technologies such as soil conservation,
                  sustainable natural resource management and biodiversity
                  protection, are essential for holistic rural development.
                  Indian agriculture and allied activities have witnessed a
                  green revolution, a white revolution, a yellow revolution and
                  a blue revolution.
                  <p>
                    Agriculture is the backbone of India, saying this, many of
                    the agriculturists face so many problems in the agriculture
                    that includes improper value for the products they produce
                    and there are no proper discussion platforms where they
                    could discuss or clarify their doubts regarding the
                    agriculture. Thus here a new method is tried to find a
                    solution to make the farmers to sell their products.This
                    auction website with various features would satisfy the
                    farmer needs
                  </p>
                </Paper>
              </div>

              <div style={{ display: "flex", marginTop: "2rem" }}>
                <Paper
                  style={{
                    width: "45vw",
                    marginTop: "5rem",
                    marginLeft: "10rem",
                    textAlign: "justify",
                    padding: "2rem",
                  }}
                >
                  Online auction system is a web based application, in which
                  seller can sell the goods. It is a popular method for buying
                  and selling products. It is developed with the objective of
                  making the auction system reliable, easier and faster. The
                  objective of the online auction system is that the user can
                  have better choice for their investment. Also it is time
                  saving and through this system user can invest in their own
                  selected firm. The application allows consumers to bid for the
                  farm produce, thus eradicating middle man and benefiting both
                  farmers and consumers. In this paper we have introduced a
                  dynamic system to sell and buy agricultural products based on
                  auction. The web application will allow the online auction
                  administrator to sell the products through the desired person.
                  Customer must have a valid user id and password to login to
                  the system. In this the admin will post the image and details
                  of the product. The buyer can select the product and bid
                  accordingly. The bidding will have a specific time duration,
                  which will be set by the seller. At the end of time limit,
                  product will be sold to the highest bidder. Our main aim is to
                  provide a software environment for farmers to gain maximum
                  profit.
                </Paper>
                <img src={farmersMarket} style={imgStyle3} alt="farmer" />
              </div>
            </center>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
