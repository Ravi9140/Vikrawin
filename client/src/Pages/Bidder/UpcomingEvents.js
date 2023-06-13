import React, { useState, useEffect } from "react";

import { Grid } from "@mui/material";

import { Button } from "@mui/material";
import "../../static/button2.css";
import GavelIcon from "@mui/icons-material/Gavel";
import Spinner from "../../Components/layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getauctions, registerauction } from "../../actions/auction";
import { setAlert } from "../../actions/alert";
import { DataGrid } from "@mui/x-data-grid";
import { marketplace } from "../../actions/marketplace";

const UpcomingEvents = ({
  getauctions,
  registerauction,
  marketplace,
  auctions,
  loading,
  setAlert,
}) => {
  useEffect(() => {
    let timer = setInterval(() => {
      getauctions();
      marketplace();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    //getauctions();
  }, [getauctions]);

  const columns = [
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
      minWidth: 160,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "createrFarmerAddress",
      headerName: "Farmer Address",
      minWidth: 220,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "currentBidderName",
      headerName: "Bidder Name",
      minWidth: 150,
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "currentBid",
      headerName: "Current Bid (₹)",
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
      field: "Register",
      align: "center",
      headerAlign: "center",
      minWidth: 140,
      flex:1,
      renderCell: (cellValues) => {
        return (
          <Button
            sx={{
              alignContent: "center",
              background: "#397618",
              marginX: "auto",   
              color: "white",
              width: "100px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "25px",
              fontSize: { xs: "12px", sm: "12px" },
              "&:hover": {
                backgroundColor: "#6eb634",
              },
            }}
            onClick={(event) => {
              registerauction(cellValues.row.biddingeventId);
            }}
          >
            Register
          </Button>
        );
      },
    },
  ];

  const [query, SetQuery] = useState("");
  const [noOfRows, SetRows] = useState(5);

  const search = (auctions) => {
    return auctions.filter(
      (item) =>
        item.cropName.toLowerCase().includes(query.toLowerCase()) ||
        item.createrFarmerName.toLowerCase().includes(query.toLowerCase()) ||
        item.createrFarmerAddress.toLowerCase().includes(query.toLowerCase())
    );
  };

  if (loading) {
    return <Spinner />;
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
          rowHeight={50}
          rows={search(auctions)}
          columns={columns}
          getRowId={(auctions) => auctions.biddingeventId}
          pageSize={noOfRows}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          onPageSizeChange={(newPageSize) => SetRows(newPageSize)}
        />
      </div>
    </>
  );
};

UpcomingEvents.propTypes = {
  getauctions: PropTypes.func.isRequired,
  registerauction: PropTypes.func.isRequired,
  marketplace: PropTypes.func.isRequired,
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
  marketplace,
})(UpcomingEvents);
