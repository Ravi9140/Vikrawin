import React, { useEffect, useState } from "react";
import FarmerResponsiveAppBar from "../../Components/FarmerNav";
import { Button, Card, CardContent, Grid, TextField, Box } from "@mui/material";
import "./../../static/button.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";
// import image from "../../Images/farmer-1.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  getfarmerprofile,
  updatefarmerprofile,
} from "../../actions/farmerprofile";
import Spinner from "../../Components/layout/Spinner";
import { backendurl } from "../../utils/constants";
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
    axios.get(`${backendurl}/api/farmerprofile`).then((res) => {
      setName(res.data.farmerName);
      setEmail(res.data.farmerEmail);
      setContact(res.data.farmerContact);
      setAddress(res.data.farmerAddress);
      setPincode(res.data.farmerPinCode);
      setCity(res.data.farmerCity);
      setState(res.data.farmerState);
      setPanno(res.data.farmerPanNo);
      setPanno("*****".concat(res.data.farmerPanNo.slice(-4, 10)));
      setAadhaarno("********".concat(res.data.farmerAdhaarNo.slice(-4, 12)));
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

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: { xs: "50px", sm: "72px", md: "76px", lg: "80px" },
          }}
        >
          <Card
            sx={{
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5%",
              width: {
                xs: "50vw",
                sm: "72vw",
                md: "78vw",
                lg: "72vw",
                xl: "50vw",
              },
              minWidth: "340px",
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
                  <Grid xs={3} sm={3} md={2} item>
                    <h3>Name</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={10} item>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>Email</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        width: { md: "95%" },
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={3} sm={3} md={2} item sx={{ paddingLeft: "10px" }}>
                    <h3>Mobile</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
                        color: "#a3c1ad",
                      }}
                      value={contact}
                      onChange={handleMobile}
                      type="numeric"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>Address</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        width: { md: "95%" },
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>PIN Code</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        paddingTop: { xs: "25px", sm: "10px" },
                        borderBottom: "solid #90d042 2px",
                        color: "#a3c1ad",
                      }}
                      value={pincode}
                      onChange={handlePincode}
                      type="numeric"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>City</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        width: { md: "95%" },
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>State</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>PAN</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        width: { md: "95%" },
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={3} sm={3} md={2} item>
                    <h3>Aadhaar</h3>
                  </Grid>

                  <Grid xs={9} sm={9} md={4} item>
                    <TextField
                      sx={{
                        paddingTop: "10px",
                        borderBottom: "solid #90d042 2px",
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

                  <Grid xs={2} sm={3} md={4} item></Grid>

                  <Grid xs={8} sm={6} md={4} item>
                    <Button
                      sx={{
                        marginTop: "20px",
                        color: "white",
                        fontWeight: "bold",
                        alignSelf: "center",
                        borderRadius: "25px",
                        height: "50px",
                        alignContent: "center",
                        background: "#397618",

                        "&:hover": {
                          backgroundColor: "#6eb634",
                        },
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
        </Box>
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
