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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Button, CardActionArea, CardHeader, Box } from "@mui/material";
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
    } else if (endLive === "closed") {
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

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        position="sticky"
      ></div>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item md={3} xs={6}>
          <ToggleButtonGroup
            exclusive
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
              sx={{
                fontSize: "17px",
                "&:hover": { color: "#397618", fontWeight: "bold" },
                "&.Mui-selected": {
                  backgroundColor: "#397618",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              Live
            </ToggleButton>
            <ToggleButton
              value="all"
              aria-label="centered"
              sx={{
                fontSize: "17px",
                "&:hover": { color: "#397618", fontWeight: "bold" },
                "&.Mui-selected": {
                  backgroundColor: "#397618",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              All
            </ToggleButton>
            <ToggleButton
              value="closed"
              aria-label="right aligned"
              sx={{
                fontSize: "17px",
                "&:hover": { color: "#397618", fontWeight: "bold" },
                "&.Mui-selected": {
                  backgroundColor: "#397618",
                  color: "white",
                  fontWeight: "bold",
                },
              }}
            >
              Closed
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid item md={6} xs={2}></Grid>
        <Grid md={3} xs={4} item>
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
          <Grid container spacing={3}>
            {search(searchEndLive(registeredevents)).map((elem) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={registeredevents.indexOf(elem)}
              >
                <Card
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px",
                    alignContent: "center",
                    maxWidth: { md: "350px" },
                    // minWidth:"300px",
                    // border: "1px solid gray",
                    boxShadow: " 2px rgba(0, 0, 0, 0.2)",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <CardHeader
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      background: "#90d042",
                      opacity: "70%",
                      // height: "4rem",
                    }}
                    subheaderTypographyProps={{ fontSize: "14px" }}
                    titleTypographyProps={{ fontSize: "30px" }}
                    title={elem.cropName}
                    subheader={elem.createrFarmerAddress}
                  />
                  <CardActionArea>
                    <CardContent
                      style={{ minHeight: "22rem", height: "22rem" }}
                    >
                      <TableContainer style={{}}>
                        <Table
                          sx={{
                            align: "center",
                            border: "1px solid #90d042",
                          }}
                        >
                          <TableRow
                            sx={{
                              border: "1px solid #90d042",
                            }}
                          >
                            <TableCell
                              sx={{
                                borderBottom: "none",
                                fontSize: "16px",
                              }}
                            >
                              Farmer:
                            </TableCell>
                            <TableCell
                              sx={{
                                borderBottom: "none",
                                fontSize: "16px",
                                paddingRight: "opx",
                              }}
                            >
                              {elem.createrFarmerName}
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              border: "1px solid #90d042",
                            }}
                          >
                            <TableCell
                              sx={{ borderBottom: "none", fontSize: "16px" }}
                            >
                              Quantity:{" "}
                            </TableCell>
                            <TableCell
                              sx={{ borderBottom: "none", fontSize: "16px" }}
                            >
                              {elem.sellQuantity} kg
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{
                                borderBottom: "none",
                                fontSize: "16px",
                              }}
                            >
                              Base Price:{" "}
                            </TableCell>
                            <TableCell
                              sx={{ borderBottom: "none", fontSize: "16px" }}
                            >
                              ₹{elem.basePrice}
                            </TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>

                      <TableContainer style={{}}>
                        <Table>
                          <TableRow sx={{ borderBottom: "none" }}>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "#397618",
                                fontSize: "18px",
                              }}
                            >
                              Current Bid:{""}
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "#397618",
                                fontSize: "18px",
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
                                borderBottom: "none",
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
                                borderBottom: "none",
                                paddingRight: "0px",
                              }}
                            >
                              {elem.currentBidderId === userId
                                ? elem.currentBidderName + " (You)"
                                : elem.currentBidderName}
                            </TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </CardContent>

                    <div
                      style={{
                        display: "flex",
                        width: "99%",
                      }}
                    >
                      {elem.isSold ? (
                        <Button
                          sx={{
                            backgroundColor: "white",
                            border: "1px solid #90d042",
                            color: "#90d042",
                            alignContent: "center",
                            background: "white",
                            marginX: "auto",
                            height: "38px",
                            width: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "30px",
                            marginBottom: "15px",
                            fontSize: { xs: "12px", sm: "12px" },
                          }}
                          onClick={() => {
                            setAlert("Bidding Ended!!", "error");
                          }}
                        >
                          Bidding Ended
                        </Button>
                      ) : elem.currentBidderId === userId ? (
                        <Button
                          sx={{
                            alignContent: "center",
                            background: "#397618",
                            marginX: "auto",
                            height: "38px",
                            color: "white",
                            width: "50%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "30px",
                            marginBottom: "15px",
                            fontSize: { xs: "12px", sm: "12px" },
                            "&:hover": {
                              backgroundColor: "#6eb634",
                            },
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
                            elem.currentBid > 0
                              ? elem.currentBid
                              : elem.basePrice
                          }
                          disabled
                        />
                      )}
                    </div>
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
