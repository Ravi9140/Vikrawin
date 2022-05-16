import React, { useState } from "react";
import FarmerResponsiveAppBar from "../../Components/FarmerNav";
import {
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "./../../static/button.css";

import Spinner from "../../Components/layout/Spinner";

import { createauction } from "../../actions/createauction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateAuctions = ({ createauction, loading }) => {
  const [formData, setFormData] = useState({
    cropName: "",
    quantity: "",
    basePrice: "",
  });

  const { cropName, quantity, basePrice } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);
    createauction({ cropName, quantity, basePrice });
  };

  return (
    <>
      <div style={{ backgroundColor: "#a3c1ad", height: "100vh" }}>
        <FarmerResponsiveAppBar />
        {/* <img style={{}} src={background} /> */}
        <div style={{ width: "98vw" }}>
          <h1>
            <center>Create Auction</center>
          </h1>
        </div>

        <Card
          style={{
            // borderRadius: "7%",
            width: "50vw",
            margin: "0 auto",
            padding: "10px 0px",
            background: "#f6f5f7",
            boxShadow: "0 0 3px #eee",
          }}
        >
          <CardContent>
            <form onSubmit={(e) => onSubmit(e)}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <h3>Crop Name</h3>
                </Grid>
                <Grid xs={12} item>
                  <Select
                    sx={{ background: "white", width: "50%" }}
                    name="cropName"
                    value={cropName}
                    onChange={(e) => onChange(e)}
                    displayEmpty
                    // fullWidth
                    required
                  >
                    <MenuItem value="" disabled>
                      Select Crop
                    </MenuItem>
                    <MenuItem value="Rice">Rice</MenuItem>
                    <MenuItem value="Wheat">Wheat</MenuItem>
                    <MenuItem value="Jowar">Jowar</MenuItem>
                    <MenuItem value="Bajra">Bajra</MenuItem>
                    <MenuItem value="Sugarcane">SugarCance</MenuItem>
                    <MenuItem value="Moong">Moong</MenuItem>
                    <MenuItem value="Til">Til</MenuItem>
                  </Select>
                </Grid>

                <Grid xs={12} item>
                  <h3>Quantity</h3>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    sx={{ background: "white", width: "50%" }}
                    type="number"
                    label="Enter Crop Quantity in kgs"
                    name="quantity"
                    value={quantity}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter Crop Quantity"
                    variant="outlined"
                    required
                  />
                </Grid>

                <Grid xs={12} item>
                  <h3>Base Price</h3>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    className="form-field"
                    sx={{ background: "white", width: "50%" }}
                    type="number"
                    label="Enter Base Price in Rupees"
                    name="basePrice"
                    value={basePrice}
                    onChange={(e) => onChange(e)}
                    placeholder="Enter Base Price"
                    variant="outlined"
                    required
                  />
                </Grid>
                <br />
                <Grid xs={12} item>
                  <Button
                    className="btn-grad"
                    sx={{
                      marginTop: "20px",
                      width: "50%",
                      alignContent: "center",
                      background: "#3f823b",
                      marginBottom: "5px",
                      borderRadius: "25px",
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
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
