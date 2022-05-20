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

const MyCrops = ({ getmycrops, endbidding, loading, mycrops }) => {
  useState(() => {
    let timer = setInterval(() => {
      getmycrops();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    //getmycrops();
  }, []);

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
      <div style={{ padding: 30 }}>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={
              4
            } /*rowSpacing={10} columnSpacing={{ xs: 3, sm: 3, md: 3 }}*/
          >
            {mycrops.map((elem) => (
              <Grid item xs={12} sm={6} md={3} key={mycrops.indexOf(elem)}>
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
  mycrops: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};
const mapStateProps = (state) => ({
  loading: state.mycrops.loading,
  mycrops: state.mycrops.mycrops,
});
export default connect(mapStateProps, { getmycrops, endbidding })(MyCrops);
