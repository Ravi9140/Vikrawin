import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import FarmerResponsiveAppBar from "../../Components/FarmerNav";
import { MenuItem } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
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
  const columns = [
    // { field: 'bid', headerName: 'BID', width: 90  },
    {
      field: "cropName",
      headerName: "Crop Name",
      width: 200,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellQuantity",
      headerName: "Quantity",
      width: 200,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "basePrice",
      headerName: "Base Price",
      width: 200,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "currentBid",
      headerName: "Sold For",
      width: 200,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "currentBidderName",
      headerName: "Buyer Name",
      width: 220,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellDate",
      headerName: "Sell Date",
      width: 200,
      align: "left",
      headerAlign: "left",
    },
  ];

  const [query, SetQuery] = useState("");

  const search = (history) => {
    return history.filter(
      (item) =>
        item.cropName.toLowerCase().includes(query) ||
        item.currentBidderName.toLowerCase().includes(query)
    );
  };

  if (loading) {
    return <Spinner />;
  }
  //console.log(history);
  return (
    <>
      <FarmerResponsiveAppBar />
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily:
            "SuisseWorks,Georgia,Times,Times new roman,serif,'apple color emoji','segoe ui emoji','segoe ui symbol'",
        }}
      >
        <HistoryIcon fontSize="large" style={{ marginRight: "15px" }} />
        Sell History
      </h1>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid md={9} xs={6} item></Grid>
        <Grid md={3} xs={6} item>
          <input
            type="search"
            placeholder="Search"
            className="Serach"
            style={{ height: "40px", width: "95%" }}
            onChange={(e) => SetQuery(e.target.value)}
          ></input>
        </Grid>
      </Grid>
      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          sx={{
            margin: "10px",
            justifyContent: "center",
            fontWeight: "light",
            borderRadius: "5px",
            boxShadow: "15px 15px 15px gray",
            border: 2,
            borderColor: "green",

            "& .MuiDataGrid-cell:hover": {
              color: "green",
            },

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#2f4f4f",
              color: "white",
              fontSize: 16,
            },

            fontFamily: "sans-serif,Times new roman,algerian",
          }}
          rowHeight={60}
          rows={search(history)}
          columns={columns}
          getRowId={(history) => history.biddingeventId}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
    // <>
    //   <div style={{ backgroundColor: "#ebebeb" }}>
    //     <FarmerResponsiveAppBar />
    //     <h1>
    //       <center>Sell History</center>
    //     </h1>
    //     <Grid container>
    //       <Grid md={9} xs={6} item></Grid>
    //       <Grid md={1} xs={3} item>
    //         <Select
    //           align="right"
    //           onChange={handleChange}
    //           value={value}
    //           displayEmpty
    //           fullWidth
    //         >
    //           <MenuItem value="">Search Crop</MenuItem>
    //           <MenuItem value={0}>Rice</MenuItem>
    //           <MenuItem value={1}>Wheat</MenuItem>
    //           <MenuItem value={2}>Jowar</MenuItem>
    //           <MenuItem value={3}>Bajra</MenuItem>
    //           <MenuItem value={4}>SugarCance</MenuItem>
    //           <MenuItem value={5}>Moong</MenuItem>
    //           <MenuItem value={6}>Til</MenuItem>
    //         </Select>
    //       </Grid>

    //       <Grid md={1} xs={3} item>
    //         <Button
    //           fullWidth
    //           variant="contained"
    //           sx={{
    //             alignContent: "center",
    //             height: "55px",
    //             background: "black",
    //             color: "white",
    //           }}
    //         >
    //           Search
    //         </Button>
    //       </Grid>
    //     </Grid>
    //     <br></br>

    //     <Grid>
    //       <TableContainer
    //         style={{
    //           width: "95vw",
    //           marginLeft: "1vw",
    //           marginLeft: "1vw",
    //           width: "95vw",
    //           marginLeft: "1vw",
    //           borderRadius: "10px 10px 0px 0px",
    //         }}
    //       >
    //         <Table
    //           sx={{ align: "left", background: "#2f4f4f", color: "white" }}
    //         >
    //           <TableRow>
    //             <TableCell
    //               sx={{ fontWeight: "bold", fontSize: "20px" }}
    //               align="left"
    //               width={"20px"}
    //             >
    //               Crop
    //             </TableCell>
    //             <TableCell
    //               sx={{ fontWeight: "bold", fontSize: "20px" }}
    //               align="left"
    //               width={"20px"}
    //             >
    //               Quantity
    //             </TableCell>
    //             <TableCell
    //               sx={{ fontWeight: "bold", fontSize: "20px" }}
    //               align="left"
    //               width={"20px"}
    //             >
    //               Base Price
    //             </TableCell>
    //             <TableCell
    //               sx={{ fontWeight: "bold", fontSize: "20px" }}
    //               align="left"
    //               width={"20px"}
    //             >
    //               Sold For
    //             </TableCell>
    //             <TableCell
    //               sx={{ fontWeight: "bold", fontSize: "20px" }}
    //               align="left"
    //               width={"20px"}
    //             >
    //               Buyer Name
    //             </TableCell>
    //             <TableCell
    //               sx={{ fontWeight: "bold", fontSize: "20px" }}
    //               align="left"
    //               width={"30px"}
    //             >
    //               Sell Date
    //             </TableCell>
    //           </TableRow>
    //         </Table>
    //       </TableContainer>
    //     </Grid>
    //     {history.map((elem) => (
    //       <TableContainer style={{ width: "95vw", marginLeft: "1vw" }}>
    //         <Table sx={{ align: "left", background: "white", color: "black" }}>
    //           <TableRow>
    //             <TableCell align="left" width={"90px"}>
    //               {elem.cropName}
    //             </TableCell>
    //             <TableCell align="left" width={"140px"}>
    //               {elem.sellQuantity} kg
    //             </TableCell>
    //             <TableCell align="left" width={"120px"}>
    //               Rs: {elem.basePrice}
    //             </TableCell>
    //             <TableCell align="left" width={"110px"}>
    //               Rs: {elem.currentBid}
    //             </TableCell>
    //             <TableCell align="left" width={"130px"}>
    //               {elem.currentBidderName}
    //             </TableCell>
    //             <TableCell align="left" width={"120px"}>
    //               {elem.sellDate}
    //             </TableCell>
    //           </TableRow>
    //         </Table>
    //       </TableContainer>
    //     ))}
    //   </div>
    // </>
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
