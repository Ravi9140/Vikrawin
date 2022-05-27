import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  ToggleButton,
  ToggleButtonGroup,
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
  const [query, SetQuery] = useState("");

  const search = (data) => {
    return data.filter(
      (item) =>
        item.cropName.toLowerCase().includes(query.toLowerCase()) ||
        item.createrFarmerAddress.toLowerCase().includes(query.toLowerCase()) ||
        item.createrFarmerName.toLowerCase().includes(query.toLowerCase())
    );
  };

  const [endLive, setEndLive] = useState("live");

  const handleEndLive = (event, newEndLive) => {
    setEndLive(newEndLive);
    console.log(newEndLive);
  };

  const searchEndLive = (data) => {
    if (endLive === "live") {
      return data.filter((item) => !item.isSold);
    } else if (endLive == "closed") {
      return data.filter((item) => item.isSold);
    } else {
      return data;
    }
  };

  useEffect(() => {
    let timer = setInterval(() => {
      marketplace();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [registeredevents]);

  var today = new Date().toISOString().slice(0, 16);

  console.log(userId);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div style={{ backgroundColor: "#f8f8ff" }}>
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
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item md={3} xs={6}>
          <ToggleButtonGroup
            exclusive
            color="primary"
            value={endLive}
            onChange={handleEndLive}
            // onChange={(e) => setEndLive(e.target.value)}
            aria-label="text alignment"
            style={{
              height: "40px",
              width: "85%",
              marginLeft: "10%",
            }}
          >
            <ToggleButton
              value="live"
              // style={{
              //   backgroundColor: "black",
              //   color: "white",
              //   borderColor: "white",
              // }}
            >
              Live
            </ToggleButton>
            <ToggleButton
              value="all"
              aria-label="centered"
              // style={{
              //   backgroundColor: "black",
              //   color: "white",
              //   borderColor: "white",
              // }}
            >
              All
            </ToggleButton>
            <ToggleButton
              value="closed"
              aria-label="right aligned"
              // style={{
              //   backgroundColor: "black",
              //   color: "white",
              //   borderColor: "white",
              // }}
            >
              Closed
            </ToggleButton>
          </ToggleButtonGroup>
          {/* <input
            type="search"
            placeholder="Search"
            className="Serach"
            style={{ height: "40px", width: "85%", marginLeft: "10%" }}
            onChange={(e) => setEndLive(e.target.value)}
          ></input> */}
        </Grid>
        <Grid item md={6} xs={0}></Grid>
        <Grid md={3} xs={6} item>
          <input
            type="search"
            placeholder="Search"
            className="Serach"
            style={{ height: "40px", width: "90%" }}
            onChange={(e) => SetQuery(e.target.value)}
          ></input>
        </Grid>
      </Grid>
      <div style={{ padding: 30 }}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={4}>
            {search(searchEndLive(registeredevents)).map((elem) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={registeredevents.indexOf(elem)}
              >
                <Card
                  style={{
                    alignContent: "center",
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
                          {/* <TableRow>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "green",
                                fontSize: "16px",
                              }}
                            >
                              Ends At:
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                // color: "green",
                                fontSize: "12px",
                              }}
                            >
                              {today}
                            </TableCell>
                          </TableRow> */}
                        </Table>
                      </TableContainer>
                    </CardContent>

                    {elem.isSold ? (
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          alignContent: "center",
                          background: "black",
                          marginBottom: "5px",
                          marginTopm: "0px",
                        }}
                        onClick={() => {
                          setAlert("Bidding Ended!!", "error");
                        }}
                      >
                        Bidding Ended
                      </Button>
                    ) : elem.currentBidderId == userId ? (
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
                        quantity={elem.sellQuantity}
                        your_bid={
                          elem.currentBid > 0 ? elem.currentBid : elem.basePrice
                        }
                        disabled
                      />
                    )}

                    {/* {elem.currentBidderId == userId ? (
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
                        quantity={elem.sellQuantity}
                        your_bid={
                          elem.currentBid > 0 ? elem.currentBid : elem.basePrice
                        }
                        disabled
                      />
                    )} */}
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
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
