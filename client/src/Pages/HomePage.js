import React from "react";
import { Grid, Paper } from "@mui/material";
import MainResponsiveAppBar from "../Components/MainPageNav";
import logo from "../Images/logo-2.png";
import farmerImg from "../Images/farming-5.jpg";
import farmersMarket from "../Images/farmer's-market-1.jpg";
import bidding from "../Images/bidding-1.jpg";
import backgroundImg from "../Images/backgroungImg.jpg";
import sample from "../static/trim6.mp4";

// import Overlay from "react-image-overlay";
import "./video.css";
// import "";
const HomePage = () => {
  const imgStyle1 = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    // height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const imgStyle2 = {
    height: "50vh",
    width: "30vw",
    marginLeft: "10rem",
    borderRadius: "25px",
    // boxShadow: "0 0 5px #eee",
  };
  const imgStyle3 = {
    height: "40vh",
    width: "25vw",
    marginTop: "6rem",
    marginLeft: "5rem",
  };
  const h1style = {
    fontWeight: "bold",
    fontSize: "",
    textAlign: "center",
  };
  const invertedcommas = {
    fontSize: "50px",
    fontFamily: "comic sans",

    fontWeight: "bold",
  };

  return (
    <>
      <div class="container">
        <MainResponsiveAppBar />

        <video autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <div class="overlay">
          <h1 style={h1style}>
            <h1>
              <div className="invertedcommas">
                “I would rather be on my farm than
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp; be an emperor of the world.”
              </div>
            </h1>

            <h2 style={{ textAlign: "right", color: "black" }}>
              — George Washington
            </h2>
          </h1>

          {/* <img src={farmerImg} style={imgStyle1} /> */}
          <div className="2" style={{ zIndex: "1" }}>
            <div style={{ alignContent: "center" }}>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  style={{
                    background: { backgroundImg },
                    height: "35rem",
                  }}
                >
                  <center></center>
                </Grid>
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <center>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "2rem",
                        borderRadius: "25px",
                      }}
                    >
                      <img src={farmersMarket} style={imgStyle2} alt="farmer" />
                      <Paper
                        style={{
                          fontSize: "17px",
                          width: "45vw",
                          marginLeft: "70px",
                          textAlign: "justify",
                          padding: "2rem",
                          borderRadius: "25px",
                          border: "solid black 3px",
                          background: "#1a1110",
                          border: "solid 2px white",
                          color: "white",
                        }}
                      >
                        <div style={{ fontSize: "40px" }}>Agriculture,</div>
                        with its allied sectors, is unquestionably the largest
                        livelihood provider in India, more so in the vast rural
                        areas. It also contributes a significant figure to the
                        Gross Domestic Product (GDP). Sustainable agriculture,
                        in terms of food security, rural employment, and
                        environmentally sustainable technologies such as soil
                        conservation, sustainable natural resource management
                        and biodiversity protection, are essential for holistic
                        rural development. Indian agriculture and allied
                        activities have witnessed a green revolution, a white
                        revolution, a yellow revolution and a blue revolution.
                        <p>
                          Agriculture is the backbone of India, saying this,
                          many of the agriculturists face so many problems in
                          the agriculture that includes improper value for the
                          products they produce and there are no proper
                          discussion platforms where they could discuss or
                          clarify their doubts regarding the agriculture. Thus
                          here a new method is tried to find a solution to make
                          the farmers to sell their products.This auction
                          website with various features would satisfy the farmer
                          needs
                        </p>
                      </Paper>
                    </div>

                    <div style={{ display: "flex", marginTop: "2rem" }}>
                      <Paper
                        style={{
                          fontSize: "17px",
                          width: "45vw",
                          marginLeft: "70px",
                          textAlign: "justify",
                          padding: "2rem",
                          borderRadius: "25px",
                          border: "solid white 2px",
                          background: "#1a1110",
                          color: "white",
                        }}
                      >
                        <div
                          style={{ fontSize: "40px", fontFamily: "Comic Sans" }}
                        >
                          Online
                        </div>
                        auction system is a web based application, in which
                        seller can sell the goods. It is a popular method for
                        buying and selling products. It is developed with the
                        objective of making the auction system reliable, easier
                        and faster. The objective of the online auction system
                        is that the user can have better choice for their
                        investment. Also it is time saving and through this
                        system user can invest in their own selected firm. The
                        application allows consumers to bid for the farm
                        produce, thus eradicating middle man and benefiting both
                        farmers and consumers. In this paper we have introduced
                        a dynamic system to sell and buy agricultural products
                        based on auction. The web application will allow the
                        online auction administrator to sell the products
                        through the desired person. Customer must have a valid
                        user id and password to login to the system. In this the
                        admin will post the image and details of the product.
                        The buyer can select the product and bid accordingly.
                        The bidding will have a specific time duration, which
                        will be set by the seller. At the end of time limit,
                        product will be sold to the highest bidder. Our main aim
                        is to provide a software environment for farmers to gain
                        maximum profit.
                      </Paper>
                      <img src={bidding} style={imgStyle2} alt="farmer" />
                    </div>
                  </center>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
