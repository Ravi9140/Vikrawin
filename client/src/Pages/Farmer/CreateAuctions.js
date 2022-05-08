import React from 'react'
import FarmerResponsiveAppBar from '../../Components/FarmerNav';
import { Button, Card, CardContent, Grid, MenuItem, Select, TextField } from '@mui/material'
import { margin } from '@mui/system';

const CreateAuctions = () => {

  const [value,SetValue]= React.useState('');

  const handleChange= (event) => {
    SetValue(event.target.value)
  }



  return (
    <>
      <FarmerResponsiveAppBar />

      <div style={{width:"98vw"}}>
        <h1><center>CREATE AUCTION</center></h1>
        
      </div>

      <Card style={{width:"50vw", margin:"0 auto", padding:"15px 5px"}}>
        <CardContent>
          <form>
            <Grid container spacing={1}>

              <Grid xs={12} item>
              <Select onChange={handleChange} value={value} displayEmpty fullWidth required >
                <MenuItem value="" disabled>Select Crop</MenuItem>
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
                <TextField type="number" label="Enter Crop Quantity in kgs" placeholder='Enter Crop Quantity' variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} item>
                <TextField  type="number" label="Enter Base Price in Rupees" placeholder='Enter Base Price' variant="outlined" fullWidth required />
              </Grid>

              <Grid xs={12} item>
                <Button sx={{alignContent:"center", background:"#3f823b", marginBottom:"5px" }} type="submit" variant="contained" color="primary" fullWidth>Create Auction</Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>

      </Card>
    </>
  );
};

export default CreateAuctions;