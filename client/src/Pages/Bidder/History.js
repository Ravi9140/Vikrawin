import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { getbidderhistory } from "../../actions/bidderhistory";

import { DataGrid } from "@mui/x-data-grid/DataGrid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./../../Components/layout/Spinner";

const BidderHistory = ({ getbidderhistory, loading, history }) => {
  useEffect(() => {
    getbidderhistory();
  }, []);

  const columns = [
    // { field: 'bid', headerName: 'BID', width: 90  },
    {
      field: "cropName",
      headerName: "Crop Name",
      minWidth: 120,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "createrFarmerName",
      headerName: "Farmer Name",
      minWidth: 150,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "createrFarmerContact",
      headerName: "Farmer Contact",
      minWidth: 130,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellDate",
      headerName: "Purchase Date",
      minWidth: 170,
      flex: 1,
      type: "date",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellQuantity",
      headerName: "Quantity (kg)",
      minWidth: 120,
      flex: 1,
      type: "number",
      align: "right",
      headerAlign: "right",
    },
    {
      field: "basePrice",
      headerName: "Base Price (₹)",
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
      headerName: "Bought For (₹)",
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
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item md={9} xs={6}></Grid>
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
