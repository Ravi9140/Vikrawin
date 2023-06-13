import React, { useState } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getmycrops, endbidding } from "../../actions/mycrops";
import { sendsms } from "../../actions/sms";
import { sendemail } from "../../actions/emailNotification";
import Spinner from "../../Components/layout/Spinner";
import GrassIcon from "@mui/icons-material/Grass";
import {
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Box,
  Paper,
} from "@mui/material";
import { fontSize, fontWeight } from "@mui/system";
import FarmerResponsiveAppBar from "../../Components/FarmerNav";

const MyCrops = ({
  getmycrops,
  endbidding,
  loading,
  mycrops,
  sendsms,
  sendemail,
}) => {
  const [query, SetQuery] = useState("");

  const search = (data) => {
    return data.filter((item) =>
      item.cropName.toLowerCase().includes(query.toLowerCase())
    );
  };

  useState(() => {
    let timer = setInterval(() => {
      getmycrops();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
    //getmycrops();
  }, []);

  var today = new Date().toISOString().slice(0, 16);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item md={9} xs={3} sm={6}></Grid>
        <Grid md={3} sm={6} xs={9} item>
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
            {search(mycrops).map((elem) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={mycrops.indexOf(elem)}
              >
                <Card
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "15px",
                    alignContent: "center",
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
                      opacity: "80%",
                    }}
                    title={`${elem.cropName}`}
                  />
                  <CardActionArea>
                    <CardContent
                      style={{ minHeight: "16rem", height: "16rem" }}
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
                              sx={{ borderBottom: "none", fontSize: "18px" }}
                            >
                              Quantity:{" "}
                            </TableCell>
                            <TableCell
                              sx={{ borderBottom: "none", fontSize: "18px" }}
                            >
                              {elem.sellQuantity} kg
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell
                              sx={{ borderBottom: "none", fontSize: "18px" }}
                            >
                              Base Price:{" "}
                            </TableCell>
                            <TableCell
                              sx={{ borderBottom: "none", fontSize: "18px" }}
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
                              Current Bid:
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "#397618",
                                fontSize: "18px",
                              }}
                            >
                              Bidder Name:{" "}
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
                              ₹{elem.currentBid}{" "}
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
                              {elem.currentBidderName}
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
                          endbidding(elem.biddingeventId);
                          sendsms({
                            phone: "+91" + elem.currentBidderContact,
                            message:
                              "\nYou won the bidding for crop " +
                              elem.cropName +
                              "\n\nDetails:\n\n" +
                              "Farmer Name: " +
                              elem.createrFarmerName +
                              "\nQuantity: " +
                              elem.sellQuantity +
                              " Kg\nBought For: ₹" +
                              elem.currentBid +
                              "\nFarmer Address.: " +
                              elem.createrFarmerAddress +
                              "\nFarmer Contact No.: " +
                              elem.createrFarmerContact,
                          });
                          sendemail({
                            bidderId: elem.currentBidderId,
                            msg:
                              "<p>You won the bidding for crop " +
                              elem.cropName +
                              "</p><p>Details:" +
                              "</p><p>Farmer Name: " +
                              elem.createrFarmerName +
                              "</p><p>Quantity: " +
                              elem.sellQuantity +
                              " Kg</p><p>Bought For: ₹" +
                              elem.currentBid +
                              "</p><p>Farmer Address.: " +
                              elem.createrFarmerAddress +
                              "</p><p>Farmer Contact No.: " +
                              elem.createrFarmerContact,
                          });
                        }}
                      >
                        End Bidding
                      </Button>
                    </div>
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

MyCrops.propTypes = {
  getmycrops: PropTypes.func.isRequired,
  endbidding: PropTypes.func,
  sendsms: PropTypes.func,
  sendemail: PropTypes.func,
  mycrops: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateProps = (state) => ({
  loading: state.mycrops.loading,
  mycrops: state.mycrops.mycrops,
});
export default connect(mapStateProps, {
  getmycrops,
  endbidding,
  sendsms,
  sendemail,
})(MyCrops);
