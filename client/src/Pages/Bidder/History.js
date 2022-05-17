import React, { useState, useEffect } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { getbidderhistory } from "../../actions/bidderhistory";
import { Button } from "@mui/material";
import { Select } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "./../../Components/layout/Spinner";
import BidderResponsiveAppBar from "../../Components/BidderNav";
import { MenuItem } from "@mui/material";

const BidderHistory = ({ getbidderhistory, loading, history }) => {
  useEffect(() => {
    getbidderhistory();
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
      headerName: "Bought For",
      width: 200,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    {
      field: "createrFarmerName",
      headerName: "Farmer Name",
      width: 220,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "sellDate",
      headerName: "Purchase Date",
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
