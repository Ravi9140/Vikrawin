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
    // let timer = setInterval(() => {
    //   getfarmerhistory();
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
    getfarmerhistory();
  }, []);

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
      headerName: "Quantity (kg)",
      width: 200,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "basePrice",
      headerName: "Base Price (₹)",
      width: 200,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "currentBid",
      headerName: "Sold For (₹)",
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
      type: "date",
      align: "left",
      headerAlign: "left",
    },
  ];

  const [noOfRows, SetRows] = useState(10);
  const [query, SetQuery] = useState("");

  const search = (history) => {
    return history.filter(
      (item) => item.cropName.toLowerCase().includes(query)
      // item.currentBidderName.toLowerCase().includes(query)
    );
  };

  if (loading) {
    return <Spinner />;
  }

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
        <Grid md={3} xs={6} item>
          <input
            type="no_Rows"
            placeholder="No. of Rows"
            //className="Serach"
            style={{ height: "35px", width: "80%", marginLeft: "10px" }}
            onChange={(e) => SetRows(e.target.value)}
          ></input>
        </Grid>
        <Grid md={6} xs={0} item></Grid>
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
          rowHeight={35}
          rows={search(history)}
          columns={columns}
          getRowId={(history) => history.biddingeventId}
          pageSize={noOfRows > 0 ? noOfRows : 10}
          rowsPerPageOptions={[noOfRows > 0 ? noOfRows : 10]}
        />
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
