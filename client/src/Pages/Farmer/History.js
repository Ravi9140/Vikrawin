import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

import FarmerResponsiveAppBar from "../../Components/FarmerNav";

import HistoryIcon from "@mui/icons-material/History";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getfarmerhistory } from "../../actions/farmerhistory";
import Spinner from "../../Components/layout/Spinner";

const History = ({ getfarmerhistory, history, loading }) => {
  useEffect(() => {
    getfarmerhistory();
  }, []);

  // useEffect(() => {
  //   getfarmerhistory();
  // }, [noOfRows]);

  const columns = [
    // { field: 'bid', headerName: 'BID', width: 90  },
    {
      field: "cropName",
      headerName: "Crop Name",
      // width: 20%,
      minWidth: 120,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "currentBidderName",
      headerName: "Buyer Name",
      // width: 200,
      minWidth: 150,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "currentBidderContact",
      headerName: "Buyer Contact",
      // width: 170,
      minWidth: 120,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellDate",
      headerName: "Sell Date",
      // width: 220,
      minWidth: 170,
      flex: 1,
      type: "date",
      align: "left",
      headerAlign: "left",
    },

    {
      field: "sellQuantity",
      headerName: "Quantity (kg)",
      // width: 150,
      minWidth: 120,
      flex: 1,
      type: "number",
      align: "right",
      headerAlign: "right",
    },
    {
      field: "basePrice",
      headerName: "Base Price (₹)",
      // width: 150,
      minWidth: 120,
      flex: 1,
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
      headerName: "Sold For (₹)",
      // width: 150,
      minWidth: 120,
      flex: 0.9,
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

  const [noOfRows, SetRows] = useState(10);
  const [query, SetQuery] = useState("");

  const search = (history) => {
    return history.filter(
      (item) =>
        item.cropName.toLowerCase().includes(query.toLowerCase()) ||
        item.sellDate.includes(query)
    );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
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
      <div style={{ height: "65vh", width: "100%", marginTop: "35px" }}>
        <DataGrid
          sx={{
            width: "98%",
            margin: "10px",
            fontWeight: "light",
            borderRadius: "5px",
            boxShadow: "15px 15px 15px gray",
            border: 2,
            borderColor: "green",

            "& .MuiDataGrid-cell:hover": {
              color: "green",
            },

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#90d042",
              color: "white",
              fontSize: 16,
            },

            fontFamily: "sans-serif,Times new roman,algerian",
          }}
          rowHeight={35}
          rows={search(history)}
          columns={columns}
          getRowId={(history) => history.biddingeventId}
          pageSize={noOfRows}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          onPageSizeChange={(newPageSize) => SetRows(newPageSize)}
        />
      </div>
    </div>
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
