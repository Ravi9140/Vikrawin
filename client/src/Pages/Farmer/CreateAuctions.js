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

  //const [cropName, setCropName] = useState();

  // const { cropName, quantity, basePrice } = formData;

  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.table(cropName, quantity, basePrice);
    createauction({ cropName, quantity, basePrice });
    setBasePrice("");
    setQuantity("");
  };

  return (
    <>
      <div style={{ backgroundColor: "#f0fff0" }}>
        <FarmerResponsiveAppBar />
        {/* <img style={{}} src={background} /> */}
        <div style={{ width: "98vw" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily:
                "SuisseWorks,Georgia,Times,Times new roman,serif,'apple color emoji','segoe ui emoji','segoe ui symbol'",
            }}
          >
            <GavelIcon fontSize="large" style={{ marginRight: "15px" }} />
            Create Auction
          </h1>
        </div>

        <Card
          style={{
            // borderRadius: "7%",
            maxWidth: "50vw",
            margin: "0 auto",
            padding: "10px 0px",
            background: "#f6f5f7",
            // borderShadow: "5px 5px 5px 5px black",
            //background: { gif },
            boxShadow: "5px 5px 5px 3px gray",
          }}
        >
          <CardContent>
            <form onSubmit={(e) => onSubmit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <h3>Crop Name</h3>
                </Grid>

                <Grid xs={12} item>
                  <Autocomplete
                    id="combo-box-demo"
                    onChange={(event, value) => {
                      setCropName(value);
                      console.log(value);
                    }}
                    options={cropList}
                    renderInput={(params) => (
                      <React.Fragment>
                        <TextField
                          {...params}
                          label="Crop Name"
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

                <Grid xs={12} item>
                  <h3>Quantity</h3>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{ background: "white" }}
                    type="number"
                    label="Enter crop quantity in kgs"
                    value={quantity}
                    InputProps={{
                      inputProps: {
                        min: 0,
                      },
                    }}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    // placeholder="Enter Crop Quantity"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <h3>Base Price</h3>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    className="form-field"
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
                    }}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <br />
                <Grid xs={12} md={4} sm={12} item></Grid>
                <Grid xs={12} md={4} sm={12} item>
                  <Button
                    className="btn-grad"
                    sx={{
                      marginTop: "20px",
                      // width: "50%",
                      alignContent: "center",
                      alignSelf: "center",
                      background: "#3f823b",
                      marginBottom: "5px",
                      borderRadius: "25px",
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
    </>
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
