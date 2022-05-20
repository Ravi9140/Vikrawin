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
    }, 3000);
    return () => {
      clearInterval(timer);
    };
    //getauctions();
  }, [getauctions]);

  const columns = [
    {
      field: "cropName",
      headerName: "Crop Name",
      width: 160,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "createrFarmerName",
      headerName: "Farmer Name",
      width: 230,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellQuantity",
      headerName: "Quantity (kg)",
      width: 150,
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
      headerName: "Current Bid (₹)",
      width: 150,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "currentBidderName",
      headerName: "Current Bidder Name",
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "Register",
      width: 150,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
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
        item.cropName.toLowerCase().includes(query) ||
        item.createrFarmerName.toLowerCase().includes(query)
    );
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
            rowHeight={60}
            rows={search(auctions)}
            columns={columns}
            getRowId={(auctions) => auctions.biddingeventId}
            pageSize={noOfRows > 0 ? noOfRows : 5}
            rowsPerPageOptions={[noOfRows > 0 ? noOfRows : 5]}
          />
        </div>
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
