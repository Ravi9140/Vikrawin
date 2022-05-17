import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Box,
  Paper,
} from "@mui/material";
import { fontSize, fontWeight, height } from "@mui/system";
import BidderResponsiveAppBar from "../../Components/BidderNav";
import PlaceBidDialog from "../../Components/PlaceBidDalog";

import { marketplace, placebid } from "../../actions/marketplace";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/layout/Spinner";

const MarketPlace = ({ marketplace, registeredevents, loading }) => {
  useEffect(() => {
    marketplace();
  }, []);
  // const data = {
  //   name: [
  //     {
  //       crop: "Rice",
  //       id: 1,
  //       quantity: 250,
  //       base_price: 5000,
  //       farmer_name: "Ravindra",
  //       cur_bid: 6000,
  //       prev_bid: 5500,
  //     },
  //   ],
  // };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <BidderResponsiveAppBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="sticky"
      >
        <div style={{ width: "100vw" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily:
                "SuisseWorks,Georgia,Times,Times new roman,serif,'apple color emoji','segoe ui emoji','segoe ui symbol'",
            }}
          >
            <AddBusinessIcon fontSize="large" style={{ marginRight: "10px" }} />
            Market Place
          </h1>
        </div>
      </div>
      <div style={{ padding: 30 }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={
              4
            } /*rowSpacing={10} columnSpacing={{ xs: 3, sm: 3, md: 3 }}*/
          >
            {registeredevents.map((elem) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={registeredevents.indexOf(elem)}
              >
                <Card
                  style={{
                    width: "15rem",
                    /*borderStyle:"solid", */ alignContent: "center",
                  }}
                >
                  <CardHeader
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      background: "rgba(200,247,197)",
                    }}
                    title={elem.cropName}
                  />
                  <CardActionArea>
                    <CardContent>
                      <TableContainer style={{ width: "13rem" }}>
                        <Table
                          sx={{
                            align: "center",
                            background: "gray",
                            color: "white",
                          }}
                        >
                          <TableRow>
                            <TableCell>Farmer:</TableCell>
                            <TableCell>{elem.createrFarmerName}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Quantity: </TableCell>
                            <TableCell>{elem.sellQuantity} kg</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Base Price: </TableCell>
                            <TableCell>Rs: {elem.basePrice}</TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>

                      <TableContainer style={{ width: "14rem" }}>
                        <Table>
                          <TableRow>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "green",
                                fontSize: "16px",
                              }}
                            >
                              Current Bid:{""}
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "green",
                                fontSize: "16px",
                              }}
                            >
                              Bidder Name:{""}
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "black",
                                fontSize: "15px",
                              }}
                            >
                              Rs:{elem.currentBid}
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "black",
                                fontSize: "15px",
                              }}
                            >
                              {elem.currentBidderName}
                            </TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </CardContent>
                    {/* <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        alignContent: "center",
                        background: "#3f823b",
                        marginBottom: "5px",
                        marginTopm: "0px",
                      }}
                      // onClick={() => {
                      //   <PlaceBidDialog />;
                      // }}
                    >
                      PLACE BID
                    </Button> */}
                    <PlaceBidDialog biddingId={elem.biddingeventId} />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};

MarketPlace.propTypes = {
  marketplace: PropTypes.func.isRequired,
  placebid: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  registeredevents: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loading: state.marketplace.loading,
  registeredevents: state.marketplace.registeredevents,
});

export default connect(mapStateToProps, { marketplace, placebid })(MarketPlace);
