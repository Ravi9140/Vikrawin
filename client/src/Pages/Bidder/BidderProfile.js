import React from 'react'
import { Button, Card, CardContent, Grid, MenuItem, Select, TextField } from '@mui/material'
import BidderResponsiveAppBar from '../../Components/BidderNav';

const BidderProfile = () => {

  const [name, setName] = React.useState('Ravindra Patel');
  const [email, setEmail] = React.useState('patelravi09272@gmail.com');
  const [mobile, setMobile] = React.useState(9146718588);
  const [address, setAddress] = React.useState('Kalewadi, Pimmpri');
  const [pincode, setPincode] = React.useState(411017);
  const [city, setCity] = React.useState('Pune');
  const [state, setState] = React.useState('Maharashtra');
  const [pan, setPan] = React.useState('BGIMZPP234');
  const [aadhar, setAadhar] = React.useState(564356789876);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleMobile = (event) => {
    setMobile(event.target.value);
  }

  const handleAddress = (event) => {
    setAddress(event.target.value);
  }

  const handlePincode = (event) => {
    setPincode(event.target.value);
  }

  const handleCity = (event) => {
    setCity(event.target.value);
  }

  const handleState = (event) => {
    setState(event.target.value);
  }

  const handleSubmit = (event) => {
    console.log("submitted");
  }
  
  return (
    <>
    <BidderResponsiveAppBar/>
      <div style={{ width: "98vw" }}>
        <h1><center>My Profile</center></h1>
      </div>

      <Card style={{borderRadius:"7%", width: "80vw", margin: "0 auto", padding: "10px 0px", background:"#b8d4c6" }}>
        <CardContent>
          <form>
            <Grid container spacing={1}>

              <Grid xs={2} sm={2} md={1} item>
              <h3>Name:</h3>
              </Grid>

              <Grid xs={10} sm={10} md={11} item>
                <TextField sx={{background:"white"}} value={name} type="text" variant="outlined" fullWidth disabled required />
              </Grid>

              <Grid xs={2} sm={2} md={1} item>
              <h3>Email:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5}item>
                <TextField sx={{background:"white"}} value={email} onChange={handleEmail} type="email" variant="outlined" fullWidth required />
              </Grid> 

              <Grid xs={2} sm={2} md={1} item>
              <h3>Mobile:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5} item>
                <TextField sx={{background:"white"}} value={mobile} onChange={handleMobile} type="number" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={2} sm={2} md={1} item>
              <h3>Address:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5}item>
                <TextField sx={{background:"white"}} value={address} onChange={handleAddress} type="text" variant="outlined" fullWidth required />
              </Grid> 

              <Grid xs={2} sm={2} md={1} item>
              <h3>Pincode:</h3>
              </Grid>

              <Grid xs={4}  sm={4} md={5} item>
                <TextField sx={{background:"white"}} value={pincode} onChange={handlePincode} type="number" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={2} sm={2} md={1} item>
              <h3>City:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5}item>
                <TextField sx={{background:"white"}} value={city} onChange={handleCity} type="text" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={2} sm={2} md={1} item>
              <h3>State:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5}item>
                <TextField sx={{background:"white"}} value={state} onChange={handleState} type="text" variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={2} sm={2} md={1} item>
              <h3>Pan:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5}item>
                <TextField sx={{background:"white"}} value={pan} type="text" variant="outlined" disabled fullWidth required />
              </Grid>

              <Grid xs={2} sm={2} md={1} item>
              <h3>Aadhar:</h3>
              </Grid>

              <Grid xs={4} sm={4} md={5}item>
                <TextField sx={{background:"white"}} value={aadhar} type="number" variant="outlined" disabled fullWidth required />
              </Grid>

              <Grid xs={4} md={4} item>
              </Grid>
              
              <Grid xs={4} item>
                <Button onSubmit={handleSubmit} sx={{ alignSelf:"center" ,background: "#3f823b" }} type="submit" variant="contained" fullWidth>Update</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default BidderProfile;