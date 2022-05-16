import React, { useState } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

import { Button } from "@mui/material";
import { Select } from "@mui/material";
import BidderResponsiveAppBar from "../../Components/BidderNav";
import { MenuItem } from "@mui/material";

const BidderHistory = () => {
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

  const [appState, changeState] = useState({
    activeObject: null,
    name: [
      {
        crop: "Rice",
        id: 1,
        quantity: 250,
        base_price: 5000,
        farmer_name: "Ravindra Patel",
        cur_bid: 6000,
        date: "12-12-2021",
      },
      {
        crop: "Wheat",
        id: 2,
        quantity: 350,
        base_price: 6000,
        farmer_name: "Tejas",
        cur_bid: 7000,
        date: "12-12-2021",
      },
      {
        crop: "Bajra",
        id: 3,
        quantity: 200,
        base_price: 4400,
        farmer_name: "Tejas",
        cur_bid: 6000,
        date: "12-12-2021",
      },
      {
        crop: "Jowar",
        id: 4,
        quantity: 150,
        base_price: 7000,
        farmer_name: "Praveen",
        cur_bid: 8000,
        date: "12-12-2021",
      },
      {
        crop: "Sugarcane",
        id: 5,
        quantity: 200,
        base_price: 2456,
        farmer_name: "Akash",
        cur_bid: 6200,
        date: "12-12-2021",
      },
      {
        crop: "Rice",
        id: 6,
        quantity: 250,
        base_price: 3450,
        farmer_name: "Mayur",
        cur_bid: 6200,
        date: "12-12-2021",
      },
      {
        crop: "Moong",
        id: 7,
        quantity: 340,
        base_price: 5000,
        farmer_name: "Satish",
        cur_bid: 6000,
        date: "22-06-2022",
      },
      {
        crop: "Til",
        id: 8,
        quantity: 310,
        base_price: 6000,
        farmer_name: "Sid",
        cur_bid: 6200,
        date: "12-10-2021",
      },
    ],
  });

  return (
    <>
      <div style={{ backgroundColor: "#ebebeb" }}>
        <BidderResponsiveAppBar />
        <h1>
          <center>Purchase History</center>
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
              // width: "95vw",
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
                  Bought For
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
                  width={"30px"}
                >
                  Purchase Date
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Grid>
        {appState.name.map((elem) => (
          <TableContainer style={{ width: "95vw", marginLeft: "1vw" }}>
            <Table sx={{ align: "left", background: "white", color: "black" }}>
              <TableRow>
                <TableCell align="left" width={"90px"}>
                  {elem.crop}
                </TableCell>
                <TableCell align="left" width={"140px"}>
                  {elem.quantity} kg
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  Rs: {elem.base_price}
                </TableCell>
                <TableCell align="left" width={"110px"}>
                  Rs: {elem.cur_bid}
                </TableCell>
                <TableCell align="left" width={"130px"}>
                  {elem.farmer_name}
                </TableCell>
                <TableCell align="left" width={"120px"}>
                  {elem.date}
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        ))}
      </div>
    </>
  );
};

export default BidderHistory;
