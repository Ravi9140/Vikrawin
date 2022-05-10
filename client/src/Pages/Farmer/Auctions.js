import React from 'react'
import { Grid, Table, TableContainer, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions, CardHeader, Box, Paper } from '@mui/material';
import FarmerResponsiveAppBar from '../../Components/FarmerNav';

const Auctions = () => {
  const data = {
    name: [
      { crop: "Rice", id: 1, quantity: 250, base_price: 5000, farmer_name: "Ravindra", cur_bid: 6000, prev_bid: 5500 },
      { crop: "Wheat", id: 2, quantity: 350, base_price: 6000, farmer_name: "Tejas", cur_bid: 7000, prev_bid: 6000 },
      { crop: "Bajra", id: 3, quantity: 200, base_price: 4400, farmer_name: "Tejas", cur_bid: 6000, prev_bid: 5000 },
      { crop: "Jowar", id: 4, quantity: 150, base_price: 7000, farmer_name: "Praveen", cur_bid: 8000, prev_bid: 7500 },
      { crop: "Sugarcane", id: 5, quantity: 200, base_price: 2456, farmer_name: "Akash", cur_bid: 6200, prev_bid: 6000 },
      { crop: "Rice", id: 6, quantity: 250, base_price: 3450, farmer_name: "Mayur", cur_bid: 6200, prev_bid: 5500 },
      { crop: "Moong", id: 7, quantity: 340, base_price: 5000, farmer_name: "Satish", cur_bid: 6000, prev_bid: 5000 },
      { crop: "Til", id: 8, quantity: 310, base_price: 6000, farmer_name: "Sid", cur_bid: 6200, prev_bid: 6000 },
    ],
  };

  return (
    <>
      <FarmerResponsiveAppBar />
      <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }} position='sticky'>
        <h1>AUCTIONS</h1>
      </div>
      <div style={{ padding: 30 }}>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={4} /*rowSpacing={10} columnSpacing={{ xs: 3, sm: 3, md: 3 }}*/>

            {data.name.map((elem) => (
              <Grid item xs={12} md={4} key={data.name.indexOf(elem)}>
                <Card style={{ width: "15rem", /*borderStyle:"solid", */alignContent: "center" }}>

                  <CardHeader sx={{ textAlign: 'center', fontWeight: 'bold', background: "rgba(200,247,197)" }}
                    title={`${elem.crop}`}
                  /*subheader={`Id : ${elem.id}`}*/
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

                      <TableContainer style={{ width: "14rem" }}>
                        <Table >
                          <TableRow >
                            <TableCell sx={{ align: "center", fontWeight: "bold", color: "green", fontSize: "20px" }}>Current Bid: </TableCell>
                            <TableCell sx={{ align: "center", fontWeight: "bold", color: "green", fontSize: "20px" }}>Previous Bid: </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ align: "center", fontWeight: "bold", color: "black", fontSize: "15px" }}>Rs:{elem.cur_bid} </TableCell>
                            <TableCell sx={{ align: "center", fontWeight: "bold", color: "black", fontSize: "15px" }}>Rs:{elem.prev_bid}</TableCell>
                          </TableRow>
                        </Table>
                      </TableContainer>

                    </CardContent>
                  </CardActionArea>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

      </div>
    </>

  );
};

export default Auctions;