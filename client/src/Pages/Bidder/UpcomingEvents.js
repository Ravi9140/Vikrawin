import React, { useState, useEffect } from "react";
import BidderResponsiveAppBar from "../../Components/BidderNav";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { fontSize, fontWeight } from "@mui/system";
import { Link } from "react-router-dom";
import "../../static/button2.css";
import GavelIcon from "@mui/icons-material/Gavel";
import Spinner from "../../Components/layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getauctions, registerauction } from "../../actions/auction";
import { setAlert } from "../../actions/alert";

const UpcomingEvents = ({
  getauctions,
  registerauction,
  auctions,
  loading,
  setAlert,
}) => {
  useEffect(() => {
    getauctions();
  }, [getauctions]);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("gray");
  const [value, SetValue] = useState("");

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div style={{ backgroundColor: "#ebebeb" }}>
        <BidderResponsiveAppBar />

        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily:
              "SuisseWorks,Georgia,Times,Times new roman,serif,'apple color emoji','segoe ui emoji','segoe ui symbol'",
          }}
        >
          <GavelIcon fontSize="large" style={{ marginRight: "10px" }} />
          Available Auctions
        </h1>
        <div></div>
        <Grid container>
          <Grid md={9} xs={6} item></Grid>
          <Grid md={1} xs={3} item>
            <Select
              align="right"
              onChange={handleChange}
              value={value}
              displayEmpty
              fullWidth
            >
              <MenuItem value="">Search Crop</MenuItem>
              <MenuItem value={0}>Rice</MenuItem>
              <MenuItem value={1}>Wheat</MenuItem>
              <MenuItem value={2}>Jowar</MenuItem>
              <MenuItem value={3}>Bajra</MenuItem>
              <MenuItem value={4}>SugarCance</MenuItem>
              <MenuItem value={5}>Moong</MenuItem>
              <MenuItem value={6}>Til</MenuItem>
            </Select>
          </Grid>

          <Grid md={1} xs={3} item>
            <Button
              fullWidth
              variant="contained"
              sx={{
                marginLeft: "30px",
                alignContent: "center",
                height: "55px",
                background: "black",
                color: "white",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <br></br>

        <Grid>
          <TableContainer
            style={{
              width: "95vw",
              marginLeft: "1vw",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <Table
              sx={{ align: "left", background: "#2f4f4f", color: "white" }}
            >
              <TableRow>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Crop
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Farmer Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Quantity
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Base Price{" "}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Current Bid{" "}
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"30px"}
                >
                  Bidder Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Register
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>
        {auctions.map((elem) => (
          <TableContainer style={{ width: "95vw", marginLeft: "1vw" }}>
            <Table sx={{ align: "left", background: "white", color: "black" }}>
              <TableRow>
                <TableCell align="left" width={"90px"}>
                  {elem.cropName}
                </TableCell>
                <TableCell align="left" width={"140px"}>
                  {elem.createrFarmerName}
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  {elem.sellQuantity} kg
                </TableCell>
                <TableCell align="left" width={"110px"}>
                  Rs: {elem.basePrice}
                </TableCell>
                <TableCell align="left" width={"130px"}>
                  Rs: {elem.currentBid}
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  {elem.currentBidderName}
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  <Button
                    className="btn-grad1"
                    onClick={() => {
                      console.log(elem.biddingeventId);
                      registerauction(elem.biddingeventId);
                    }}
                    // component={Link}
                    // to="/BidderMarketPlace"
                    variant="contained"
                    fullWidth
                    sx={{
                      alignContent: "center",
                      // background: "#f6f5f7",
                      color: "white",
                    }}
                  >
                    Register
                  </Button>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        ))}
      </div>
    </>
  );
};

UpcomingEvents.propTypes = {
  getauctions: PropTypes.func.isRequired,
  registerauction: PropTypes.func.isRequired,
  setAlert: PropTypes.func,
  auctions: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  auctions: state.auction.auctions,
  loading: state.auction.loading,
});
export default connect(mapStateToProps, {
  getauctions,
  registerauction,
  setAlert,
})(UpcomingEvents);
