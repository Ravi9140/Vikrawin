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
      <FarmerResponsiveAppBar />
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
            <GrassIcon fontSize="large" style={{ marginRight: "15px" }} />
            My Crops
          </h1>
        </div>
      </div>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item md={9} xs={6}></Grid>
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
            {search(mycrops).map((elem) => (
              <Grid item xs={12} sm={6} md={3} key={mycrops.indexOf(elem)}>
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
                    }}
                    title={`${elem.cropName}`}
                  />
                  <CardActionArea>
                    <CardContent style={{ height: "15rem" }}>
                      <TableContainer style={{}}>
                        <Table
                          sx={{
                            align: "center",
                            background: "gray",
                            color: "white",
                          }}
                        >
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
                                fontSize: "20px",
                              }}
                            >
                              Current Bid:
                            </TableCell>
                            <TableCell
                              sx={{
                                align: "center",
                                fontWeight: "bold",
                                color: "green",
                                fontSize: "20px",
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
                              }}
                            >
                              {elem.currentBidderName}
                            </TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                    </CardContent>
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
                        endbidding(elem.biddingeventId);
                        sendsms({
                          phone: "+91" + elem.createrFarmerContact,
                          message:
                            "\nYour crop " +
                            elem.cropName +
                            " got sold.\n\nDetails:\n\n" +
                            "Buyer Name: " +
                            elem.currentBidderName +
                            "\nSold For : ₹ " +
                            elem.currentBid +
                            "\nBuyer Contact No.: " +
                            elem.currentBidderContact,
                        });
                        sendsms({
                          phone: "+91" + elem.currentBidderContact,
                          message:
                            "\nYou won the bidding for crop " +
                            elem.cropName +
                            "\n\nDetails:\n\n" +
                            "Farmer Name: " +
                            elem.createrFarmerName +
                            "\nBought For: ₹ " +
                            elem.currentBid +
                            "\nFarmer Address.: " +
                            elem.createrFarmerAddress +
                            "\nFarmer Contact No.: " +
                            elem.createrFarmerContact,
                        });
                        sendemail({
                          farmerId: elem.createrId,
                          msg1:
                            "<p>Your crop " +
                            elem.cropName +
                            " got sold.</p><p>Details:</p>" +
                            "<p>Buyer Name: " +
                            elem.currentBidderName +
                            "</p><p>Sold For : ₹ " +
                            elem.currentBid +
                            "</p><p>Buyer Contact No.: " +
                            elem.currentBidderContact,
                          bidderId: elem.currentBidderId,
                          msg2:
                            "<p>You won the bidding for crop " +
                            elem.cropName +
                            "</p><p>Details:" +
                            "</p><p>Farmer Name: " +
                            elem.createrFarmerName +
                            "</p><p>Bought For: ₹ " +
                            elem.currentBid +
                            "</p><p>Farmer Address.: " +
                            elem.createrFarmerAddress +
                            "</p><p>Farmer Contact No.: " +
                            elem.createrFarmerContact,
                        });
                      }}
                    >
                      END BIDDING
                    </Button>
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
