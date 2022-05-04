import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Box } from '@mui/material'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import PhoneInput from 'react-phone-number-input'

export default function RegistartionForm() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
         <Button variant="contained"
                          sx={{ alignContent:"center", background:"#b8dbca" }}
                          onClick={handleClickOpen}>
       Register
      </Button>
      <Dialog open={open} 
              onClose={handleClose} 
              maxWidth="md" 
              fullWidth="true"
              fullScreen={fullScreen}
             
       >
        <DialogTitle>
        <h2><center>Registration Form</center></h2>
        </DialogTitle>
        <DialogContent>
          
          <Box noValidate
            component="form"
            backgroundColor="#dce3e0"> 

           <Grid container 
                 spacing={4}
           >
            <Grid item xs={6}
                   sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                  }}
            >
            <TextField
            autoFocus
            //margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            marginLeft="5px"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
         {/* <PhoneInput
          placeholder='Enter phone number'
        /> */}
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="City"
            type="text"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="pincode"
            type="text"
            fullWidth
            variant="standard"
          />
            </Grid>
           </Grid>
          </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}