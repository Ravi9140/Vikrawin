import React from 'react';
import BidderResponsiveAppBar from '../../Components/BidderNav';
import businessmanImage from "../../Images/businessman.png";
import { Grid, Table, TableContainer, TableRow, TableCell } from '@mui/material';
import PlaceBidDialog from '../../Components/PlaceBidDalog';

import { Card, CardMedia, Divider, Box, CardActionArea, CardHeader, CardContent, Typography, Button } from '@mui/material';

const MarketPlace = () => {

  const data = {
    name: [
      { crop: "Rice", id: 1, quantity: 250, base_price: 5000, farmer_name: "Ravindra", cur_bid: 6000, prev_bid:5500},
      { crop: "Wheat", id: 2, quantity: 350, base_price: 6000, farmer_name: "Tejas", cur_bid: 7000, prev_bid:6000},
      { crop: "Bajra", id: 3, quantity: 200, base_price: 4400, farmer_name: "Tejas", cur_bid: 6000, prev_bid:5000},
      { crop: "Jowar", id: 4, quantity: 150, base_price: 7000, farmer_name: "Praveen", cur_bid: 8000, prev_bid:7500},
      { crop: "Sugarcane", id: 5, quantity: 200, base_price: 2456, farmer_name: "Akash", cur_bid: 6200, prev_bid:6000},
      { crop: "Rice", id: 6, quantity: 250, base_price: 3450, farmer_name: "Mayur", cur_bid: 6200, prev_bid:5500},
      { crop: "Moong", id: 7, quantity: 340, base_price: 5000, farmer_name: "Satish", cur_bid: 6000, prev_bid:5000},
      { crop: "Til", id: 8, quantity: 310, base_price: 6000, farmer_name: "Sid", cur_bid: 6200, prev_bid:6000},
    ],
  };

  return (
    // <body style={{ height: '100%', backgroundColor:"orange"}}>
    <div style={{ height: ' max-content'}}>
      
     <BidderResponsiveAppBar/>
     <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          height:"100%", 
          borderRadius: 1,
          // marginTop:"6rem"
        }}
      >
      <div style={{justifyContent:"center", width:"20%", backgroundColor:"#e6e4e1", padding:"2rem", display:'flex',position: 'fixed'}}> 
      <b style={{fontSize:"30px", marginTop:"5rem"}}><center>Hello Bidder!<br/>
      <Card style={{height:"100%",width:"15rem", margin:"1rem"}}>
      <CardMedia
                  component="img"
                  src={businessmanImage}
                  alt="Bidder"
                  padding="20px"
                />
      </Card>
      Welcome to the MarketPlace.</center></b>
      </div>

      <div style={{width:"100vw",marginLeft:"21rem"}}>
        <h1><center>MARKETPLACE</center></h1>
        <hr style={{color:"black", marginLeft:"5px",border:"solid"}}/>

    <Grid container spacing={4} style={{marginLeft:"2rem",overflowY:"scroll",}}>
      
     
     {data.name.map((elem) => (
       <Grid item xs={6} md={4} key={data.name.indexOf(elem)}>
         <Card style={{width:"17rem"  , /*borderStyle:"solid", */alignContent:"center"}}>
          
           <CardHeader sx={{ alignContent:"center" ,background:"#cacde6" }}
             title={`Crop : ${elem.crop}`}
             subheader={`Id : ${elem.id}`}
             dividers
           ></CardHeader>          
           <CardActionArea>
             <center>
           <CardContent>
             <TableContainer style={{width:"13rem", alignContent:"center"}}>
               <Table sx={{ align: "center" , background:"gray", color:"white"}}>
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

             <TableContainer style={{width:"14rem" }}>
               <Table >
                 <TableRow >
                   <TableCell sx={{ align: "center" , color:"green" ,fontSize:"20px"}}>Current Bid: </TableCell>
                   <TableCell sx={{ align: "center" , color:"green" ,fontSize:"20px"}}>Previous Bid: </TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell>Rs: {elem.cur_bid} </TableCell>
                   <TableCell>Rs: {elem.prev_bid}</TableCell>
                 </TableRow>
               </Table>
             </TableContainer>
           
          </CardContent> 
         
          <PlaceBidDialog/>
          </center>
          </CardActionArea>
         
         </Card>

       </Grid>
     ))}
   
   </Grid>

        
      </div>
        
      </Box>
      </div>
      // </body>
  );
};

export default MarketPlace;