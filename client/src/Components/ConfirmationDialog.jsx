import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export default function ConfirmationDialog() {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("gray");
  const [snackBar, setSnackBar] = React.useState();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeColor = color => {
     setColor(color); 
  };

  const displaySnackbar = () =>{
   setSnackBar( <>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
             Added to the wishlist!
      </Alert>
   </Snackbar>
    </>);
  }

  return (
    <div>
      <IconButton style={{marginLeft:"3rem"}} aria-label="add to favorites" >
                          <FavoriteIcon
                          style={{ color: color}} 
                          onClick={handleClickOpen}
                          /> 
        
                   </IconButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirm
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you want to add this event to wishlist?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>{handleClose();
                                changeColor("Gray");
                                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                       Removed from the wishlist!
                                </Alert>
                             </Snackbar>
                              }
                           }>Cancel
          </Button>
          <Button snackBar={snackBar} onClick={()=>{handleClose();
                                changeColor("red");
                                displaySnackbar();
                              }
                           }>Add
                          
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}