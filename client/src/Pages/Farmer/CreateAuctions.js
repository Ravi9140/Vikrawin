import React, { useState } from "react";
import FarmerResponsiveAppBar from "../../Components/FarmerNav";
import gif from "../../Images/gif1.gif";
import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  TextField,
  Autocomplete,
} from "@mui/material";
import "./../../static/button.css";
import GavelIcon from "@mui/icons-material/Gavel";
import Spinner from "../../Components/layout/Spinner";

import { createauction } from "../../actions/createauction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

const cropList = [
  "Maize",
  "Wheat",
  "Jowar",
  "Bajra",
  "Rice",
  "Cotton",
  "Sugarcane",
  "Legume",
  "Barley",
  "Peanut",
  "Tea",
  "Coffee",
  "Jute",
  "Soyabean",
  "Rubber",
  "Millets",
  "Tobacco",
  "Moong",
  "Tur Dal",
  "Masoor Dal",
  "Udid Dal",
  "Ground Nut",
  "Mustard",
  "Sesame",
  "Peas",
  "Gram",
  "Poppy",
  "Sunflower",
  "Silk",
  "Ginger",
  "Turmeric",
];

const CreateAuctions = ({ createauction, loading }) => {
  const [cropName, setCropName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [basePrice, setBasePrice] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    createauction({ cropName, quantity, basePrice });
    setBasePrice("");
    setQuantity("");
  };

  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "f8f8ff",
          display: "grid",
          height: "80%",
        }}
      >
        <Card
          style={{
            borderRadius: "3%",
            maxWidth: "50vw",
            minWidth: "350px",
            background: "#f6f5f7",
            boxShadow: "0px 8px 32px 0px gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardContent>
            <form onSubmit={(e) => onSubmit(e)}>
              <Grid
                container
                spacing={1}
                sx={{ maxWidth: "500px", minWidth: "320px" }}
              >
                <Grid xs={12} sm={12} md={12} item>
                  <h3 style={{ color: "black", fontFamily: "sans-serif" }}>
                    Crop Name:
                  </h3>
                </Grid>

                <Grid xs={12} sm={12} md={12} item>
                  <Autocomplete
                    id="combo-box-demo"
                    onChange={(event, value) => {
                      setCropName(value);
                      console.log(cropName);
                    }}
                    options={cropList}
                    renderInput={(params) => (
                      <React.Fragment>
                        <TextField
                          {...params}
                          label="Crop name"
                          size="small"
                          value={cropName}
                          onChange={(e) => setCropName(e.target.value)}
                          sx={{ background: "white" }}
                          required
                          fullWidth
                        />
                      </React.Fragment>
                    )}
                    sx={{ background: "white" }}
                    freeSolo
                    required
                    fullWidth
                  />{" "}
                </Grid>

                <Grid xs={12} sm={12} md={12} item>
                  <h3 style={{ color: "black", fontFamily: "sans-serif" }}>
                    Quantity:
                  </h3>
                </Grid>
                <Grid xs={12} sm={12} md={12} item>
                  <TextField
                    sx={{ background: "white" }}
                    type="number"
                    size="small"
                    label="Enter crop quantity in kgs"
                    value={quantity}
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                      console.log(quantity);
                    }}
                    // placeholder="Enter Crop Quantity"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} sm={12} md={12} item>
                  <h3 style={{ color: "black", fontFamily: "sans-serif" }}>
                    Base Price:
                  </h3>
                </Grid>
                <Grid xs={12} sm={12} md={12} item>
                  <TextField
                    className="form-field"
                    size="small"
                    sx={{ background: "white" }}
                    type="number"
                    label="Enter base price in rupees"
                    value={basePrice}
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    onChange={(e) => {
                      setBasePrice(e.target.value);
                      console.log(basePrice);
                    }}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={2} md={3} sm={2} item></Grid>
                <Grid xs={8} md={6} sm={8} item>
                  <Button
                    // className="btn-grad"
                    sx={{
                      marginTop: "20px",
                      // width: "50%",
                      height: "50px",
                      alignContent: "center",
                      alignSelf: "center",
                      background: "#397618",
                      marginBottom: "2px",
                      borderRadius: "25px",
                      "&:hover": {
                        backgroundColor: "#6eb634",
                      },
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Create Auction
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

CreateAuctions.propTypes = {
  createauction: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.createauction.loading,
});
export default connect(mapStateToProps, { createauction })(CreateAuctions);
