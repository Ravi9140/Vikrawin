import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Box, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useRef } from "react";

import { placebid } from "../actions/marketplace";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const PlaceBidDialog = ({ biddingId, cur_bid, your_bid, placebid }) => {
  const [open, setOpen] = useState(false);
  //const [bidAmt, setCalc] = useState(cur_bid);
  // const [bidAmt, setCalc] = useState(cur_bid>0 ? (cur_bid+100) :basePrice);

  const [bidAmt, setCalc] = useState(your_bid);

  const updateCalc = (value) => {
    setCalc(your_bid + value);
  };

  useEffect(() => {}, [your_bid]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        sx={{
          alignContent: "center",
          background: "#3f823b",
          marginBottom: "5px",
          marginTopm: "0px",
        }}
        onClick={handleClickOpen}
      >
        PLACE BID
      </Button>

      <BootstrapDialog
        disableBackdropClick
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          onClick={() => {
            updateCalc("");
            handleClose();
          }}
        >
          Increment The Bid Here
        </BootstrapDialogTitle>
        <DialogContent dividers disableBackdropClick>
          <Grid container>
            <Grid item sm={3} xs={3} md={3}>
              <h3>Current Bid:</h3>
            </Grid>
            <Grid item sm={9} xs={9} md={9}>
              <TextField
                id="outlined-basic"
                placeHolder=" "
                variant="outlined"
                dividers
                fullWidth="100%"
                value={cur_bid}
              />
            </Grid>
            <Grid item sm={3} xs={3} md={3}>
              <h3>Your Bid: </h3>
            </Grid>
            <Grid item sm={9} xs={9} md={9}>
              {bidAmt ? (
                <TextField
                  id="outlined-basic"
                  placeHolder=" "
                  variant="outlined"
                  dividers
                  fullWidth="100%"
                  value={bidAmt}
                  // value={your_bid}
                />
              ) : (
                <TextField
                  id="outlined-basic"
                  placeHolder=" "
                  variant="outlined"
                  dividers
                  fullWidth="100%"
                />
              )}
            </Grid>
          </Grid>

          <Stack direction="row" spacing={2}>
            <Button
              sx={{ alignContent: "center", color: "green" }}
              onClick={() => {
                //your_bid=your_bid+100;
                updateCalc(100);
                handleClickOpen();
              }}
              style={{ marginLeft: "1rem", fontSize: "25px" }}
            >
              <b>+ ₹100</b>
            </Button>

            <Button
              sx={{ alignContent: "center", color: "green" }}
              onClick={() => {
                updateCalc(500);
                handleClickOpen();
              }}
              style={{ marginLeft: "1rem", fontSize: "25px" }}
            >
              <b>+ ₹500</b>
            </Button>

            <Button
              sx={{ alignContent: "center", color: "green" }}
              onClick={() => {
                updateCalc(1000);
                handleClickOpen();
              }}
              style={{ marginLeft: "1rem", fontSize: "25px" }}
            >
              <b>+ ₹1000</b>
            </Button>

            <Button
              sx={{ alignContent: "center", color: "green" }}
              onClick={() => {
                updateCalc(2000);
                handleClickOpen();
              }}
              style={{ marginLeft: "1rem", fontSize: "25px" }}
            >
              <b>+ ₹2000</b>
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              placebid({ biddingId, bidAmt });
              handleClose();
              // updateCalc("");
            }}
          >
            PLACE BID
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

PlaceBidDialog.propTypes = {
  placebid: PropTypes.func.isRequired,
  biddingId: PropTypes.number,
};

const mapStateToProps = (state, ownProps) => ({
  biddingId: ownProps.biddingId,
  cur_bid: ownProps.cur_bid,
  //basePrice: ownProps.basePrice
  your_bid: ownProps.your_bid,
});

export default connect(mapStateToProps, { placebid })(PlaceBidDialog);
