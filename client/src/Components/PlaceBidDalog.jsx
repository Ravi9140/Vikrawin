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
import { setAlert } from "../actions/alert";

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

export const PlaceBidDialog = ({
  biddingId,
  cur_bid,
  quantity,
  your_bid,
  placebid,
  setAlert,
}) => {
  const [open, setOpen] = useState(false);

  const [bidAmt, setCalc] = useState(cur_bid < 1 ? your_bid : null);
  const [perKg, setPerKg] = useState(cur_bid < 1 ? your_bid / quantity : null);

  const updateCalc = (value) => {
    setCalc(your_bid + value);
    setPerKg((your_bid + value) / quantity);
  };

  useEffect(() => {}, [your_bid]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
      setCalc(cur_bid < 1 ? your_bid : null);
      setPerKg(cur_bid < 1 ? your_bid / quantity : null);
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <Button
          sx={{
            alignContent: "center",
            background: "#397618",
            marginX: "auto",
            height: "38px",
            color: "white",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            marginBottom: "15px",
            fontSize: { xs: "12px", sm: "12px" },
            "&:hover": {
              backgroundColor: "#6eb634",
            },
          }}
          onClick={handleClickOpen}
        >
          PLACE BID
        </Button>
      </div>
      <Grid container>
        <Grid item xs={10} sm={8} md={6}>
          <BootstrapDialog
            sx={{
              minWidth: "330px",
            }}
            disableBackdropClick
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleClose}
              sx={{
                fontSize: { xs: "15px", sm: "18px", md: "22px" },
                color: "#6eb634",
              }}
              onClick={() => {
                updateCalc("");
                handleClose();
              }}
            >
              Increment The Bid Here
            </BootstrapDialogTitle>
            <DialogContent dividers disableBackdropClick>
              <Grid container sx={{ paddingY: "10px" }}>
                <Grid
                  item
                  sm={3}
                  xs={3}
                  md={3}
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  Current Bid:
                </Grid>
                <Grid item sm={9} xs={9} md={9}>
                  <TextField
                    id="outlined-basic"
                    placeHolder=" "
                    // variant="outlined"
                    dividers
                    fullWidth="100%"
                    value={cur_bid}
                  />
                </Grid>
                <Grid
                  item
                  sm={3}
                  xs={3}
                  md={3}
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    justifyContent: "center",
                    marginTop: "35px",
                  }}
                >
                  Your Bid:
                </Grid>
                <Grid item sm={9} xs={9} md={9}>
                  {bidAmt ? (
                    <TextField
                      sx={{ marginTop: "20px" }}
                      id="outlined-basic"
                      placeHolder=" "
                      variant="outlined"
                      dividers
                      fullWidth="100%"
                      value={bidAmt}
                      //value={your_bid}
                    />
                  ) : (
                    <TextField
                      sx={{ marginTop: "20px" }}
                      id="outlined-basic"
                      placeHolder=" "
                      variant="outlined"
                      dividers
                      fullWidth="100%"
                    />
                  )}
                </Grid>
                <Grid
                  item
                  sm={3}
                  xs={3}
                  md={3}
                  sx={{
                    fontSize: { xs: "15px", sm: "17px", md: "20px" },
                    justifyContent: "center",
                    marginTop: "35px",
                  }}
                >
                  Per/Kg Price:
                </Grid>
                <Grid item sm={9} xs={9} md={9}>
                  {bidAmt ? (
                    <TextField
                      sx={{ marginTop: "20px" }}
                      id="outlined-basic"
                      placeHolder=" "
                      variant="outlined"
                      dividers
                      fullWidth="100%"
                      value={perKg}
                      // value={your_bid}
                    />
                  ) : (
                    <TextField
                      sx={{ marginTop: "20px" }}
                      id="outlined-basic"
                      placeHolder=" "
                      variant="outlined"
                      dividers
                      fullWidth="100%"
                    />
                  )}
                </Grid>
              </Grid>

              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  width: "99%",
                  minWidth: "260px",
                }}
              >
                <div
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack direction="row">
                    <Button
                      sx={{
                        marginLeft: { xs: "5px", sm: "15px", md: "30px" },
                        fontStyle: "bold",
                        // border: "1px solid black",
                        borderRadius: "25px",
                        alignContent: "center",
                        color: "black",
                        fontSize: { xs: "12px", sm: "15px", md: "20px" },
                        "&:hover": {
                          border: "1px solid #397618",
                          color: "#397618",
                        },
                      }}
                      onClick={() => {
                        //your_bid=your_bid+100;
                        updateCalc(100);
                        handleClickOpen();
                      }}
                    >
                      <b>+ ₹100</b>
                    </Button>

                    <Button
                      sx={{
                        marginLeft: { xs: "5px", sm: "15px", md: "30px" },
                        fontStyle: "bold",
                        // border: "1px solid black",
                        borderRadius: "25px",
                        alignContent: "center",
                        color: "black",
                        fontSize: { xs: "12px", sm: "15px", md: "20px" },
                        "&:hover": {
                          border: "1px solid #397618",
                          color: "#397618",
                        },
                      }}
                      onClick={() => {
                        updateCalc(500);
                        handleClickOpen();
                      }}
                    >
                      <b>+ ₹500</b>
                    </Button>

                    <Button
                      sx={{
                        marginLeft: { xs: "5px", sm: "15px", md: "30px" },
                        fontStyle: "bold",
                        // border: "1px solid black",
                        borderRadius: "25px",
                        alignContent: "center",
                        color: "black",
                        fontSize: { xs: "12px", sm: "15px", md: "20px" },
                        "&:hover": {
                          border: "1px solid #397618",
                          color: "#397618",
                        },
                      }}
                      onClick={() => {
                        updateCalc(1000);
                        handleClickOpen();
                      }}
                    >
                      <b>+ ₹1000</b>
                    </Button>

                    <Button
                      sx={{
                        marginLeft: { xs: "5px", sm: "15px", md: "30px" },
                        fontStyle: "bold",
                        // border: "1px solid black",
                        borderRadius: "25px",
                        alignContent: "center",
                        color: "black",
                        fontSize: { xs: "12px", sm: "15px", md: "20px" },
                        "&:hover": {
                          border: "1px solid #397618",
                          color: "#397618",
                        },
                      }}
                      onClick={() => {
                        updateCalc(2000);
                        handleClickOpen();
                      }}
                    >
                      <b>+ ₹2000</b>
                    </Button>
                  </Stack>
                </div>
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                sx={{
                  alignContent: "center",
                  background: "#397618",
                  marginX: "auto",
                  height: "38px",
                  color: "white",
                  width: "150px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "30px",
                  fontSize: { xs: "13px", sm: "15px", md: "18px" },
                  "&:hover": {
                    backgroundColor: "#6eb634",
                  },
                }}
                autoFocus
                onClick={() => {
                  if (bidAmt == null || bidAmt <= cur_bid) {
                    setAlert("Bid should be more than current bid", "error");
                  } else {
                    placebid({ biddingId, bidAmt });
                    handleClose();
                    setCalc(cur_bid < 1 ? your_bid : null);
                    // updateCalc("");
                  }
                }}
              >
                Place Bid
              </Button>
            </DialogActions>
          </BootstrapDialog>
        </Grid>
      </Grid>
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
  setAlert: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  biddingId: ownProps.biddingId,
  cur_bid: ownProps.cur_bid,
  quantity: ownProps.quantity,
  your_bid: ownProps.your_bid,
});

export default connect(mapStateToProps, { placebid, setAlert })(PlaceBidDialog);
