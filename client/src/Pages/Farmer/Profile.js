import React, { useEffect, useState } from "react";
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
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
// import image from "../../Images/farmer-1.jpg";

import {
  getfarmerprofile,
  updatefarmerprofile,
} from "../../actions/farmerprofile";
import Spinner from "../../Components/layout/Spinner";
//import { cloneDeep } from "sequelize/types/utils";
const Profile = ({ updatefarmerprofile }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [panno, setPanno] = useState("");
  const [adhaarno, setAadhaarno] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("api/farmerprofile").then((res) => {
      setName(res.data.farmerName);
      setEmail(res.data.farmerEmail);
      setContact(res.data.farmerContact);
      setAddress(res.data.farmerAddress);
      setPincode(res.data.farmerPinCode);
      setCity(res.data.farmerCity);
      setState(res.data.farmerState);
      setPanno(res.data.farmerPanNo);
      setPanno("xxxxxx".concat(res.data.farmerPanNo.slice(-4, 10)));
      setAadhaarno("xxxxxxxx".concat(res.data.farmerAdhaarNo.slice(-4, 12)));
      //setAadhaarno(res.data.farmerAdhaarNo);
      setLoading(false);
    });
  }, []);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleMobile = (event) => {
    setContact(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handlePincode = (event) => {
    setPincode(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleState = (event) => {
    setState(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    updatefarmerprofile({
      name,
      email,
      contact,
      address,
      city,
      pincode,
      state,
      panno,
      adhaarno,
    });
  };

  const myStyle = {
    background: "#a3c1ad",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(3px)",

    border: "1px solid rgba(255, 255, 255, 0.18)",
    height: "100vh",

    fontFamily: "sans-serif,'Jost'",
  };

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div style={myStyle}>
          <FarmerResponsiveAppBar />
          <div style={{ width: "98vw" }}>
            <h1>
              <center>My Profile</center>
            </h1>
          </div>

          <Card
            style={{
              borderRadius: "%",
              width: "72vw",
              margin: "0 auto",
              padding: "10px 0px",
              backgroundColor: "white",
              // backgroundImage: `linear-gradient( #82bc23 )`,
              boxShadow: " 0px 20px 20px 5px #9e9e9e",
            }}
          >
            <CardContent>
              <form onSubmit={(e) => onSubmit(e)}>
                <Grid container spacing={1}>
                  <Grid xs={2} sm={2} md={1} item>
                    <h3>Name</h3>
                  </Grid>

                  <Grid xs={10} sm={10} md={11} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "yellow",
                        textColor: "orange",
                      }}
                      value={name}
                      type="text"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      onChange={handleName}
                      fullWidth
                      disabled
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>Email</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={email}
                      onChange={handleEmail}
                      type="email"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      disabled
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>Mobile</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={contact}
                      onChange={handleMobile}
                      type="number"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>Address</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={address}
                      onChange={handleAddress}
                      type="text"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>PIN Code</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={pincode}
                      onChange={handlePincode}
                      type="number"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>City</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={city}
                      onChange={handleCity}
                      type="text"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>State</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={state}
                      onChange={handleState}
                      type="text"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>PAN</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={panno}
                      type="text"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      disabled
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={2} sm={2} md={1} item>
                    <h3>Aadhaar</h3>
                  </Grid>

                  <Grid xs={4} sm={4} md={5} item>
                    <TextField
                      sx={{
                        borderBottom: "solid #3f823b 3px",
                        color: "#a3c1ad",
                      }}
                      value={adhaarno}
                      type="numeric"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      disabled
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={4} md={4} item></Grid>

                  <Grid xs={4} item>
                    <Button
                      className="btn-grad"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        alignSelf: "center",
                        borderRadius: "25px",
                        background: "#3f823b",
                      }}
                      type="submit"
                      variant="standard"
                      fullWidth
                    >
                      Update
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

Profile.propTypes = {
  getfarmerprofile: PropTypes.func.isRequired,
  updatefarmerprofile: PropTypes.func.isRequired,
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, {
  getfarmerprofile,
  updatefarmerprofile,
})(Profile);
