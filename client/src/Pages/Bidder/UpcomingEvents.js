import React, {useState} from 'react'
import BidderResponsiveAppBar from '../../Components/BidderNav';
import { Grid, Table, TableContainer, TableRow, TableCell } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader, Box, Paper } from '@mui/material';
import { fontSize, fontWeight } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ConfirmationDialog from '../../Components/ConfirmationDialog';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const UpcomingEvents = () => {

  const [open, setOpen] = React.useState(false);
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
    activeObject:null,
    name: [
      { crop: "Rice", id: 1, quantity: 250, base_price: 5000, farmer_name: "Ravindra", cur_bid: 6000, prev_bid:5500},
      { crop: "Wheat", id: 2, quantity: 350, base_price: 6000, farmer_name: "Tejas", cur_bid: 7000, prev_bid:6000},
      { crop: "Bajra", id: 3, quantity: 200, base_price: 4400, farmer_name: "Tejas", cur_bid: 6000, prev_bid:5000},
      { crop: "Jowar", id: 4, quantity: 150, base_price: 7000, farmer_name: "Praveen", cur_bid: 8000, prev_bid:7500},
      { crop: "Sugarcane", id: 5, quantity: 200, base_price: 2456, farmer_name: "Akash", cur_bid: 6200, prev_bid:6000},
      { crop: "Rice", id: 6, quantity: 250, base_price: 3450, farmer_name: "Mayur", cur_bid: 6200, prev_bid:5500},
      { crop: "Moong", id: 7, quantity: 340, base_price: 5000, farmer_name: "Satish", cur_bid: 6000, prev_bid:5000},
      { crop: "Til", id: 8, quantity: 310, base_price: 6000, farmer_name: "Sid", cur_bid: 6200, prev_bid:6000},
    ]
  });


  function toggleActive(id){
    changeState({...appState, activeObject:appState.name[id]});
  }

  const changeColor = (id) =>{
    if(appState.name[id] === appState.activeObject)
    {
      setColor("red")
    }
      
  };
  
  return (
    <>
    <BidderResponsiveAppBar />
    <div style={{ marginLeft:'5rem', padding:30}}>
      <h2><center>These are the upcoming events. Check and Register your bid now!</center></h2>
    <Box sx={{ width: '100%' }}>
    <Grid container spacing={4} >
     
          {appState.name.map((elem) => (
            <Grid item xs={6} md={3} key={appState.name.indexOf(elem)}>
            
<Card style={{width:"15rem"  , /*borderStyle:"solid", */alignContent:"center"}}>
               
               <CardHeader sx={{ alignContent:"center" ,background:"rgba(200,247,197)" }}
                 title={`Crop : ${elem.crop}`}
                 subheader={`Id : ${elem.id}`}
               />          
               <CardActionArea>
               <CardContent>
                 <TableContainer style={{width:"13rem"}}>
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
                 <CardActions disableSpacing>                           
                   <ConfirmationDialog/>
                   {/* <Button onClick={}>{buttonText}</Button> */}

                 </CardActions>
                 
               
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

export default UpcomingEvents;
