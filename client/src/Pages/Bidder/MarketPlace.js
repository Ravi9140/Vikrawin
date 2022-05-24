import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Button, CardActionArea, CardHeader, Box } from "@mui/material";
import BidderResponsiveAppBar from "../../Components/BidderNav";
import PlaceBidDialog from "../../Components/PlaceBidDalog";

import { marketplace, placebid } from "../../actions/marketplace";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/layout/Spinner";
import { setAlert } from "../../actions/alert";

const MarketPlace = ({
  marketplace,
  registeredevents,
  loading,
  userId,
  setAlert,
}) => {
  useEffect(() => {
    let timer = setInterval(() => {
      marketplace();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // marketplace();
  }, [registeredevents]);

  console.log(userId);
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
                    //width: "15rem",
                    /*borderStyle:"solid", */ alignContent: "center",
                  }}
                >
                  <CardHeader
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      background: "rgba(200,247,197)",
                      height: "4rem",
                    }}
                    subheaderTypographyProps={{ fontSize: "14px" }}
                    titleTypographyProps={{ fontSize: "30px" }}
                    title={elem.cropName}
                    subheader={elem.createrFarmerAddress}
                  />
                  <CardActionArea>
                    <CardContent style={{ height: "18rem" }}>
                      <TableContainer style={{ height: "10rem" }}>
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
                            <TableCell>₹{elem.basePrice}</TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>

                      <TableContainer style={{}}>
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
                              ₹{elem.currentBid}
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "black",
                                fontSize: "15px",
                              }}
                            >
                              {elem.currentBidderId == userId
                                ? elem.currentBidderName + " (You)"
                                : elem.currentBidderName}
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
                    {elem.currentBidderId == userId ? (
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          alignContent: "center",
                          background: "#3f823b",
                          marginBottom: "5px",
                          marginTopm: "0px",
                        }}
                        onClick={() => {
                          setAlert(
                            "Highest bid already belongs to You",
                            "error"
                          );
                        }}
                      >
                        Place Bid
                      </Button>
                    ) : (
                      <PlaceBidDialog
                        biddingId={elem.biddingeventId}
                        cur_bid={elem.currentBid}
                        //basePrice={elem.basePrice}
                        your_bid={
                          elem.currentBid > 0 ? elem.currentBid : elem.basePrice
                        }
                        disabled
                      />
                    )}
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
  userId: PropTypes.object.isRequired,
  setAlert: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loading: state.marketplace.loading,
  registeredevents: state.marketplace.registeredevents,
  userId: state.authbidder.bidder.bidderId,
});

export default connect(mapStateToProps, { marketplace, placebid, setAlert })(
  MarketPlace
);
