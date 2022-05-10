import React, { useState } from 'react'
import BidderResponsiveAppBar from '../../Components/BidderNav';
import { Grid, Table, TableContainer, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button, MenuItem, Select, TextField } from '@mui/material'
import { fontSize, fontWeight } from '@mui/system';
import { Link } from 'react-router-dom';


const UpcomingEvents = () => {

  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("gray");
  const [value, SetValue] = React.useState('');


  const handleChange = (event) => {
    SetValue(event.target.value)
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [appState, changeState] = useState({
    activeObject: null,
    name: [
      { crop: "Rice", id: 1, quantity: 250, base_price: 5000, farmer_name: "Ravindra Patel", cur_bid: 6000, prev_bid: 5500 },
      { crop: "Wheat", id: 2, quantity: 350, base_price: 6000, farmer_name: "Tejas", cur_bid: 7000, prev_bid: 6000 },
      { crop: "Bajra", id: 3, quantity: 200, base_price: 4400, farmer_name: "Tejas", cur_bid: 6000, prev_bid: 5000 },
      { crop: "Jowar", id: 4, quantity: 150, base_price: 7000, farmer_name: "Praveen", cur_bid: 8000, prev_bid: 7500 },
      { crop: "Sugarcane", id: 5, quantity: 200, base_price: 2456, farmer_name: "Akash", cur_bid: 6200, prev_bid: 6000 },
      { crop: "Rice", id: 6, quantity: 250, base_price: 3450, farmer_name: "Mayur", cur_bid: 6200, prev_bid: 5500 },
      { crop: "Moong", id: 7, quantity: 340, base_price: 5000, farmer_name: "Satish", cur_bid: 6000, prev_bid: 5000 },
      { crop: "Til", id: 8, quantity: 310, base_price: 6000, farmer_name: "Sid", cur_bid: 6200, prev_bid: 6000 },
    ]
  });


  return (
    <>
      <BidderResponsiveAppBar />
     
        <h1><center>Available Auctions</center></h1>

       <Grid container>

         <Grid md={9} xs={6} item></Grid>
         <Grid md={1} xs={3} item>
                <Select align="right" onChange={handleChange} value={value} displayEmpty fullWidth>
                  <MenuItem value="" >Search Crop</MenuItem>
                  <MenuItem value={0}>Rice</MenuItem>
                  <MenuItem value={1}>Wheat</MenuItem>
                  <MenuItem value={2}>Jowar</MenuItem>
                  <MenuItem value={3}>Bajra</MenuItem>
                  <MenuItem value={4}>SugarCance</MenuItem>
                  <MenuItem value={5}>Moong</MenuItem>
                  <MenuItem value={6}>Til</MenuItem>
                </Select>
                
          </Grid>
      
          <Grid md={1} xs={3} item>
                <Button fullWidth variant="contained"  sx={{ alignContent: "center", height:"55px",background: "black", color: "white" }}
                         >
                       Search
                </Button>
          </Grid>
      </Grid>
   <br></br> 

        <Grid >
          <TableContainer style={{ width: "95vw" , marginLeft:"1vw"}}>
                        <Table sx={{ align: "left", background: "gray", color: "white" }}>
                          <TableRow>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }} align='left' width={"20px"}>Crop</TableCell>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }} align='left' width={"20px"}>Farmer Name</TableCell>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }} align='left' width={"20px"}>Quantity</TableCell>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }} align='left' width={"20px"}>Base Price </TableCell>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }} align='left' width={"20px"}>Current Bid </TableCell>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }} align='left' width={"30px"}>Bidder Name</TableCell>
                            <TableCell sx={{fontWeight: "bold", fontSize: "20px" }}align='left' width={"20px"}>Register</TableCell>
                          </TableRow>
                       </Table>
            </TableContainer>
            </Grid>
            {appState.name.map((elem) => (
              

              <TableContainer style={{ width: "95vw" , marginLeft:"1vw"}}>
              <Table sx={{ align: "left", background: "white", color: "black" }}>
                          <TableRow>
                            <TableCell align='left' width={"90px"}>{elem.crop}</TableCell>
                            <TableCell align='left' width={"140px"}>{elem.farmer_name}</TableCell>
                            <TableCell align='left' width={"120px"}>{elem.quantity} kg</TableCell>
                            <TableCell align='left' width={"110px"}>Rs: {elem.base_price}</TableCell>
                            <TableCell align='left' width={"130px"}>Rs: {elem.cur_bid}</TableCell>
                            <TableCell align='left' width={"120px"}>XYZ</TableCell>
                            <TableCell align='left' width={"120px"}><Button onClick={() => alert(`${elem.id} ${elem.crop} added to Your Market Place`)} component={Link} to="/BidderMarketPlace" variant="contained" fullWidth
                        sx={{ alignContent: "center", background: "#b8dbca", color: "black" }}
                         >
                        Register
                      </Button></TableCell>
                          </TableRow>
                       </Table>
            </TableContainer>

                      
                   
              
            ))}
        

          </>

  );
};

  {/*const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("gray");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const [appState, changeState] = useState({
    activeObject: null,
    name: [
      { crop: "Rice", id: 1, quantity: 250, base_price: 5000, farmer_name: "Ravindra", cur_bid: 6000, prev_bid: 5500 },
      { crop: "Wheat", id: 2, quantity: 350, base_price: 6000, farmer_name: "Tejas", cur_bid: 7000, prev_bid: 6000 },
      { crop: "Bajra", id: 3, quantity: 200, base_price: 4400, farmer_name: "Tejas", cur_bid: 6000, prev_bid: 5000 },
      { crop: "Jowar", id: 4, quantity: 150, base_price: 7000, farmer_name: "Praveen", cur_bid: 8000, prev_bid: 7500 },
      { crop: "Sugarcane", id: 5, quantity: 200, base_price: 2456, farmer_name: "Akash", cur_bid: 6200, prev_bid: 6000 },
      { crop: "Rice", id: 6, quantity: 250, base_price: 3450, farmer_name: "Mayur", cur_bid: 6200, prev_bid: 5500 },
      { crop: "Moong", id: 7, quantity: 340, base_price: 5000, farmer_name: "Satish", cur_bid: 6000, prev_bid: 5000 },
      { crop: "Til", id: 8, quantity: 310, base_price: 6000, farmer_name: "Sid", cur_bid: 6200, prev_bid: 6000 },
    ]
  });


  return (
    <>
      <BidderResponsiveAppBar />
      <div style={{ padding: 30 }}>
        <h2><center>UPCOMING AUCTIONS</center></h2>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={4} >

            {appState.name.map((elem) => (
              <Grid item xs={12} sm={6} md={3} key={appState.name.indexOf(elem)}>

                <Card style={{ width: "15rem", alignContent: "center" }}>

                  <CardHeader sx={{ textAlign: 'center', fontWeight: 'bold', background: "rgba(200,247,197)" }}
                    title={`${elem.crop}`}

                  />
                  <CardActionArea>
                    <CardContent>
                      <TableContainer style={{ width: "13rem" }}>
                        <Table sx={{ align: "center", background: "gray", color: "white" }}>
                          <TableRow>
                            <TableCell>Farmer: </TableCell>
                            <TableCell>{elem.farmer_name}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Quantity: </TableCell>
                            <TableCell>{elem.quantity} kg</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Base Price: </TableCell>
                            <TableCell>Rs: {elem.base_price}</TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>
                      <CardActions disableSpacing>



                      </CardActions>



                      <Button component={Link} to="/BidderMarketPlace" variant="contained" fullWidth
                        sx={{ alignContent: "center", background: "#b8dbca", color: "black" }}
                         >
                        Register
                      </Button>

                      
                    </CardContent>
                  </CardActionArea>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

            </div>
    </>

            );*/}


export default UpcomingEvents;
