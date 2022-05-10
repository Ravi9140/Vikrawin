import React from "react";
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
import { margin } from "@mui/system";
import { Label } from "@mui/icons-material";
// import { DatePicker } from '@mui/x-date-pickers';

const CreateAuctions = () => {
  const [value, SetValue] = React.useState("");
  const [quantity, SetQuantity] = React.useState("");
  const [baseprice, SetBasePrice] = React.useState("");

  const disableDates = () => {
    var today, dd, mm, yyyy;
    today = new Date();
    dd = today.getDate();
    mm = today.getMonth();
    yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const handleChange = (event) => {
    SetValue(event.target.value);
  };

  return (
    <>
      <FarmerResponsiveAppBar />

      <div style={{ width: "98vw" }}>
        <h1>
          <center>Create Auction</center>
        </h1>
      </div>

      <Card
        style={{
          borderRadius: "7%",
          width: "50vw",
          margin: "0 auto",
          padding: "10px 0px",
          background: "#b8d4c6",
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <h3>Crop Name</h3>
              </Grid>

              <Grid xs={12} item>
                <Select
                  sx={{ background: "white" }}
                  onChange={handleChange}
                  value={value}
                  displayEmpty
                  fullWidth
                  required
                >
                  <MenuItem value="" disabled>
                    Select Crop
                  </MenuItem>
                  <MenuItem value={0}>Rice</MenuItem>
                  <MenuItem value={1}>Wheat</MenuItem>
                  <MenuItem value={2}>Jowar</MenuItem>
                  <MenuItem value={3}>Bajra</MenuItem>
                  <MenuItem value={4}>SugarCance</MenuItem>
                  <MenuItem value={5}>Moong</MenuItem>
                  <MenuItem value={6}>Til</MenuItem>
                </Select>
              </Grid>

              <Grid xs={12} item>
                <h3>Quantity</h3>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  sx={{ background: "white" }}
                  type="number"
                  label="Enter Crop Quantity in kgs"
                  placeholder="Enter Crop Quantity"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    SetQuantity(e.target.value);
                  }}
                />
              </Grid>

              <Grid xs={12} item>
                <h3>Base Price</h3>
              </Grid>
              <Grid xs={12} item>
                <TextField
                  sx={{ background: "white" }}
                  type="number"
                  label="Enter Base Price in Rupees"
                  placeholder="Enter Base Price"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(e) => {
                    SetBasePrice(e.target.value);
                  }}
                />
              </Grid>

              {/*<Grid xs={12} md={3} item>
                <h3>Start Date</h3>
              </Grid>

              <Grid xs={12} md={9} item>
                <TextField type="date"  placeholder='Enter Start Date' variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} md={3} item>
              <h3>End Date</h3>
              </Grid>

              <Grid xs={12} md={9} item>
                <TextField type="date"  placeholder='Enter End Date' variant="outlined" fullWidth required />
  </Grid>*/}
              <br />
              <Grid xs={12} item>
                <Button
                  sx={{
                    alignContent: "center",
                    background: "#3f823b",
                    marginBottom: "5px",
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
    </>
  );
};

export default CreateAuctions;
