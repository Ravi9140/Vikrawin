import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { getbidderhistory } from "../../actions/bidderhistory";

import { DataGrid, GridValueFormatterParams } from "@mui/x-data-grid/DataGrid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./../../Components/layout/Spinner";
import BidderResponsiveAppBar from "../../Components/BidderNav";

const BidderHistory = ({ getbidderhistory, loading, history }) => {
  useEffect(() => {
    getbidderhistory();
  }, []);

  const columns = [
    // { field: 'bid', headerName: 'BID', width: 90  },
    {
      field: "cropName",
      headerName: "Crop Name",
      width: 170,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "createrFarmerName",
      headerName: "Farmer Name",
      width: 200,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "createrFarmerContact",
      headerName: "Farmer Contact",
      width: 180,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellDate",
      headerName: "Purchase Date",
      width: 220,
      type: "date",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellQuantity",
      headerName: "Quantity (kg)",
      width: 150,
      type: "number",
      align: "right",
      headerAlign: "right",
    },
    {
      field: "basePrice",
      headerName: "Base Price (₹)",
      width: 150,
      type: "number",
      align: "right",
      headerAlign: "right",
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }

        const valueFormatted = Number(params.value).toLocaleString();
        return `${valueFormatted}.00`;
      },
    },
    {
      field: "currentBid",
      headerName: "Bought For (₹)",
      width: 150,
      type: "number",
      align: "right",
      headerAlign: "right",
      valueFormatter: (params) => {
        if (params.value == null) {
          return "";
        }

        const valueFormatted = Number(params.value).toLocaleString();
        return `${valueFormatted}.00`;
      },
    },
  ];

  const [query, SetQuery] = useState("");

  const search = (history) => {
    return history.filter(
      (item) =>
        item.cropName.toLowerCase().includes(query.toLowerCase()) ||
        item.createrFarmerName.toLowerCase().includes(query.toLowerCase()) ||
        item.sellDate.includes(query)
    );
  };

  const [noOfRows, SetRows] = useState(10);
  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <div style={{ backgroundColor: "#f8f8ff" }}>
        <BidderResponsiveAppBar />

        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily:
              "SuisseWorks,Georgia,Times,Times new roman,serif,'apple color emoji','segoe ui emoji','segoe ui symbol'",
          }}
        >
          <HistoryIcon fontSize="large" style={{ marginRight: "20px" }} />
          Purchase History
        </h1>
        <Grid container sx={{ marginTop: "20px" }}>
          <Grid md={3} xs={6} item>
            <input
              type="no_Rows"
              placeholder="Records per page"
              //className="Serach"
              style={{ height: "35px", width: "80%", marginLeft: "10px" }}
              onChange={(e) => SetRows(e.target.value)}
            ></input>
          </Grid>
          <Grid item md={6} xs={0}></Grid>
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
      </div>
    </>
  );
};

History.propTypes = {
  getbidderhistory: PropTypes.func.isRequired,
  history: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  history: state.bidderhistory.history,
  loading: state.bidderhistory.loading,
});

export default connect(mapStateToProps, { getbidderhistory })(BidderHistory);
