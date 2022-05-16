import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

import { Button } from "@mui/material";
import { Select } from "@mui/material";
import FarmerResponsiveAppBar from "../../Components/FarmerNav";
import { MenuItem } from "@mui/material";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getfarmerhistory } from "../../actions/farmerhistory";
import Spinner from "../../Components/layout/Spinner";

const History = ({ getfarmerhistory, history, loading }) => {
  useEffect(() => {
    getfarmerhistory();
  }, []);

  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("gray");
  const [value, SetValue] = React.useState("");

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

  // const [appState, changeState] = useState({
  //   activeObject: null,
  //   name: history,
  // });

  if (loading) {
    return <Spinner />;
  }
  //console.log(typeof history);
  return (
    <>
      <div style={{ backgroundColor: "#ebebeb" }}>
        <FarmerResponsiveAppBar />
        <h1>
          <center>Sell History</center>
        </h1>
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
              marginLeft: "1vw",
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
                  Quantity
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Base Price
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Sold For
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"20px"}
                >
                  Buyer Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                  align="left"
                  width={"30px"}
                >
                  Sell Date
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>
        {history.map((elem) => (
          <TableContainer style={{ width: "95vw", marginLeft: "1vw" }}>
            <Table sx={{ align: "left", background: "white", color: "black" }}>
              <TableRow>
                <TableCell align="left" width={"90px"}>
                  {elem.cropName}
                </TableCell>
                <TableCell align="left" width={"140px"}>
                  {elem.sellQuantity} kg
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  Rs: {elem.basePrice}
                </TableCell>
                <TableCell align="left" width={"110px"}>
                  Rs: {elem.currentBid}
                </TableCell>
                <TableCell align="left" width={"130px"}>
                  {elem.currentBidderName}
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  {elem.updatedAt}
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        ))}
      </div>
    </>
  );
};

History.propTypes = {
  getfarmerhistory: PropTypes.func.isRequired,
  history: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  history: state.farmerhistory.history,
  loading: state.farmerhistory.loading,
});
export default connect(mapStateToProps, { getfarmerhistory })(History);
